import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import startCase from 'lodash.startcase';
import Layout from '../../components/Layout';
import { getMapOfFiles, getDirectories } from '../../lib/api';
import styles from '../../styles/blog-page.module.scss';

export default function BlogPage({ directories, mapOfFiles }) {
  const allPosts = directories.map((directory) => {
    const posts = mapOfFiles[directory].map((post) => (
      <Link href={`/blog/${directory}/[slug]`} as={post.path}>
        <article
          key={post.title}
          className={`px-8 py-6 lg:col-span-1 flex flex-col rounded-sm shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-500 blog-page-item ${styles['blog-page-item']}`}
        >
          <a className="text-lg md:text-xl lg:text-2xl font-bold mb-4 tracking-tighter transition-colors duration-500">
            {post.title}
          </a>

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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </p>
        </article>
      </Link>
    ));
    return posts.length > 0 ? (
      <div key={directory} className="mt-16">
        <Link href={`/blog/${directory.toLowerCase()}`}>
          <a className="text-xl md:text-2xl font-semibold text-heading hover:underline">
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
    <Layout>
      <div>
        <Head>
          <title>Blog | Paul Chong's Blog</title>
        </Head>

        <div className="max-w-7xl mx-auto mt-12 px-2 sm:px-4 lg:px-8">
          {allPosts}
        </div>
      </div>
    </Layout>
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
