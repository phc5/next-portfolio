import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getPostsFromDirectory } from '../../../lib/api';

export default function BlogTechnologyPage({ arrayOfPosts }) {
  const posts = arrayOfPosts.map((post) => (
    <div key={post.title} className="mb-6 pt-6">
      <p className="italic">{post.date}</p>

      <Link href={post.path}>
        <a className="text-lg underline md:text-xl lg:text-2xl cursor-pointer">
          {post.title}
        </a>
      </Link>

      <p>{post.snippet}</p>
    </div>
  ));

  return (
    <Layout>
      <div className="mb-32">
        <Head>
          <title>Technology Blog | Paul Chong's Blog</title>
        </Head>

        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:max-w-7xl  px-2 sm:px-4 lg:px-8">
          <div className="m-auto max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-7xl">
              Technology
            </h1>
            {posts}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const arrayOfPosts = getPostsFromDirectory('technology');

  return {
    props: {
      arrayOfPosts,
    },
  };
}
