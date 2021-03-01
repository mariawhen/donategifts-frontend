import React from 'react';
import PropTypes from 'prop-types';
import { formGroupClass, inputContainerClass, inputClass, errorClass } from './AuthHelpers';

interface IInputProps {
	errorMsg?: string;
	placeholder: string;
	name: string;
	type: string;
}

const FormInput = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => (
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

FormInput.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	errorMsg: PropTypes.string,
};

FormInput.defaultProps = {
	errorMsg: 'Invalid input',
};

export { FormInput };
