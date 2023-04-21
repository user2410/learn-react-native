import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../../store/store';
import {show} from '../../../store/loading/action';
import {act} from 'react-test-renderer';
const {default: Loading} = require('..');
const {render} = require('@testing-library/react-native');

describe('loading component', () => {
  it('should hide loading component when not loading', () => {
    const component = render(
      <Provider store={store}>
        <Loading />
      </Provider>,
    );

    const loading = component.queryAllByTestId('loadingComponent');
    expect(loading.length).toEqual(0);
  });

  it('should show loading component when loading', () => {
    const component = render(
      <Provider store={store}>
        <Loading />
      </Provider>,
    );

    act(() => {
      store.dispatch(show());
    });

    const loading = component.queryAllByTestId('loadingComponent');
    expect(loading.length).toEqual(1);
  });
});
