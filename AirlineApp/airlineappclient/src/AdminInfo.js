import React, { Component } from 'react'
import './Admin.css'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
export default class AdminInfo extends Component {
  render() {
    return (
        <div>
          <Topbar/>
          <div className="content-container">
            <Sidebar/>
            <div className="otherPage">
           
                        INFO Page               
                </div>
          </div>
        </div>
    )

  }
}
