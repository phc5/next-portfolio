import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import breakpoints from '../constants/breakpoints';

const Layout = (props) => {
  return (
    <StyledWrapper>
      <StyledContent>
        <Header />
        {props.children}
      </StyledContent>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledContent = styled.div`
  display: grid;
  grid-gap: 2em;
  padding: 0 2em 2em;

  @media screen and (${breakpoints.small}) {
    margin: 0 auto;
    padding: 0 0 2em 0;

    max-width: 65em;
    width: calc(100% - 6em);
  }
`;

export default Layout;
