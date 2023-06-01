## 라이브러리 
  ### styled-components
  ```bash
  yarn add styled-components
  yarn add @types/styled-components
  ```
  
  tsx에서 styled-components를 사용하기 위해서는 타입선언을 해주어야 한다. 위의 터미널 명렁어에서 @types을 설정하지 않으면 모듈 'styled-components'에 대한 선언 파일을 찾을 수 없다는 에러를 볼 수 있다. 이는 타입 선언 파일이 설치되지 않았기 때문에 발생되는 문제로, 터미널 두번째 줄을 선언하면, 해당 프로젝트에서 styled-components를 사용할 수 있게 된다. 