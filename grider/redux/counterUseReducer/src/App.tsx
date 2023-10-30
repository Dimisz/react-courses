import { useState } from 'react'

import './App.css'
import Button from './components/Button'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((c) => c + 1);
  }

  const decrement = () => {
    setCount((c) => c - 1);
  }

  return (
    <>
      <div style={{
          display: 'flex',
          alignContent: 'space-between',
          flexDirection: 'column'
        }}>
        <h1>Count is {count}</h1>
        <div style={{width: '100%'}}>
          <Button handleClick={increment} title='Increment'/>
          <Button handleClick={decrement} title='Decrement'/>
        </div>
        <div style={{width: '100%'}}>
          <Form currentCount={count} setCount={setCount}/>
        </div>
      </div>
    </>
  )
}

export default App
