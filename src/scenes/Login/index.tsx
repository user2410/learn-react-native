import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {bindActionCreators} from '@reduxjs/toolkit';
import AuthService from '@services/AuthService';
import {hide, show} from '@store/loading/action';
import {LoadingState} from '@store/loading/state';
import {
  recoverPassword,
  recoverPasswordFailed,
  recoverPasswordReset,
  recoverPasswordSuccess,
} from '@store/login/action';
import {LoginState} from '@store/login/state';
import {AppState} from '@store/store';
import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, Snackbar, Text, TextInput} from 'react-native-paper';
import {connect} from 'react-redux';
import {loginFormSchema} from './login-form';
import styles from './styles';

interface ILoginProps {
  loadingState: LoadingState;
  hideLoading: Function;
  showLoading: Function;

  loginState: LoginState;
  recoverPassword: Function;
  recoverPasswordSuccess: Function;
  recoverPasswordFailed: Function;
  recoverPasswordReset: Function;
}
type LoginSceneProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = (props: ILoginProps): JSX.Element => {
  const navigation = useNavigation<LoginSceneProp>();

  const [recoveryEmail, setRecoveryEmail] = useState<string>('');

  useEffect(() => {
    if (props.loginState.isRecoveringPassword) {
      props.showLoading();
      AuthService.recoverPassword(recoveryEmail)
        .then(() => {
          props.recoverPasswordSuccess();
        })
        .catch(err => {
          props.recoverPasswordFailed(err);
        });
    } else {
      props.hideLoading();
    }
  }, [props.loginState.isRecoveringPassword]);

  const forgotEmailPassword = (email: string) => {
    setRecoveryEmail(email);
    props.recoverPassword();
  };

  const handleLogin = (values: any) => {
    console.log(values);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Card>
          <Card.Title title="Delivery App" />
          <Card.Content>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={handleLogin}
              validationSchema={loginFormSchema}>
              {({
                isSubmitting,
                handleSubmit,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                values,
              }) => (
                <>
                  <TextInput
                    testID="email"
                    label="Email"
                    keyboardType="email-address"
                    onFocus={() => setFieldTouched('email')}
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && touched.email ? (
                    <Text style={styles.error}>{errors.email}</Text>
                  ) : null}
                  <TextInput
                    testID="password"
                    label="Password"
                    secureTextEntry
                    onFocus={() => setFieldTouched('password')}
                    onChangeText={handleChange('password')}
                  />
                  {errors.password && touched.password ? (
                    <Text style={styles.error}>{errors.password}</Text>
                  ) : null}
                  <Button
                    testID="recoveryBtn"
                    disabled={
                      isSubmitting ||
                      values.email == '' ||
                      errors.email !== undefined
                    }
                    uppercase={false}
                    style={styles.cardButton}
                    onPress={() => forgotEmailPassword(values.email)}>
                    Forgot email/password
                  </Button>
                  <Button
                    disabled={
                      isSubmitting ||
                      values.email === '' ||
                      errors.email !== undefined ||
                      values.password === '' ||
                      errors.password !== undefined
                    }
                    mode="contained"
                    style={styles.cardButton}
                    onPress={handleSubmit}>
                    Login
                  </Button>
                  <Button
                    disabled={isSubmitting}
                    style={styles.cardButton}
                    onPress={() => navigation.navigate('Register')}>
                    Register
                  </Button>
                </>
              )}
            </Formik>
          </Card.Content>
        </Card>
      </View>
      {props.loginState.isRecoveredPassword ? (
        <Snackbar
          duration={3000}
          visible
          onDismiss={() => props.recoverPasswordReset()}
          testID="recoverPasswordSuccess">
          Recovery email sent
        </Snackbar>
      ) : null}
      {props.loginState.error ? (
        <Snackbar
          duration={3000}
          visible
          onDismiss={() => props.recoverPasswordReset()}
          testID="recoverPasswordFailed">
          {props.loginState.error.message}
        </Snackbar>
      ) : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (store: AppState) => ({
  loadingState: store.loading,
  loginState: store.login,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      hideLoading: hide,
      showLoading: show,
      recoverPassword: recoverPassword,
      recoverPasswordSuccess: recoverPasswordSuccess,
      recoverPasswordFailed: recoverPasswordFailed,
      recoverPasswordReset: recoverPasswordReset,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
