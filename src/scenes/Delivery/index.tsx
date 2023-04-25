import Header from '@components/Header';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';
import {Avatar, Card, List, Text} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';

type DeliverySceneProps = StackNavigationProp<RootStackParamList, 'Delivery'>;

export default (): JSX.Element => {
  const navigation = useNavigation<DeliverySceneProps>();
  return (
    <SafeAreaView>
      <Header
        title="Delivery details"
        hasBackButton={true}
        navigation={navigation}
      />
      <View style={styles.flex}>
        <MapView
          style={styles.flex}
          initialRegion={{
            latitude: 21.007076103786403,
            longitude: 105.84310564167778,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
        />
      </View>
      <Card>
        <Card.Title
          title="01/01/1001"
          right={() => <Text>$ 30,00</Text>}></Card.Title>
        <Card.Content>
          <List.Item
            title="$13.50"
            description="Total price of delivery"
            left={() => (
              <Avatar.Image
                size={52}
                source={{
                  uri: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
                }}
              />
            )}
          />
          <List.Item
            title="origin"
            description="Origin street, 60"
            left={() => <List.Icon icon="flag-outline" />}
          />
          <List.Item
            title="destination"
            description="Destination street, 60"
            left={() => <List.Icon icon="flag-checkered" />}
          />
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};
