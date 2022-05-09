import React, { Component } from "react";
import "./Admin.css";
import AdminHome from "./AdminHome";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class Admin extends Component {
  render() {
    console.log('done')
    return (
        <div>
          <Topbar />
          <div className="content-container">
            <Sidebar />
            <div className="otherPage">
           
                <AdminHome />
               
                </div>
          </div>
        </div>
    );
  }
}
