import React from 'react';

export default function Header() {
  return (
    <header className="flex flex-col">
      <h1 className="text-7xl font-bold">Hello, I'm Paul Chong.</h1>
      <h2 className="text-2xl mt-6 text-light-gray tracking-tight">
        I build products for the web.
      </h2>
      <p className="mt-6 text-light-gray leading-loose tracking-tight text-sm">
        I am a Front End Engineer at Facebook who is solving problems and
        building experiences that give people the power to build community and
        bring the world closer together. I love working with React.js, Next.js,
        GraphQL, and TailwindCSS.
      </p>
    </header>
  );
}
