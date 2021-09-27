import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
// import css from '../styles/howTo.module.scss';
import howToCheckOut from '../../public/assets/img/howto-checkout.svg';
import wishCardClick from '../../public/assets/img/wishcard-click.svg';
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
              <div className="text-3xl">
                <a href="#donor">
                  <button className="mt-4 py-2 px-4 mr-5 dg-bg-blue text-white rounded">
                    Donors
                  </button>
                </a>
                and
                <a href="#partner">
                  <button className="mt-4 py-2 px-4 ml-5 dg-bg-blue text-white rounded">
                    Partners
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="donor" className="relative pt-4 mb-4 w-full dg-bg-yel-80">
        <div className="py-20">
          <h1 className="cool-font dg-color-blue text-center text-4xl">
            How do I send gifts as a donor?
          </h1>
        </div>
        <div className="items-center flex flex-wrap px-4">
          <div className="w-full md:w-5/12 mx-auto px-2 py-2">
            <div className="md:pr-12">
              <h3 className="text-2xl font-semibold text-white cool-font">
                Step 1
              </h3>
              <p className="mt-4 text-2xl quick-font dg-color-blue font-semibold">
                Choose a wish card to 'Donate Gift'
              </p>
              <p className="mt-4 text-lg quick-font dg-color-blue leading-relaxed">
                Each wish card is for a different foster child, created and
                managed by our certified foster agency partner. Browse the
                wishes and become a Secret Santa to make their wish come true.
              </p>
              <p className="mt-4 text-lg quick-font dg-color-blue leading-relaxed">
                Click the ‘Donate Gift’ button on the card or on their wish page
                to begin the donation process.
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 mx-auto pr-4 pl-2">
            <Image
              alt="how to check out"
              className="max-w-full px-12"
              src={wishCardClick}
            />
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
