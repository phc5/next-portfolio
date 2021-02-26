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
      <StyledPostDiv key={post.title}>
        <StyledPostDate>{post.date}</StyledPostDate>

        <Link href={`/blog/${directory}/[slug]`} as={post.path}>
          <StyledPostLink>{post.title}</StyledPostLink>
        </Link>

        <p>{post.snippet}</p>
      </StyledPostDiv>
    ));
    return (
      <StyledBlogTypeContainer key={directory}>
        <Link href={`/blog/${directory.toLowerCase()}`}>
          <StyledBlogTypeLink>
            {directory.charAt(0).toUpperCase() + directory.slice(1)}
          </StyledBlogTypeLink>
        </Link>
        {posts}
      </StyledBlogTypeContainer>
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

const StyledBlogTypeContainer = styled.div`
  margin-bottom: ${spacing['10']};
`;

const StyledBlogTypeLink = styled.a`
  font-size: ${fontSize['3xl']};
  text-decoration: underline;

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['4xl']};
  }

  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['5xl']};
  }

  :hover {
    color: ${colors.linkHover};
    cursor: pointer;
  }
`;

const StyledPostDiv = styled.div`
  margin-bottom: ${spacing['6']};
  padding-top: ${spacing['6']};
`;

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
