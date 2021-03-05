import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../../../../components/Layout';
import Post from '../../../../components/Post/Post';
import PostTitle from '../../../../components/Post/post-title';
import { getPost, getPostSlugs } from '../../../../lib/api';
import markdownToHtml from '../../../../lib/markdownToHtml';

export default function TechnologyPostPage({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <Post post={post} />
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
