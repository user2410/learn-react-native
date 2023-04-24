import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'src/navigation';
import {LoadingState} from '../../store/loading/state';
import {bindActionCreators} from '@reduxjs/toolkit';
import {hide, show} from '../../store/loading/action';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import {loginFormSchema} from './login-form';

interface ILoginProps {
  loadingState: LoadingState;
  hideLoading: Function;
  showLoading: Function;
}
type LoginSceneProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = (props: ILoginProps): JSX.Element => {
  const navigation = useNavigation<LoginSceneProp>();
  const forgotEmailPassword = () => {
    props.showLoading();
    setTimeout(() => {
      props.hideLoading();
    }, 3000);
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
                    label="Email"
                    keyboardType="email-address"
                    onFocus={() => setFieldTouched('email')}
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && touched.email ? (
                    <Text style={styles.error}>{errors.email}</Text>
                  ) : null}
                  <TextInput
                    label="Password"
                    secureTextEntry
                    onFocus={() => setFieldTouched('password')}
                    onChangeText={handleChange('passaword')}
                  />
                  {errors.password && touched.password ? (
                    <Text style={styles.error}>{errors.password}</Text>
                  ) : null}
                  <Button
                    disabled={
                      isSubmitting ||
                      values.email == '' ||
                      errors.email !== undefined
                    }
                    uppercase={false}
                    style={styles.cardButton}
                    onPress={forgotEmailPassword}>
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
    </SafeAreaView>
  );
};

const mapStateToProps = (store: {loading: LoadingState}) => ({
  loadingState: store.loading,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      hideLoading: hide,
      showLoading: show,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
