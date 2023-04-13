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
import {homeStyle} from './home.style';

export const HomeScreen = (): JSX.Element => {
  const state: number = 3;

  return (
    <SafeAreaView style={homeStyle.flexFull}>
      <MapView
        style={homeStyle.flexFull}
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
                style={homeStyle.markerImage}
                // source={require('@/assets/cyclist-icon.png')}
                source={require('../../assets/cyclist-icon.png')}
              />
            </Marker>
            <Marker
              description="Delivery person 2"
              coordinate={{
                latitude: 21.00438717856293,
                longitude: 105.8466110405458,
              }}>
              <Image
                style={homeStyle.markerImage}
                // source={require('@/assets/cyclist-icon.png')}
                source={require('../../assets/cyclist-icon.png')}
              />
            </Marker>
            <Marker
              description="Delivery person 3"
              coordinate={{
                latitude: 21.00443813746138,
                longitude: 105.84398550002601,
              }}>
              <Image
                style={homeStyle.markerImage}
                // source={require('@/assets/cyclist-icon.png')}
                source={require('../../assets/cyclist-icon.png')}
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
        <FAB style={homeStyle.fab} icon="plus" />
      ) : state === 2 ? (
        <Card>
          <Card.Content>
            <List.Item
              title="$13.50"
              description="Total price of delivery"
              left={props => (
                <IconButton icon="bike" size={40} style={homeStyle.icon} />
              )}
              right={props => (
                <View>
                  <Button>Cancel</Button>
                  <Button mode="contained">Cancel</Button>
                </View>
              )}
            />
          </Card.Content>
        </Card>
      ) : state === 3 ? (
        <View style={homeStyle.flexCenterColumn}>
          <ActivityIndicator color={homeStyle.icon.color} animating />
          <Title style={homeStyle.title}>Searching for a delivery person</Title>
          <Button mode="contained" style={homeStyle.cancelDeliveryButton}>
            Cancel
          </Button>
        </View>
      ) : null}
    </SafeAreaView>
  );
};
