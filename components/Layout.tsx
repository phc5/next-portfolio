import React, { useState } from 'react';

import Header from './Header/Header';

const Layout = ({ children }: { children: any }) => {
  const [isLight, setIsLight] = useState(
    (localStorage && localStorage.getItem('theme')) || 'theme-light'
  );
  return (
    <div className="min-h-screen relative">
      <div className="grid gap-8 px-8 pb-8 sm:mx-auto sm:pr-0 max-w-5xl">
        <Header isLight={isLight} setIsLight={setIsLight} />
        {children}
      </div>
      {isLight === 'theme-light' ? (
        <style global jsx>
          {`
            body {
              --bg-background-primary: white;
              --text-copy-primary: #242c39;
              transition: background-color 0.25s ease-in-out,
                color 0.25s ease-in-out;
            }
          `}
        </style>
      ) : (
        <style global jsx>
          {`
            body {
              --bg-background-primary: #121212;
              --text-copy-primary: #cbd5e0;
              transition: background-color 0.25s ease-in-out,
                color 0.25s ease-in-out;
            }
          `}
        </style>
      )}
    </div>
  );
};

export default Layout;
