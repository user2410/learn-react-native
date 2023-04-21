import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Address from '@scenes/Address';
import Deliveries from '@scenes/Deliveries';
import Delivery from '@scenes/Delivery';
import Home from '@scenes/Home';
import Login from '@scenes/Login';
import Register from '@scenes/Register';
import React from 'react';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  AddAddress: undefined;
  Delivery: undefined;
  Deliveries: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="AddAddress" component={Address} />
        <RootStack.Screen name="Delivery" component={Delivery} />
        <RootStack.Screen name="Deliveries" component={Deliveries} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
