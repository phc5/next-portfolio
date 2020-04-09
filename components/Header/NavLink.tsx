import Link from 'next/link';

const NavLink = ({ href, title }) => (
  <Link href={href}>
    <a className="mr-6 cursor-pointer no-underline">{title}</a>
  </Link>
);

const ExternalLink = ({ href, title, ...props }) => {
  return (
    <a className="mr-6 cursor-pointer no-underline" href={href} {...props}>
      {title}
    </a>
  );
};

export { NavLink, ExternalLink };
