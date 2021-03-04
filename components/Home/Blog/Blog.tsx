import React from 'react';
import Link from 'next/link';

import styles from './blog.module.scss';

export default function Blog({ posts }) {
  return (
    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
      <section className="py-4 sm:py-6">
        <h2 className="text-xl md:text-2xl font-semibold text-heading">Blog</h2>

        <ul className="space-y-16 mt-1">
          {posts.map((post) => {
            return (
              <li key={post.path}>
                <article>
                  <Link href={post.path}>
                    <a className={`space-y-4 ${styles.blogpost}`}>
                      <h2 className="text-xl font-bold">{post.title}</h2>
                      <p className="text-lg">{post.snippet}</p>
                      <p className="text-base font-semibold">Read more</p>
                    </a>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
