import React from 'react';
import randomColor from 'randomcolor';
import WORK_EXPERIENCE from '../../../constants/work-experience';

export default function ExperienceContent({ selectedExperienceIndex }) {
  const { company, description, technologies } = WORK_EXPERIENCE[
    selectedExperienceIndex
  ];

  return (
    <div>
      <div className="py-3 xl:pt-6 xl:pb-0">
        <div className="pb-2 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Accomplishments</h3>
        </div>
        <div className="pt-4 max-w-none">
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
          <h3 className="text-lg font-medium text-gray-900">Technologies</h3>
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
                          alpha: 0.5,
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
