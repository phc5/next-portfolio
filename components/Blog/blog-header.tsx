import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
  screens,
} from '../../styles/theme';

export default function BlogHeader({ title }) {
  return <StyledBlogHeader>{title}</StyledBlogHeader>;
}

const StyledBlogHeader = styled.h1`
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
