import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../../../components/Layout';
import BlogBody from '../../../components/Blog/blog-body';
import BlogHeader from '../../../components/Blog/blog-header';
import { getPostsFromDirectory } from '../../../lib/api';
import { spacing, fontSize, screens } from '../../../styles/theme';

export default ({ arrayOfPosts }) => {
  const posts = arrayOfPosts.map((post) => (
    <StyledPostContainer key={post.title}>
      <StyledPostDate>{post.date}</StyledPostDate>

      <Link href={post.path}>
        <StyledPostLink>{post.title}</StyledPostLink>
      </Link>

      <p>{post.snippet}</p>
    </StyledPostContainer>
  ));

  return (
    <Layout>
      <StyledBlogWrapper>
        <Head>
          <title>Technology Blog | Paul Chong's Blog</title>
        </Head>

        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:max-w-7xl  px-2 sm:px-4 lg:px-8">
          <BlogBody>
            <BlogHeader title="Technology" />
            {posts}
          </BlogBody>
        </div>
      </StyledBlogWrapper>
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

const StyledBlogWrapper = styled.div`
  margin-bottom: ${spacing['32']};
`;

const StyledPostContainer = styled.div`
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
    cursor: pointer;
  }
`;
