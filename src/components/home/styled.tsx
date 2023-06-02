import styled from "styled-components";
import { CardOnMouseState, cardPointItemSize } from "../../libs/types/componentsProps";


export const Layoyt = styled.div`
      // 3D 공간을 만들어야 합니다.
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      height: fit-content;
      perspective: 500px;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // perspective 살펴보기
      // 컨테이너와 객체에 주는 것의 차이가 있습니다. 

    // poster까지는 CSS 3D가 적용되지만,
    // 그 하위까지는 적용되지 못하는 문제가 발생되어 transform: translateZ(30px); 적용되지 못하는 것을 봅니다. 
    // 이를 위해서 poster에 transform-style: preserve-3d; 추가해 봅시다. 


  @media screen and (max-width: 850px) {
      top:50%;
      left: 25%;
  }

  @media screen and (max-width: 700px) {
      top: 25%;
      left: 50%;
  }
`
export const Poster = styled.section<CardOnMouseState>`
@keyframes poster-ani {
      // from
      0% {
        transform: rotateY(-20deg);
      }
      // to
      100% {
        transform: rotateY(20deg);
      }
    }
      position: relative;
      width: 200px;
      height: 250px;
      background-color: #FFCE55;
      border:  2px solid black;
      border-radius: 10px;
      animation: ${({ info }) => info ? `poster-ani 2s infinite linear alternate` : "none"};
      transform-style: ${({ info }) => info ? "preserve-3d" : "none"};
           // 무한반복 infinite
      // 속도가 일정하게 linear
      // 100 -> 0 으로 될 때 틱틱 팅기는 효과 방지 : alternate (번갈아갈까?)를 선언하면 됩니다. 


    @media screen and (max-width: 850px) {
      animation: poster-ani 2s infinite linear alternate;
      transform-style: preserve-3d;
    }
`

export const PosterTitle = styled.h1`
      padding: 0.5em 0; // font-size를 root-em 으로 선언했기에, 이에 대응하기 위해 padding은 em(2rem)으로 설정합니다.  
      font-size: 2rem;
      font-family: 'omyu_pretty';
      font-weight: normal;
      text-align: center;
`

export const PointEmmoji = styled.figure<cardPointItemSize>`
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