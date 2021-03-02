import { useState } from 'react';
import Tippy from '@tippyjs/react';

export default function About() {
  const [isKoraVisible, setIsKoraVisible] = useState(false);
  const show = () => setIsKoraVisible(true);
  const hide = () => setIsKoraVisible(false);

  return (
    <>
      <div className="space-y-6 lg:col-start-1 lg:col-span-2">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-lg md:text-xl font-semibold text-heading">
              About
            </dt>
            <dd className="mt-1 text-base md:text-lg text-gray-900">
              I am a software engineer with 4 years of experience in UI
              engineering building clean and performant user interfaces and
              applications. I have experience developing projects from
              small-scale static websites to large-scale, enterprise-level
              applications that have served millions of users and have achieved
              success in both team-oriented and independent environments.
              <br />
              <br />I currently work as a Front End Engineer at Amazon Web
              Services where I am building experiences and resources that help
              startups of all sizes accelerate their growth and scale their
              business on AWS and beyond.
            </dd>
          </div>
        </dl>
      </div>
      <div className="space-y-6 lg:col-start-3 lg:col-span-1">
        <div className="sm:col-span-2">
          <dt className="text-lg md:text-xl font-semibold text-heading">
            Tech
          </dt>
          <dd className="mt-1 text-base md:text-lg text-gray-900">
            JavaScript, React, AWS, Next.js, GraphQL, CSS, TypeScript
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-lg md:text-xl font-semibold text-heading">
            Things I Like
          </dt>
          <dd className="mt-1 text-base md:text-lg text-gray-900">
            Golf, surfing,{' '}
            <Tippy
              visible={isKoraVisible}
              onClickOutside={hide}
              content={
                <img width="300" height="300" src="/kora.jpg" alt="My dog" />
              }
            >
              <span
                onClick={isKoraVisible ? hide : show}
                className="hover:border-b-2 hover:border-dotted hover:border-gray-600 cursor-pointer"
              >
                my dog
              </span>
            </Tippy>
            , video games, watching cooking and baking shows, electric vehicles
          </dd>
        </div>
      </div>
    </>
  );
}
