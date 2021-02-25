import React from 'react';
import { formGroupClass, inputContainerClass, inputClass, errorClass } from './AuthHelpers';

type InputProps = {
	errorMsg?: string;
	placeholder: string;
	name: string;
	type: string;
};

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
	<div className={formGroupClass}>
		<div className={inputContainerClass}>
			<input
				type={props.type}
				name={props.name}
				ref={ref}
				placeholder={props.placeholder}
				className={inputClass}
			/>
		</div>
		<p className={errorClass}>{props.errorMsg}</p>
	</div>
));
