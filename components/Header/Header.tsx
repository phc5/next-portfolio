import { NavLink, ExternalLink } from './NavLink';

const Header = () => (
  <div className="font-light my-8 text-right">
    <NavLink href="/" title="Home" />
    <NavLink href="/blog" title="Blog" />
    <ExternalLink
      href="https://www.github.com/phc5"
      title="Github"
      target="_blank"
      nofollow="true"
      noreferrer="true"
    />
  </div>
);

export default Header;
