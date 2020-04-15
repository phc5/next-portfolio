import styled from 'styled-components';
import {
  screens,
  spacing,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from '../../styles/theme';

function Profile() {
  return (
    <StyledProfileContainer>
      <StyledImage
        width="128"
        height="128"
        src="/profilepic.jpg"
        alt="Paul Chong Profile Pic"
      />
      <div>
        <StyledH1>Paul Chong</StyledH1>
        <StyledH2>Software Engineer</StyledH2>
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
