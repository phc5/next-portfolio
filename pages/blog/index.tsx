import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Container from '../../components/Post/container';
import BlogBody from '../../components/Blog/blog-body';
import BlogHeader from '../../components/Blog/blog-header';
import { getMapOfFiles, getDirectories } from '../../lib/api';
import { spacing, fontSize, colors, screens } from '../../styles/theme';

export default ({ directories, mapOfFiles }) => {
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
