import React from 'react'
import { useContext } from 'react'
import { currencyContext } from './CurrencyConverter';

export default function GetCurrency() {
  let { from, to, amount } = useContext(currencyContext);
  let result;
  if (from === 'USD' && to === 'INR') {
    let inr = 79.09 * Number(amount);
    inr = inr.toFixed(3);
    result = amount + " USD = " + inr + " INR "
  }
  if (from === 'INR' && to === 'USD') {
    let usd = Number(amount) / 79.09;
    usd = usd.toFixed(3);
    result = amount + " INR = " + usd + " USD "
  }
  return (
    <div style={{marginTop:'2rem', textAlign:'left'}}>
      {result}
    </div>
  )
}
