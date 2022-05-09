import React, { Component } from "react";

export default class AvailableSeats extends Component {
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
    fetch("/getseats", {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
          console.log(res);
        this.setState({ data: res });
      })
      .catch((err) => console.log("err"));

    console.log(this.state.data);
  }
  render() {
    return (
      <div>
        <div className="booking-form-box">
          <div className="page-title">
            <h4>Available Flights</h4>
            <br></br>             <br></br>

           </div>
          <div className="booking-form">
            <table>
                {this.state.data.map((record) => (
                    <div>
                    <tr>
                <th>Flight Number </th>
                <th> <input type="text" defaultValue={record.flight} name="flight"  /></th>
              </tr>
             
              
              <tr>
                <th>Select Seat</th>
              </tr>
              {record.seats.map(seat => (
                    <tr>
                    <td><input type="button" value={seat} /></td>
                    {/* <td><input type="button" value={seat} /></td>
                    <td><input type="button" value={seat} /></td> */}
  
                </tr>
              ))}
              
             
              </div>
                ))}
              
              </table>

            
          </div>
        </div>
      </div>
    );
  }
}
