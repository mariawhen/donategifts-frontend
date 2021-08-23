/* eslint-disable react/jsx-one-expression-per-line */
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

export default function Footer(): JSX.Element {
  const { t } = useTranslation('common');
  const breadCrumbs: {
    link: string;
    text: string;
  }[] = [
    {
      link: '/contact',
      text: t('common:contactUsHyperLink'),
    },
    {
      link: '/mission',
      text: t('common:missionHyperLink'),
    },
    {
      link: '/howto',
      text: t('common:howItWorksHyperLink'),
    },
    {
      link: '/team',
      text: t('common:whoWeAreHyperLink'),
    },
    {
      link: '/wishcards',
      text: t('common:wishCardsHyperLink'),
    },
    {
      link: '/community',
      text: t('common:communityHyperLink'),
    },
    {
      link: '/terms',
      text: t('common:termsHyperLink'),
    },
    {
      link: '/faq',
      text: t('common:faqHyperLink'),
    },
  ];

  return (
    <div className="quick-font w-full bg-primary bg-dark p-6">
      <p className="text-yellow p-2 text-lg flex justify-center">
        <i className="fa fa-heart mt-1" aria-hidden />
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LA5DA2K2C8HLW"
          rel="noreferrer"
          title="support our organization by paypal donation"
          target="_blank"
          className="mr-1 ml-1 hover:underline"
        >
          <span>{t('common:supportOurCause')}</span>
        </a>
        <i className="fa fa-heart mt-1" aria-hidden />
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="text-white">
          <button type="button" className="px-2">
            <a
              href="https://www.instagram.com/donategifts/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <span>{t('common:socialMedia')}</span>
            </a>
          </button>
          <span>|</span>
        </div>
        {breadCrumbs.map((item, index) => (
          <div className="text-white" key={item.text}>
            <button type="button" className="px-2">
              <Link href={item.link}>
                <span className="hover:underline">{item.text}</span>
              </Link>
            </button>
            {index + 1 !== breadCrumbs.length && <span>|</span>}
          </div>
        ))}
      </div>
      <div className="text-white p-2 flex justify-center space-x-1">
        <p>Donate Gifts Inc.</p>
        <p>{new Date().getFullYear()}.</p>
        <p>{t('common:allRightsReserved')}</p>
      </div>
    </div>
  );
}
