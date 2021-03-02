import React from 'react';
import BaseLayout from '@/Components/Layout/BaseLayout';
import AgencyRegisterForm from '@/Components/Authentication/AgencyRegisterForm';

export default function AgencySignUp(): JSX.Element {
	return (
		<BaseLayout pageTitle="Register as a Foster Care Partner">
			<AgencyRegisterForm />
		</BaseLayout>
	);
}
