import About from './About/About';
import WorkExperience from './Experience/WorkExperience/WorkExperience';

export default function ProfileV2() {
  return (
    <div>
      <div>
        <picture>
          <source
            srcSet="/goldengate.webp"
            className="h-32 w-full object-cover lg:h-72"
          />
          <img
            className="h-32 w-full object-cover lg:h-72"
            src="/goldengate.jpg"
            alt="Golden Gate Bridge"
          />
        </picture>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-16 flex items-end space-x-5 mt-8 mx-auto lg:max-w-7xl">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src="/profilepic.jpg"
              alt="Paul Chong profile image"
            />
          </div>
          <div className="mt-12 flex-1 min-w-0 flex items-center justify-end space-x-6 pb-1">
            <div className="mt-6 min-w-0 flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
                Paul Chong
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-12 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <About />
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}
