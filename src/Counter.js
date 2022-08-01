import React from 'react'
import { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div style={{margin:'1px auto', width:'30vw'}}>
        <h2>Counter</h2>
        <div
        style={{fontSize:'2vw'}}
        >{count}</div>
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button onClick={() => setCount((c) => c - 1)}>decrement</button>
            <button  onClick={() => setCount((c) => 0)}>Reset</button>
        </div>
    </div>
  )
}
