import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getMapOfFiles, getDirectories } from '../../lib/api';

export default function BlogPage({ directories, mapOfFiles }) {
  const allPosts = directories.map((directory) => {
    const posts = mapOfFiles[directory].map((post) => (
      <article key={post.title} className="py-6">
        <time className="italic block" dateTime={post.date}>
          {post.date}
        </time>

        <Link href={`/blog/${directory}/[slug]`} as={post.path}>
          <a className="text-lg md:text-xl lg:text-2xl hover:underline">
            {post.title}
          </a>
        </Link>

        <p>{post.snippet}</p>
      </article>
    ));
    return (
      <div key={directory} className="my-10">
        <Link href={`/blog/${directory.toLowerCase()}`}>
          <a className="text-3xl text-gray-900 sm:text-4xl hover:underline">
            {directory.charAt(0).toUpperCase() + directory.slice(1)}
          </a>
        </Link>
        {posts}
      </div>
    );
  });

  return (
    <Layout>
      <div>
        <Head>
          <title>Blog | Paul Chong's Blog</title>
        </Head>

        <div className="max-w-4xl mx-auto mt-12 px-2 sm:px-4 lg:px-8">
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
