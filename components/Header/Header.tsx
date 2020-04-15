import Link from 'next/link';
import styled from 'styled-components';
import { fontWeight, spacing, colors } from '../../styles/theme';

const Header = () => (
  <StyledHeaderContainer>
    <Link href="/">
      <StyledHeaderLink>Home</StyledHeaderLink>
    </Link>
    <Link href="/blog">
      <StyledHeaderLink>Blog</StyledHeaderLink>
    </Link>
    <StyledHeaderLink
      href="https://www.github.com/phc5"
      target="_blank"
      rel="nofollow noreferrer"
    >
      Github
    </StyledHeaderLink>
  </StyledHeaderContainer>
);

export default Header;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: ${fontWeight.light};
  margin: ${spacing['8']} 0;
`;

const StyledHeaderLink = styled.a`
  cursor: pointer;
  text-decoration: none;

  :not(:last-child) {
    margin-right: ${spacing['6']};
  }

  :hover {
    color: ${colors.linkHover};
    text-decoration: underline;
  }
`;
