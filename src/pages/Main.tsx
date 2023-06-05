import React from 'react'
import * as Code from '../components/main/codeblocks';
import CodeBlock from '../components/main/CodeBlock'

const Main: React.FC = () => {
  return (
    <div>
      Main
      <CodeBlock info={Code.mainCode1}/>
      <CodeBlock info={Code.mainCode2}/>
    </div>
  )
}

export default Main

