import React from 'react';
import {Appbar, Divider, Menu, Provider, Text} from 'react-native-paper';
import {headerStyle} from './header.style';

export interface IHeaderComponentProps {
  hasBackButton?: boolean;
  title: string;
}

export const HeaderComponent = (props: IHeaderComponentProps): JSX.Element => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Appbar style={headerStyle.appBar}>
      {/* <Appbar.Header>
        <Appbar.BackAction />
      </Appbar.Header> */}
      {/* {props.hasBackButton ? (
        <Appbar.BackAction />
      ) : (
        <Provider>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="menu" color={headerStyle.menu.color} />
            }>
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </Provider>
      )} */}
      <Appbar.Content
        titleStyle={headerStyle.appBarTitle}
        title={props.title}
      />
    </Appbar>
  );
};
