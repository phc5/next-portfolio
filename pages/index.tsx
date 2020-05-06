import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Profile from '../components/Home/Profile';
import Experience from '../components/Home/Experience';

export default () => (
  <>
    <Head>
      <title>Paul Chong</title>
      <meta
        name="description"
        content="Paul Chong is a software engineer who specializes in front-end and UI development."
      />
    </Head>
    <Layout>
      <Profile />
      <Experience />
    </Layout>
  </>
);
