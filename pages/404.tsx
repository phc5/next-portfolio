import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout>
      <div className="text-center">
        <p>404 - Page Not Found</p>
        <br />
        <span>
          Go back{' '}
          <Link href="/" passHref>
            <span>
              <a className="cursor-pointer underline">Home</a>
            </span>
          </Link>
          .
        </span>
      </div>
    </Layout>
  );
}
