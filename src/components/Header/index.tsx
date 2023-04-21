import React from 'react';
import {Appbar, Button, Divider, Menu, Provider} from 'react-native-paper';
import styles from './styles';
import {View} from 'react-native';

export interface IHeaderComponentProps {
  navigation?: any;
  hasBackButton?: boolean;
  title: string;
}

export default (props: IHeaderComponentProps): JSX.Element => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleMenu = () => {
    console.log(visible ? 'close menu' : 'open menu');
    setVisible(!visible);
  };

  const closeMenu = () => setVisible(false);

  return (
    <Appbar style={styles.appBar}>
      <Appbar.Header style={{backgroundColor: 'purple'}}>
        {props.hasBackButton ? (
          <Appbar.BackAction
            color="white"
            onPress={() => props.navigation?.goBack()}
          />
        ) : (
          <View
            style={{
              // paddingTop: 50,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Appbar.Action
                  icon="menu"
                  color={styles.menu.color}
                  onPress={toggleMenu}
                />
              }>
              <Menu.Item
                title="My deliveries"
                onPress={() => {
                  props.navigation?.navigate('Deliveries');
                  closeMenu();
                }}
              />
              <Menu.Item
                title="Logout"
                onPress={() => {
                  props.navigation?.navigate('Login');
                  closeMenu();
                }}
              />
            </Menu>
          </View>
        )}
      </Appbar.Header>
      <Appbar.Content titleStyle={styles.appBarTitle} title={props.title} />
    </Appbar>
  );
};
