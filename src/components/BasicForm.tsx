import {useState} from 'react';
import "../App.css";

function BasicForm() {
  const [text, setText] = useState("")

  const submitForm = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    console.log(text)
  }
  return (
    <div className='container'>
      <h2>Basic Form</h2>
      <div>
        <form>
          <input type="text"
            value={text}
            onChange={
              (e) => setText(e.target.value)
            }/>
          <button onClick={submitForm}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BasicForm;
