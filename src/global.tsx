import {createGlobalStyle} from 'styled-components';
import { GlobalStyledProps } from './types/global';

const GlobalStyled = createGlobalStyle<GlobalStyledProps>`
  * {
    margin: 0;
    padding: 0;
    @font-face {
    font-family: 'omyu_pretty';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  }
  body {
    .world{
      // 3D 공간을 만들어야 합니다.
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: lightblue;
      width: fit-content;
      height: fit-content;
      perspective: 500px;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // perspective 살펴보기
      // 컨테이너와 객체에 주는 것의 차이가 있습니다. 
    }


    img {
      max-width: 100%;
      height: auto;
    }

    @keyframes poster-ani {
      // from
      0% {
        transform: rotateY(-20deg);
      }
      // to
      100% {
        transform: rotateY(20deg);
      }
      
      // 무한반복 infinite
      // 속도가 일정하게 linear
      // 100 -> 0 으로 될 때 틱틱 팅기는 효과 방지 : alternate (번갈아갈까?)를 선언하면 됩니다. 
    }

    .poster {
      position: relative;
      width: 200px;
      height: 250px;
      background-color: yellow;
      border:  2px solid black;
      border-radius: 10px;
      animation: ${props => props.info ? "poster-ani 2s infinite linear alternate" : "none"};
      transform-style: ${props => props.info ? "preserve-3d" : "none"};
    }

    // poster까지는 CSS 3D가 적용되지만,
    // 그 하위까지는 적용되지 못하는 문제가 발생되어 transform: translateZ(30px); 적용되지 못하는 것을 봅니다. 
    // 이를 위해서 poster에 transform-style: preserve-3d; 추가해 봅시다. 
    .poster-title {
      padding: 0.5em 0; // font-size를 root-em 으로 선언했기에, 이에 대응하기 위해 padding은 em(2rem)으로 설정합니다.  
      font-size: 2rem;
      font-family: 'omyu_pretty';
      font-weight: normal;
      text-align: center ;
        // Z 깊이
    }

    .ilbuni {
      position: absolute;
      width: 40%;
    }

    .ilbuni:nth-of-type(1) {
      width: 25%;
      left: 42% ;
      bottom: 40%;
      transform: translateZ(5px);
    }
    .ilbuni:nth-of-type(2) {
      width: 45%;
      right: 10%;
      bottom: 10%;
      transform: translateZ(10px);
    }
    .ilbuni:nth-of-type(3) {
      width: 50%;
      left: 5%;
      bottom: 3%;
      transform: translateZ(30px);
    }
    @media screen and (max-width: 700px) {
    .world{
      top:0;
      transform: translate(-50%, 0);
    }
   }
   }
`

export default GlobalStyled