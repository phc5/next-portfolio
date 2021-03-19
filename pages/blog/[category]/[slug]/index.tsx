import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Post from '../../../../components/Post/Post';
import PostTitle from '../../../../components/Post/post-title';
import { getPost, getPostSlugs, getBlogCategories } from '../../../../lib/api';
import markdownToHtml from '../../../../lib/markdownToHtml';

export default function SnippetsPostPage({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return router.isFallback ? (
    <PostTitle>Loading…</PostTitle>
  ) : (
    <Post post={post} />
  );
}

export async function getStaticProps({ params: { slug, category } }) {
  const post = getPost(slug, `_posts/${category}`, [
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
  const directories = getBlogCategories();
  const paths = getPostSlugs(directories);
  return {
    paths: paths.map(({ slug, category }) => {
      return {
        params: {
          slug,
          category,
        },
      };
    }),
    fallback: false,
  };
}
