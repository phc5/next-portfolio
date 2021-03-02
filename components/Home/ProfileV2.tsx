import Link from 'next/link';
import About from './About/About';

export default function ProfileV2({ arrayOfPosts }) {
  return (
    <>
      <About />
      <div className="space-y-6 lg:col-start-1 lg:col-span-2">
        <section className="py-4 sm:py-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-4">
            <div className="sm:col-span-2">
              <dt className="text-lg md:text-xl font-semibold text-heading">
                Blog
              </dt>
            </div>
          </dl>

          <dd className="space-y-16 mt-1">
            {arrayOfPosts.map((post) => {
              return (
                <div key={post.path}>
                  <article>
                    <Link href={post.path}>
                      <a className="space-y-4 blog-post">
                        <h5 className="text-xl font-bold">{post.title}</h5>
                        <p className="text-lg">{post.snippet}</p>
                        <p className="text-base font-semibold">Read more</p>
                      </a>
                    </Link>
                  </article>
                </div>
              );
            })}
          </dd>
        </section>
      </div>
    </>
  );
}
