import styled from 'styled-components';
import {
  colors,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
} from '../../styles/theme';

export default function () {
  return (
    <StyledExperienceContainer>
      <StyledP>
        I am a software engineer who specializes in UI development with
        JavaScript. Along with my passion for learning new technologies and
        writing code, I love to spend time with my dog, surf, workout via
        calisthenics, and play video games.
      </StyledP>

      <StyledP>
        Day-to-day I use JavaScript, React, Next.js, GraphQL, TypeScript, CSS,
        AWS, .NET, and Node.js. But I don't limit myself to just these
        technologies. On my free time, I am currently playing with Rust and
        Flutter!
      </StyledP>

      <StyledP>
        Some of my work and freelance gigs include:{' '}
        <StyledLink
          href="https://www.kbb.com"
          rel="nofollow noreferrer"
          title="KBB.com website"
        >
          Kelley Blue Book,
        </StyledLink>{' '}
        <StyledLink
          href="https://www.canterburyconsulting.com/"
          rel="nofollow noreferrer"
          title="Canterbury Consulting Website"
        >
          Canterbury Consulting,
        </StyledLink>{' '}
        and{' '}
        <StyledLink
          href="https://www.c4ministry.com"
          rel="nofollow noreferrer"
          title="California Christ Community Church website"
        >
          California Christ Community Church
        </StyledLink>
        .
      </StyledP>

      <StyledP>
        Contact me{' '}
        <StyledLink href="mailto:paulhyunchong@gmail.com">here</StyledLink> or
        add me on{' '}
        <StyledLink href="https://www.linkedin.com/in/paulhchong/">
          LinkedIn
        </StyledLink>
        .
      </StyledP>
    </StyledExperienceContainer>
  );
}

const StyledExperienceContainer = styled.div`
  display: grid;
  grid-gap: ${spacing['6']};
`;

const StyledP = styled.p`
  font-size: ${fontSize.lg};
  letter-spacing: ${letterSpacing.normal};
  line-height: ${lineHeight.snug};
  list-style: disc;
`;

const StyledLink = styled.a`
  text-decoration: underline;

  :hover {
    color: ${colors.linkHover};
    cursor: pointer;
    text-decoration: underline;
  }
`;
