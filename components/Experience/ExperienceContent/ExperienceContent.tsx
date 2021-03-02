import React from 'react';
import randomColor from 'randomcolor';
import WORK_EXPERIENCE from '../../../constants/work-experience';

export default function ExperienceContent({
  selectedExperienceIndex,
  setSelectedExperienceIndex,
}) {
  const {
    company,
    companyUrl,
    description,
    endDate,
    jobTitle,
    startDate,
    technologies,
  } = WORK_EXPERIENCE[selectedExperienceIndex];

  return (
    <div className="xl:col-span-3 xl:pr-8">
      <div className="flex items-center justify-between space-x-4 xl:border-b xl:pb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{jobTitle}</h1>
          <p className="text-md text-gray-500 inline-block">
            <a
              href={companyUrl}
              className="text-gray-500 hover:underline hover:pointer flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {company}
            </a>
          </p>
          <div className="text-sm text-gray-400">
            <time dateTime={startDate.valueDate}>{startDate.displayDate}</time>{' '}
            -{' '}
            {endDate.hasOwnProperty('valueDate') ? (
              <time dateTime={endDate.valueDate}>{endDate.displayDate}</time>
            ) : (
              <span>{endDate.displayDate}</span>
            )}
          </div>
        </div>
        <div className="mt-4 flex space-x-3 md:mt-0">
          <nav aria-label="Pagination">
            <span className="relative z-0 inline-flex shadow-sm rounded-md">
              <button
                onClick={() => {
                  if (selectedExperienceIndex > 0) {
                    setSelectedExperienceIndex(--selectedExperienceIndex);
                  }
                }}
                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  if (selectedExperienceIndex < WORK_EXPERIENCE.length - 1) {
                    setSelectedExperienceIndex(++selectedExperienceIndex);
                  }
                }}
                className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </nav>
        </div>
      </div>

      <div className="py-3 xl:pt-6 xl:pb-0">
        <h3 className="sr-only">Accomplishments</h3>
        <div className="max-w-none">
          <ul>
            {description.map((item) => (
              <li key={`${company}-${item}`} className="mb-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-8 xl:mt-10">
        <div className="pb-2 border-b border-gray-200">
          <h2 id="activity-title" className="text-lg font-medium text-gray-900">
            Technologies
          </h2>
        </div>
        <div className="pt-4 pb-8">
          <div className="flow-root">
            <ul className="-mb-8 flex flex-wrap">
              {technologies.map((technology) => {
                return (
                  <li key={`${company}-${technology}`} className="m-2">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium text-gray-800 border border-gray-100"
                      style={{
                        backgroundColor: randomColor({
                          luminosity: 'light',
                          format: 'rgba',
                          alpha: 0.5, // e.g. 'rgba(9, 1, 107, 0.5)',
                        }),
                      }}
                    >
                      {technology}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
