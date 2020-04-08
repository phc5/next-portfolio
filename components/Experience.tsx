import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';

export default function () {
  return (
    <StyledExperienceContainer>
      <h3>Experience</h3>

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
    <li>
      <h4>{company}</h4>
      <span>
        <StyledPosition>{title}</StyledPosition>
        <StyledYear>{time}</StyledYear>
      </span>
    </li>
  );
}

/** Styles **/
const StyledExperienceContainer = styled.div`
  display: grid;
  grid-gap: 1em;

  h3 {
    text-decoration: underline;
  }
`;

const StyledList = styled.ul`
  display: grid;
  grid-gap: 1em;
  margin: 0;
  padding: 0;

  @media screen and (${breakpoints.small}) {
    grid-template-columns: 1fr 1fr;
  }

  li {
    list-style: none;
  }
`;

const StyledPosition = styled.p`
  font-size: 0.9em;
`;

const StyledYear = styled.p`
  font-size: 0.75em;
`;

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
