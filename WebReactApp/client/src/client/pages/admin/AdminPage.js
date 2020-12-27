import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import WithTaxiService from "../../components/hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";

import "./AdminPage.css";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
      category: {},
      image: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { category } = this.state;
    return (
      <section className="order">
        <form onSubmit={this.handleSubmit}>
          <Link to="/home" className="btn btn-primary ">
            Відмінити
          </Link>
          <h1>Ваш ID = </h1>
          <div class="form-group">
            <label>Model</label>
            <input type="text" class="form-control" placeholder="model" onChange= {this.handleChange}/>
          </div>
          <div class="form-group">
            <label>Category</label>
            <select class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label>Photo</label>
            <input
              type="file"
              class="form-control-file"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Замовити
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = ({ userReducer: { user } }) => {
  return { user };
};
const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
     
    },
    dispatch
  );
};
export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(AdminPage);
