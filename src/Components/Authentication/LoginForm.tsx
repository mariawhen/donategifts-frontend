import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
	errorClass,
	formClass,
	formContainerClass,
	formGroupClass,
	formHeaderClass,
	inputClass,
	inputContainerClass,
	loginResolver,
	OrClass,
	submitBtnClass,
	authBtnClass,
} from './AuthHelpers';

export default function LoginForm(): JSX.Element {
	const { register, handleSubmit, errors } = useForm({
		resolver: loginResolver,
	});

	// eslint-disable-next-line unicorn/consistent-function-scoping
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className={formContainerClass}>
			<form onSubmit={handleSubmit(onSubmit)} className={formClass}>
				<div className={formHeaderClass}>
					<Link href="/users/login">
						<button type="button" className={authBtnClass}>
							Login
						</button>
					</Link>
					<div className={OrClass}>OR</div>
					<Link href="/users/signup">
						<button type="button" className={authBtnClass}>
							Sign Up
						</button>
					</Link>
				</div>

				<div className={formGroupClass}>
					<div className={inputContainerClass}>
						<input
							type="text"
							name="email"
							ref={register}
							placeholder="Email/Username"
							className={inputClass}
						/>
					</div>
					<p className={errorClass}>{errors.email?.message}</p>
				</div>

				<div className={formGroupClass}>
					<div className={inputContainerClass}>
						<input
							name="password"
							ref={register}
							placeholder="Password"
							type="password"
							className={inputClass}
						/>
					</div>
					<p className={errorClass}>{errors.password?.message}</p>
				</div>

				<input type="submit" className={submitBtnClass} value="Log In" />
			</form>
		</div>
	);
}
