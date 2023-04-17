import {Image, SafeAreaView, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {
  ActivityIndicator,
  Button,
  Card,
  FAB,
  IconButton,
  List,
  Title,
} from 'react-native-paper';

// import {HeaderComponent} from '../../components/header/header.component';
import styles, {
  confirmDeliveryCardStyle,
  searchingDeliveryStyle,
} from './styles';

const ConfirmDeliveryCard = (): JSX.Element => {
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
};

const SearchingDeliveryComponent = (): JSX.Element => {
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
};

export default (): JSX.Element => {
  const state: number = 2;

  return (
    <SafeAreaView style={styles.flexFull}>
      {/* <HeaderComponent title="Delivery App" /> */}
      <MapView
        style={styles.flexFull}
        initialRegion={{
          latitude: 21.007076103786403,
          longitude: 105.84310564167778,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}>
        {state === 1 ? (
          <>
            <Marker
              description="Delivery person 1"
              coordinate={{
                latitude: 21.00667543819238,
                longitude: 105.84834190302948,
              }}>
              <Image
                style={styles.markerImage}
                // source={require('@/assets/cyclist-icon.png')}
                source={require('@assets/icons/cyclist-icon.png')}
              />
            </Marker>
            <Marker
              description="Delivery person 2"
              coordinate={{
                latitude: 21.00438717856293,
                longitude: 105.8466110405458,
              }}>
              <Image
                style={styles.markerImage}
                // source={require('@/assets/cyclist-icon.png')}
                source={require('@assets/icons/cyclist-icon.png')}
              />
            </Marker>
            <Marker
              description="Delivery person 3"
              coordinate={{
                latitude: 21.00443813746138,
                longitude: 105.84398550002601,
              }}>
              <Image
                style={styles.markerImage}
                // source={require('@/assets/cyclist-icon.png')}
                source={require('@assets/icons/cyclist-icon.png')}
              />
            </Marker>
          </>
        ) : state === 2 ? (
          <>
            <Marker
              description="Origin"
              coordinate={{
                latitude: 21.00667543819238,
                longitude: 105.84834190302948,
              }}
            />
            <Marker
              description="Destination"
              coordinate={{
                latitude: 21.00438717856293,
                longitude: 105.8466110405458,
              }}
            />
          </>
        ) : null}
      </MapView>
      {state === 1 ? (
        <FAB style={styles.fab} icon="plus" />
      ) : state === 2 ? (
        <ConfirmDeliveryCard />
      ) : state === 3 ? (
        <SearchingDeliveryComponent />
      ) : null}
    </SafeAreaView>
  );
};
