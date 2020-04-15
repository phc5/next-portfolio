import Link from 'next/link';
import styled from 'styled-components';
import {
  spacing,
  letterSpacing,
  lineHeight,
  screens,
  fontSize,
  fontWeight,
  colors,
} from '../../styles/theme';

export default function () {
  return (
    <StyledPortfolioContainer>
      <StyledH3>Projects</StyledH3>

      <StyledPortfolioDataContainer>
        <div>
          <StyledPortfolioTitle>
            <StyledPortfolioLink
              href="https://www.kbb.com"
              rel="nofollow noreferrer"
              title="KBB.com website"
            >
              Kelley Blue Book
            </StyledPortfolioLink>
          </StyledPortfolioTitle>

          <StyledPortfolioDetailsList>
            <StyledPortfolioDetailsListItem>
              Built and maintained 5 micro services and web applications, using
              React, Node, GraphQL, .NET, & AWS.
            </StyledPortfolioDetailsListItem>
            <StyledPortfolioDetailsListItem>
              Monitored and improved the performance of micro services and web
              applications using tools like webpack, Developer Tools (Lighthouse
              Audit, Performance), New Relic, Splunk, & Cloudwatch and
              techniques such as lazy loading, code-splitting, & image
              optimizations.
            </StyledPortfolioDetailsListItem>
            <StyledPortfolioDetailsListItem>
              Stretched backend skills by using .NET to help architect and build
              a scheduled data process that pulled data from multiple internal
              APIs in parallel and aggregated them for consumption by various
              teams.
            </StyledPortfolioDetailsListItem>
          </StyledPortfolioDetailsList>
        </div>
        <div>
          <StyledPortfolioTitle>
            <StyledPortfolioLink
              href="https://www.c4ministry.com"
              rel="nofollow noreferrer"
              title="California Christ Community Church website"
            >
              California Christ Community Church
            </StyledPortfolioLink>
          </StyledPortfolioTitle>
          <StyledPortfolioDetailsList>
            <StyledPortfolioDetailsListItem>
              Built and redesigned California Christ Community Church's website
              using Next.js.
            </StyledPortfolioDetailsListItem>
            <StyledPortfolioDetailsListItem>
              Improved Lighthouse performance, accessibility, best practices and
              SEO metrics. Read more about it{' '}
              <Link
                href="/blog/technology/[slug]"
                as="/blog/technology/using-nextjs-to-improve-performance"
              >
                <StyledReadMoreLink>here!</StyledReadMoreLink>
              </Link>
            </StyledPortfolioDetailsListItem>
            <StyledPortfolioDetailsListItem>
              Performed webmaster duties including but not limited to
              cross-browser testing, monitoring and analyzing web traffic,
              implementing new functionality, fixing bugs, and addressing user
              contact form.
            </StyledPortfolioDetailsListItem>
          </StyledPortfolioDetailsList>
        </div>
        <div>
          <StyledPortfolioTitle>
            <StyledPortfolioLink
              href="https://www.canterburyconsulting.com/"
              rel="nofollow noreferrer"
              title="Canterbury Consulting Website"
            >
              Canterbury Consulting
            </StyledPortfolioLink>
          </StyledPortfolioTitle>
          <StyledPortfolioDetailsList>
            <StyledPortfolioDetailsListItem>
              Built a search page, using .NET, HTML, CSS, and JavaScript, that
              returns users relevant articles, news, videos, and blog posts
              created by Canterbury Consulting writers.
            </StyledPortfolioDetailsListItem>
            <StyledPortfolioDetailsListItem>
              Learned and utilized Umbraco CMS to implement new features on
              existing site and fix bugs from previous implementations.
            </StyledPortfolioDetailsListItem>
            <StyledPortfolioDetailsListItem>
              Collaborated in a remote environment consisting of product, UX,
              and engineering to plan and build new features.
            </StyledPortfolioDetailsListItem>
          </StyledPortfolioDetailsList>
        </div>
      </StyledPortfolioDataContainer>
    </StyledPortfolioContainer>
  );
}

const StyledPortfolioContainer = styled.div`
  display: grid;
  grid-gap: ${spacing['4']};
`;

const StyledH3 = styled.h3`
  font-size: ${fontSize['lg']};
  font-weight: ${fontWeight.bold};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};
  text-align: left;
  text-decoration: underline;

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['xl']};
    line-height: ${lineHeight.none};
  }

  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['2xl']};
  }
`;

const StyledPortfolioDataContainer = styled.div`
  display: grid;
  grid-gap: ${spacing['4']};

  @media (min-width: ${screens.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const StyledPortfolioTitle = styled.h4`
  font-size: ${fontSize.base};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};
  margin-bottom: ${spacing['3']};

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['lg']};
  }
  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['xl']};
  }
`;

const StyledPortfolioLink = styled.a`
  :hover {
    color: ${colors.linkHover};
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledPortfolioDetailsList = styled.ul`
  font-size: ${fontSize.xs};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};
  list-style: disc;
  margin-left: ${spacing['5']};

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['sm']};
  }
  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['base']};
  }
`;

const StyledPortfolioDetailsListItem = styled.li`
  margin-bottom: ${spacing['2']};
`;

const StyledReadMoreLink = styled.a`
  text-decoration: underline;

  :hover {
    color: ${colors.linkHover};
    cursor: pointer;
  }
`;
