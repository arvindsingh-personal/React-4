import React, { Suspense } from 'react'
import { useState, createContext } from 'react'
import './currencyconverter.css'
import GetCurrency from './GetCurrency';
export const currencyContext = createContext();

export default function CurrencyConverter() {
  const [lnote1, setlnote1] = useState('USD');
  const [rnote1, setrnote1] = useState('INR');
  const [lnote2, setlnote2] = useState('INR');
  const [rnote2, setrnote2] = useState('USD');

  const [amount, setAmount] = useState('');
  const [f, changeF] = useState('');
  const [t, changeT] = useState('')
  const [from, changeFrom] = useState('');
  const [to, changeTo] = useState('');

  const setValues = () => {
    if (amount === '') {
      alert("Enter Amount");
      return;
    }
    changeFrom(f);
    changeTo(t);
  }
  const Swap = () => {
    if (f === 'USD' && t === 'INR') {
      setlnote1(t);
      setrnote1(f);
      setlnote2(f);
      setrnote2(t);
      changeF('INR');
      changeT('USD');
    }
    if (f === 'INR' && t === 'USD') {
      setlnote1(t);
      setrnote1(f);
      setlnote2(f);
      setrnote2(t);
      changeF('USD');
      changeT('INR');
    }
  }

  return (
    <div className='converter'>
      <h2>Currency Converter</h2>

      <div className='amount'>
        <p>Enter Amount</p>
        <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>

      <div className='swap'>

        <div className='from'>
          <p>From</p>
          <select onChange={(e) => changeF(e.target.value)}>
            <option selected disabled>Select Country</option>
            <option value={lnote1}>{lnote1}</option>
            <option value={lnote2}>{lnote2}</option>
          </select>
        </div>

        <div className='icon'>
          <p><i class="fa-solid fa-right-left" onClick={Swap}></i></p>
        </div>

        <div className='to'>
          <p>To</p>
          <select onChange={(e) => changeT(e.target.value)}>
            <option selected disabled>Select Country</option>
            <option value={rnote1}>{rnote1}</option>
            <option value={rnote2}>{rnote2}</option>
          </select>
        </div>

      </div>
      <currencyContext.Provider value={{ from, to, amount }} >
        <GetCurrency />
      </currencyContext.Provider>

      <div><button onClick={setValues}>Get Exchange Rate</button></div>

    </div>
  )
}
