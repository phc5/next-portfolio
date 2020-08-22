import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {
  screens,
  spacing,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from '../../styles/theme';

function Profile() {
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (imageRef && imageRef.current)
      gsap.from(imageRef.current, {
        duration: 1,
        opacity: 0,
        x: -100,
      });

    if (nameRef && nameRef.current)
      gsap.from(nameRef.current, { duration: 1, opacity: 0, y: -100 });

    if (titleRef && titleRef.current)
      gsap.from(titleRef.current, { duration: 1, opacity: 0, y: 100 });
  }, []);

  return (
    <StyledProfileContainer>
      <StyledImage
        width="128"
        height="128"
        src="/profilepic.jpg"
        alt="Paul Chong Profile Pic"
        ref={imageRef}
      />
      <div>
        <StyledH1 ref={nameRef}>Paul Chong</StyledH1>
        <StyledH2 ref={titleRef}>Software Engineer</StyledH2>
      </div>
    </StyledProfileContainer>
  );
}

export default Profile;

const StyledProfileContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: ${spacing['8']} 0;

  @media (min-width: ${screens.md}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledImage = styled.img`
  @media (min-width: ${screens.md}) {
    align-self: flex-end;
    margin-right: ${spacing['8']};
  }
`;

const StyledH1 = styled.h1`
  font-size: ${fontSize['6xl']};
  font-weight: ${fontWeight.bold};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};
  margin: 0;
  text-align: left;

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['7xl']};
    justify-content: flex-start;
    line-height: ${lineHeight.none};
  }
  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['8xl']};
    justify-content: flex-start;
  }
`;

const StyledH2 = styled.h2`
  font-size: ${fontSize['3xl']};
  font-weight: ${fontWeight.bold};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};
  margin: 0;
  text-align: left;

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['4xl']};
    justify-content: flex-start;
    line-height: ${lineHeight.none};
  }
  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['5xl']};
    justify-content: flex-start;
  }
`;
