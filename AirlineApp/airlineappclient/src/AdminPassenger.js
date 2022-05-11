import React, { Component } from "react";
import "./Admin.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
export default class AdminPassenger extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        data: [],
        email: ""
      };
    }
  }
  fetchData = () => {};

  
  onChangeHandler=(evt)=>{
      this.setState({
          [evt.target.name] : evt.target.value
      })
      console.log(this.state)
    }


  componentDidMount() {
    fetch("/getflights", {
      method: "get",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
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
        <Topbar />
        <div className="content-container">
          <Sidebar />
          <div className="otherPage">
            <div className="booking-form">
              <div className="featured">
                <div className="featuredItem">
                  <table className="center">
                    <label style={{ color: "black" }}>
                      Enter Passenger Email
                    </label>
                    <br></br>
                    <input type="email" name="email" placeholder="Email" onChange={this.onChangeHandler} />
                    {this.state.data.map((record) => (
                      <div>
                        <br></br>

                        <tr>
                          <th style={{ color: "black" }}>Flight Number </th>
                          <th>
                            {" "}
                            <input
                              type="text"
                              defaultValue={record.flight}
                              name="flight"
                            />
                          </th>
                        </tr>
                        <tr>
                          <th style={{ color: "black" }}>Ticket Number </th>
                          <th>
                            {" "}
                            <input
                              type="text"
                              defaultValue={record.flight}
                              name="flight"
                            />
                          </th>
                        </tr>

                        <tr>
                          <th style={{ color: "black" }}>From</th>
                          <th style={{ color: "black" }}>To</th>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              defaultValue={record.from}
                              name="from"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue={record.to}
                              name="to"
                            />{" "}
                          </td>
                        </tr>
                        <tr>
                          <th style={{ color: "black" }}>Date and Time</th>
                          <th style={{ color: "black" }}>Seat No</th>
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
                            <input
                              type="text"
                              defaultValue={record.aircrafttype}
                              name="aircrafttype"
                            />{" "}
                          </td>
                        </tr>

                        <input type="button" value="Modify" />
                        <input type="button" value="Delete" />

                        <hr></hr>
                      </div>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
