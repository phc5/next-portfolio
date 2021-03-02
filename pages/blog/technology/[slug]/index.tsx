import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Layout from '../../../../components/Layout';
import PostBody from '../../../../components/Post/post-body';
import PostHeader from '../../../../components/Post/post-header';
import PostTitle from '../../../../components/Post/post-title';
import { getPost, getPostSlugs } from '../../../../lib/api';
import markdownToHtml from '../../../../lib/markdownToHtml';

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | Paul Chong's Blog</title>
            </Head>
            <div className="mx-auto mt-12 grid grid-cols-1 max-w-4xl px-2 sm:px-4 lg:px-8">
              <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </div>
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug, '_posts/technology', [
    'title',
    'date',
    'slug',
    'author',
    'content',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = getPostSlugs('technology');
  return {
    paths: paths.map((slug) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
}
