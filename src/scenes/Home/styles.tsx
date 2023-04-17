import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flexFull: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 12,
  },
  markerImage: {
    width: 35,
    height: 35,
  },
});

export const confirmDeliveryCardStyle = StyleSheet.create({
  icon: {
    color: 'purple',
    marginTop: 20,
  },
});

export const searchingDeliveryStyle = StyleSheet.create({
  icon: {
    color: 'purple',
    marginTop: 20,
  },
  flexCenterColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    margin: 20,
    marginTop: 40,
    textAlign: 'center',
    color: 'purple',
  },
  cancelDeliveryButton: {
    backgroundColor: 'purple',
    color: 'white',
    position: 'absolute',
    margin: 25,
    bottom: 0,
    width: '96%',
  },
});
