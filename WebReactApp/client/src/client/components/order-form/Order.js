import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";

import WithTaxiService from "../hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createOrders } from "../../redux/actions/news";

import "./Order.css";

class Order extends Component {
  renderField(field) {
    return (
      <Fragment>
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className="text-danger">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </Fragment>
    );
  }
  /*/
  createMethod = async () => {
    
    const newOrder = {
      from: "first",
      to: "second",
      isPerformed: true,
      isClosed: true,
    };
    try {
      const response = await fetch("http://localhost:59637/Order", {
        method: "POST", // или 'PUT'
        body: JSON.stringify(newOrder), // данные могут быть 'строкой' или {объектом}!
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log("Успех:", JSON.stringify(json));
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  /*/
  getResource = async () => {
    const res = await fetch(`http://localhost:59637/Order`);
    if (!res.ok) {
      throw new Error(`Could not fetch  , received ${res.status}`);
    }
    return await res.json();
  };

  onSubmit(values) {
    console.log(values);

    console.log(this.props)
    
    this.props.createOrders(values);
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <section className="order">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-row">
            <div className="form-group col-md-6 ">
              <Field
                placeholder="First Name"
                label="First Name"
                name="firstName"
                component={this.renderField}
              />
            </div>
            <div className="form-group col-md-6">
              <Field
                placeholder="Last Name"
                label="Last Name"
                name="lastName"
                component={this.renderField}
              />
            </div>
          </div>
          <div className="form-group">
            <Field
              placeholder="From"
              label="From"
              name="from"
              component={this.renderField}
            />
          </div>
          <div className="form-group">
            <Field
              placeholder="To"
              label="To"
              name="to"
              component={this.renderField}
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

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Enter your name";
  }

  return errors;
};

const mapStateToProps = ({ categoriesReducer: { orders } }) => {
  return { orders };
};
const mapDispatchToProps = (dispatch, { taxiService }) => {
  const newOrder = {
    from: "first",
    to: "second",
    isPerformed: true,
    isClosed: true,
  };
  return bindActionCreators(
    {
      createOrders: createOrders(taxiService),
    },
    dispatch
  );
};
export default reduxForm({
  validate,
  form: "OrderForm",
})(compose(
  WithTaxiService(),connect(mapStateToProps, mapDispatchToProps))(Order));
