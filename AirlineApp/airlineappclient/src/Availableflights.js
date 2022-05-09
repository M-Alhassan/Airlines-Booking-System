import React, { Component } from "react";

export default class Availableflights extends Component {
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
    fetch("/getflights", {
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
                <th>From</th>
                <th>To</th>
              </tr>
              <tr>
                <td>
                  <input type="text" defaultValue={record.from} name="from" />
                </td>
                <td>
                  <input type="text" defaultValue={record.to} name="to" />{" "}
                </td>
              </tr>
              <tr>
                <th>Date and Time</th>
                <th>Aircraft Type</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="datetime-local"
                    defaultValue={record.datetime}
                    name="datetime"
                  />
                </td>
                <td>
                  <input type="text" defaultValue={record.aircrafttype} name="aircrafttype" />{" "}
                </td>
              </tr>
             
            
                <input type="button" value="Select" />
              
              <hr></hr>
              </div>
                ))}
              
              </table>

            
          </div>
        </div>
      </div>
    );
  }
}
