import { createAction } from "@reduxjs/toolkit";

export const recoverPassword = createAction('[Recover password]')
export const recoverPasswordSuccess = createAction('[Recover password] success')
export const recoverPasswordFailed = createAction('[Recover password] failed', (error: any) => ({ payload: error }))
export const recoverPasswordReset = createAction('[Recover password] reset')