import Link from 'next/Link';
import styled from 'styled-components';

const NavLink = ({ href, title }) => (
  <Link href={href}>
    <StyledLink>{title}</StyledLink>
  </Link>
);

const ExternalLink = ({ href, title, ...props }) => {
  return (
    <StyledLink href={href} {...props}>
      {title}
    </StyledLink>
  );
};

const StyledLink = styled.a`
  color: ${(props) => props.theme.text};
  margin-right: 32px;
  cursor: pointer;
  text-decoration: none;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  :visited {
    color: ${(props) => props.theme.text};
  }
`;

export { NavLink, ExternalLink };
