import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';
import {LoadingState} from '@store/loading/state';
import {connect} from 'react-redux';

interface LoadingComponentProp {
  loadingState: LoadingState;
}

const Loading = (props: LoadingComponentProp): JSX.Element | null => {
  return props.loadingState.show ? (
    <View style={styles.backdrop}>
      <ActivityIndicator animating={true} color={styles.spinner.color} />
    </View>
  ) : null;
};

const mapStateToProps = (store: {
  loading: LoadingState;
}): LoadingComponentProp => ({
  loadingState: store.loading,
});

export default connect(mapStateToProps)(Loading);
