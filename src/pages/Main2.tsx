import React from 'react'
import styled from 'styled-components'
import { PosterTitle } from '../components/home/styled'
// import * as Code from '../components/main/codeblocks';
import CodeBlock from '../components/main/CodeBlock'
import { blogmaking } from '../components/main/codelists'

const Main2: React.FC = () => {
  return (
    <MainWrap>
      <Header>
        <HeaderTitle children="Edwin-Blog" />
      </Header>
      <MainBody>
        <div style={{display:'flex'}}>
          <NavBar>
            <div>Blog</div>
            <div>코테</div>
            <div>타스</div>
            <div>자스</div>
            <div>CS</div>
            <div>면접</div>
          </NavBar>
          <SueNavBar>
            <div>블로그만들기1</div>
            <div>블로그만들기2</div>
            <div>블로그만들기3</div>
            <div>블로그만들기4</div>
            <div>블로그만들기5</div>
            <div>블로그만들기6</div>
          </SueNavBar>
        </div>
        <MainSection>
          <h1>Edwin-Blog (1) 3D-Card 만들기</h1>
          <br></br>
          <h2>@keyframes</h2>
          <br></br>
          <li>perspective</li>
          <li>animation : @keyframesName infinite linear alternate</li>
          <li>transform-style : preserve-3d</li>
          <br></br>
          <p>CSS에서 @keyframes은 애니메이션을 정의하는데 사용되는 규칙 선언기 이다. 요소의 스타일을 시간에 따라 동작이 가능하도록 한다. 동작을 한다는 것은 쉽게 요소의 시작과 끝 지점을 정의하고, 그 속성의 변경을 기록하여 원하는 결과를 도출할 때 사용한다. 본 프로젝트에서는 Z축을 기준으로 좌우로 회전하는 3D-Card를 구현할 때 사용하였다.</p>
          <CodeBlock info={blogmaking} />

          <h2>둘째, perspective</h2>
          <br></br>
          <p>CSS 속성 가운데 perspective는 요소의 원근감의 깊이를 나타날 때 사용된다. px을 포함한 단위(%, rem)가 작아질수록 원근감은 깊어진다. 반면 커질수록 원근감의 깊이는 완만해진다. 3D공간을 다룰 때 상대적으로 큰 값을 사용하는 경우가 많은데, GPT에 따르면 일반적으로 1000px이 사용된다고 한다. 본 프로젝트에서는 500px를 주었다.</p>
          <br></br>
          <h2>셋째, animation</h2>
          <br></br>
          <p>CSS의 animation 속성은 애니메이션을 적용하는데 사용된다. 본 프로젝트에서는 위에서 선언한 @keyframes을 참조하도록 정의하였고, 2.5초를 지정하여 동작하도록 하였다.</p>
          <br></br>
          <li>infinite : 동작이 무한반복되도록 지정하며</li>
          <li>linear : 동작의 속도가 일정하게 움직이도록 설정한다.</li>
          <li>alternate : 동작이 연속적으로 움직이듯, 진행된 시점을 역방향으로 되감아가며 다시 실행한다.</li>
          <br></br>
          <p>alternate를 사용하지 않으면, @keyframes의 종료시점에서 프레임이 끊어지고, @keyframes의 시작시점으로 바로 연결되기에 연결이 끊어지는 듯한, 연속되지 않아보이는 현상을 볼 수 있다. 이를 방지하기 위해 선언된 alternate는 종료된 시점을 역방향으로 실행하고, 다시 시작-역방향-시작-역방향을 반복하며 연속적인 동작을 구현하도록 기능한다.</p>

        </MainSection>
      </MainBody>
    </MainWrap>
  )
}

export default Main2

const HeaderTitle = styled(PosterTitle)`
  margin-left: 20px;
  padding: 0 0;
`

const MainWrap = styled.div`
`

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height:50px;
  position: sticky;
  background-color: white;
  top: 0;
`

const MainBody = styled.div`
  display:grid;
  grid-template-columns: 200px 1fr;
`

const NavBar = styled.nav`
  background-color:lightblue;
  height: calc(100vh - 50px);
  padding: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  width: 50px;
  gap: 1rem;
`
const SueNavBar = styled.nav`
  background-color: yellow;
  height: calc(100vh - 50px);
  padding: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 1rem;
`


const MainSection = styled.section`
  height:50px;
  padding: 20px;
  text-align: justify;
`
