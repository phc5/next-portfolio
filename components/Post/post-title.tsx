import styled from 'styled-components';
import {
  screens,
  spacing,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} from '../../styles/theme';

export default function PostTitle({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.h1`
  font-size: ${fontSize['6xl']};
  font-weight: ${fontWeight.bold};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};
  margin-bottom: ${spacing['12']};
  text-align: center;

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['7xl']};
    line-height: ${lineHeight.none};
    text-align: left;
  }

  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['8xl']};
  }
`;
