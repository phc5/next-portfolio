import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import startCase from 'lodash.startcase';
import { getPostsFromDirectory, getBlogCategories } from '../../../lib/api';
import styles from '../../../styles/blog-page.module.scss';

export default function BlogTechnologyPage({ arrayOfPosts, category }) {
  const posts = arrayOfPosts.map((post) => (
    <Link href={post.path} key={post.title}>
      <article
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

  return (
    <div className="mb-32">
      <Head>
        <title>{category} Blog | Paul Chong's Blog</title>
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
        <h1 className="text-4xl font-bold text-gray-900 sm:text-7xl mb-14">
          {category}
        </h1>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">{posts}</div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const categories = getBlogCategories();
  return {
    paths: categories.map((category) => {
      return {
        params: {
          category,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  const arrayOfPosts = getPostsFromDirectory(category);

  return {
    props: {
      arrayOfPosts,
      category: startCase(category.replace('-', ' ')),
    },
  };
}
