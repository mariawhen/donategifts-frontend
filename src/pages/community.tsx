import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '@/components/layout/BaseLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'mission'])),
    },
  };
}

export default function Community(): JSX.Element {
  return (
    <BaseLayout pageTitle="Community Page">
      <div>Community Page</div>
      <h1>wow we have a lot to do</h1>
    </BaseLayout>
  );
}
