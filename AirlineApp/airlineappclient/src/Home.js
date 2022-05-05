import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div>
<div className="booking-form-box">
        <div className="page-title">
            <h3>Welcome User</h3>
        </div>
        <div className="booking-form">
           <table>
               <tr>
                   <th>Ticket</th>
                   <th>Price</th>
                   <th>Destination</th>
               </tr>
               <tr>
                   <td>One-way</td>
                   <td>1200$</td>
                   <td>LONDON</td>
               </tr>
           </table>
            

            <div className="input-grp show-flights">
                    <button type="button" className="btn btn-primary flight" onClick={this.login}>Search Flights</button>
                
            </div>
        </div>

    </div>
    </div>
    )
  }
}
