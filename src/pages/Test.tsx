import React from 'react'
import styled from 'styled-components'

const Test:React.FC = () => {
  return (
    <OutLine>
      <Container>
        <NavOutLine>테스트네비</NavOutLine>
        <MainBody>테스트섹션</MainBody>
      </Container>
    </OutLine>
  )
}

export default Test

const OutLine = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  display: flex;
  flex: 1 1 0;
`

const NavOutLine = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  pointer-events: none;
  position: relative;
  z-index: 111;
  background-color: rgb(251, 251, 250);
  box-shadow: rgba(0, 0, 0, 0.024) -1px ;
  width: 240px;
`

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`