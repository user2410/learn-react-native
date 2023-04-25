import { configureStore } from '@reduxjs/toolkit';
import { loadingReducer } from './loading/reducer';
import { loginReducer } from './login/reducer';
import { LoadingState } from './loading/state';
import { LoginState } from './login/state';

export interface AppState {
	loading: LoadingState;
	login: LoginState;
}

export const reducers = {
	loading: loadingReducer,
	login: loginReducer,
};

export const store = configureStore({
	reducer: reducers
})