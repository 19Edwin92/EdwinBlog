## 라이브러리 
  ### styled-components
  ```bash
  yarn add styled-components
  yarn add @types/styled-components
  ```
  
  tsx에서 styled-components를 사용하기 위해서는 타입선언을 해주어야 한다. 위의 터미널 명렁어에서 @types을 설정하지 않으면 모듈 'styled-components'에 대한 선언 파일을 찾을 수 없다는 에러를 볼 수 있다. 이는 타입 선언 파일이 설치되지 않았기 때문에 발생되는 문제로, 터미널 두번째 줄을 선언하면, 해당 프로젝트에서 styled-components를 사용할 수 있게 된다. 

  ### react-router-dom
  ```bash
  yarn add react-router-dom
  ```

  SPA 기반 CSR 리액트의 라우터 구성을 위한 라이브러리, 추후 SSR을 지원하는 Next.js로 전환할 예정

  ### react-syntax-highlighter
  ```bash
    yarn add react-syntax-highlighter
    yarn add --dev @types/react-syntax-highlighter
  ```
  
  컴포넌트에서 소스코드에 대한 코드블럭을 표현할 때 사용되는 라이브러리 
  - https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD
  - import { InfoBackground } from '../libs/types/componentsProps';
  - 해당 사이트에서 살펴볼 수 있다. 

## 미디어쿼리를 위한 기준 설정 
  - 아이폰 12pro : 390 x 844
  - 아이패드 Air :        820 x 1180
  - 아이패드 Mini :       768 x 1024
  - 3단계로 구분하여 적용하고자 함
    - 850px~이상 구간 : 아이패드 긴 가로, 데스크탑
    - 700~850px 구간 : 모바일 긴 가로, 아애패드 짧은 가로 
    - 700px 이하 구간 : 1분코딩의 조언에 따라서 가로가 짧은 모바일

