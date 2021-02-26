import React from 'react';

export default function ExperienceItem({
  company,
  endDate,
  index,
  jobTitle,
  selectedExperienceIndex,
  setSelectedExperienceIndex,
  startDate,
  SvgComponent,
  svgPrimaryColor,
  svgSecondaryColor,
}) {
  return (
    <li
      className={`relative bg-white py-5 px-4 hover:bg-gray-200 cursor-pointer focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ${
        selectedExperienceIndex === index ? 'bg-gray-100' : ''
      }`}
      onClick={() => setSelectedExperienceIndex(index)}
    >
      <div className="min-w-0 flex flex-col">
        <div className="flex items-center space-x-3">
          <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-transparent">
            <SvgComponent
              svgPrimaryColor={svgPrimaryColor}
              svgSecondaryColor={svgSecondaryColor}
            />
          </span>
          <div className="min-w-0 flex-1 pt-1.5 flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                {jobTitle}
                <br />
                <span className="text-gray-500 items-center">{company}</span>
              </p>
              <div className="text-xs whitespace-nowrap text-gray-400">
                <div>
                  <time dateTime={startDate.valueDate}>
                    {startDate.displayDate}
                  </time>{' '}
                  -{' '}
                  {endDate.hasOwnProperty('valueDate') ? (
                    <time dateTime={endDate.valueDate}>
                      {endDate.displayDate}
                    </time>
                  ) : (
                    <span>{endDate.displayDate}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {index === selectedExperienceIndex && (
            <div className="h-5 w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
