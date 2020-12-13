import React, { Component } from "react";

import "./Order.css";

class Order extends Component {

constructor(props){
    super(props);
    this.state = {
        from: '',
        to: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event){
    event.preventDefault();
    console.log('Form Submitted');
    this.setState({})
}


  render() {
    return (
      <section className="order">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">FirstName</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="FirstName"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">LastName</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="LastName"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">From</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="From"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">To</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="To"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Categories</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Замовити
          </button>
        </form>
      </section>
    );
  }
}

export default Order;
