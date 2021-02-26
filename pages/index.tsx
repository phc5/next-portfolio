import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProfileV2 from '../components/Home/ProfileV2';

export default function Home() {
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
        <ProfileV2 />
      </Layout>
    </>
  );
}
