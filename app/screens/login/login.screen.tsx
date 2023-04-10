import React from 'react';
import {Button, Card, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import {loginStyle} from './login.style';
import {View} from 'react-native';

export const LoginScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title titleStyle={loginStyle.cardTitle} title="Delivery App" />
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address" />
            <TextInput label="Password" secureTextEntry />
            <Button uppercase={false} style={loginStyle.cardButton}>
              Forgot email/password
            </Button>
            <Button mode="contained" style={loginStyle.cardButton}>
              Login
            </Button>
            <Button style={loginStyle.cardButton}>Register</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};
