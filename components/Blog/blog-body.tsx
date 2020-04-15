import styled from 'styled-components';

export default function PostBody({ children }) {
  return <StyledPostBody>{children}</StyledPostBody>;
}

const StyledPostBody = styled.div`
  margin: 0 auto;
  max-width: 42rem;
`;
