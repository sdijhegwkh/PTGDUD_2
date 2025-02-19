import { useState } from 'react'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState('')
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operation, setOperation] = useState('add')
  const [result, setResult] = useState(null)
  const [chosenButton, setChosenButton] = useState('')
  const [task, setTask] = useState('')
  const [tasksList, setTasksList] = useState([])

  const calculate = () => {
    let res = 0
    switch (operation) {
      case 'cong':
        res = num1 + num2
        break
      case 'tru':
        res = num1 - num2
        break
      case 'nhan':
        res = num1 * num2
        break
      case 'chia':
        if (num2 !== 0) {
          res = num1 / num2
        } else {
          res = 'Không chia cho 0'
        }
        break
      default:
        break
    }
    setResult(res)
  }
  const handleButtonClick = (language) => {
    setChosenButton(language)
  }
  const addTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]) 
      setTask('') 
    }
  }
  const removeTask = (index) => {
    const updatedTasks = tasksList.filter((_, i) => i !== index)
    setTasksList(updatedTasks) 
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <input 
      type="text" 
      value={userInput} 
      onChange={(e) => setUserInput(e.target.value)} 
      placeholder="Hãy nhập gì đó "
      />
      {userInput && <p>Hello {userInput}!</p>}
      <h1>Máy tính</h1>
      <input 
        value={num1} 
        onChange={(e) => setNum1(Number(e.target.value))} 
        placeholder="Nhập số đầu tiên"
      />
      <input 
        value={num2} 
        onChange={(e) => setNum2(Number(e.target.value))} 
        placeholder="Nhập số thứ hai"
      />
      <div>
        <input 
          type="radio" 
          id="cong" 
          name="operation" 
          value="cong" 
          checked={operation === 'cong'} 
          onChange={() => setOperation('cong')}
        />
        <label htmlFor="cong">Cong</label>

        <input 
          type="radio" 
          id="tru" 
          name="operation" 
          value="tru" 
          checked={operation === 'tru'} 
          onChange={() => setOperation('tru')}
        />
        <label htmlFor="tru">Tru</label>

        <input 
          type="radio" 
          id="nhan" 
          name="operation" 
          value="nhan" 
          checked={operation === 'nhan'} 
          onChange={() => setOperation('nhan')}
        />
        <label htmlFor="nhan">Nhan</label>

        <input 
          type="radio" 
          id="chia" 
          name="operation" 
          value="chia" 
          checked={operation === 'chia'} 
          onChange={() => setOperation('chia')}
        />
        <label htmlFor="chia">Chia</label>
      </div>
      <button onClick={calculate}>Tính</button>
      {result !== null && <p>Ket qua: {result}</p>}
      <h1>Chon nut </h1>

      <button onClick={() => handleButtonClick('Java')}>Java</button>
      <button onClick={() => handleButtonClick('C++')}>C++</button>
      <button onClick={() => handleButtonClick('JavaScript')}>JavaScript</button>
      <button onClick={() => handleButtonClick('Python')}>Python</button>
      {chosenButton && <p>Ban chon: {chosenButton}</p>}
      <h1>Todo List</h1>

      <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Nhap cong viec"
    />
      <button className="button" onClick={addTask}>Them</button>
      <ul>
      {tasksList.map((task, index) => (
      <li key={index}>
      {task}
      <button className="remove-button" onClick={() => removeTask(index)}>Xoa</button>
      </li>
      ))}
      </ul>
    </div>

  )
}

export default App
