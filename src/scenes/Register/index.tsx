import Header from '@components/Header';
import styles from './styles';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

type RegisterSceneProp = StackNavigationProp<RootStackParamList, 'Register'>;

export default (): JSX.Element => {
  const navigation = useNavigation<RegisterSceneProp>();

  return (
    <SafeAreaView>
      <ScrollView>
        <Header
          title="Register"
          hasBackButton={false}
          navigation={navigation}
        />
        <View style={styles.content}>
          <TextInput label="Name" />
          <TextInput label="Email" keyboardType="email-address" />
          <TextInput
            label="Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye-off" color={styles.icon.color} />}
          />
          <TextInput
            label="Confirm Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye-off" color={styles.icon.color} />}
          />
          <TextInput label="Phone number" keyboardType="phone-pad" />
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            Register
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
