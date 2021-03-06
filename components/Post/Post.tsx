import React from 'react';
import Head from 'next/head';
import PostHeader from './post-header';
import PostBody from './post-body';

export default function Post({ post }) {
  return (
    <article>
      <Head>
        <title>{post.title} | Paul Chong's Blog</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@paulhyunchong" />
        <meta name="twitter:creator" content="@paulhyunchong" />
        <meta
          name="twitter:title"
          content={`${post.title} | Paul Chong's Blog`}
        />
        <meta name="twitter:description" content={post.description} />

        <meta
          property="og:url"
          content={`https://www.paulhyunchong.com{router.pathname}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${post.title} | Paul Chong's Blog`}
        />
        <meta property="og:description" content={post.description} />

        <meta name="description" content={post.description}></meta>
      </Head>
      <div className="mx-auto mt-12 grid grid-cols-1 max-w-4xl px-2 sm:px-4 lg:px-8">
        <PostHeader
          title={post.title}
          date={post.date}
          author={post.author}
          slug={post.slug}
        />
        <PostBody content={post.content} />
      </div>
    </article>
  );
}
