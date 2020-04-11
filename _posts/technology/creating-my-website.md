---
title: 'Creating My Website'
date: '2020-04-09'
snippet: 'This is my first blog post on my personal website! I am starting this blog so that I can build my online presence as well as keep learnings on record and reference them in the future.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
---

This is my first blog post on my personal website! I am starting this blog so that I can build my online presence as well as keep learnings on record and reference them in the future.

## Building This Website

I have been using React for about three years now and built my previous website using it. Here's a screenshot of it:

![alt text](/old-website.png 'Paul Chong's Old Website Screenshot')

A very basic looking website with not much going on. It was built using [Gatsby.js](https://www.gatsbyjs.org/) while the one you're on right now is built using [Next.js](https://nextjs.org/). Using Next to build out this website has been a joy and I loved how easy it was to deploy. I will be talking more about Next below.

To style the website, I initally used [styled-components](https://styled-components.com/) but opted to use [TailWind CSS](https://tailwindcss.com/). This was my first time using Tailwind CSS and when I began removing styled-components and adding Tailwind CSS, it felt like a huge mistake since I wasn't used to the utility-first way of building out components. But after trying it out, I have to say I'm a huge fan of it. The utility-first nature of this CSS framework gave me all of the building blocks I needed to standardize my CSS and build out my design without any opinionated styles from the framework itself.

### What's Next All About?

Next, as of 9.3, has static site generation and static exporting. They aren't only a server-side rendering framework now: you can utilize both static site generation (SSG) and server-side rendering (SSR)! You can also pick the method of rendering on a per-route basis. This is a big plus as it gives you flexibility and empowers you to choose how you want to render your application.

For example, on a website like Reddit where we have dynamic data such as posts and comments, you can use server-side rendering for a boost in SEO. But for a part of the site like the Help Page, you can statically generate that and don't have to worry about switching frameworks.

As of Next 9.3 there are two new ways to fetch data: `getStaticProps` and `getServerSideProps`. And a way to statically generate static pages for dynamic routes: `getStaticPaths`.

- `getStaticProps` (SSG): Fetch data at build-time.
- `getStaticPaths` (SSG): Specify dynamic routes to prerender based on data.
- `getServerSideProps` (SSR): Fetch data on each request.
- `getInitialProps` (SSR): Enables server-side rendering in a page and allows you to do initial data population.

It is recommended that you use getStaticProps or getServerSideProps instead of getInitialProps. These new data fetching methods allow you to have a granular choice between static generation and server-side rendering.

I'll be delving deeper into these methods in my next (<i>pun intended</i>) blog post. 😏

### Gatsby vs Next

I found Next to be much easier to get up and running than Gatsby. Also the Next tutorial and documentation seemed to be easier to follow than Gatsby's tutorial and documentation. Granted I haven't looked at the Gatsby tutorial and documentation since I built my previous site a year ago so take that with a grain of salt. But getting up and running with Next was a breeze and even deploying it to their service Now was seamless.

Gatsby does have a learning curve in the sense that it uses GraphQL to query for data. So if you haven't learned GraphQL, you would need to learn that on top of learning Gatsby's quirks and features (<i>shout out to Doug DeMuro</i>).

Next is definitely not a Gatsby killer. One of the great things about Gatsby is the community around it and the numerous plugins available for developers to use. These plugins make developing on Gatsby easy so you can focus on layout and styling while Gatsby handles data fetching and various other processes for you.

If you are building out a statically generated site that is smaller in scale, you should give Gatsby a go. After all, Gatsby is primarily focused on SSG and has plugins you can use to make development faster.

But if you have a large amount of content or expect to have a lot of content in the future, then I believe Next would be the better option. For example, if you do have a lot of content say thousands of blog posts or item pages for an e-commerce site, building those pages with Gatsby could take a very long time since each deployment would need a new build. And if you needed to push a bug fix but had to wait a while to build and deploy, you would not be having a fun time. However, it looks like Gatsby is looking into improving these build times: [Gatsby Page Build Optimizations For Incremental Data Changes](https://www.gatsbyjs.org/docs/page-build-optimizations-for-incremental-data-changes/).

There are no losers here: both frameworks are awesome! And both frameworks empower you, the developer, to create awesome experiences! These two frameworks are changing the development experience for developers and it really is up to you as the developer to choose which framework best suits your needs.

So I invite you to try them both!

[Gatsby](https:/www.gatsbyjs.org/)

[Next](https:/www.nextjs.org/)
