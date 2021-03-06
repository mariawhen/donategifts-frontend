import React from 'react';
import LoginForm from '@/components/authentication/LoginForm';
import BaseLayout from '@/components/layout/BaseLayout';

export default function Login(): JSX.Element {
	return (
		<BaseLayout pageTitle="Login">
			<LoginForm />
		</BaseLayout>
	);
}
