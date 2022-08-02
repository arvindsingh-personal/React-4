import React, { useDebugValue } from 'react'
import { useEffect, useState } from 'react'


export default function Countdown() {

  const [hr, setHr] = useState(0+"0");
  const [min, setMin] = useState(0+"0");
  const [sec, setSec] = useState(0+"0");
  let message = '';
  const  setTime = () => {
    let date = new Date();
    setHr(date.getHours());
    setMin(date.getMinutes());
    setSec(date.getSeconds());

  }

    const startCountdown = () => {
      setInterval(() => {
        setSec(sec => sec - 1)},1000);
    }

  useEffect( () => {

    if(sec === 0 && min !== 0) {
      setMin(min - 1);
      setSec(59);
      console.log(sec);
    }

    if(min === 0 && hr !== 0) {
      setMin(59);
      setHr(hr - 1);
    }

    if(hr === 0 && min === 0 && sec === 0) {
      message = "Time up";
      
    }
  },[sec])


  return (
    <div>
      <p>{hr}:{min}:{sec}</p>
      <button onClick={setTime}>Set Time</button>
      <p><button onClick={startCountdown}>Start</button></p>
      <h3>{message}</h3>
    </div>
  )
}
