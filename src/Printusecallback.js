import React from 'react'

export default function Printusecallback({ num }) {
  if(num !== ''){
  return (
    <div>
      <>
        <p>{Number(num)}</p>
        <p>{Number(num) + 1}</p>
        <p>{Number(num) + 2}</p>
      </>
    </div>
  )
}
else {
  return ('');
}
}