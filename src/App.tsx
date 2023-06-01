import React, {useState ,useCallback} from 'react'
import GlobalStyled from './global'
import dinosaur from './imges/dinosaur.png'


const App:React.FC =() => {
  const [mouseHover, setMouseHover] =  useState<boolean>(false)
  const handleMouseEnter = useCallback(() => {
    setMouseHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseHover(false);
  }, []);
  
  return (
    <>
    <GlobalStyled info={mouseHover}/>
    <div className='world'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
      <section className='poster'>
        <h1 className='poster-title'>일분이에요</h1>
        <figure className='ilbuni'>
          <img src={dinosaur} alt='dinosaur'></img>
        </figure>
        <figure className='ilbuni '>
          <img src={dinosaur} alt='dinosaur'></img>
        </figure>
        <figure className='ilbuni '>
          <img src={dinosaur} alt='dinosaur'></img>
        </figure>
      </section>
    </div>
    </>
  )
}

export default App


// styled에서 JS로 동작을 하도록 하기 위해서는 TS 정의를 해주어야 합니다. 
// type ButtonProps = {
//   isPrimary: boolean;
// };

// const Button = styled.button<ButtonProps>`
//   background-color: ${props => (props.isPrimary ? 'blue' : 'gray')};
//   color: white;
//   padding: 8px 16px;
//   border: none;
// `;
 