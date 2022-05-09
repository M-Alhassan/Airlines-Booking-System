import React, { Component } from "react";

export default class Home extends Component {
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
    fetch("/gettickets", {
      method: "get",
      headers: {'tokenID': localStorage.getItem('tokenID')}
    })
      .then((res) => res.json())
      .then((res) => {
          console.log(res);
        this.setState({ data: res.data });
      })
      .catch((err) => console.log("err"));

    console.log(this.state.data);
  }
  render() {
    return (
      <div>
        <div className="booking-form-box">
          <div className="page-title">
            <h4>My Tickets</h4>
          </div>
          <div className="booking-form">
            <table>
                {this.state.data.map((record) => (
                    <div>
                    <tr>
                <th>Ticket Number</th>
                <th>Flight Number</th>
              </tr>
              <tr>
                <td>
                  <input type="text" defaultValue={record.ticketnumber} name="ticketNumber" />
                </td>
                <td>
                  <input type="text" defaultValue={record.flightnum} name="ticketPrice" />{" "}
                </td>
              </tr>
              <tr>
                <th>From</th>
                <th>To</th>
              </tr>
              <tr>
                <td>
                  <input type="text" defaultValue={record.sourcecity} name="from" />
                </td>
                <td>
                  <input type="text" defaultValue={record.destinationcity} name="to" />{" "}
                </td>
              </tr>
              <tr>
                <th>Date and Time</th>
                <th>Seat Number</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="datetime-local"
                    defaultValue={record.date}
                    name="datetime"
                  />
                </td>
                <td>
                  <input type="text" defaultValue={record.seatnumber} name="seatNumber" />{" "}
                </td>
              </tr>
             
            
                <input type="button" value="Delete" />
                <input type="button" value="Modify" />
              <hr></hr>
              </div>
                ))}
              
              </table>

            <div className="input-grp show-flights">
              <button
                type="button"
                className="btn btn-primary flight"
                onClick={this.login}
              >
                Search Flights
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
