import React from 'react';

export interface IModalProps {
	isVisible: boolean;
	Body: () => JSX.Element;
}

const modalClass =
	'font-quicksand fixed flex bg-black bg-opacity-50 p-10 w-full h-full top-0 left-0 z-50 overflow-y-scroll';
const modalChildClass = 'h-full bg-white rounded md:mx-20 mt-10';

export default function Modal(Props: IModalProps): JSX.Element {
	return (
		<div
			className={Props.isVisible ? modalClass : 'hidden'}
			tabIndex={-1}
			role="dialog"
			aria-hidden="true"
		>
			<div className={modalChildClass}>
				<Props.Body />
			</div>
		</div>
	);
}
