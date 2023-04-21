import { createReducer } from "@reduxjs/toolkit";
import { show, hide } from "./action";
import { LoadingState } from "./state";

const initialState: LoadingState = {
	show: false
}

export const loadingReducer = createReducer(initialState, builder => {
	builder.addCase(show, () => {
		return { show: true }
	})

	builder.addCase(hide, () => {
		return { show: false }
	})
})