import styled from 'styled-components';
import { screens, spacing } from '../../styles/theme';

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 8rem;

  @media (min-width: ${screens.sm}) {
    padding: 0 ${spacing['5']};
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
