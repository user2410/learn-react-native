import React from 'react';
import Login from '@scenes/Login';
import {fireEvent, render} from '@testing-library/react-native';

describe('Login screen', () => {
  it('should go to home page on login', () => {
    const page = render(<Login />);
    const loginBtn = page.getByTestId('loginBtn');

    fireEvent.press(loginBtn);
    expect();
  });
});
