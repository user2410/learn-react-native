import { configureStore } from '@reduxjs/toolkit';
import { loadingReducer } from './loading/reducer';

export const reducers = {
	loading: loadingReducer
};

export const store = configureStore({
	reducer: reducers
})