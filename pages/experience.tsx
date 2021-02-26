import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Experience from '../components/Experience/Experience';

export default function ExperiencePage() {
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
        <Experience />
      </Layout>
    </>
  );
}
