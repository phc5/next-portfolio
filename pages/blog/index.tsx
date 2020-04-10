import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Container from '../../components/Post/container';
import BlogBody from '../../components/Blog/blog-body';
import BlogHeader from '../../components/Blog/blog-header';
import { getMapOfFiles, getDirectories } from '../../lib/api';

export default ({ directories, mapOfFiles }) => {
  const allPosts = directories.map((directory) => {
    const posts = mapOfFiles[directory].map((post) => (
      <div key={post.title} className="mt-4 mb-8">
        <p className="italic">{post.date}</p>

        <Link href={post.path}>
          <a className="hover:cursor-pointer hover:text-link-hover-custom text-lg md:text-xl lg:text-2xl">
            {post.title}
          </a>
        </Link>

        <p>{post.snippet}</p>
      </div>
    ));
    return (
      <div key={directory}>
        <Link href={`/blog/${directory.toLowerCase()}`}>
          <a className="underline hover:cursor-pointer hover:text-link-hover-custom text-3xl md:text-4xl lg:text-5xl">
            {directory.charAt(0).toUpperCase() + directory.slice(1)}
          </a>
        </Link>
        {posts}
      </div>
    );
  });

  return (
    <Layout>
      <Container>
        <div>
          <Head>
            <title>Blog | Paul Chong's Blog</title>
          </Head>
          <BlogHeader title="Blog" />
          <BlogBody>{allPosts}</BlogBody>
        </div>
      </Container>
    </Layout>
  );
};

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
