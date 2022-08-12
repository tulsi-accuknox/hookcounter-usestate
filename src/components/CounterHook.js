import React, {useState} from 'react'
import './CounterHook.css'

function CounterHook() {
const initialCount  = 0
  const [count, setCount] = useState(initialCount)

  let decCount = () => {
    if(count>0){
        setCount(count-1)
    }
  }

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(initialCount)}>Reset </button> <br />
        <button onClick={ () => setCount(count + 1)}>Increment </button> <br />
        <button onClick={decCount}>Decrement </button>
    </div>
  )
}

export default CounterHook