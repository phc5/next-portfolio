import { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ROUTES from '../constants/routes';
import Footer from './Footer';

const Layout = ({ children }: { children: any }) => {
  const router = useRouter();
  const currentPath = router?.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function preventHtmlScroll() {
    const htmlTag = document?.getElementsByTagName('html')[0];
    if (htmlTag && isMobileMenuOpen) {
      htmlTag.style.height = '100%';
      htmlTag.style.overflow = 'hidden';
    } else {
      htmlTag.style.height = 'initial';
      htmlTag.style.overflow = 'initial';
    }
  }

  return (
    <div
      className="grid min-h-full"
      style={{
        gridTemplateColumns: '100%',
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <header
        className={`z-50 bg-wave ${
          currentPath === ROUTES.HOME ? '' : 'shadow'
        }`}
      >
        <div
          className={`relative pt-1 ${
            currentPath === ROUTES.HOME ? 'h-48 lg:h-80' : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/">
                  <a className="flex-shrink-0 flex flex-col items-center relative">
                    <h1 className="py-1 px-2 text-3xl font-bold tracking-tighter leading-tight m-auto transition-transform duration-500 transform hover:-skew-x-12 hover:bg-red-500 hover:text-white">
                      Paul Chong
                    </h1>
                  </a>
                </Link>

                <nav className="hidden lg:ml-12 lg:flex lg:space-x-8">
                  <Link href={ROUTES.EXPERIENCE}>
                    <a
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        currentPath === ROUTES.EXPERIENCE
                          ? 'border-heading '
                          : 'border-transparent text-gray-900 hover:text-blue-500'
                      }`}
                    >
                      Experience
                    </a>
                  </Link>

                  <Link href={ROUTES.BLOG}>
                    <a
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        currentPath === ROUTES.BLOG
                          ? 'border-heading '
                          : 'border-transparent text-gray-900 hover:text-blue-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      }`}
                    >
                      Blog
                    </a>
                  </Link>
                </nav>
              </div>
              <div className="flex items-center lg:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  onClick={() => {
                    preventHtmlScroll();
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                  type="button"
                  className="inline-flex items-center align-end justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`h-6 w-6 ${
                      isMobileMenuOpen ? 'hidden' : 'block'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`h-6 w-6 ${
                      isMobileMenuOpen ? 'block' : 'hidden'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                {/* darkmode */}
              </div>
            </div>
          </div>

          <Transition
            show={isMobileMenuOpen}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="lg:hidden fixed inset-0 z-50 bg-white top-16"
          >
            <div className="pt-2 pb-3 px-2 sm:px-4 lg:px-8 space-y-1">
              <Link href={ROUTES.EXPERIENCE}>
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    currentPath === ROUTES.EXPERIENCE
                      ? 'bg-indigo-50 border-indigo-700 text-indigo-700'
                      : 'border-transparent text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-500'
                  }`}
                >
                  Experience
                </a>
              </Link>

              <Link href={ROUTES.BLOG}>
                <a
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    currentPath === ROUTES.BLOG
                      ? 'bg-indigo-50 border-indigo-700 text-indigo-700'
                      : 'border-transparent text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-500'
                  }`}
                >
                  Blog
                </a>
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">{/* darkmode */}</div>
            </div>
          </Transition>

          {currentPath === ROUTES.HOME && (
            <>
              <span
                className={`hover:cursor-pointer pointer-events-none absolute text-4xl top-2/3 md:top-2/4 right-1/4 z-10`}
              >
                &#127940;
              </span>

              <svg
                viewBox="0 100 1440 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0"
              >
                <defs>
                  <linearGradient id="gradient">
                    <stop offset="5%" stopColor="#c9eaf5"></stop>
                    <stop offset="95%" stopColor="#9ddaed"></stop>
                  </linearGradient>
                </defs>
                <path
                  stroke="none"
                  strokeWidth="0"
                  fill="url(#gradient)"
                  d="M 0,400 C 0,400 0,133 0,133 C 99.35714285714286,141 198.71428571428572,149 312,159 C 425.2857142857143,169 552.5000000000001,181 679,167 C 805.4999999999999,153 931.2857142857142,113 1058,103 C 1184.7142857142858,93 1312.357142857143,113 1440,133 C 1440,133 1440,400 1440,400 Z"
                ></path>
                <path
                  d="M 0,400 C 0,400 0,266 0,266 C 125.46428571428572,256.7142857142857 250.92857142857144,247.42857142857144 369,257 C 487.07142857142856,266.57142857142856 597.75,295 726,293 C 854.25,291 1000.0714285714287,258.57142857142856 1122,249 C 1243.9285714285713,239.42857142857142 1341.9642857142858,252.71428571428572 1440,266 C 1440,266 1440,400 1440,400 Z"
                  stroke="none"
                  strokeWidth="0"
                  fill="#ffffff"
                ></path>
              </svg>
            </>
          )}
        </div>
      </header>
      <main className="flex-1 relative focus:outline-none mb-32" tabIndex={0}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
