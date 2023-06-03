import React, {useEffect} from 'react'
import CardClick from '../assets/CardClick.png'
import WelCome from '../assets/WelCome.png'
import Home3DCard from '../components/home/Home3DCard';
import { ArrowFiguer, WelComeFiguer } from '../components/home/styled';
import { useRecoilState } from 'recoil';
import { globalBackground } from '../libs/recoil/globalBackground';


const Home: React.FC = () => {
  const [,setBackground] = useRecoilState(globalBackground)
  useEffect(() => {
    setBackground("#F6BB43")
    return () => {
      setBackground("#transparent")
    }
  },[setBackground])
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



