// import { useState , useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// export default function App() {
//   let [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   let [windowHeight, setWindowHeight] = useState(window.innerHeight);

//   useEffect(() =>{
//     setWindowWidth(window.innerWidth);
//     // setWindowHeight(window.innerHeight);
//     console.log('Rerendering....');
//     },[windowWidth]

//   );

//   return (
//     <>
//     <div>
//       <h2>Width: {windowWidth}</h2>
//       <h2>Height: {windowHeight}</h2>
//     </div>
      
//     </>
//   )
// }


import React, { useState, useEffect } from 'react';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      console.log("Rendering...");
    };


    window.addEventListener('resize', handleResize);// then this part of code

    return () => {
      window.removeEventListener('resize', handleResize);// First this line of code executes
    };
  },[window.innerWidth]);

  return (
    <div>
      <h2>Width: {windowWidth}</h2>
      <h2>Height: {windowHeight}</h2>
    </div>
  );
}
