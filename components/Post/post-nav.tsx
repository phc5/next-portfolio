import Link from 'next/link';
import React from 'react';

export default function PostNav() {
  return (
    <nav className="mb-10">
      <Link href="/">
        <a className="flex">
          <svg
            className="self-center mr-1 h-6 w-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <p className="tracking-tighter">Home</p>
        </a>
      </Link>
    </nav>
  );
}
