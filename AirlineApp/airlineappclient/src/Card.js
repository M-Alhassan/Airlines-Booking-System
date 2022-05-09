import React, { Component } from "react";

export default class Card extends Component {
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
            <div className="card-info">
                <p>Card Number</p>
                <input type="text" name="cardnumber" className="form-control" />
                <div className="text-center">
                    <br></br>
                <input type="button" value="Pay" className="btn btn-primary pay rounded-pill"
                
 />
 </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
