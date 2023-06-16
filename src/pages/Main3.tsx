import React, { ChangeEvent, useState, useCallback, useRef } from 'react'
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
  const [printInput3, setPrintInput3] = useState<string>("");
  const [printInputThro, setPrintInputThro] = useState<string>("");
  const [printInputThro2, setPrintInputThro2] = useState<string>("");
  const [clicktButton, setClicktButton] = useState<number>(0)
  const [clickthrottle, setclickthrottle] = useState<number>(0)

  // input 입력에 대한 함수 
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // input 상태변화
    setInputValue(e.target.value);

    // 디바운스 
    Debounce(e.target.value)
    DebounceUseCallback(e.target.value)
    customDebounceUseCallback(e.target.value)

    // 쓰로틀
    ThrottleUseCallback(e.target.value)
    customThrottleUseCallback(e.target.value)
  };


  // 디바운스 관련된 함수들 lodash(useCallback 유무), customDebounce  ///////////////////////////
  // 01-01 lodash - useCallback 적용 No
  const Debounce = 
    _.debounce((text: string) => {
      setPrintInput2(text);
    }, 2000)

  // 01-02 lodash - useCallback 적용 Yes
  // eslint-disable-next-line
  const DebounceUseCallback = useCallback(
    _.debounce((text: string) => {
      setPrintInput(text);
    }, 2000),
    []
  );

  // 01-03 CustomDebounce
  const customDebounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const customDebounceUseCallback = useCallback((text: string) => {
    if (customDebounceTimeoutRef.current) clearTimeout(customDebounceTimeoutRef.current);

    customDebounceTimeoutRef.current = setTimeout(() => {
      setPrintInput3(text);
    }, 2000);
  }, []);

  // 01-04 CustomDebounce => 수정하기 전, 
  // (1) useCallback으로 함수를 메모이제이션 했지만
  // (2) 실제로 동작되는 것은, 매번 새로운 setTimeout이 생성되는 상황 
  // (3) 이를 위해, 변경되지 않는 값에 접근하고자 클로저가 아니라, customDebounceTimeoutRef로 분리시켰다. 
  // (4) 상위 함수에 메모이제이션해도, 하위 함수까지 메모이제이션되지 않는다. 
  const customDebounce = (callback: (text: string) => void, delay: number) => {
    let timeId: NodeJS.Timeout | null = null;
    return (text: string) => {
      if (timeId) clearTimeout(timeId);
      timeId = setTimeout(() => {
        callback(text);
      }, delay);
    };
  };
  
  // eslint-disable-next-line
  const customDebounceUseCallback2 = useCallback((text:string) => {
    customDebounce((text) => {
      setPrintInput3(text)
    }, 
    2000)(text);
  },[])


  // 01-05 단순한 버튼에 대한 디바운스 
  // button - 디바운스 (1) => 본체 
  const debounceFn = (callback:() => void, delay: number) => {
    let timer: NodeJS.Timeout | null = null;
    return () => {
      timer && clearTimeout(timer);
      timer = setTimeout(callback, delay);
    };
  }

  // button - 디바운스 (2) => callback 함수 
  // eslint-disable-next-line
  const handleButtonClick = useCallback(() =>{
    debounceFn(() => {
    }, 500)
  },[]
  )


  // 스로틀링 관련된 함수들 lodash(useCallback 유무), customThrottle  ///////////////////////////
  // 02-01 lodash - useCallback 적용 Yes
  // eslint-disable-next-line
  const ThrottleUseCallback = useCallback(
    _.throttle((text: string) => {
      setPrintInputThro(text);
    }, 2000),
    []
  );

  // 02-02 customThrottle - useCallback 적용 Yes
  const customThrottleRef = useRef<NodeJS.Timeout | null>(null);
  const customThrottlEndRef = useRef<NodeJS.Timeout | null>(null);
  const customThrottle = (callback:(text:string)=>void, delay:number)  => {
      let boolean:boolean = false
      return (text:string) => {
        // 시작인 경우
        if(!boolean && !customThrottleRef.current) {
          callback(text)
          boolean = true
        }

        // 중간인 경우
        if(customThrottleRef.current) {
          return
        } 
        boolean = true;
        customThrottleRef.current = setTimeout(() => {
          callback(text)
          customThrottleRef.current = null
        }, delay) 

        // 끝인경우
        if (customThrottlEndRef.current) {
          console.log(customThrottlEndRef.current);
          clearTimeout(customThrottlEndRef.current);
        }
        customThrottlEndRef.current = setTimeout(()=> {
          console.log("동작")
          boolean = false;
          customThrottleRef.current = null
          customThrottlEndRef.current = null
        },delay)

      } 
    }


    // eslint-disable-next-line
    const customThrottleUseCallback = useCallback((text:string)=> {
      customThrottle((text) => {
        setPrintInputThro2(text)
      }, 
      2000)(text);
    },[])

    // const customThrottleRef = useRef<NodeJS.Timeout | null>(null);
    // const customThrottle = (callback:(text:string)=>void, delay:number)  => {
    //     return (text:string) => {
    //       console.log("customThrottle - 동작?")
  
    //       if(customThrottleRef.current) return 
    //       boolean = true;
    //       customThrottleRef.current = setTimeout(() => {
    //         callback(text)
    //         customThrottleRef.current = null
    //         boolean = false;
    //       }, delay) 
    //     }
    //   }

  // 02-03 customThrottle - button
  const customThrottleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleButtonThrottle = (callback:()=>void, delay:number) => {
    
    return () => {
      setClicktButton(clicktButton => clicktButton+1)
      if(customThrottleTimeoutRef.current) return;
      customThrottleTimeoutRef.current = setTimeout(()=>{
        callback();
        customThrottleTimeoutRef.current = null
      },delay)
    }
  }

  // eslint-disable-next-line
  const customThorrtleUseCallback = useCallback(() => {
    handleButtonThrottle(()=> {
      setclickthrottle(clickthrottle => clickthrottle+1)
    }, 2000)();
  },[])

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <div>{inputValue} - inputValue</div>
      <div>{printInput2} - Debounce(useCallbak No)</div>
      <div>{printInput} - Debounce(useCallback)</div>
      <div>{printInput3} - Debounce(Custom)</div>
      <hr/>
      <div>{printInputThro} - Throttle(lodash)</div>
      <div>{printInputThro2} - Throttle(custom)</div>
      <br/><br/><br/>
      <button onClick={handleButtonClick}>디바운스 테스트</button>
      <br/><br/><br/>
      <button onClick={customThorrtleUseCallback}>스로틀 테스트</button>
      <div>clicktButton(버튼이벤트와 스로틀 비교): {clicktButton}</div>
      <div>clickthrottle(Custom): {clickthrottle}</div>
    </div>
  );
};


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
