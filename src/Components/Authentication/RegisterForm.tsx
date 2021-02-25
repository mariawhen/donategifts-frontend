import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	errorClass,
	formClass,
	formContainerClass,
	formGroupClass,
	formHeaderClass,
	inputClass,
	inputContainerClass,
	OrClass,
	submitBtnClass,
	authBtnClass,
	registerResolver,
	radioClass,
	radioContainerClass,
	radioLabelContainer,
} from './AuthHelpers';

interface IRegisterFormProps {
	modalDisplay: boolean;
	toggleModal: () => void;
}

export default function RegisterForm(Props: IRegisterFormProps): JSX.Element {
	const { register, handleSubmit, errors } = useForm({
		resolver: registerResolver,
	});
	const router = useRouter();

	// eslint-disable-next-line unicorn/consistent-function-scoping
	const onSubmit = (data) => {
		const { userRole } = data;
		// eslint-disable-next-line no-console
		console.log(data);
		if (userRole === 'agency') {
			router.push('/');
		}
	};

	return (
		<div className={formContainerClass}>
			<form onSubmit={handleSubmit(onSubmit)} className={formClass}>
				<div className={formHeaderClass}>
					<Link href="/users/signup">
						<button type="button" className={authBtnClass}>
							Sign Up
						</button>
					</Link>
					<div className={OrClass}>OR</div>
					<Link href="/users/login">
						<button type="button" className={authBtnClass}>
							Login
						</button>
					</Link>
				</div>

				<div className={formGroupClass}>
					<div className={inputContainerClass}>
						<input
							type="text"
							name="fName"
							ref={register}
							placeholder="First name"
							className={inputClass}
						/>
					</div>
					<p className={errorClass}>{errors.fName?.message}</p>
				</div>

				<div className={formGroupClass}>
					<div className={inputContainerClass}>
						<input
							type="text"
							name="lName"
							ref={register}
							placeholder="Last name"
							className={inputClass}
						/>
					</div>
					<p className={errorClass}>{errors.lName?.message}</p>
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

				<div className={formGroupClass}>
					<div className={inputContainerClass}>
						<input
							name="passwordConfirm"
							ref={register}
							placeholder="Confirm Password"
							type="password"
							className={inputClass}
						/>
					</div>
					<p className={errorClass}>{errors.passwordConfirm?.message}</p>
				</div>

				<div className={formGroupClass}>
					<p className="text-2xl text-white">Signing up as:</p>
					<div className={radioContainerClass}>
						<input
							name="userRole"
							ref={register}
							type="radio"
							className={radioClass}
							value="donor"
						/>
						<p className={radioLabelContainer}>Gift Sender</p>
					</div>
					<div className={radioContainerClass}>
						<input
							name="userRole"
							ref={register}
							type="radio"
							className={radioClass}
							value="agency"
							onClick={() => Props.toggleModal()}
						/>
						<p className={radioLabelContainer}>Foster Care Partner</p>
					</div>
					<p className={errorClass}>{errors.userRole?.message}</p>
				</div>

				<input type="submit" className={submitBtnClass} value="Sign Up" />
			</form>
		</div>
	);
}
