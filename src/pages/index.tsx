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

export default function Index(): JSX.Element {
  return (
    <BaseLayout pageTitle="Holiday Gift Donation | Donate Gifts to Foster Kids -Virtual Toy Drive">
      <div className="flex w-full justify-center">
        <div id="home-bg" className="w-full" />
      </div>
    </BaseLayout>
  );
}
