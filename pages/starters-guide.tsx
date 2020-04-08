import React from 'react';
// import styled from 'styled-components';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';
import Layout from '../components/Layout';

function StartersGuide({ content, data }) {
  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
      </div>

      <ReactMarkdown source={content} escapeHtml={false} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const markdown = await require('../content/starters-guide.md');
  const { content, data } = matter(markdown.default);

  return { props: { content, data } };
};

export default StartersGuide;
