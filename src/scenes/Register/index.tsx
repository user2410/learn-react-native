import styles from './styles';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

export default (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <HeaderComponent title="Register" /> */}
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
          <Button mode="contained" style={styles.button}>
            Register
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
