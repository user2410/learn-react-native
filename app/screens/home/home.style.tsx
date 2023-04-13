import {theme} from '../../../App.style';
import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
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
  icon: {
    color: theme.colors.primary,
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
    color: theme.colors.primary,
  },
  cancelDeliveryButton: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    position: 'absolute',
    margin: 25,
    bottom: 0,
    width: '96%',
  },
});
