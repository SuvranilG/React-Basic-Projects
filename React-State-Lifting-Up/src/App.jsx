import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Child from './components/Child'
import Logic from './components/Logic'

function App() {
  let [text,setText]=useState("");
  function getText(data) {
    // console.log(data);
    setText(data);
  }

  return (
    <>

    <Child getText={getText}/>

    {/* <Logic/> */}
    {console.log(`Text rendered from App component:`+text)}
    {text && <h2 className=' text-yellow-300'>Text rendered from App component: {text}</h2>}
    
    <h1 className=' text-yellow-300'>Suvra</h1>
    
    </>
  )
}

export default App
