import styled from 'styled-components';
import Header from './Header/Header';
import { spacing, screens } from '../styles/theme';

const Layout = ({ children }: { children: any }) => {
  return (
    <StyledMinHeightContainer>
      <StyledContentGrid>
        <Header />
        {children}
      </StyledContentGrid>
    </StyledMinHeightContainer>
  );
};

export default Layout;

const StyledMinHeightContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const StyledContentGrid = styled.div`
  display: grid;
  grid-gap: ${spacing['8']};
  max-width: 45rem;
  padding: 0 ${spacing['8']} ${spacing['8']} ${spacing['8']};

  @media (min-width: ${screens.sm}) {
    margin: 0 auto;
    padding-right: 0;
  }
`;
