import React, {useState} from 'react';
import "./App.css";


function App() {
  const initialState = 0
  const [count, setCount] = useState(initialState);

  return (
    <>
      <div className="counter">
        <h2>count: {count}</h2>
        <button onClick={
          () => setCount(initialState)
        }>Reset</button>
        <button onClick={
          () => setCount(prevCount => prevCount + 1)
        }>Count Up</button>
        <button onClick={
          () => setCount(prevCount => prevCount - 1)
        }>Count Down</button>
      </div>
    </>
  );
}

export default App;
