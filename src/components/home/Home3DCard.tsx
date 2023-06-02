import React from 'react'
import dinosaur from '../../assets/dinosaur.png'
import profile from '../../assets/Edwin.png'
import * as Card from './styled';
import { use3DCardState } from '../../hooks/home/use3DCardState';
import { useNavigate } from 'react-router-dom';


const Home3DCard: React.FC = () => {
  const {mouseHover, handleMouseEnter, handleMouseLeave} = use3DCardState()
  const navigate = useNavigate()

  return (
    <Card.Layoyt
      onClick={() => navigate('/main')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      
      <Card.Poster info={mouseHover}>
        <Card.PosterTitle children="Edwin-Blog" />
        <Card.ProfileFigure 
          children={<img src={profile} alt='profile'/>} />
        <Card.ProFileText>
          I'm Front-End <br/>
          Junior Developer
        </Card.ProFileText>  
        <Card.PointEmmoji
          info={["25%", "80%", "75%", "5px"]}
          children={<img src={dinosaur} alt='dinosaur' />} />
        <Card.PointEmmoji
          info={["35%", "75%", "25%", "10px"]}
          children={<img src={dinosaur} alt='dinosaur' />} />
        <Card.PointEmmoji
          info={["50%", "-10%", "20%", "13px"]}
          children={<img src={dinosaur} alt='dinosaur' />} />
      </Card.Poster>
    </Card.Layoyt>
  )
}

export default Home3DCard


