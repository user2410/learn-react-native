import React from 'react';
import {Button, Title} from 'react-native-paper';
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';
import {searchingDeliveryStyle} from './searching-delivery.style';

type Props = {};

export default function SearchingDeliveryComponent({}: Props) {
  return (
    <View style={searchingDeliveryStyle.flexCenterColumn}>
      <ActivityIndicator color={searchingDeliveryStyle.icon.color} animating />
      <Title style={searchingDeliveryStyle.title}>
        Searching for a delivery person
      </Title>
      <Button
        mode="contained"
        style={searchingDeliveryStyle.cancelDeliveryButton}>
        Cancel
      </Button>
    </View>
  );
}
