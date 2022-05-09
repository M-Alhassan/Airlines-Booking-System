import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            email:  "",
            password : ""
        }
    }
    onChangeHandler=(evt)=>{
        this.setState({
            [evt.target.name] : evt.target.value
        })
        console.log(this.state)
    }
    login=()=>{
        fetch('/login',{
            method : "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        .then((res)=>res.json())
        .then(res => {console.log(res);
        if(res.status == 1){
            console.log(res.tokenID)
            localStorage.setItem("tokenID", res.tokenID[0].passengerid)
            console.log(localStorage.getItem("tokenID"))
            alert("login success, redirecting to homepage");
            window.location.href = '/home'
        } else if (res.status == 0) {
            alert("incorrect email or password")
        }
        })
    }
  render() {
    return (
      <div>

<div className="booking-form-box">
        <div className="page-title">
            <h1>Login</h1>
        </div>
        <div className="booking-form">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="example@domain.com" name="email" onChange={this.onChangeHandler} />

            <label>Password</label>
            <input type="password" className="form-control" placeholder="**********" name="password" onChange={this.onChangeHandler} />

            

            <div className="input-grp show-flights">
                    <button type="button" className="btn btn-primary flight" onClick={this.login}>Login</button>
                <a href="/signup"> 
                    <p>Sign up instead</p>
                    </a>
            </div>
        </div>

    </div>
    </div>

    
    )
  }
}
