import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-menu"></div>
          <h4 className="sidebar-title">Dashboard</h4>
          <ul className="sidebar-list">

              <li className="sidebar-listitem">
                <Link to="/admin/">Analytics</Link>
              </li>
             
              <li className="sidebar-listitem"><Link to="/admin/flight"> Flight Details</Link></li>
              <li className="sidebar-listitem"><Link to="/admin/passenger">Passenger Details </Link></li>
             

          </ul>
        </div>
      </div>
    );
  }
}
