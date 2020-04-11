import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import Container from '../../../components/Post/container';
import BlogBody from '../../../components/Blog/blog-body';
import BlogHeader from '../../../components/Blog/blog-header';
import { getPostsFromDirectory } from '../../../lib/api';

export default ({ arrayOfPosts }) => {
  const posts = arrayOfPosts.map((post) => (
    <div key={post.title} className="mb-6 pt-6">
      <p className="italic">{post.date}</p>

      <Link href={post.path}>
        <a className="underline hover:cursor-pointer hover:text-purple-600 text-lg md:text-xl lg:text-2xl">
          {post.title}
        </a>
      </Link>

      <p>{post.snippet}</p>
    </div>
  ));

  return (
    <Layout>
      <Container>
        <div className="mb-32">
          <Head>
            <title>Technology Blog | Paul Chong's Blog</title>
          </Head>
          <BlogHeader title="Technology" />
          <BlogBody>{posts}</BlogBody>
        </div>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const arrayOfPosts = getPostsFromDirectory('technology');

  return {
    props: {
      arrayOfPosts,
    },
  };
}
