import React, { Component } from "react";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        data: [],
      };
    }
  }
  fetchData = () => {};

  componentDidMount() {
   
  }
  render() {
    return (
      <div>
        <div className="booking-form-box">
          <div className="page-title">
            <h2>Payment</h2>
          
            <br></br> <br></br>
            <hr></hr>
          </div>
          <div className="booking-form">
            <div className="center">
                <p>Card Number</p>
                <p>No Card Available</p>
                <input type="button" value="Add Card" className="btn btn-primary flight"
 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
