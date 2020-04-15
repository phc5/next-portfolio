import styled from 'styled-components';
import {
  spacing,
  fontSize,
  fontWeight,
  screens,
  lineHeight,
  letterSpacing,
} from '../../styles/theme';

export default function () {
  return (
    <StyledTechContainer>
      <StyledH3>Technology</StyledH3>

      <StyledTechDetailsContainer>
        <div>
          <StyledTechDetailsTitle>Day-to-day</StyledTechDetailsTitle>
          <StyledTechDetailsParagraph>
            JavaScript, React, Next.js, GraphQL, CSS, AWS, .NET, and Node.js.
          </StyledTechDetailsParagraph>
        </div>
        <div>
          <StyledTechDetailsTitle>
            Learning and playing with
          </StyledTechDetailsTitle>
          <StyledTechDetailsParagraph>
            Typescript, Rx.js, Python, Flutter, Animations, and many more.
          </StyledTechDetailsParagraph>
        </div>
      </StyledTechDetailsContainer>
    </StyledTechContainer>
  );
}

const StyledTechContainer = styled.div`
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

const StyledTechDetailsContainer = styled.div`
  display: grid;
  grid-gap: ${spacing['4']};

  @media (min-width: ${screens.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const StyledTechDetailsTitle = styled.h4`
  font-size: ${fontSize.base};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};
  margin-bottom: ${spacing['2']};

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['lg']};
  }

  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['xl']};
  }
`;

const StyledTechDetailsParagraph = styled.p`
  font-size: ${fontSize.xs};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};
  margin-bottom: ${spacing['2']};

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['xs']};
  }

  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['base']};
  }
`;
