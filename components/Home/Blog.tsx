import Link from 'next/link';
import React from 'react';

export default function Blog({ posts, setBlogRef }) {
  return (
    <div id="blog" className="mt-40 pt-8" ref={setBlogRef}>
      {posts.map((post) => (
        <article key={post.title}>
          <Link href={post.path}>
            <a className="flex flex-col text-light-gray bg-gray p-8 mt-2 transition duration-500 transform hover:scale-105 cursor-pointer">
              <span className="flex justify-between">
                <h3 className="text-white">{post.title}</h3>
                <p className="text-xs font-mono">{post.date}</p>
              </span>
              <p className="text-sm mt-4 tracking-tighter leading-relaxed">
                {post.snippet}
              </p>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}
