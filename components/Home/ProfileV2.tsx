import About from './About/About';
import Blog from './Blog/Blog';

export default function ProfileV2({ posts }) {
  return (
    <>
      <About />
      <Blog posts={posts} />
    </>
  );
}
