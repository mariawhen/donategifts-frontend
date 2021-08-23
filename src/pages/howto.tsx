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

export default function Howto(): JSX.Element {
  return (
    <BaseLayout pageTitle="How To Page">
      <div>How To Page</div>
    </BaseLayout>
  );
}
