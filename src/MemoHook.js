import React from 'react'
import { useState, useMemo } from 'react'

export default function MemoHook() {
  const [Value, setValue] = useState('');
  const [theme, setTheme] = useState('white');
  const [textColor, setColor] = useState('black');
  let result = useMemo(() => print(Value), [Value]);

  const Theme = () => {
    setTheme(theme === 'white'?'black':'white');
    setColor(textColor === 'black'?'white':'black');
  }

  const Change = (event) => {
    let temp = event.target.value;
    setValue(temp)
    console.log(Value);
  }

  return (
    <div
      style={{ border: '1px solid gray', padding: '5rem', textAlign: 'start', margin: '1vw auto', width: '50%', background: theme,color:textColor }}>
      <input
        style={{ width: '30vw', fontSize: '2vw', padding: '1vw' }}
        type='number' value={Value} onChange={Change} /><br />
      <button
        style={{ width: '30.8vw', fontSize: '2vw', padding: '1vw' }}
        onClick={Theme}>Toggle Theme</button>
      {result}
    </div>
  )

}

const print = (num) => {
  if (num !== '') {
    return (
      <>
        <p>{Number(num)}</p>
        <p>{Number(num) + 1}</p>
        <p>{Number(num) + 2}</p>
      </>
    )
  }
  else {
    return ('');
  }
}