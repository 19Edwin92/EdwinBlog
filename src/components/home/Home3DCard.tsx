import React from 'react'
import dinosaur from '../../assets/dinosaur.png'
import * as Card from './styled';
import { use3DCardState } from '../../hooks/home/use3DCardState';

const Home3DCard: React.FC = () => {
  const {mouseHover, handleMouseEnter, handleMouseLeave} = use3DCardState()

  return (
    <Card.Layoyt
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Card.Poster info={mouseHover}>
        <Card.PosterTitle children="Edwin-Blog" />
        <Card.PointEmmoji
          info={["25%", "42%", "40%", "5px"]}
          children={<img src={dinosaur} alt='dinosaur' />} />
        <Card.PointEmmoji
          info={["45%", "50%", "10%", "10px"]}
          children={<img src={dinosaur} alt='dinosaur' />} />
        <Card.PointEmmoji
          info={["50%", "5%", "3%", "30px"]}
          children={<img src={dinosaur} alt='dinosaur' />} />
      </Card.Poster>
    </Card.Layoyt>
  )
}

export default Home3DCard