import styled from 'styled-components';
import Avatar from './avatar';
import PostTitle from './post-title';
import { screens, spacing } from '../../styles/theme';

export default function PostHeader({ title, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <StyledTabletDesktopAvatar>
        <Avatar name={author.name} picture={author.picture} date={date} />
      </StyledTabletDesktopAvatar>
      <StyledPhoneContainer>
        <StyledPhoneAvatar>
          <Avatar name={author.name} picture={author.picture} date={date} />
        </StyledPhoneAvatar>
      </StyledPhoneContainer>
    </>
  );
}

const StyledTabletDesktopAvatar = styled.div`
  display: none;

  @media (min-width: ${screens.md}) {
    display: block;
    margin-bottom: ${spacing['12']};
  }
`;

const StyledPhoneContainer = styled.div`
  margin: 0 auto;
  max-width: 42rem;
`;

const StyledPhoneAvatar = styled.div`
  display: block;
  margin-bottom: ${spacing['6']};

  @media (min-width: ${screens.md}) {
    display: none;
  }
`;
