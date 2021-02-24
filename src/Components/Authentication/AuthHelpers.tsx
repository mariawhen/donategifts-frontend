import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const registerFormSchema = yup.object().shape({
	fName: yup.string().required(),
	lName: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().required().min(8, 'Passwords must at least be 8 characters long'),
	passwordConfirm: yup
		.string()
		.test('password-match', 'Passwords do not match', function match(value) {
			return this.parent.password === value;
		}),
	userRole: yup.string().required(),
});

const loginFormSchema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required(),
});

export const registerResolver = yupResolver(registerFormSchema);
export const loginResolver = yupResolver(loginFormSchema);

export const formContainerClass = 'flex justify-center bg-authform';
export const formClass =
	'flex flex-col space-y-8 my-10 p-12 border rounded-2xl border-transparent bg-gradient-to-tr from-form-primary to-form-secondary w-9/12';
export const formHeaderClass =
	'justify-center p-4 text-2xl mb-3 space-x-2 flex flex-col md:flex-row flex-wrap';
export const formGroupClass = 'flex flex-col space-y-3';
export const inputContainerClass = 'w-full border-b-2 border-white';
export const inputClass =
	'w-full mb-1 bg-transparent ml-2 text-lg text-white placeholder-white placeholder-opacity-50';
export const errorClass = 'text-sm ml-2 text-white';
export const submitBtnClass =
	'shadow w-2/4 py-4 font-bold self-center cursor-pointer rounded-md hover:bg-form-secondary hover:text-white duration-700 text-xl text-red-400';
export const authBtnClass =
	'font-crayoncrumble text-3xl hover:cursor-pointer border rounded-2xl border-transparent pt-3 px-8 pb-3 bg-color-signup text-red-400 hover:underline';
export const OrClass = 'font-crayoncool self-center text-white';
