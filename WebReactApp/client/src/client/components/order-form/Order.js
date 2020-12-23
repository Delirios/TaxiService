import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createOrders } from "../../redux/actions/order";
import { Link } from "react-router-dom";

import WithTaxiService from "../hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";
import renderField from "../../../services/utils/renderField";

import "./Order.css";
import TaxiService from "../../../services/taxi-service/TaxiService";

class Order extends Component {

  onSubmit(values) {
    console.log(values);
    const taxiService = new TaxiService();
    taxiService.login("Test", "TestPassword");

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
                component={renderField}
              />
            </div>
            <div className="form-group col-md-6">
              <Field
                placeholder="Last Name"
                label="Last Name"
                name="lastName"
                component={renderField}
              />
            </div>
          </div>
          <div className="form-group">
            <Field
              placeholder="From"
              label="From"
              name="from"
              component={renderField}
            />
          </div>
          <div className="form-group">
            <Field
              placeholder="To"
              label="To"
              name="to"
              component={renderField}
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
