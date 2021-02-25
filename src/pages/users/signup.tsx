import React from 'react';
import BaseLayout from '@/Components/Layout/BaseLayout';
import Register from '@/Components/Authentication/Register';

export default function Signup(): JSX.Element {
	return (
		<BaseLayout pageTitle="Sign Up">
			<Register />
		</BaseLayout>
	);
}
