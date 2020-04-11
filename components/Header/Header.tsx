import { NavLink, ExternalLink } from './NavLink';

const Header = ({ isLight, setIsLight }) => (
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
    <button
      className=""
      aria-label={
        isLight === 'theme-light' ? 'Dark Theme Button' : 'Light Theme Button'
      }
      onClick={() => {
        setIsLight((isLight) => {
          isLight = isLight === 'theme-light' ? 'theme-dark' : 'theme-light';
          localStorage.setItem('theme', isLight);
          return isLight;
        });
      }}
    >
      {isLight === 'theme-light' ? '🕶️' : '💡'}
    </button>
  </div>
);

export default Header;
