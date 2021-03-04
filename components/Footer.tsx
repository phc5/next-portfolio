import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-wave">
      <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-8 w-full m-8 grid grid-cols-1 gap-12 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2">
        <div className="lg:col-start-1 lg:col-span-1 flex flex-col space-y-2">
          <span className="text-2xl font-semibold ">Paul Chong</span>
          <div>
            <p className="text-xs  text-gray-600">
              made with{' '}
              <span role="img" aria-label="coffee">
                &#9749;
              </span>
              &nbsp; and{' '}
              <span role="img" aria-label="burrito">
                {' '}
                &#127791;
              </span>
            </p>
          </div>
        </div>
        <div className="lg:col-start-2 lg:col-span-1 grid grid-cols-1 gap-4 md:grid-flow-col-dense md:grid-cols-2">
          <div>
            <p className="text-base mb-5 text-gray-500">Navigation</p>
            <div className="flex flex-col text-sm space-y-2">
              <Link href="/experience">
                <a>Experience</a>
              </Link>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-base mb-5 text-gray-500">Social</p>
            <div className="flex flex-col text-sm space-y-2">
              <a
                href="https://www.linkedin.com/in/paulhchong/"
                target="_blank"
                rel="nofollow noreferrer"
                className="cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.github.com/phc5/"
                target="_blank"
                rel="nofollow noreferrer"
                className="cursor-pointer"
              >
                GitHub
              </a>
              <a
                href="mailto:paulhyunchong@gmail.com"
                className="cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
