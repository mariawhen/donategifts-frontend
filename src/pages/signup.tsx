import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import Register from '@/components/authentication/Register';

export default function SignUp(): JSX.Element {
  return (
    <BaseLayout pageTitle="Sign Up">
      <Register />
    </BaseLayout>
  );
}
