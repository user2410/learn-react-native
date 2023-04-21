import Header from '@components/Header';
import styles from './styles';
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'src/navigation';
import {useNavigation} from '@react-navigation/native';

type DeliveriesSceneProps = StackNavigationProp<
  RootStackParamList,
  'Deliveries'
>;

export default (): JSX.Element => {
  const navigation = useNavigation<DeliveriesSceneProps>();
  const deliveries: number[] = [1, 2];

  return (
    <SafeAreaView>
      <Header
        title="My deliveries"
        hasBackButton={true}
        navigation={navigation}
      />
      <FlatList
        data={deliveries}
        keyExtractor={(item, index) => `delivery#${index}`}
        renderItem={({item, index}) => (
          <Card
            style={{...styles.card, ...styles.cardStatus}}
            onPress={() => navigation.navigate('Delivery')}>
            <Card.Cover
              source={{
                uri: 'https://snazzy-maps-cdn.azureedge.net/assets/74-becomeadinosaur.png?v=20170626082939',
              }}
            />
            <Card.Title
              title="01/01/1001"
              subtitle="Delivery person name"
              titleStyle={styles.cardTitle}>
              <Text style={styles.price}>$ 30,00</Text>
            </Card.Title>
          </Card>
        )}
      />
    </SafeAreaView>
  );
};
