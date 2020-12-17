import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";

import WithTaxiService from "../hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createOrders } from "../../redux/actions/news";
import { Link } from "react-router-dom";

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

  onSubmit(values) {
    console.log(values);

    this.props.createOrders(values);
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <section className="order">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Link to="/home" className="btn btn-primary ">
            Відмінити
          </Link>
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
  return bindActionCreators(
    {
      createOrders: (values) => dispatch(createOrders(taxiService, values)),
    },
    dispatch
  );
};
export default reduxForm({
  validate,
  form: "OrderForm",
})(
  compose(
    WithTaxiService(),
    connect(mapStateToProps, mapDispatchToProps)
  )(Order)
);
