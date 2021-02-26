import React, { useState } from 'react';
import WORK_EXPERIENCE from '../../constants/work-experience';
import ExperienceContent from './ExperienceContent/ExperienceContent';
import ExperienceItem from './ExperienceItem/ExperienceItem';

export default function Experience() {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-flow-col-dense lg:grid-cols-3">
      <div className="hidden lg:block lg:col-start-1 lg:col-span-1 ">
        <div className="h-16 bg-white px-6 flex flex-col justify-center border-b-2">
          <div className="flex items-baseline space-x-3">
            <h2 className="text-2xl font-medium text-gray-900 ">
              Work and Education
            </h2>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 ">
          {WORK_EXPERIENCE.map(
            (
              {
                company,
                endDate,
                jobTitle,
                startDate,
                svgComponent,
                svgPrimaryColor,
                svgSecondaryColor,
              },
              index
            ) => (
              <ExperienceItem
                key={`experience-${jobTitle}-${company}`}
                company={company}
                endDate={endDate}
                index={index}
                jobTitle={jobTitle}
                selectedExperienceIndex={selectedExperienceIndex}
                setSelectedExperienceIndex={setSelectedExperienceIndex}
                startDate={startDate}
                SvgComponent={svgComponent}
                svgPrimaryColor={svgPrimaryColor}
                svgSecondaryColor={svgSecondaryColor}
              />
            )
          )}
        </ul>
      </div>

      <div className="space-y-6 border-l border-gray-200 lg:col-start-2 lg:col-span-2">
        <main
          className="flex-1 relative overflow-y-auto focus:outline-none px-5"
          tabIndex={-1}
        >
          <div className="py-5 px-5 xl:px-0 xl:grid xl:grid-cols-3">
            <ExperienceContent
              selectedExperienceIndex={selectedExperienceIndex}
              setSelectedExperienceIndex={setSelectedExperienceIndex}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
