import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

export default function About({
  isExperienceIntersecting,
  isPortfolioIntersecting,
  isBlogIntersecting,
}) {
  return (
    <div className="static flex flex-col justify-between w-full py-10 px-8 md:py-32 md:px-16 md:max-w-458 lg:max-w-496 md:fixed md:h-screen md:pr-0">
      <Header />
      <Navigation
        isExperienceIntersecting={isExperienceIntersecting}
        isPortfolioIntersecting={isPortfolioIntersecting}
        isBlogIntersecting={isBlogIntersecting}
      />
      <Footer />
    </div>
  );
}
