import React from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.scss';

//Types
// export type CartItemType = {
//   id: number;
//   title: string;
//   description: string;
//   url: string;
//   price: number;
//   images: string;
//   amount: number;
// }

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
