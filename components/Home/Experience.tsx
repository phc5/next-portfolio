import React, { useState } from 'react';
import { SlideDown } from 'react-slidedown';
import WORK_EXPERIENCE from '../../constants/work-experience';
import styles from '../../styles/home.module.scss';
import 'react-slidedown/lib/slidedown.css';

const SLIDE_IN_PROPERTIES = [
  'animate-slideIn-1750',
  'animate-slideIn-1500',
  'animate-slideIn-1250',
  'animate-slideIn-1000',
];

export default function Experience({ setExperienceRef }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(undefined);

  return (
    <div id="experience" className="pt-2" ref={setExperienceRef}>
      {WORK_EXPERIENCE.map((experience, index) => (
        <div
          key={`${experience.company}-panel-${index}`}
          className={`${styles['experience']} flex flex-col text-light-gray bg-gray p-8 mt-2 transition duration-500 transform hover:scale-105 cursor-pointer ${SLIDE_IN_PROPERTIES[index]}`}
          onClick={() => {
            setIsPanelOpen(selectedExperience === index ? !isPanelOpen : true);
            setSelectedExperience(index);
          }}
        >
          <div
            id={`panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            className="flex justify-between"
          >
            <div className="flex">
              {experience.type === 'work' ? (
                <svg
                  className="self-center mr-8 h-6 w-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              ) : (
                <svg
                  className="self-center mr-8 h-6 w-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              )}
              <div>
                <h3 className="flex flex-col sm:flex-row">
                  <span>{experience.jobTitle}</span>
                  <span className="text-white">
                    <span>&nbsp;@&nbsp;</span>
                    <a
                      href={experience.companyUrl}
                      className="cursor-pointer transition-colors duration-300 hover:underline hover:text-teal"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {experience.company}
                    </a>
                  </span>
                </h3>
                <p className="text-xs font-mono mt-1">
                  <time dateTime={experience.startDate.valueDate}>
                    {experience.startDate.displayDate}
                  </time>{' '}
                  -{' '}
                  <time dateTime={experience.endDate.valueDate}>
                    {experience.endDate.displayDate}
                  </time>
                </p>
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
            {selectedExperience === index && isPanelOpen && (
              <ul
                className={`mt-6 space-y-4 text-sm tracking-tighter leading-snug`}
              >
                {experience.description.map((desc, index) => (
                  <li key={`${experience.jobTitle}-description-${index}`}>
                    {desc}
                  </li>
                ))}
              </ul>
            )}
          </SlideDown>
        </div>
      ))}
    </div>
  );
}
