import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Experience from '../components/Experience/Experience';

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Work and Experience | Paul Chong</title>
        <meta
          name="description"
          content="Paul Chong is a software engineer who specializes in front-end and UI development."
        />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto mt-12 px-2 sm:px-4 lg:px-8">
          <Experience />
        </div>
      </Layout>
    </>
  );
}
