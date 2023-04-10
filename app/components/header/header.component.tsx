import React from 'react';
import {Appbar} from 'react-native-paper';

export interface IHeaderComponentProps {
  title: string;
}

export const HeaderComponent = (props: IHeaderComponentProps): JSX.Element => {
  return (
    <Appbar>
      <Appbar.Header>
        <Appbar.BackAction />
      </Appbar.Header>
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};
