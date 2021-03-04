import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getPostsFromDirectory } from '../../../lib/api';
import styles from '../../../styles/blog-page.module.scss';

export default function BlogSnippetsPage({ arrayOfPosts }) {
  const posts = arrayOfPosts.map((post) => (
    <article
      key={post.title}
      className={`px-8 py-6 lg:col-span-1 flex flex-col rounded-sm shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-500 blog-page-item ${styles['blog-page-item']}`}
    >
      <Link href={post.path}>
        <a className="text-lg md:text-xl lg:text-2xl font-bold mb-4 tracking-tighter transition-colors duration-500">
          {post.title}
        </a>
      </Link>

      <p className="mb-4 tracking-wide text-sm md:text-base">{post.snippet}</p>

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
  ));

  return (
    <Layout>
      <div className="mb-32">
        <Head>
          <title>Snippets Blog | Paul Chong's Blog</title>
        </Head>

        <div className="max-w-7xl mx-auto mt-12 px-2 sm:px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-7xl mb-14">
            Snippets
          </h1>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">{posts}</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const arrayOfPosts = getPostsFromDirectory('snippets');

  return {
    props: {
      arrayOfPosts,
    },
  };
}
