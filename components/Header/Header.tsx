import { NavLink, ExternalLink } from './NavLink';
import ThemeSwitch from '../ThemeSwitch';

const Header = () => (
  <div className="font-light my-8 flex justify-end">
    <NavLink href="/" title="Home" />
    <NavLink href="/blog" title="Blog" />
    <ExternalLink
      href="https://www.github.com/phc5"
      title="Github"
      target="_blank"
      nofollow="true"
      noreferrer="true"
    />
    <ThemeSwitch />
  </div>
);

export default Header;
