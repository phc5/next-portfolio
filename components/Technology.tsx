import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';

export default function () {
  return (
    <StyledTechnologyContainer>
      <h3>Technology</h3>

      <StyledTechnologyInfo>
        <div>
          <p>Day-to-day:</p>
          <p>
            JavaScript, React, Next.js, GraphQL, CSS, AWS, .NET, and Node.js.
          </p>
        </div>
        <div>
          <p>Learning and playing with:</p>
          <p>Typescript, Rx.js, Python, Flutter, Animations, and many more.</p>
        </div>
      </StyledTechnologyInfo>
    </StyledTechnologyContainer>
  );
}

/** Styles **/
const StyledTechnologyContainer = styled.div`
  display: grid;
  grid-gap: 1em;

  h3 {
    text-decoration: underline;
  }
`;

const StyledTechnologyInfo = styled.div`
  display: grid;
  grid-gap: 1em;

  @media screen and (${breakpoints.small}) {
    grid-template-columns: 1fr 1fr;
  }
`;
