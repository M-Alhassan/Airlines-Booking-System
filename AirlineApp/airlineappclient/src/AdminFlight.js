import React, { Component } from 'react'
import './Admin.css'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
export default class AdminFlight extends Component {
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
          <Topbar/>
          <div className="content-container">
            <Sidebar/>
            <div className="otherPage">
           
        

              <div className="featured">
                <div className="featuredItem">
                  <table className="center">
                  <h3 style={{ color: "black" }}>Edit Flight Info</h3>

                    <label style={{ color: "black" }}>
                      Enter Flight Number
                    </label>
                    <br></br>
                    <input type="text" name="flightNo" placeholder="Email" />
                      <div>
                        <br></br>

                        

                        <tr>
                          <th style={{ color: "black" }}>From</th>
                          <th style={{ color: "black" }}>To</th>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              name="from"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="to"
                            />{" "}
                          </td>
                        </tr>
                        <tr>
                          <th style={{ color: "black" }}>Date and Time</th>
                          <th style={{ color: "black" }}>Aircraft</th>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="datetime-local"
                              name="datetime"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="aircrafttype"
                            />{" "}
                          </td>
                        </tr>

                        <input type="button" value="Confirm Changes" />
                        <input type="button" value="Delete Flight" />

                        <hr></hr>
                      </div>
                  </table>
             


        </div>
        <div className="featuredItem" >
            
        <table className="center">
          <h3  style={{ color: "black" }}>Schedule a new Flight</h3>
                    <label style={{ color: "black" }}>
                      Enter Flight Info
                    </label>
                
                  
                      <div>
                        <br></br>

                        <tr>
                          <th style={{ color: "black" }}>Flight Number </th>
                          <th>
                            {" "}
                            <input
                              type="text"
                              defaultValue=""
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
                              defaultValue=""
                              name="from"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              name="to"
                            />{" "}
                          </td>
                        </tr>
                        <tr>
                          <th style={{ color: "black" }}>Date and Time</th>
                          <th style={{ color: "black" }}>Aircraft</th>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="datetime-local"
                              defaultValue=""
                              name="datetime"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              defaultValue=""
                              name="aircrafttype"
                            />{" "}
                          </td>
                        </tr>

<br></br>
                        <input type="button" value="Add Flight" />

                        <hr></hr>
                      </div>
                  </table>

        </div>
       
      
      </div>       
                </div>
          </div>
        </div>
    )

  }
}
