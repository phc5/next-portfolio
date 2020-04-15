import Link from 'next/link';
import styled, { css } from 'styled-components';
import Layout from '../components/Layout';
import { colors } from '../styles/theme';

const textCenter = css({ textAlign: 'center' });

export default function Custom404() {
  return (
    <Layout>
      <div css={textCenter}>
        <p>404 - Page Not Found</p>
        <br />
        <span>
          Go back{' '}
          <Link href="/" passHref>
            <span>
              <StyledLink>Home</StyledLink>
            </span>
          </Link>
          .
        </span>
      </div>
    </Layout>
  );
}

const StyledLink = styled.a`
  :hover {
    cursor: pointer;
    color: ${colors.linkHover};
    text-decoration: underline;
  }
`;
