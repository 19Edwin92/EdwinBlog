import React from 'react'
import styled, { css } from 'styled-components'

const StyledComponents : React.FC =() => {
  return (
    <div>
      <H1>Styled-components</H1>
      <br/>
      <Badge>Hellow World!</Badge>
      <br/>
      <Button color='#FF0000' backgroundColor='transparent'>Hellow</Button>
      <br/>
      <Button color='white' backgroundColor='#1E90FF'>World</Button>
      <br/>
      <ButtonRedBoxFont>Button+(CSS 재사용 : RedBox+Font)</ButtonRedBoxFont>
      <br/>
      <TextFont>Text+(CSS 재사용 : Font)</TextFont>
      <br/>
      <BorderedText>Text를 상속받은 BorderedText 스타일드 컴포넌트</BorderedText>
    </div>
  )
}

export default StyledComponents



// type
type ButtonPros = {
  color:string
  backgroundColor:string
}


// mixin CSS 정의의 재사용
// 빨간색 경계선을 표시하는 스타일
const redBox = css`
  padding: 0.25em 1em;
  border: 3px solid #ff0000;
  border-radius: 10px;
`
const font = css`
  color: #1e90ff;
  font-size: 2em;
`


// styled-components
const H1 = styled.h1`
  color: red;
`

const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: red;
  border-radius: 16px;
`

const Button = styled.button<ButtonPros>`
  /* color, background, border-color는 props에서 전달한다. */

  color:${({color})=> color};
  background: ${({backgroundColor})=> backgroundColor};
  border: 2px solid ${({color})=> color}; // 글자색과 통일한다 
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`

const ButtonRedBoxFont = styled.button`
  background: transparent;
  margin: 1em;
  cursor: pointer;
  ${redBox}
  ${font}
`

const TextFont = styled.p`
  font-weight: bold;
  ${font}
`

// styled-components 상속
const BorderedText = styled(TextFont)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`