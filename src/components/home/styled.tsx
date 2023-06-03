import styled from "styled-components";
import { CardOnMouseState, InfoArr } from "../../libs/types/componentsProps";


// * ----------------------------------------------------------------- * //
// Home.tsx WelComeFiguer
export const WelComeFiguer = styled.figure`
  display: none;
  img {
    width: 100%;
  }
  @media screen and (max-width: 850px) { 
    display:block;
    position: absolute;
    width: 400px;
    top: 45%;
    left: 70%;
    transform: translate(-50%,-50%);
  }
  @media screen and (max-width: 700px) {
    width: 300px;
    top: 75%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`

// Home.tsx ArrowFiguer
export const ArrowFiguer = styled.figure`
  position: absolute;
  width: 500px;
  top: 90%;
  left: 50%;
  transform: translate(-50%,-50%);

  img {
    width: 100%;
  }

  @media screen and (max-width: 850px) {
    top: 45%;
    left: 70%;
    transform: translate(-50%, 30%);
  }

  @media screen and (max-width: 700px) {
    top: 90%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`
// * ----------------------------------------------------------------- * //
// 3DCard 레이아웃
export const Layoyt = styled.div`
  // 3D 공간을 만들어야 합니다.
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  perspective: 500px;
  top:43%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  cursor: pointer;

  @media screen and (max-width: 850px) {
    top:50%;
    left: 3rem;
    transform: translate(0, -50%);
  }

  @media screen and (max-width: 700px) {
    top: 3rem;
    left: 50%;
    transform: translate(-50%, 0);
  }
`

export const Poster = styled.section<CardOnMouseState>`
  @keyframes poster-ani {
    // from
    0% {
      transform: rotateY(-15deg);
    }
    // to
    100% {
      transform: rotateY(15deg);
    }
  }

  position: relative;
  width: 400px;
  height: 500px;
  background-color: #FFCE55;
  border:  2px solid black;
  border-radius: 10px;
  animation: ${({ info }) => info ? `poster-ani 2.5s infinite linear alternate` : "none"};
  transform-style: ${({ info }) => info ? "preserve-3d" : "none"};

  @media screen and (max-width: 850px) {
    width: 200px;
    height: 250px;
    animation: poster-ani 2.5s infinite linear alternate;
    transform-style: preserve-3d;
  }
  @media screen and (max-width: 700px) {
    width: 300px;
    height: 375px;
  }
`

export const PosterTitle = styled.h1`
  padding: 0.5em 0; // font-size를 root-em 으로 선언했기에, 이에 대응하기 위해 padding은 em(2rem)으로 설정합니다.  
  font-size: 2rem;
  font-family: 'omyu_pretty';
  font-weight: normal;
  text-align: center;

  @media screen and (max-width: 850px) {
    font-size: 1rem;
  }
`

export const ProFileText = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-family: 'omyu_pretty';
  text-align: center;

  @media screen and (max-width: 850px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`

export const ProfileFigure = styled.figure`
  width: 90%;
  margin: 0 auto;
  img {
    max-width: 100%;
    height: auto;
  }
`

export const PointEmmoji = styled.figure<InfoArr>`
  position: absolute;
  width: ${({ info }) => info[0]};
  left: ${({ info }) => info[1]};
  bottom: ${({ info }) => info[2]};
  transform: translateZ(${({ info }) => info[3]});

  img {
    max-width: 100%;
    height: auto;
  }
`