import React, { Component } from "react";
export default class SearchFlights extends Component {
    constructor(props)
    {

        super(props)
        this.state={
            oneway : true,
            leavingfrom : "",
            goingto :  "",
            departing : "",
            returning : "",
            adults : 0,
            children : 0,
            infants : 0,
            travelClass  :"",
            triptype : ""
        }
    }
    handleSubmit= () =>  {
       const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('/searchflights', requestOptions)
           .then(response => response.json())
           .then(res => console.log(res))
    }
    handleChange =(evt)=>{
      if(evt.target.value==='roundtrip')
      {
          this.setState({
            oneway : false,
            triptype : evt.target.value
          
          })
      }
      else if(evt.target.value==='oneway')
      {
        this.setState({
          oneway : true,
          triptype : evt.target.value

        })
      }
        console.log(evt.target.value)
    }
    handleData=(evt)=>{

      this.setState({
        [evt.target.name] : evt.target.value
      })
//      alert(this.state.travelClass)
      console.log(this.state)
    }
  render() {
    return (
      <div>
        <div className="booking-form-box">
          <div className="radio-btn">
            <input type="radio" className="btn" value="roundtrip" name="triptype" onChange={this.handleChange} />
           Roundtrip
            <input type="radio" className="btn" value="oneway" name="triptype" onChange={this.handleChange}/> One-way
          </div>
          <div className="booking-form">
            <label>Leaving from </label>
            <input
              type="text"
              className="form-control"
              name="leavingfrom"
              onChange={this.handleData}
              placeholder="City"
              id="leavecity"
            />
         <div><label>Going to</label> 
            <input
              type="text"
              className="form-control"
              name="goingto"
              onChange={this.handleData}
              placeholder="City"
              id="goingcity"
            /> </div>
            
            <div className="input-grp">
              <label>Departing</label>
              <input
                type="date"
                className="form-control select-date"
                name="departing"
                onChange={this.handleData}
                id="departingdate"
              />
            </div>
            {this.state.oneway===true? "" : <div className="input-grp">
              <label>Returning</label>
              <input
                type="date"
                name="returning"
                onChange={this.handleData}
                className="form-control select-date"
                id="returningdate"
              />
            </div>}
            
            <div className="input-grp">
              <label>Adults</label>
              <input
                type="number"
                name="adults"
                onChange={this.handleData}
                className="form-control"
                id="adultqty"
              />
            </div>
            <div className="input-grp">
              <label>Children</label>
              <input
                type="number"
                name="children"
                onChange={this.handleData}
                className="form-control"
                id="childrenqty"
              />
            </div>
            <div className="input-grp">
              <label>Infants</label>
              <input
                type="number"
                name="infants"
                onChange={this.handleData}
                className="form-control"
                id="infantsqty"
              />
            </div>
            <div className="input-grp">
              <label>Travel className</label>
              <select className="custom-select" id="travelclass"  name="travelClass"
              onChange={this.handleData}>
                <option value="Economy className" name="travelClass"
              onChange={this.handleData}>Economy className</option>
                <option value="Business className" name="travelClass"
              onChange={this.handleData}>Business className</option>
                <option value="First className"  name="travelClass"
              onChange={this.handleData}>First className</option>
              </select>
            </div>
            <div className="input-grp show-flights">
              <button
                type="button"
                className="btn btn-primary flight"
                onClick={this.handleSubmit}
              >
                Show Flights
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
