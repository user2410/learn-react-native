import { object, string } from 'yup';

export const loginFormSchema = object({
	email: string().required('Email is required').email('Invalid email'),
	password: string().required('Password is required'),
})