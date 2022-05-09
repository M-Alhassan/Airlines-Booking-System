import React, { Component } from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'
export default class Topbar extends Component {
  render() {
    return (
<div className='topbar'>
        <div className='topbar-wrapper'>
        <div className='topbar-left'>
        <span className='logo'>Admin Panel</span>
        </div>
        <div className='topbar-right'>
        <Link to="/" >Logout</Link>        </div>
        </div>

      </div>    )
  }
}
