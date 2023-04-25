const {
  recoverPassword,
  recoverPasswordSuccess,
  recoverPasswordFailed,
} = require('../action');
const {loginReducer, loginInitialState} = require('../reducer');

describe('Login store', () => {
  it('Recover Password', () => {
    const initialState = loginInitialState;
    const newState = loginReducer(initialState, recoverPassword());

    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true,
    });
  });

  it('Recover Password Success', () => {
    const initialState = {
      ...loginInitialState,
      isRecoveringPassword: true,
    };
    const newState = loginReducer(initialState, recoverPasswordSuccess());

    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false,
    });
  });

  it('Recover Password Failure', () => {
    const initialState = {
      ...loginInitialState,
      isRecoveringPassword: true,
    };
    const error = {message: 'error'};
    const newState = loginReducer(initialState, recoverPasswordFailed(error));

    expect(newState).toEqual({
      ...initialState,
      error,
      isRecoveredPassword: false,
      isRecoveringPassword: false,
    });
  });
});
