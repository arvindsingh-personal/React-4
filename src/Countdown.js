import React, { useDebugValue } from 'react'
import { useEffect, useState } from 'react'


export default function Countdown() {
  let date = new Date();
  const [hr, setHr] = useState(date.getHours());
  const [min, setMin] = useState(date.getMinutes());
  const [sec, setSec] = useState(10);

  function startCountdown() {
    setInterval(Counter, 1000);
  }

  function Counter(){
    console.log(sec);
      

    let s = sec;  // 58
    let m = min;
    let h = hr;
    s = s - 1;   // 57
    console.log(s);
    if (s < 1) {
      m = m - 1;
      s = 59;
    }
    setHr(h => h);
    setMin(m => m);
    setSec(s => s - 1);
  }

  return (
    <div>
      <p>{hr}:{min}:{sec}</p>
      <p><button onClick={startCountdown}>Start</button></p>
    </div>
  )
}
