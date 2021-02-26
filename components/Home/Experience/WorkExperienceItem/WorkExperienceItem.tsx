import React from 'react';
import External from '../../../svg/External';

type WorkExperienceItemProps = {
  company: string;
  companyUrl: string;
  endDate: WorkExperienceDate;
  jobTitle: string;
  lastItem: boolean;
  startDate: WorkExperienceDate;
  SvgComponent: any;
  svgPrimaryColor: string;
  svgSecondaryColor: string;
};

type WorkExperienceDate = {
  displayDate: string;
  valueDate?: string;
};

export default function WorkExperienceItem({
  company,
  companyUrl,
  endDate,
  jobTitle,
  lastItem,
  startDate,
  SvgComponent,
  svgPrimaryColor,
  svgSecondaryColor,
}: WorkExperienceItemProps) {
  return (
    <li>
      <div className="relative pb-8">
        {!lastItem && (
          <span
            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
        )}
        <div className="relative flex space-x-3">
          <div>
            <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
              <SvgComponent
                svgPrimaryColor={svgPrimaryColor}
                svgSecondaryColor={svgSecondaryColor}
              />
            </span>
          </div>
          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p className="text-sm font-medium text-gray-900">
                {jobTitle}
                <br />
                <a
                  href={companyUrl}
                  className="text-gray-500 hover:underline hover:pointer flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company}
                  <External />
                </a>
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
            <div className="relative">
              <div className="text-right text-sm whitespace-nowrap text-gray-500 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
