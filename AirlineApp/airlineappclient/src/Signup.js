import React, { Component } from 'react'

export default class Signup extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            fn : "",
            ln : "",
            dob :  "",
            phn : "",
            email : "",
            id : "",
            pswrd : ""
        }
    }

    onChangeHandler=(evt)=>{

        this.setState({
            [evt.target.name] : evt.target.value
        })
        console.log(this.state)
    }

    submit =()=>{
        fetch('/signup',{
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        .then((res)=>res.json())
        .then(res => {console.log(res);
        if(res.ok === true){
            alert("Successfully resgistered");
            window.location.href = '/'
        }
        })
    }
  render() {
    
    return (

<div className="booking-form-box">
        <div className="page-title">
            <h1>Sign up</h1>
        </div>
        <div className="booking-form">
            <div className="input-grp">
                <label>First Name </label>
                <input type="text" className="form-control" name="fn" placeholder="" onChange={this.onChangeHandler}/>
            </div>
            <div className="input-grp">
                <label>Last Name</label>
                <input type="text" className="form-control" name="ln" onChange={this.onChangeHandler}/>
            </div>

            <label>Date of Birth</label>
            <input type="date" className="form-control select-date" name="dob" onChange={this.onChangeHandler}/>

            <label>Phone Number</label>
            <input type="text" className="form-control" placeholder="" name="phn" onChange={this.onChangeHandler}/>

            <label>Email</label>
            <input type="email" className="form-control" placeholder="example@domain.com" name="email" onChange={this.onChangeHandler}/>
            <label>ID</label>
            <input type="text" className="form-control" placeholder="" name="id" onChange={this.onChangeHandler}/>

<div>
    <label>Password</label>
    <input type="password" className="form-control" placeholder='*****'  name="pswrd" onChange={this.onChangeHandler}/>
</div>
            <div className="input-grp show-flights">
                
                    <button type="button" className="btn btn-primary flight" onClick={this.submit}>Signup</button>
            </div>
        </div>

    </div>
    
    )
  }
}
