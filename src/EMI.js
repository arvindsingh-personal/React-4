import React, { Component } from 'react'
import './style.css'
export default class EMI extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      months: '',
      interest: '',
      EMI: 0,
      statuss:''
    }
  }

  amount = (event) => {

    this.setState({
      amount: event.target.value
    })
  }

  month = (event) => {

    this.setState({
      months: event.target.value
    })
  }

  interest = (event) => {

    this.setState({
      interest: event.target.value
    })
  }

  calaculate = () => {
    const P = this.state.amount;
    const r = this.state.interest;
    const n = this.state.months;
    let emi = 0;
    if (P != '' && r != '' && n != '') {
      emi = (P * (r / 1200) * Math.pow((1 + (r / 1200)), n)) / ((Math.pow((1 + (r / 1200)), n)) - 1);
      emi = emi.toFixed(2);
    }


    this.setState({
      EMI: emi,
      statuss: 'calci'
    })
  }

  details = () => {
    const P = this.state.amount;
    const r = this.state.interest;
    const n = this.state.months;
    let emi = 0;
    if (P != '' && r != '' && n != '') {
      emi = (P * (r / 1200) * Math.pow((1 + (r / 1200)), n)) / ((Math.pow((1 + (r / 1200)), n)) - 1);
      emi = emi.toFixed(2);
    }


    this.setState({
      EMI: emi,
      statuss:'details'
    })
  }


  clear = () => {
    this.setState({
      amount: '',
      months: '',
      interest: '',
      EMI: 0

    })
  }

  render() {

    const EMI = this.state.EMI;
    let message1 = '';
    let message2 = '';
    let label1 = '';
    let total_interest = '';
    let total_payment = '';
    let v = '';

    if (this.state.EMI != 0 && this.state.statuss == 'calci') {
  
      label1 = 'EMI'
      message1 = EMI;
    }

    if(this.state.EMI != 0 && this.state.statuss == 'details') {
      total_payment = (EMI * this.state.months);
      // total_payment = 
      total_payment = Number(total_payment).toFixed(2);
      total_interest = total_payment - this.state.amount;
      total_interest = Number(total_interest).toFixed(2);
        message2 = <div> <p> <span>Monthly EMI: {EMI}</span> </p>
        <p> <span>Total Interest: {total_interest}</span> </p>
        <p> <span>Total Payment: {total_payment}</span> </p>
        </div>
    }

    return (
      <div className='calci'>
        <div className='head'><h3>EMI Loan Calculator</h3></div>
        <div className='amount'>
          <label>Loan Amount: </label><input type='number' min="0" value={this.state.amount} onChange={this.amount} />
        </div>
        <div className='tenure'>
          <label>Loan Tenure: </label><input type='number' min="0" value={this.state.months}  onChange={this.month} />
        </div>
        <div className='interest'>
          <label>Interest Rate: % </label><input type='number' min="0" value={this.state.interest}  onChange={this.interest} />
        </div>

        <div className='emi'>
          <div>{label1}</div>
          <div>{message1}</div>
        </div>

        <div className='btn'>
          <div><button onClick={this.clear}>Clear</button></div>
          <div><button onClick={this.calaculate}>Calculate</button></div>
          <div><button onClick={this.details}>Details</button></div>
        </div>

        <div className='output'>
          <p>Answer:</p><br/>

          <p className='details'>{message2}</p>
        </div>

      </div>
    )
  }
}
// oninput="this.value =
//  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null"