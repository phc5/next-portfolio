import styled from 'styled-components';

function Profile() {
  return (
    <StyledProfileContainer>
      <img width="128" height="128" src="/profilepic.jpg" />
      <StyledNameContainer>
        <h1>Paul Chong</h1>
        <h2>Software Engineer</h2>
      </StyledNameContainer>
    </StyledProfileContainer>
  );
}

const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 350px;
`;

const StyledNameContainer = styled.div`
  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
  }
`;

export default Profile;
