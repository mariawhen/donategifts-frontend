import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import Image from 'next/image';
// import css from '../styles/howTo.module.scss';
// import howToCheckOut from '../../public/assets/img/howto-checkout.svg';
import bg from '../../public/assets/img/new-floating-deco-1.svg';
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
    <BaseLayout pageTitle="How does Donategifts work?">
      <header>
        <div className="w-full bg-cover bg-center dg-bg-howto">
          <div className="flex items-center justify-center h-full w-full">
            <div className="text-center cool-font">
              <h1 className="dg-color-blue text-4xl font-semibold">
                How Does It Work For
              </h1>
              <div className="text-2xl">
                <button className="mt-4 py-2 px-4 mr-5 dg-bg-blue text-white rounded">
                  Donors
                </button>
                and
                <button className="mt-4 py-2 px-4 ml-5 dg-bg-blue text-white rounded">
                  Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </BaseLayout>
  );
}
