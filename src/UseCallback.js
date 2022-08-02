import React from 'react'
import { useState, useMemo, useCallback } from 'react'
import Printusecallback from './Printusecallback';

export default function UseCallback() {
  const [Value, setValue] = useState('');
  const [theme, setTheme] = useState('white');
  const [textColor, setColor] = useState('black');
  let Change = useCallback((event) => {
   setValue(event.target.value);
  });

  const Theme = () => {
    setTheme(theme === 'white' ? 'black' : 'white');
    setColor(textColor === 'black' ? 'white' : 'black');
  }



  return (
    <div
      style={{ border: '1px solid gray', padding: '5rem', textAlign: 'start', margin: '1vw auto', width: '50%', background: theme, color: textColor }}>
      <input
        style={{ width: '30vw', fontSize: '2vw', padding: '1vw' }}
        type='number' value={Value} onChange={Change} /><br />
      <button
        style={{ width: '30.8vw', fontSize: '2vw', padding: '1vw' }}
        onClick={Theme}>Toggle Theme</button>
      <Printusecallback num={Value} />
    </div>
  )

}
