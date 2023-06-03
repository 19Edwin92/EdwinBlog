import React from 'react'
import GlobalStyled from './global'
import Router from './libs/router/Router'
import { useRecoilValue } from 'recoil'
import { globalBackground } from './libs/recoil/globalBackground'



const App:React.FC =() => {
  const background = useRecoilValue(globalBackground)
  return (
    <>
    <GlobalStyled info={background}/>
      <Router />
    </>
  )
}

export default App