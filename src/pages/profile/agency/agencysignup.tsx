import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import AgencyRegisterForm from '@/components/authentication/AgencyRegisterForm';

export default function AgencySignUp(): JSX.Element {
  return (
    <BaseLayout pageTitle="Register as a Foster Care Partner">
      <AgencyRegisterForm />
    </BaseLayout>
  );
}
