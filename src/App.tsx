import {useState} from 'react';
import "./App.css";

type Todo = {
  value: string
}

export const App = () => {

  const [text, setText] = useState("")
  const [todos, setTodos] = useState < Todo[] > ([])

  // コールバック関数でpropsで渡せるようにする
  const handleOnChange = (e : React.ChangeEvent < HTMLInputElement >) => {
    setText(e.target.value)
  }

  // for todo submit event
  const handleOnSubmit = () => { // 未入力は返す
    if (!text) {
      return
    } else { /**
       * 新規Todo用定数の作成
       **/
      const newTodo: Todo = { // フォームの入力値, 型はvalue: string
        value: text // 入力値はuseStateの値と連動
      }
      // スプレッド構文を用いて todos ステートのコピーへ newTodo を追加する
      setTodos([
        newTodo,
        ...todos
      ])
      // フォームクリア
      setText('')
    }
  }


  return (
    <div className='container'>
      <h2>input text</h2>

      {/* Form */}
      <form onSubmit={
        (e) => {
          e.preventDefault()
          handleOnSubmit()
        }
      }>
        {/* input */}
        <input type="text"
          value={text}
          onChange={
            (e) => handleOnChange(e)
          }/> {/* Submit */}
        <input type="submit" value="追加"
          onSubmit={handleOnSubmit}/>
      </form>
    </div>
  )
}
