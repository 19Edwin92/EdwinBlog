import React from 'react'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as MainStyled from './styled';
import { InfoString } from '../../libs/types/componentsProps';

// const CodeBlock:React.FC<InfoString> = ({info}) => {
const CodeBlock = ({info}:InfoString) => {
  return (
    <MainStyled.CodeBlockWrap>
        <MainStyled.PointCircleWrap>
          <MainStyled.PointCircle info="#EC6A5D" />
          <MainStyled.PointCircle info="#F2BD4E" />
          <MainStyled.PointCircle info="#61C654" />
        </MainStyled.PointCircleWrap>
        <MainStyled.StyledSyntaxHighlighter language="javascript" style={coldarkDark}>
          {info}
        </MainStyled.StyledSyntaxHighlighter>
      </MainStyled.CodeBlockWrap>
  )
}

export default CodeBlock