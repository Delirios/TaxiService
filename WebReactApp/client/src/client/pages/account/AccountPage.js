import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchOrders } from "../../redux/actions/order";
import Table from "react-bootstrap/Table";
import WithTaxiService from "../../components/hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";

import "./AccountPage.css";

class AccountPage extends Component {
  componentDidMount = async () => {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    await this.props.fetchOrders(user);
  };

  render() {
    const { orders } = this.props;
    console.log(orders);
    return (
      <div className="container-fluid">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Origin Addresses</th>
              <th>Destination Addresses</th>
              <th>Distance</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => {
              const {
                orderId,
                destinationAddresses,
                originAddresses,
                distance,
                price,
                dateTime,
              } = order;
              return (
                <tr key={orderId}>
                  <td>{originAddresses}</td>
                  <td>{destinationAddresses}</td>

                  <td>{distance}</td>
                  <td>{price}</td>
                  <td>{dateTime}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = ({ orderReducer: { orders } }) => {
  return { orders };
};
const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      fetchOrders: (user) => dispatch(fetchOrders(taxiService, user)),
    },
    dispatch
  );
};
export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(AccountPage);
