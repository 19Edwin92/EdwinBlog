import React from 'react'
import GlobalStyled from './global'
import Router from './libs/router/Router'



const App:React.FC =() => {
  return (
    <>
    <GlobalStyled/>
    <Router />
    </>
  )
}

export default App