import {useState} from 'react';
import "./App.css";

export const App = () => {

  const[text, setText] = useState("")

  return (
    <div className='container'>
      <h2>input text</h2>
      {text}
      <form onSubmit={
        (e) => e.preventDefault()
      }>
        <input type="text" value={text}
          onChange={
            (e) => setText(e.target.value)
          }/>
        <input type="submit" value="追加"
          onSubmit={
            (e) => e.preventDefault()
          }/>
      </form>
    </div>
  )
}
