import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getMapOfFiles, getDirectories } from '../../lib/api';
import styles from '../../styles/blog-page.module.scss';

export default function BlogPage({ directories, mapOfFiles }) {
  const allPosts = directories.map((directory) => {
    const posts = mapOfFiles[directory].map((post) => (
      <article
        key={post.title}
        className={`px-8 py-6 lg:col-span-1 flex flex-col rounded-sm shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-500 blog-page-item ${styles['blog-page-item']}`}
      >
        <Link href={`/blog/${directory}/[slug]`} as={post.path}>
          <a className="text-lg md:text-xl lg:text-2xl font-bold underline mb-4 tracking-tighter transition-colors duration-500">
            {post.title}
          </a>
        </Link>

        <p className="mb-4 tracking-wide text-sm md:text-base">
          {post.snippet}
        </p>

        <p className="text-xs md:text-sm font-semibold tracking-tighter">
          Read more
        </p>
      </article>
    ));
    return (
      <div key={directory} className="my-10 space-y-10">
        <Link href={`/blog/${directory.toLowerCase()}`}>
          <a className="text-3xl md:text-4xl font-semibold text-heading hover:underline">
            {directory.charAt(0).toUpperCase() + directory.slice(1)}
          </a>
        </Link>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">{posts}</div>
      </div>
    );
  });

  return (
    <Layout>
      <div>
        <Head>
          <title>Blog | Paul Chong's Blog</title>
        </Head>

        <div className="max-w-7xl mx-auto mt-12 px-2 sm:px-4 lg:px-8">
          <div className="mb-14">
            <h2 className="text-4xl font-bold sm:text-7xl">Blog</h2>
          </div>

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
