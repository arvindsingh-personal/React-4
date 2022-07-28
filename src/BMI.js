import React, { Component } from 'react'
import './style.css'


export default class BMI extends Component {

  constructor() {
    super();
    this.state = {
      weight: 0,
      height: 0,
      result: null,
      flag: ''
    }
  }

  Kgs = () => {
    this.setState({ flag: 'kgs' })
  }

  Ponds = () => {
    this.setState({ flag: 'pounds' })
  }


  value1 = (event) => {
    this.setState({
      weight: event.target.value
    })
  }

  value2 = (event) => {
    this.setState({
      height: event.target.value
    })
  }

  CalculateKgs = () => {
    let Computation = '';
    let Weight;
    let Height;

    Weight = this.state.weight;
    Height = this.state.height / 100;

    if (Weight !== 0 && Height !== 0) {

      Computation = Weight / (Height * Height);

    }

    this.setState({
      result: Computation
    })
  }

  CalculatePounds = () => {
    let Computation = '';
    let Weight;
    let Height;

    Weight = this.state.weight;
    Height = this.state.height;

    if (Weight !== 0 && Height !== 0) {

      Computation = (Weight / (Height * Height)) * 703;

    }

    this.setState({
      result: Computation
    })
  }

  render() {
    const Check = this.state.flag;

    if (Check === '') {
      return (
      <div className='first_page'>
        <h1>BMI Calculator</h1>
        <button onClick={this.Ponds}>In Pounds and Inches</button>
        <button onClick={this.Kgs}>In Kgs and Meters</button>
      </div>
      )
    }

    if (Check === 'kgs') {
      let message = "";
      if (this.state.result !== null && this.state.result !== '') {
        let Result = Number(this.state.result);
        Result = Result.toFixed(2);
        console.log(Result)

        if (Result < 18.5) {
          message = <tr><th>Weight Status:</th><th>{this.Result} Under Weight</th></tr>
        }
        else if (Result >= 18.5 && Result <= 25) {
          message = <tr><th>Weight Status:</th><th>{Result} Healthy Weight</th></tr>
        }
        else if (Result > 25.0 && Result <= 29.9) {
          message = <tr><th>Weight Status:</th><th>{Result} Over Weight</th></tr>
        }
        else if (Result > 29.9) {
          message = <tr><th>Weight Status:</th><th>{Result} Obesity</th></tr>
        }
      }
      return (
        <>
          <div className='table-div' >
            <h1>BMI Calculator in Kgs</h1>
            <table>
              <tr>
                <th>Weight:</th>
                <th><input type='text' placeholder='Weight in kgs' onChange={this.value1} /></th>
              </tr>
              <tr>
                <th>Height:</th>
                <th><input type='text' placeholder='Height in cm' onChange={this.value2} /></th>
              </tr>
              <tr>
                <th></th>
                <th><button onClick={this.CalculateKgs}>Calculate</button></th>
              </tr>
              {message}
            </table>
          </div>

        </>
      )
    }

    if (Check === 'pounds') {

      let message = "";
      if (this.state.result !== null && this.state.result !== '') {
        let Result = Number(this.state.result);
        Result = Result.toFixed(2);
        console.log(Result)

        if (Result < 18.5) {
          message = <tr><th>Weight Status:</th><th>{this.Result} Under Weight</th></tr>
        }
        else if (Result >= 18.5 && Result <= 25) {
          message = <tr><th>Weight Status:</th><th>{Result} Healthy Weight</th></tr>
        }
        else if (Result > 25.0 && Result <= 29.9) {
          message = <tr><th>Weight Status:</th><th>{Result} Over Weight</th></tr>
        }
        else if (Result > 29.9) {
          message = <tr><th>Weight Status:</th><th>{Result} Obesity</th></tr>
        }
      }

      return (
        <div className='table-div'>
          <h1>BMI Calculator in Pounds</h1>
          <table>
            <tr>
              <th>Weight:</th>
              <th><input type='text' placeholder='Weight in pounds' onChange={this.value1} /></th>
            </tr>
            <tr>
              <th>Height:</th>
              <th><input type='text' placeholder='Height in inches' onChange={this.value2} /></th>
            </tr>
            <tr>
              <th></th>
              <th><button onClick={this.CalculatePounds}>Calculate</button></th>
            </tr>
            {message}
          </table>
        </div>
      )
    }
  }
}
