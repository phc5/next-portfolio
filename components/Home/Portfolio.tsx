import Link from 'next/link';

export default function () {
  return (
    <div className="grid gap-4">
      <h3 className="underline text-lg md:text-xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none text-left">
        Projects
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <a
            className="hover:pointer hover:underline hover:text-purple-400"
            href="https://www.kbb.com"
            rel="nofollow noreferrer"
            title="KBB.com website"
          >
            <h4 className="mb-3 text-base md:text-lg lg:text-xl tracking-tighter leading-tight">
              Kelley Blue Book
            </h4>
          </a>
          <ul className="ml-5 text-xs md:text-sm lg:text-base tracking-tighter leading-tight list-disc">
            <li className="mb-2">
              Built and maintained 5 micro services and web applications, using
              React, Node, GraphQL, .NET, & AWS.
            </li>
            <li className="mb-2">
              Monitored and improved the performance of micro services and web
              applications using tools like webpack, Developer Tools (Lighthouse
              Audit, Performance), New Relic, Splunk, & Cloudwatch and
              techniques such as lazy loading, code-splitting, & image
              optimizations.
            </li>
            <li className="mb-2">
              Stretched backend skills by using .NET to help architect and build
              a scheduled data process that pulled data from multiple internal
              APIs in parallel and aggregated them for consumption by various
              teams.
            </li>
          </ul>
        </div>
        <div>
          <a
            className="hover:pointer hover:underline hover:text-purple-400"
            href="https://www.c4ministry.com"
            rel="nofollow noreferrer"
            title="California Christ Community Church website"
          >
            <h4 className="mb-3 text-base md:text-lg lg:text-xl tracking-tighter leading-tight">
              California Christ Community Church
            </h4>
          </a>
          <ul className="ml-5 text-xs md:text-sm lg:text-base tracking-tighter leading-tight list-disc">
            <li className="mb-2">
              Built and redesigned California Christ Community Church's website
              using Next.js.
            </li>
            <li className="mb-2">
              Improved Lighthouse performance, accessibility, best practices and
              SEO metrics. Read more about it{' '}
              <Link
                href="/blog/technology/[slug]"
                as="/blog/technology/using-nextjs-to-improve-performance"
              >
                <a className="underline hover:cursor-pointer hover:text-purple-600">
                  here!
                </a>
              </Link>
            </li>
            <li className="mb-2">
              Performed webmaster duties including but not limited to
              cross-browser testing, monitoring and analyzing web traffic,
              implementing new functionality, fixing bugs, and addressing user
              contact form.
            </li>
          </ul>
        </div>
        <div>
          <a
            className="hover:pointer hover:underline hover:text-purple-400"
            href="https://www.canterburyconsulting.com/"
            rel="nofollow noreferrer"
            title="Canterbury Consulting Website"
          >
            <h4 className="mb-3 text-base md:text-lg lg:text-xl tracking-tighter leading-tight">
              Canterbury Consulting
            </h4>
          </a>
          <ul className="ml-5 text-xs md:text-sm lg:text-base tracking-tighter leading-tight list-disc">
            <li className="mb-2">
              Built a search page, using .NET, HTML, CSS, and JavaScript, that
              returns users relevant articles, news, videos, and blog posts
              created by Canterbury Consulting writers.
            </li>
            <li className="mb-2">
              Learned and utilized Umbraco CMS to implement new features on
              existing site and fix bugs from previous implementations.
            </li>
            <li className="mb-2">
              Collaborated in a remote environment consisting of product, UX,
              and engineering to plan and build new features.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
