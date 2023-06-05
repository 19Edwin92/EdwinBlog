import styled from "styled-components";
import { InfoString } from "../../libs/types/componentsProps";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const CodeBlockWrap = styled.div`
  margin: 1rem 0;
  position: relative;
  width: fit-content;
`

export const PointCircleWrap = styled.div`
  position: absolute;
  left: 0.5rem;
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.5rem;
`

export const PointCircle = styled.div<InfoString>`
  left: 5px;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ info }) => info};
`

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter).attrs({
    customStyle: {
      fontSize: '0.5rem',
      padding: "0",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      margin: 0,
    },
  })`
  width: 350px;
  border-radius: 15px;
`;

