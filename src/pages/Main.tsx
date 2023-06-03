import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { globalBackground } from '../libs/recoil/globalBackground'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { InfoBackground } from '../libs/types/componentsProps';

const code = `
    // 소스코드 코드블록 만들기 
    function greet() {
      console.log('Hello, world!');
    }
    greet();
  `;

const Main: React.FC = () => {
  const [, setBackground] = useRecoilState(globalBackground)
  useEffect(() => {
    setBackground("#transparent")
  }, [setBackground])
  return (
    <div>Main
      <br/><br/>
      <CordBlockWrap>
        <PointCircleWrap>
          <PointCircle info="#EC6A5D"/>
          <PointCircle info="#F2BD4E"/>
          <PointCircle info="#61C654"/>
        </PointCircleWrap> 
        <StyledSyntaxHighlighter language="javascript" style={coldarkDark}>
          {code}
        </StyledSyntaxHighlighter>
      </CordBlockWrap>
    </div>
  )
}

export default Main

const CordBlockWrap = styled.div`
  position: relative;
  width: fit-content;
`

const PointCircleWrap = styled.div`
  position: absolute;
  left: 0.5rem;
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.5rem;
`

const PointCircle = styled.div<InfoBackground>`
  left: 5px;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({info}) => info};
`

const StyledSyntaxHighlighter = styled(SyntaxHighlighter).attrs({
  customStyle: {
    fontSize: '0.5rem',
    padding : "0",
    paddingTop:"1rem",
    paddingBottom:"1rem",
    margin:0,
  },
})`
  width: 350px;
  border-radius: 15px;
`;

