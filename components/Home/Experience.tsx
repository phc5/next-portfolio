import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {
  colors,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
} from '../../styles/theme';

export default function () {
  const aboutRef = useRef(null);
  const hobbiesRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 1 });
    if (aboutRef && aboutRef.current) {
      timeline.from(aboutRef.current, {
        duration: 1,
        opacity: 0,
      });
    }

    if (hobbiesRef && hobbiesRef.current) {
      timeline.from(hobbiesRef.current, {
        duration: 1,
        opacity: 0,
      });
    }

    if (workRef && workRef.current) {
      timeline.from(workRef.current, {
        duration: 1,
        opacity: 0,
      });
    }

    if (contactRef && contactRef.current) {
      timeline.from(contactRef.current, {
        duration: 1,
        opacity: 0,
      });
    }
  }, []);

  return (
    <StyledExperienceContainer>
      <StyledP ref={aboutRef}>
        I am a software engineer who specializes in UI development with
        JavaScript. I currently work as a Front End Engineer at AWS Activate and
        build products that help startups scale and grow their businesses.
      </StyledP>

      <StyledP ref={hobbiesRef}>
        Along with my passion for learning new technologies and writing code, I
        love to spend time with my dog, surf, workout via calisthenics, and play
        video games.
      </StyledP>

      <StyledP ref={workRef}>
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

      <StyledP ref={contactRef}>
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
