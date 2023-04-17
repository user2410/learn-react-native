import React from 'react';
import {Appbar, Button, Divider, Menu, Provider} from 'react-native-paper';
import styles from './styles';
import {View} from 'react-native';

export interface IHeaderComponentProps {
  hasBackButton?: boolean;
  title: string;
}

export default (props: IHeaderComponentProps): JSX.Element => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const openMenu = () => {
    console.log('open menu');
    setVisible(true);
  };

  const closeMenu = () => setVisible(false);

  return (
    <Appbar style={styles.appBar}>
      <Appbar.Header style={{backgroundColor: 'purple'}}>
        {props.hasBackButton ? (
          <Appbar.BackAction color="white" />
        ) : (
          <>
            <Appbar.Action
              icon="menu"
              color={styles.menu.color}
              onPress={openMenu}
            />
            <Provider>
              <View
                style={{
                  paddingTop: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={<Button children={null} />}>
                  <Menu.Item onPress={() => {}} title="Item 1" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Divider />
                  <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
              </View>
            </Provider>
          </>
        )}
      </Appbar.Header>
      <Appbar.Content titleStyle={styles.appBarTitle} title={props.title} />
    </Appbar>
  );
};
