import logo from './logo.svg';
import './style.css'
import React, { Component } from 'react';


export default class Theme extends Component {
  state = {
    text: 'Dark',
    color: '',
    txt: "White"
  }

  Change1 = () => {

    this.setState({
      txt: "Dark"
    })


  }
  Change2 = () => {

    this.setState({
      txt: "Light"
    })


  }
  Change3 = () => {

    this.setState({
      txt: "Party"
    })


  }

  render() {

    var result = ""

    if (this.state.txt === "White") {

      result = <div className="Theme" id='Theme' >
        <h1>React Themes Demo</h1>
        <div className='btn'>

        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

    }
    if (this.state.txt === "Dark") {

      result = <div className="Theme" id='Theme' style={{ backgroundColor: "black" }} >
        <h1>React Themes Demo</h1>
        
        <img src={logo} className="App-logo" alt="logo" />
      </div>

    }
    if (this.state.txt === "Light") {

      result = <div className="Theme" id='Theme' style={{ backgroundColor: "lightblue" }}>
        <h1>React Themes Demo</h1>
      
        <img src={logo} className="App-logo" alt="logo" />
      </div>

    }
    if (this.state.txt === "Party") {

      result = <div className="Theme" id='Theme' style={{ backgroundImage:'url(https://media0.giphy.com/media/vuNV05pQlsY4psu9IY/giphy.gif)' }}>
        <h1>React Themes Demo</h1>
        
        <img src={logo} className="App-logo" alt="logo" />
      </div>

    }

    return (
      <>
      <div className='btn'>
        <button onClick={this.Change1}>Dark</button>
        <button onClick={this.Change2}>Light</button>
        <button onClick={this.Change3}>Party</button>
        </div>
        {result}
      </>
    )
  }
}