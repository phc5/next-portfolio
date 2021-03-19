import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="max-w-3xl mx-auto px-2 mt-32 sm:px-4 lg:px-8">
      <h2 className="text-6xl font-bold tracking-tighter leading-tight mb-4 text-center">
        404 - Page Not Found
      </h2>
      <br />
      <p className="text-3xl font-bold tracking-tighter leading-tight mb-12 text-center">
        Go back{' '}
        <Link href="/" passHref>
          <span>
            <a className="cursor-pointer hover:underline hover:text-blue-500">
              Home
            </a>
          </span>
        </Link>
        .
      </p>
    </div>
  );
}
