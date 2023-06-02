import React from 'react'
import CardClick from '../assets/CardClick.png'
import WelCome from '../assets/WelCome.png'
import Home3DCard from '../components/home/Home3DCard';
import { ArrowFiguer, WelComeFiguer } from '../components/home/styled';


const Home: React.FC = () => {

  return (
    <>
      <Home3DCard/>
      <WelComeFiguer
        children={<img src={WelCome} alt='WelCome'/>}/>
      <ArrowFiguer 
        children={<img src={CardClick} alt='arrow'/>}/>
    </>
  )
}

export default Home



