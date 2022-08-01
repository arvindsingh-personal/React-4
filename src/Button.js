import React from 'react'
import { useEffect, useState } from 'react'

export default function Button() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Click on the below button</h3>
      <button
      style={{width:'15vw', height:'5vh'}}
      onClick={() => setCount((c) => c + 1)} >{count}</button>
    </div>
  )
}
