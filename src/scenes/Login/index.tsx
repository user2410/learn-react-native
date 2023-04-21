import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'src/navigation';
import {LoadingState} from '../../store/loading/state';
import {bindActionCreators} from '@reduxjs/toolkit';
import {hide, show} from '../../store/loading/action';
import {connect} from 'react-redux';

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

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Card>
          <Card.Title title="Delivery App" />
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address" />
            <TextInput label="Password" secureTextEntry />
            <Button
              uppercase={false}
              style={styles.cardButton}
              onPress={forgotEmailPassword}>
              Forgot email/password
            </Button>
            <Button
              mode="contained"
              style={styles.cardButton}
              onPress={() => navigation.navigate('Home')}>
              Login
            </Button>
            <Button
              style={styles.cardButton}
              onPress={() => navigation.navigate('Register')}>
              Register
            </Button>
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
