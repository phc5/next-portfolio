import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Container from '../../components/Post/container';
import BlogBody from '../../components/Blog/blog-body';
import BlogHeader from '../../components/Blog/blog-header';
import WarningNotification from '../../components/Notifications/WarningNotification';
import { getMapOfFiles, getDirectories } from '../../lib/api';
import { spacing, fontSize, colors, screens } from '../../styles/theme';

export default ({ directories, mapOfFiles }) => {
  const [isNotificationDismissed, setIsNotificationDismissed] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setIsNotificationDismissed(
        window?.localStorage?.getItem('blogWarningMessageDismissed') === 'true'
      );
    }
  }, []);

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
      <Container>
        <div className="fixed bottom-0 right-0 m-4">
          <WarningNotification
            title="Under Construction"
            message="My blog section is currently being redesigned! Sorry for the inconvenience, I will try to get this updated ASAP!"
            stateUpdater={setIsNotificationDismissed}
            stateValue={isNotificationDismissed}
          />
        </div>

        <div>
          <Head>
            <title>Blog | Paul Chong's Blog</title>
          </Head>

          <BlogBody>
            <BlogHeader title="Blog" />
            {allPosts}
          </BlogBody>
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

const StyledPostDate = styled.p`
  font-style: italic;
`;

const StyledPostLink = styled.a`
  font-size: ${fontSize.lg};
  text-decoration: underline;

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize.xl};
  }

  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['2xl']};
  }

  :hover {
    color: ${colors.linkHover};
    cursor: pointer;
  }
`;
