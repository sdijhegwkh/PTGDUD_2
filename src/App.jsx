import { useState } from 'react'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState('')
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operation, setOperation] = useState('add')
  const [result, setResult] = useState(null)

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
          res = 'Khong chia cho 0'
        }
        break
      default:
        break
    }
    setResult(res)
  }

  return (
    <div className="App">
      <h1>Xin chao</h1>
      <input 
      type="text" 
      value={userInput} 
      onChange={(e) => setUserInput(e.target.value)} 
      placeholder="Hay nhap gi do "
      />
      {userInput && <p>Hello {userInput}!</p>}
      <h1>May tinh</h1>
      <input 
        value={num1} 
        onChange={(e) => setNum1(Number(e.target.value))} 
        placeholder="Nhap so dau tien"
      />
      <input 
        value={num2} 
        onChange={(e) => setNum2(Number(e.target.value))} 
        placeholder="Nhap so thu hai"
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
      <button onClick={calculate}>Tinh</button>
      {result !== null && <p>Ket qua: {result}</p>}

    </div>

  )
}

export default App
