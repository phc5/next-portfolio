import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import { AppProps } from 'next/app';
import { usePanelBear } from '../hooks/panelbear';
import '../styles/index.css';
import '../styles/global.css';
import '../styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
export default function MyApp({ Component, pageProps }: AppProps) {
  usePanelBear(process?.env?.NEXT_PUBLIC_PANEL_BEAR_ID, {
    // Uncomment to allow sending events on localhost, and log to console too.
    debug: false,
  });
  return <Component {...pageProps} />;
}
