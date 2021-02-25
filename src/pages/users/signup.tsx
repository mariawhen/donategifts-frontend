import React from 'react';
import BaseLayout from '@/Components/Layout/BaseLayout';
import Register from '@/Components/Authentication/Register';

export default function SignUp(): JSX.Element {
	return (
		<BaseLayout pageTitle="Sign Up">
			<Register />
		</BaseLayout>
	);
}
