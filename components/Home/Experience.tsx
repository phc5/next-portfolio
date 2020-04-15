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
    <StyledExperienceContainer>
      <StyledH3>Experience</StyledH3>
      <StyledList>
        {experienceData.map((data) => (
          <ExperienceBlock
            company={data.company}
            title={data.title}
            time={data.time}
            key={data.company}
          />
        ))}
      </StyledList>
    </StyledExperienceContainer>
  );
}

function ExperienceBlock({ company, title, time }) {
  return (
    <StyledListItem>
      <StyledH4>{company}</StyledH4>
      <span>
        <StyledJobTitle>{title}</StyledJobTitle>
        <StyledJobTime>{time}</StyledJobTime>
      </span>
    </StyledListItem>
  );
}
/** Data **/
const experienceData = [
  {
    company: 'Cox Automotive (Kelley Blue Book)',
    title: 'UI Engineer',
    time: '2017 - present',
  },
  {
    company: 'California Christ Community Church',
    title: 'Webmaster',
    time: '2019 - present',
  },
  {
    company: 'SalesPad',
    title: 'Junior C# Developer',
    time: '2015',
  },
  {
    company: 'Calvin College',
    title: 'B.S. Computer Science',
    time: '2013 - 2016',
  },
];

const StyledExperienceContainer = styled.div`
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

const StyledList = styled.ul`
  display: grid;
  grid-gap: ${spacing['4']};
  margin: 0;
  padding: 0;

  @media (min-width: ${screens.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const StyledH4 = styled.h4`
  font-size: ${fontSize.base};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['lg']};
  }

  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['xl']};
  }
`;

const StyledJobTitle = styled.p`
  font-size: ${fontSize.sm};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};

  @media (min-width: ${screens.md}) {
    font-size: ${fontSize['md']};
  }

  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize['lg']};
  }
`;

const StyledJobTime = styled.p`
  font-size: ${fontSize.xs};
  letter-spacing: ${letterSpacing.tighter};
  line-height: ${lineHeight.tight};

  @media (min-width: ${screens.sm}) {
    font-size: ${fontSize['md']};
  }
`;
