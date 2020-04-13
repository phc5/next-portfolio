import Link from 'next/link';

const Header = () => (
  <div className="font-light my-8 flex justify-end">
    <Link href="/">
      <a className="mr-6 cursor-pointer no-underline hover:underline hover:text-purple-400">
        Home
      </a>
    </Link>
    <Link href="/blog">
      <a className="mr-6 cursor-pointer no-underline hover:underline hover:text-purple-400">
        Blog
      </a>
    </Link>
    <a
      className="cursor-pointer no-underline hover:underline hover:text-purple-400"
      href="https://www.github.com/phc5"
      target="_blank"
      rel="nofollow noreferrer"
    >
      Github
    </a>
  </div>
);

export default Header;
