import styled from 'styled-components';
import {
  colors,
  fontSize,
  lineHeight,
  maxWidth,
  spacing,
  screens,
} from '../../styles/theme';

export default function PostBody({ content }) {
  return (
    <StyledPostBodyContainer>
      <StyledPostBody dangerouslySetInnerHTML={{ __html: content }} />
    </StyledPostBodyContainer>
  );
}

const StyledPostBodyContainer = styled.div`
  margin: 0 auto;
  max-width: ${maxWidth['2xl']};
`;

const StyledPostBody = styled.div`
  font-size: ${fontSize.lg};

  p,
  ul,
  ol,
  blockquote {
    margin: ${spacing['6']} 0;
  }

  h2 {
    font-size: ${fontSize['3xl']};
    line-height: ${lineHeight.snug};
    margin: ${spacing['12']} 0 ${spacing['4']} 0;
    text-decoration: underline;
  }

  h3 {
    font-size: ${fontSize['2xl']};
    line-height: ${lineHeight.snug};
    margin: ${spacing['8']} 0 ${spacing['4']} 0;
    text-decoration: underline;
  }

  h4 {
    font-size: ${fontSize['xl']};
    line-height: ${lineHeight.snug};
    margin: ${spacing['8']} 0 ${spacing['4']} 0;
    text-decoration: underline;
  }

  a {
    text-decoration: underline;

    :hover {
      color: ${colors.linkHover};
    }
  }

  ul {
    padding-left: 2rem;
  }

  ul > li {
    list-style: disc;
    margin-bottom: 1.5rem;

    ul {
      margin: 0;

      li {
        list-style: circle;

        ul {
          margin: 0;

          li {
            list-style: square;
          }
        }
      }
    }
  }

  pre {
    background: #e5e8e3;
    border-radius: ${spacing[2]};
    overflow: scroll;
    padding: ${spacing['4']};

    code {
      background: initial;
      font-size: ${fontSize.xxs};
      white-space: pre-wrap;

      @media (min-width: ${screens.sm}) {
        font-size: ${fontSize.base};
        white-space: unset;
      }
    }
  }

  code {
    background: #cbd5e044;
  }

  table {
    width: 100%;

    th {
      background: #cbd5e044;
    }

    th,
    td {
      border: 1px solid ${colors.text};
      text-align: center;
    }
  }
`;
