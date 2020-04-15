import styled from 'styled-components';
import Date from './date';
import { spacing, fontSize, fontWeight } from '../../styles/theme';

export default function Avatar({ name, picture, date }) {
  return (
    <StyledAvatarContainer>
      <StyledImage src={picture} alt={name} />
      <StyledNameDateContainer>
        <StyledName>{name}</StyledName>
        <Date dateString={date} />
      </StyledNameDateContainer>
    </StyledAvatarContainer>
  );
}

const StyledAvatarContainer = styled.div`
  align-items: center;
  display: flex;
`;

const StyledImage = styled.img`
  border-radius: 9999px;
  height: ${spacing['12']};
  margin-right: ${spacing['4']};
  width: ${spacing['12']};
`;

const StyledNameDateContainer = styled.div`
  margin-right: ${spacing['3']};
`;

const StyledName = styled.div`
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.bold};
`;
