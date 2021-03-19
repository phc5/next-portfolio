import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import startCase from 'lodash.startcase';
import { getMapOfFiles, getDirectories } from '../../lib/api';
import styles from '../../styles/blog-page.module.scss';

export default function BlogPage({ directories, mapOfFiles }) {
  const allPosts = directories.map((directory, index) => {
    const posts = mapOfFiles[directory].map((post) => (
      <Link href={`/blog/${directory}/[slug]`} as={post.path}>
        <article
          key={post.title}
          className={`px-8 py-6 lg:col-span-1 flex flex-col bg-gray rounded-sm shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-500 blog-page-item ${styles['blog-page-item']}`}
        >
          <a className="text-lg md:text-xl lg:text-2xl font-bold mb-4 tracking-tighter transition-colors duration-500">
            {post.title}
          </a>

          <p className="mb-4 tracking-wide text-sm md:text-base">
            {post.snippet}
          </p>
        </article>
      </Link>
    ));
    return posts.length > 0 ? (
      <div key={directory} className={index > 0 ? 'mt-28' : ''}>
        <Link href={`/blog/${directory.toLowerCase()}`}>
          <a className="text-xl md:text-2xl font-semibold text-teal hover:underline">
            {startCase(directory.replace('-', ' '))}
          </a>
        </Link>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mt-5">
          {posts}
        </div>
      </div>
    ) : null;
  });

  return (
    <div>
      <Head>
        <title>Blog | Paul Chong's Blog</title>
      </Head>

      <div className="max-w-7xl mx-auto mt-12 px-2 sm:px-4 lg:px-8">
        <nav className="mb-10">
          <Link href="/">
            <a className="flex">
              <svg
                className="self-center mr-1 h-6 w-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <p className="tracking-tighter">Home</p>
            </a>
          </Link>
        </nav>
        {allPosts}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const directories = getDirectories();
  const mapOfFiles = getMapOfFiles();

  return {
    props: {
      directories,
      mapOfFiles,
    },
  };
}
