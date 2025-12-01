import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0)
  return (
    <div>
      <h2>Counter: {count}</h2>
      <p className={`${count > 0 ?"text-blue-400 ": "text-red-500"}`}>{count}</p>

      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}> - </button>

      <button onClick={()=> setCount(0)}>reset</button>
    </div>
  )
}

export default Counter
