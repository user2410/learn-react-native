import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'src/navigation';

type LoginSceneProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default (): JSX.Element => {
  const navigation = useNavigation<LoginSceneProp>();

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
