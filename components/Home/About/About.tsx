export default function About() {
  return (
    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
      <section aria-labelledby="applicant-information-title">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2
              id="aboutme-title"
              className="text-lg font-medium text-gray-900 mb-4"
            >
              About Me
            </h2>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Title</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Front End Engineer
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Current Employer
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Amazon Web Services
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  I am a software engineer with 3.5+ years of experience in UI
                  engineering building clean and performant user interfaces. I
                  have experience developing projects from small-scale static
                  websites to large-scale, enterprise-level applications that
                  have reached millions of users and generated millions of
                  dollars in revenue, and have achieved success in both
                  team-oriented and independent environments.
                  <br />
                  <br />I currently work as a Front End Engineer at AWS Activate
                  where I am building experiences and resources that help
                  startups of all sizes accelerate their growth and development.
                  Along with my passion for learning new technologies and
                  writing code, I love to spend time with my dog, play golf,
                  watch cooking and baking shows, and play video games.
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Technologies
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  JavaScript, React, AWS, Next.js, GraphQL, CSS, TypeScript
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Interests</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Gaming, Soccer, Travel, Calisthenics, Electric Vehicles
                </dd>
              </div>
              {/* <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Attachments
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-2 flex-1 w-0 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div> */}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
