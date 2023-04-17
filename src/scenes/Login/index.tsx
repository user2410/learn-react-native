import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import styles from './styles';

export default (): JSX.Element => {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Card>
          <Card.Title title="Delivery App" />
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address" />
            <TextInput label="Password" secureTextEntry />
            <Button uppercase={false} style={styles.cardButton}>
              Forgot email/password
            </Button>
            <Button mode="contained" style={styles.cardButton}>
              Login
            </Button>
            <Button style={styles.cardButton}>Register</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};
