import React, { useState } from 'react';
import Head from 'next/head';
import useIntersectionObserver from '@react-hook/intersection-observer';
import About from '../components/Home/About';
import Experience from '../components/Home/Experience';
import Blog from '../components/Home/Blog';
import { getAllPosts } from '../lib/api';
import Portfolio from '../components/Home/Portfolio';


export default function Home({ posts }) {
  const [experienceRef, setExperienceRef] = useState();
  const [portfolioRef, setPortfolioRef] = useState();
  const [blogRef, setBlogRef] = useState();
  const { isIntersecting: isExperienceIntersecting } = useIntersectionObserver(
    experienceRef
  );
  const { isIntersecting: isPortfolioIntersecting } = useIntersectionObserver(
    portfolioRef
  );
  const { isIntersecting: isBlogIntersecting } = useIntersectionObserver(
    blogRef
  );

  return (
    <>
      <Head>
        <title>Paul Chong</title>
        <meta
          name="description"
          content="Paul Chong is a software engineer who specializes in front-end and UI development."
        />
      </Head>
      <div className="relative flex flex-col w-screen mx-auto max-w-1300 md:flex-row bg-black">
        <About
          isBlogIntersecting={isBlogIntersecting}
          isExperienceIntersecting={isExperienceIntersecting}
          isPortfolioIntersecting={isPortfolioIntersecting}
        />
        <main className="static py-10 px-8 md:py-32 md:px-16 md:w-534 lg:w-600 md:absolute md:right-0 md:pl-0 md:pr-16 lg:px-0">
          <Experience setExperienceRef={setExperienceRef} />
          <Portfolio setPortfolioRef={setPortfolioRef} />
          <Blog posts={posts} setBlogRef={setBlogRef} />
        </main>
      </div>
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
