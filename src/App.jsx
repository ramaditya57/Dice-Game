import { useState } from 'react'
import './App.css'
import Home_hero from './Components/Hero/Home_hero'
import GamePlay from './Components/GamePlay/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toogleGamePlay = ()=>{
    setIsGameStarted((prev) => !prev);
  };
  
  return (
    <>
      {isGameStarted ? <GamePlay /> : <Home_hero toogle={toogleGamePlay} />}
    </>
  )
}

export default App
