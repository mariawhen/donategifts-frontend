import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import css from '../styles/howTo.module.scss';
import howToCheckOut from '../../public/assets/img/howto-checkout.svg';
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
      <main className="bg-cream">
        <div className="bg-yel container mx-auto py-5 mt-3">
          <div className="row-auto">
            <div className="grid-cols-12 cool-font">
              <h1 className="text-lg">How Does It Work For</h1>
              <h1>
                <a href="#donor">Donors</a> and <a href="">Partners</a>
              </h1>
            </div>
          </div>
        </div>
      </main>

      <section id="donor">
        <div className="container">
          <h2 className="cool-font color-blue py-5 text-center mt-3">
            How do I send gifts as a donor?
          </h2>
          <div className="row">
            <div className="col-md-6">
              <h3 className="color-yel cool-font">Step 1</h3>
              <h3 className="mb-4 quick-font font-300">
                Choose wish cards to "Donate Gift"
              </h3>
              <p className="quick-font subtext text-left">
                Each wish card is for a different foster child, created and
                managed by our certified foster agency partner. Browse the
                wishes and become a Secret Santa to make their wish come true.
              </p>
              <p className="quick-font subtext text-left">
                Click the ‘Donate Gift’ button on the card or on their wish page
                to begin the donation process.
              </p>
            </div>
          </div>
          <div className="row my-4 py-4">
            <div className="col-md-6 order-md-2 order-sm-1">
              <h3 className="color-yel cool-font">Step 2</h3>
              <h3 className="mb-4 quick-font font-300">
                Wish donation secure checkout
              </h3>
              <p className="quick-font subtext text-left">
                Your payment transaction is powered by Stripe, which is audited
                by a PCI-certified auditor and is certified to PCI Service
                Provider Level 1. This is the most stringent level of
                certification available in the payments industry.
              </p>
              <p className="quick-font subtext text-left">
                Simply enter the name on card, card number, expiration date, CVC
                (security code 3-4 digits), and the zipcode.
              </p>
              <p className="quick-font subtext text-left">
                That's it! You will be notified after confirmed payment with the
                donation and shipping details.
              </p>
            </div>
            <div className="col-md-6 order-md-1 order-sm-2 d-flex justify-content-center align-items-center">
              <Image src={howToCheckOut} alt="img" />
            </div>
          </div>
          <div className="row my-4 py-4">
            <div className="col-md-6">
              <h3 className="color-yel cool-font">Step 3</h3>
              <h3 className="mb-4 quick-font font-semibold">
                Get 100% tax deductible receipt
              </h3>
              <p className="quick-font subtext text-left">
                After checkout, we will deliver the gift to each managing foster
                agency. All kids and youth are under our partner agencies' care
                and the agency staff will collect and distribute the shipped
                wish items.
              </p>
              <p className="quick-font subtext text-left">
                We don't have a drop-off site because we handle all shipping
                orders to make the donation experience more easy and efficient
                for you.
              </p>
              <p className="quick-font subtext text-left">
                You will receive a tax-exempt receipt, shipping details, and
                delivery proof in the confirmation email. If our partner agency
                permits, you will also get a thank you message and photos from
                the child.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <Image src={howToCheckOut} alt="img" />
            </div>
          </div>
          <div className="row my-5 pb-3">
            <div className="col-12 text-center">
              <h2 className="cool-font blue-font mb-5">
                Ready to make the foster kids happy?
              </h2>
              <a href="/wishcards" className="link--blue bdr-2">
                Start browsing wishes
              </a>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
