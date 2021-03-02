import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import InputMask from 'react-input-mask';
import {
	formClass,
	formContainerClass,
	submitBtnClass,
	registerAgencyResolver,
	errorClass,
	inputContainerClass,
	inputClass,
	agencyFormHeaderClass,
	cityStateZipContainerClass,
	cityGroupClass,
	stateGroupClass,
	zipcodeGroupClass,
	countryPhoneContainerClass,
	countryGroupClass,
	phoneGroupClass,
	formGroupClass,
	agencyBioInputClass,
} from './AuthHelpers';
import { FormInput } from './FormInput';

export default function AgencyRegisterForm(): JSX.Element {
	const { register, handleSubmit, errors, control } = useForm({
		resolver: registerAgencyResolver,
	});
	const router = useRouter();

	const onSubmit = (data) => {
		console.log(data);
		router.push('/');
	};

	return (
		<div className={formContainerClass}>
			<form onSubmit={handleSubmit(onSubmit)} className={formClass}>
				<div className={agencyFormHeaderClass}>Last step: Register your Agency</div>

				<FormInput
					type="text"
					name="agencyName"
					ref={register}
					placeholder="Agency Name"
					errorMsg={errors.agencyName?.message}
				/>

				<FormInput
					type="text"
					name="agencyWebsite"
					ref={register}
					placeholder="Agency Website (if any)"
					errorMsg={errors.agencyWebsite?.message}
				/>

				<FormInput
					type="text"
					name="address1"
					ref={register}
					placeholder="Agency Address Line 1"
					errorMsg={errors.address1?.message}
				/>

				<FormInput
					type="text"
					name="address2"
					ref={register}
					placeholder="Address Line 2"
					errorMsg={errors.address2?.message}
				/>

				<div className={cityStateZipContainerClass}>
					<FormInput
						type="text"
						name="city"
						ref={register}
						placeholder="City"
						errorMsg={errors.city?.message}
						containerClass={cityGroupClass}
					/>

					<FormInput
						type="text"
						name="state"
						ref={register}
						placeholder="State"
						errorMsg={errors.state?.message}
						containerClass={stateGroupClass}
					/>

					<FormInput
						type="text"
						name="zipcode"
						ref={register}
						placeholder="Zipcode"
						errorMsg={errors.zipcode?.message}
						containerClass={zipcodeGroupClass}
					/>
				</div>

				<div className={countryPhoneContainerClass}>
					<FormInput
						type="text"
						name="country"
						ref={register}
						placeholder="Country"
						errorMsg={errors.country?.message}
						containerClass={countryGroupClass}
					/>

					<div className={phoneGroupClass}>
						<div className={inputContainerClass}>
							<Controller
								type="tel"
								name="agencyPhone"
								as={InputMask}
								control={control}
								placeholder="Phone Number: 123-456-7890"
								mask="999-999-9999"
								className={inputClass}
							/>
						</div>
						<p className={errorClass}>{errors.agencyPhone?.message}</p>
					</div>
				</div>

				<div className={formGroupClass}>
					<div className={inputContainerClass}>
						<textarea
							name="agencyBio"
							ref={register}
							placeholder="Agency Description"
							className={agencyBioInputClass}
						/>
					</div>
					<p className={errorClass}>{errors.agencyBio?.message}</p>
				</div>

				<input type="submit" className={submitBtnClass} value="Sign Up" />
			</form>
		</div>
	);
}
