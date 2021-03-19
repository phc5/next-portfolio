import React, { useState } from 'react';
import SlideDown from 'react-slidedown';
import styles from '../../styles/home.module.scss';

const SLIDE_IN_PROPERTIES = [
  'animate-slideIn-750',
  'animate-slideIn-500',
  'animate-slideIn-250',
  'animate-slideIn-50',
];

const portfolio = [
  {
    title: 'California Christ Community Church',
    descriptions: [
      "I am currently the maintainer and webmaster of California Christ Community Church's website",
      'My duties include implementing new features, cross-browser testing, monitoring and analyzing web traffic, and implementing new functionality',
    ],
    href: 'https://www.c4ministry.com/',
    type: 'Freelance',
  },
  {
    title: 'Canterbury Consulting',
    descriptions: [
      'Built a search page that returns users relevant articles, blogs, and videos based on the search term',
      'Learned how to navigate and use Umbraco CMS and utilized .NET, HTML, CSS, and JavaScript to implement new features and fix bug',
      'Solo developer on a remote team that consists of product, UX, and engineering',
    ],
    href: 'https://www.canterburyconsulting.com',
    type: 'Freelance',
  },
  {
    title: 'GitHub Trends',
    descriptions: [
      'Browse the hottest repositories on GitHub',
      'Built with Next.js, Apollo Client, and styled-components',
    ],
    href: 'https://www.github.com/phc5/gh-trends',
    type: 'Project',
  },
  {
    title: 'Rust Markdown Compiler',
    descriptions: [
      'A markdown compiler written in Rust that turns markdown files into HTML files',
    ],
    href: 'https://www.github.com/phc5/markdown_compiler',
    type: 'Project',
  },
];

export default function Portfolio({ setPortfolioRef }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(undefined);

  return (
    <div id="portfolio" className="mt-40 pt-8" ref={setPortfolioRef}>
      {portfolio.map((item, index) => (
        <div
          key={`${item.title}-panel-${index}`}
          className={`${styles['portfolio']} flex flex-col text-light-gray bg-gray p-8 mt-2 transition duration-500 transform hover:scale-105 cursor-pointer ${SLIDE_IN_PROPERTIES[index]}`}
          onClick={() => {
            setIsPanelOpen(selectedPortfolio === index ? !isPanelOpen : true);
            setSelectedPortfolio(index);
          }}
        >
          <div
            id={`panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            className="flex justify-between"
          >
            <div className="flex">
              {item.type === 'Project' ? (
                <svg
                  className="self-center mr-8 h-6 w-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
              ) : (
                <svg
                  className="self-center mr-8 h-6 w-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
              <div>
                <h3>
                  <a
                    href={item.href}
                    className="cursor-pointer transition-colors duration-300 hover:underline hover:text-teal"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="text-xs font-mono mt-1">{item.type}</p>
              </div>
            </div>

            {isPanelOpen ? (
              <svg
                className="self-center opacity-0 h-3 w-3 transition-opacity duration-500 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                className="self-center opacity-0 h-3 w-3 transition-opacity duration-500 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            )}
          </div>
          <SlideDown>
            {selectedPortfolio === index && isPanelOpen && (
              <ul
                className={`mt-6 space-y-4 text-sm tracking-tighter leading-snug`}
              >
                {item.descriptions.map((desc, index) => (
                  <li key={`${item.title}-description-${index}`}>{desc}</li>
                ))}
              </ul>
            )}
          </SlideDown>
        </div>
      ))}
    </div>
  );
}
