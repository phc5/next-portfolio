import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body className="font-sans">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var storageKey = 'darkMode';
                  var classNameDark = 'dark-mode';
                  var classNameLight = 'light-mode';
                
                  function setClassOnDocumentBody(darkMode) {
                    document.body.classList.add(darkMode ? classNameDark : classNameLight);
                    document.body.classList.remove(darkMode ? classNameLight : classNameDark);
                  }
                  
                  var preferDarkQuery = '(prefers-color-scheme: dark)';
                  var mql = window.matchMedia(preferDarkQuery);
                  var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                  var localStorageTheme = null;
                  try {
                    localStorageTheme = localStorage.getItem(storageKey);
                  } catch (err) {}
                  var localStorageExists = localStorageTheme !== null;
                  if (localStorageExists) {
                    localStorageTheme = JSON.parse(localStorageTheme);
                  }
                
                  if (localStorageExists) {
                    setClassOnDocumentBody(localStorageTheme);
                  } else if (supportsColorSchemeQuery) {
                    setClassOnDocumentBody(mql.matches);
                    localStorage.setItem(storageKey, mql.matches);
                  } else {
                    var isDarkMode = document.body.classList.contains(classNameDark);
                    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                  }
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
