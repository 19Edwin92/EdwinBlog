import React, { ChangeEvent, useState, useCallback } from 'react'
import styled from 'styled-components'
import { PosterTitle } from '../components/home/styled'
// import * as Code from '../components/main/codeblocks';
import _ from 'lodash' // yarn add @types/lodash

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
            <Debounce/>
        </MainSection>
      </MainBody>
    </MainWrap>
  )
}

export default Main2

const Debounce: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [printInput, setPrintInput] = useState<string>("");
  const [printInput2, setPrintInput2] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    DebounceUseCallback(e.target.value)
    Debounce(e.target.value)
  };

  // 아래 내용 생략시, 노란줄이 표시됨 //  해당 줄에 대한 모든 ESLint 경고가 무시되며, 해당 줄의 코드는 ESLint에 의해 검사되지 않습니다.
  // eslint-disable-next-line
  const DebounceUseCallback = useCallback(
    _.debounce((text: string) => {
      setPrintInput(text);
    }, 2000),
    []
  );
  const Debounce = 
    _.debounce((text: string) => {
      setPrintInput2(text);
    }, 2000)

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <div>Debounce(useCallback): {printInput}</div>
      <div>Debounce(useCallback No): {printInput2}</div>
    </div>
  );
};


// const Debounce:React.FC = () => {
//   const [inputValue, setInputValue] = useState<string>("")
//   // const [printInput, setPrintInput] = useState<string>("")

  
//   const debounceFn = (callback: () => void, delay: number) => {
//     let timer: NodeJS.Timeout | null = null;

//     return () => {
//       if (timer) {
//         clearTimeout(timer);
//       }
//       timer = setTimeout(callback, delay);
//     };
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   const handleButtonClick = debounceFn(() => {
//     console.log("디바운스 테스트");
//   }, 500);



//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleButtonClick}>디바운스</button>
//       <div>Value:</div>
//     </div>
//   )
// }




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
