import React from 'react';
import Link from 'next/link';

import styles from '../../../styles/blog-page.module.scss';

export default function Blog({ posts }) {
  return (
    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
      <section className="py-4 sm:py-6">
        <h2 className="text-xl md:text-2xl font-semibold text-heading">Blog</h2>

        <ul className="space-y-16 mt-1">
          {posts.map((post) => {
            return (
              <li key={post.path}>
                <article
                  key={post.title}
                  className={`px-8 py-6 lg:col-span-1 flex flex-col rounded-sm shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-500 blog-page-item ${styles['blog-page-item']}`}
                >
                  <Link href={post.path}>
                    <a className="text-lg md:text-xl lg:text-2xl font-bold mb-4 tracking-tighter transition-colors duration-500">
                      {post.title}
                    </a>
                  </Link>

                  <p className="mb-4 tracking-wide text-sm md:text-base">
                    {post.snippet}
                  </p>

                  <p className="text-xs md:text-sm font-semibold tracking-tighte">
                    Read more{' '}
                    <svg
                      className="inline-block opacity-0 h-3 w-3 transition-opacity duration-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#111827"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
