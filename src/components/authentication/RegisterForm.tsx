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
	OrClass,
	submitBtnClass,
	authBtnClass,
	registerResolver,
	radioClass,
	radioContainerClass,
	radioLabelContainer,
} from './AuthHelpers';
import { FormInput } from './FormInput';

interface IRegisterFormProps {
	modalDisplay: boolean;
	toggleModal: () => void;
}

export default function RegisterForm(props: IRegisterFormProps): JSX.Element {
	const { register, handleSubmit, errors } = useForm({
		resolver: registerResolver,
	});
	const router = useRouter();

	const onSubmit = (data: { userRole: string }) => {
		const { userRole } = data;

		console.log(data);

		if (userRole === 'agency') {
			router.push('/');
		}
	};

	return (
		<div className={formContainerClass}>
			<form onSubmit={handleSubmit(onSubmit)} className={formClass}>
				<div className={formHeaderClass}>
					<Link href="/signup">
						<button type="button" className={authBtnClass}>
							Sign Up
						</button>
					</Link>
					<div className={OrClass}>OR</div>
					<Link href="/login">
						<button type="button" className={authBtnClass}>
							Login
						</button>
					</Link>
				</div>

				<FormInput
					type="text"
					name="firstName"
					ref={register}
					placeholder="First name"
					errorMsg={errors.firstName?.message}
				/>

				<FormInput
					type="text"
					name="lastName"
					ref={register}
					placeholder="Last name"
					errorMsg={errors.lastName?.message}
				/>

				<FormInput
					type="text"
					name="email"
					ref={register}
					placeholder="Email/Username"
					errorMsg={errors.email?.message}
				/>

				<FormInput
					type="password"
					name="password"
					ref={register}
					placeholder="Password"
					errorMsg={errors.password?.message}
				/>

				<FormInput
					type="password"
					name="passwordConfirm"
					ref={register}
					placeholder="Confirm Password"
					errorMsg={errors.passwordConfirm?.message}
				/>

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
							onClick={() => props.toggleModal()}
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
