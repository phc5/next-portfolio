import styled from 'styled-components';
import { NavLink, ExternalLink } from './NavLink';

const Header = () => (
  <StyledHeader>
    <NavLink href="/" title="Home" />
    <ExternalLink
      href="https://www.github.com/phc5"
      title="Github"
      target="_blank"
      nofollow
      noreferrer
    />
  </StyledHeader>
);

const StyledHeader = styled.div`
  font-weight: 300;
  margin-bottom: 24px;
  padding: 16px 0;
  text-align: right;

  a:last-child {
    margin: 0;
  }
`;

export default Header;
