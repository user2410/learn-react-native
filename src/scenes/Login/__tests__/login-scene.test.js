const {
  render,
  fireEvent,
  waitFor,
  screen,
} = require('@testing-library/react-native');
const {Provider} = require('react-redux');
const {
  recoverPassword,
  recoverPasswordSuccess,
  recoverPasswordReset,
  recoverPasswordFailed,
} = require('@store/login/action');
const {store} = require('@store/store');

describe('Login scene', () => {
  function renderLoginScreen() {
    return render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
  }

  it('should show loading component and recover password', async () => {
    const scene = renderLoginScreen();

    const email = scene.getByTestId('email');
    fireEvent.changeText(email, 'abc@email.com');
    const recoveryBtn = scene.getByTestId('recover');
    fireEvent.press(recoveryBtn);

    await waitFor(() => {
      expect(store.getState().loading.show).toBeTruthy();
      expect(store.getState().login.isRecoveringPassword).toBeTruthy();
    });
  });

  it('should hide loading and show success message when password is recovered', async () => {
    const scene = renderLoginScreen();

    const email = scene.getByTestId('email');
    fireEvent.changeText(email, 'abc@email.com');
    const recoveryBtn = scene.getByTestId('recover');
    fireEvent.press(recoveryBtn);

    await waitFor(() => {
      expect(store.getState().login.isRecoveredPassword).toBeFalsy();
      expect(store.getState().loading.show).toBeFalsy();
    });
  });

  it('should hide success message when recovery email sent', () => {
    const scene = renderLoginScreen();

    store.dispatch(recoverPassword());
    store.dispatch(recoverPasswordSuccess());
    store.dispatch(recoverPasswordReset());

    expect(scene.queryAllByTestId('recoverPasswordSuccess').length).toEqual(1);
  });

  it('should hide loading and show error message when recover fails', async () => {
    const scene = renderLoginScreen();

    const email = scene.getByTestId('email');
    fireEvent.changeText(email, 'error@email.com');
    const recoveryBtn = scene.getByTestId('recover');
    fireEvent.press(recoveryBtn);

    await waitFor(() => {
      expect(store.getState().login.isRecoveredPassword).toBeFalsy();
      expect(store.getState().login.error).not.toBeNull();
      expect(store.getState().loading.show).toBeFalsy();
      screen.getByTestId('recoverPasswordFailed');
    });
  });
});
