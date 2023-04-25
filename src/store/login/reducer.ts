import { createReducer } from "@reduxjs/toolkit";
import { recoverPassword, recoverPasswordFailed, recoverPasswordReset, recoverPasswordSuccess } from "./action";
import { LoginState } from "./state";

export const loginInitialState: LoginState = {
	error: null,
	isLoggedIn: false,
	isLoggingIn: false,
	isRecoveredPassword: false,
	isRecoveringPassword: false,
}

export const loginReducer = createReducer(loginInitialState, builder => {
	builder.addCase(recoverPassword, (state) => {
		return { ...state, error: null, isRecoveredPassword: false, isRecoveringPassword: true }
	});
	builder.addCase(recoverPasswordSuccess, (state) => {
		return { ...state, error: null, isRecoveredPassword: true, isRecoveringPassword: false }
	});
	builder.addCase(recoverPasswordFailed, (state, action) => {
		return { ...state, error: action.payload, isRecoveredPassword: false, isRecoveringPassword: false }
	});
	builder.addCase(recoverPasswordReset, (state) => {
		return { ...loginInitialState }
	})
})