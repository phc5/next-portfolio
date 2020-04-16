---
title: 'Using Next.js to Improve Performance'
date: '2020-04-12'
snippet: 'I will be talking about the performance improvements made to the California Christ Community Church website by using Next.js and its server-side rendering and static-site generation capabilities.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
---

I will be talking about the performance improvements made to the California Christ Community Church website by using Next.js and its server-side rendering and static-site generation capabilities.

## Redesigning the Website

I have been serving as a webmaster for [c4ministry.com](https://www.c4ministry.com/) for about a year now and had plans to redesign the website using React. The previous site was made using HTML, Bootstrap, vanilla JS, and jQuery and it got the job done. We had numerous features on the website such as a contact form, integration with Mixcloud to listen to sermons, integration with Google Calendar, and integrations with various blogging sites.

At my day job ([KBB.com](https://www.kbb.com)), we have been putting more focus and effort into monitoring and improving the performance of our pages and use Lighthouse as a quick way to analyze our performance. This initiative at work sparked an interest to take a look at c4ministry.com's performance metrics (Lighthouse 5.7.0):

![Previous c4ministry.com lighthouse metrics](/blog/oldC4Lighthouse.png 'Previous c4ministry.com lighthouse metrics')

As you can see there were some improvements that could be made. (<i>Skip to the end to see the improved metrics.</i>)

Before going straight into development, I did some research and came across Next.js. I had heard about Next and Gatsby and found that for static-site generation these two frameworks were top-tier. Since I had used Gatsby on my old portfolio website, I decided to give Next.js a try.

## Lucky to Start Now

Prior to Next 9, developers had to choose between a server-side rendered or statically generated application. There was no real middle ground. For example, if I had a website like Google Analytics where the landing page is static but the dashboards inside are dynamic, Next would not be the right tool to use.

With Next 9, Next introduced `Automatic Static Optimization`, which gave developers the option to statically render the page by pre-rendering the page to static HTML or via server-side on a per-request basis. Next.js can automatically determine that a page is static if it has no blocking data requirements: the absence of `getInitialProps` on your pages.

### How Does `getInitialProps` work? (Next 9)

If `getInitialProps` is present on your page, Next will render the page on-demand, per-request via server-side rendering.

If `getIntialProps` is absent on your page, Next will statically optimize your page automatically by pre-rendering the page to static HTML during <b>build</b> time.

<i>Note: When you run a production build, Next outputs information about whether your page is SSG or SSR.</i>

### No Need For `getInitialProps` Anymore (Next 9.3+)

Literally a month before I started working on the website redesign, [Next.js 9.3](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support) was released.

You can take a look at the release manifest but the most important part of the release for me was this: Next-gen Static Site Generation (SSG) Support.

With this new next-gen SSG support, Next includes two new built-in data fetching methods: `getStaticProps` and `getServerSideProps` and recommends not using `getIntialProps` anymore. These two new data fetching methods allow you to have a granular choice between static generation and server-side rendering.

`getStaticProps` (Static Generation): Fetch data at build time.

Use Cases:

- The data required to render the page is available at build time ahead of a user’s request.

- The page must be pre-rendered (for SEO) and be very fast. Next generates HTML and JSON files, both of which can be cached by a CDN for performance. Your markup will be in the HTML file and will be hydrated with the data from the JSON file so that you don't have to make a network request to an external API on page load.

`getServerSideProps` (Server-side Rendering): Fetch data on each request.

Use Cases:

- If you need to pre-render a page whose data must be fetched at request time.

In addition to these two methods, if your page contains frequently updating data, and you don’t need to pre-render the data, you can fetch the data on the client side. Next provides a React hook for data fetching called [SWR](https://github.com/zeit/swr), which handles things like caching, revalidation, focus tracking, re-fetching on interval, and many more features.

Now developers can use one framework to include both server-side rendered pages and statically generated pages on a per-route basis!

Here is an example of the output of a build done on the c4ministry website that show you how the pages are rendered:

![C4 Next build output](/blog/C4BuildOutput.png 'C4 Next build output')

As you can see from the screenshot above, pages on the c4ministry website are either static or SSG. But as requests for new features come up, possibly an admin dashboard or member's dashboard, I can utilize Next's `getServerSideProps` or client-side data fetching to fulfill those requirements.

Having this granular level of control allows developers to "future-proof" their applications. If future requirements change and I need to fetch data on each request and server-side render my content, I now have that option available and don't have to redo my architecture.

## Built-in Performance

Out of the box, Next.js provides a number of common optimization techniques such as server-side rendering, automatic code-splitting, route prefetching, and file-system routing.

### Server-side Rendering

When you take a look at the initial load of this website (built in Next.js), you can see that it is server-side rendered. This means that on the initial request, the server will send back a fully rendered page and then has React take over. Your browser will start rendering the HTML from the server without waiting for all the JS to be downloaded and executed which means blazingly fast load times!

There are a few consideration to consider with SSR:

- Time To First Byte is slower than client side rendering because in SSR your server is building out the HTML page.
- Server will be busier since it is building out HTML pages and making external API calls (if implemented), which means fewer request per second.
- Initial payload will be bigger since you're sending more HTML.
- Page will be viewable quicker but user has to wait until React is downloaded, parsed, and executed before interacting with the page.

### Automatic code-splitting

By default, Next.js splits your JavaScript into separate chunks for each route and every import is only fetched when that page is loaded. To keep bundles and payloads smaller, Next only sends users the chunks needed for that route. And as users navigate throughout your application, they are sent the remaining chunks that correspond to those routes. Code-splitting is great because you aren't sending users code that is not needed for the current page, which results in smaller payloads and faster load times.

At the minimum, your routes are code split. But inside your pages, you can also dynamically import components. Say you have a modal or component behind a tab. Instead of loading those components that are not immediately viewable or need a user's action on page load, you can dynamically load them using a dynamic `import()` which Next.js provides. This technique will allow you to lazy load your components and also loads your components in separate chunks.

- <i>Source: [web.dev on Next.js Code Splitting](https://web.dev/code-splitting-with-dynamic-imports-in-nextjs/)</i>

### Built-in Router and Route prefetching

Another awesome thing about Next.js is its built in Router. Next.js uses file-system-based routing so all you have to do is create files inside the `./pages/` directory. When you want to link to an internal route, Next exposes a `<Link />` component via `next/link` that takes in a `href` prop and a bunch of other props that help you with routing. One quirk about Next `<Link />`s are that they are prefetched by default.

What is prefetching? After your browser is done loading a page, it goes into idle time where it's not doing much. During this idle time, if you designate your links to prefetch, the browser will silently prefetch the specified documents and store them in its cache. When the user clicks a prefetched link, the page can be served up quickly from the browser's cache.

To use prefetching on `<a>`s, all you need to do is add the attribute `rel="prefetch"`! With Next `<Link>`s, you don't have to add the attribute `rel="prefetch"` it is on by default. If the link is not frequently visited or you don't want to prefetch, you can turn prefetch off by passing `<Link prefetch={false} />`.

Some other quirks about the `<Link />` component.

- It will only prefetch links that are in the user's viewport. In my opinion this is a good thing because if you have a bunch of footer links at the bottom of the page, but the user never gets to the footer, there is no need to prefetch those links!
- Next will disable prefetching when the network connection is slow.
- <i>Source: [web.dev on Next.js Route Prefetching](https://web.dev/route-prefetching-in-nextjs/)</i>

## Porting The Site to Next Boosted Performance

Next has already been optimized to automatically code split files, reduce bundle size, and many other techniques that helped me improve the performance of the site. Since this website is mostly static content, I didn't have to do much at all!

![C4 Next Lighthouse Results](/blog/newC4Lighthouse.png 'C4 Next Lighthouse Results')

The performance improvements made:

- First Meaningful Paint from 3.2s to 2.2s
- Speed Index from 8.9s to 2.1s
- First CPU Idle from 5.1s to 2.8s
- Time to Interactive from 6.5s to 2.9s.
- Performance: 55 to 96
- Best Practices: 72 to 100
- Accessibility: 79 to 100
- SEO: 67 to 100

## Final Thoughts

I've thoroughly enjoyed using Next.js because of how easy it was to optimize for performance. I also deployed the website to Now, which has instant static deploys when I push to master, 23 CDN edges, 99.99% guaranteed uptime, domain configuration, and many more tools that make it easy for front end developers like myself to not worry about dev ops related work.

If you are thinking about making a website in the future, you should consider Next.js as your framework of choice!

Check them out here: [Next.js](https://www.nextjs.org/)
