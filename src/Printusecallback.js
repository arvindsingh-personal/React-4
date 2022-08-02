import React, { useEffect, useState } from 'react'

export default function Printusecallback({ getItems }) {
  const [items, setItems] =useState([])
  useEffect(()=>{
    setItems(getItems())
    console.log('Updating Items....')
  },[getItems])
  
  return (
    <div>
      <ul> 
      {items.map(item=>(
        <li key={item}>{item}
        </li>
      ))}

      </ul>
    </div>
  )

}

//export default Printusecallback;