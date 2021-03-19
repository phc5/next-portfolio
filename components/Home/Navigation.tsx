import React, { useEffect, useState } from 'react';
import NAVIGATION from '../../constants/navigation';

export default function Navigation({
  isExperienceIntersecting,
  isPortfolioIntersecting,
  isBlogIntersecting,
}) {
  const [selectedNavItem, setSelectedNavItem] = useState(NAVIGATION.EXPERIENCE);

  function onNavItemClick(event) {
    event.preventDefault();
    const hash = event?.target?.hash;
    if (hash) {
      setSelectedNavItem(hash);
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  useEffect(() => {
    if (isExperienceIntersecting) {
      setSelectedNavItem(NAVIGATION.EXPERIENCE);
    } else if (isPortfolioIntersecting) {
      setSelectedNavItem(NAVIGATION.PORTFOLIO);
    } else if (isBlogIntersecting) {
      setSelectedNavItem(NAVIGATION.BLOG);
    }
  }, [isExperienceIntersecting, isPortfolioIntersecting, isBlogIntersecting]);

  return (
    <nav className="mt-8 lg:mt-0">
      <ul className="uppercase text-xs space-y-6">
        <li>
          <a
            href={NAVIGATION.EXPERIENCE}
            onClick={onNavItemClick}
            className={
              selectedNavItem === NAVIGATION.EXPERIENCE &&
              isExperienceIntersecting
                ? 'text-white'
                : 'text-light-gray'
            }
          >
            00. Experience
          </a>
        </li>
        <li>
          <a
            href={NAVIGATION.PORTFOLIO}
            onClick={onNavItemClick}
            className={
              selectedNavItem === NAVIGATION.PORTFOLIO &&
              isPortfolioIntersecting
                ? 'text-white'
                : 'text-light-gray'
            }
          >
            01. Portfolio
          </a>
        </li>
        <li>
          <a
            href={NAVIGATION.BLOG}
            onClick={onNavItemClick}
            className={
              selectedNavItem === NAVIGATION.BLOG && isBlogIntersecting
                ? 'text-white'
                : 'text-light-gray'
            }
          >
            02. Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}
