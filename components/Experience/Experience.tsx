import React, { useState } from 'react';
import ExperienceContent from './ExperienceContent/ExperienceContent';
import WORK_EXPERIENCE from '../../constants/work-experience';

export default function Experience() {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  return (
    <div className="space-y-6 lg:col-start-1 lg:col-span-3">
      <nav aria-label="Experience Navigation">
        <ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {WORK_EXPERIENCE.map((experience, index) => (
            <li
              className="md:flex-1"
              key={experience.jobTitle}
              onClick={(event) => {
                event.preventDefault();
                setSelectedExperienceIndex(index);
              }}
            >
              <span
                className={`group pl-4 py-2 flex flex-col border-l-4 cursor-pointer hover:border-heading md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4 ${
                  selectedExperienceIndex === index ? 'border-heading' : ''
                }`}
              >
                <span className="text-base font-bold tracking-wide">
                  {experience.jobTitle}
                </span>
                <span className="text-sm tracking-wide">
                  {experience.company}
                </span>
                <span className="text-sm text-gray-500">
                  {experience.startDate.displayDate} -{' '}
                  {experience.endDate.displayDate}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </nav>
      <ExperienceContent selectedExperienceIndex={selectedExperienceIndex} />
    </div>
  );
}
