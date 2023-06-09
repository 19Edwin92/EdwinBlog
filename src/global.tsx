import {createGlobalStyle} from 'styled-components';
import { InfoString } from './libs/types/componentsProps';


const GlobalStyled = createGlobalStyle<InfoString>`
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
    background-color: ${({info}) => info};
  }
  div {
    box-sizing: border-box;
  }
`

export default GlobalStyled  