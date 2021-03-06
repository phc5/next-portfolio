import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProfileV2 from '../components/Home/ProfileV2';
import { getAllPosts } from '../lib/api';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Paul Chong</title>
        <meta
          name="description"
          content="Paul Chong is a software engineer who specializes in front-end and UI development."
        />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 gap-12 lg:grid-flow-col-dense lg:grid-cols-3 px-2 sm:px-4 lg:px-8">
          <ProfileV2 posts={posts} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
