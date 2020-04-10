import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Layout from '../../../../components/Layout';
import Container from '../../../../components/Post/container';
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
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | Paul Chong's Blog</title>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug, '_posts/gaming', [
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
  const paths = getPostSlugs('gaming');
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
