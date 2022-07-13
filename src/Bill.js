import React, { Component } from 'react'
import './style.css'

export default class Bill extends Component {
  constructor() {
    super();
    this.state = {
      units: 0,
      total_units:0,
      result:0
    }
  }

  value = (event) => {
    this.setState({
      units: event.target.value
    })
  }

  Calculate = (event) => {
    this.setState({
      total_units: this.state.units
    });
  }

  render() {
    let computation = '';
    if(this.state.total_units !== 0) {
    const total= this.state.total_units;
    
    if( total <= 50 ) {
     computation = total * 3.50;
     computation =  `Amount for ${total} units:  Rs. `+computation
    }
    else if ( total > 50 && total <= 150) {
      computation = (50 * 3.50) + ( (total-50) * 4 );
      computation =  `Amount for ${total} units: Rs. `+computation
    }
    else if ( total > 150 && total <= 250) {
      computation = (50 * 3.50) + (100 * 4) + ( (total-150) * 5.20  );
      computation = `Amount for ${total} units: Rs. `+computation
    }
    else {
      computation = (50 * 3.50) + (100 * 4) + ( 100 * 5.20  ) + ( (total-250) * 6.50 );
      computation =  `Amount for ${total} units: Rs. `+computation
    }
  }
    return (
      <div className='bill'>
        <div> <p>Electricity Bill Calculator</p></div>
        <div>
        <label>Units: </label>
        <input type='text' placeholder='Enter bill units' onChange={this.value} />
        </div>
        <button onClick={this.Calculate}>Calculate Bill</button>
        <p id='variable'>
        {computation}
        </p>
      </div>
    )
  }
}
