import React from 'react';
import {Button, Card, IconButton, List} from 'react-native-paper';
import {View} from 'react-native';
import {confirmDeliveryCardStyle} from './confirm-delivery-card.style';

type Props = {};

export default function ConfirmDeliveryCardComponent({}: Props) {
  return (
    <Card>
      <Card.Content>
        <List.Item
          title="$13.50"
          description="Total price of delivery"
          left={props => (
            <IconButton
              icon="bike"
              size={40}
              style={confirmDeliveryCardStyle.icon}
            />
          )}
          right={props => (
            <View>
              <Button>Cancel</Button>
              <Button mode="contained">Confirm</Button>
            </View>
          )}
        />
      </Card.Content>
    </Card>
  );
}
