import Link from 'next/link';
import WorkExperienceItem from '../WorkExperienceItem/WorkExperienceItem';
import WORK_EXPERIENCE from '../../../../constants/work-experience';

export default function WorkExperience() {
  return (
    <section className="lg:col-start-3 lg:col-span-1">
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">Experience</h2>

        <div className="mt-6 flow-root">
          <ul className="-mb-8">
            {WORK_EXPERIENCE.map(
              (
                {
                  company,
                  companyUrl,
                  endDate,
                  jobTitle,
                  startDate,
                  svgComponent,
                  svgPrimaryColor,
                  svgSecondaryColor,
                },
                index
              ) => (
                <WorkExperienceItem
                  key={`${jobTitle}-${company}`}
                  company={company}
                  companyUrl={companyUrl}
                  endDate={endDate}
                  jobTitle={jobTitle}
                  lastItem={index === WORK_EXPERIENCE.length - 1}
                  startDate={startDate}
                  SvgComponent={svgComponent}
                  svgPrimaryColor={svgPrimaryColor}
                  svgSecondaryColor={svgSecondaryColor}
                />
              )
            )}
          </ul>
          <div className="mt-6 flex flex-col justify-stretch">
            <Link href="/experience" passHref>
              <a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                More Details
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
