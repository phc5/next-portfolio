import styled from 'styled-components';
import { screens, spacing } from '../../styles/theme';

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${spacing['5']};
  width: 100%;

  @media (min-width: ${screens.sm}) {
    max-width: ${screens.sm};
  }

  @media (min-width: ${screens.md}) {
    max-width: ${screens.md};
  }

  @media (min-width: ${screens.lg}) {
    max-width: ${screens.lg};
  }

  @media (min-width: ${screens.xl}) {
    max-width: ${screens.xl};
  }
`;
