import './App.css';
import { useState } from 'react'
import Molecontainer from './Molecontainer'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<Molecontainer key={i} setScore={setScore} score={score} />)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>React-A-Mole</h1>
          <h1>{score}</h1>
      {createMoleHill()}
    </div>
  );
}

export default App;
