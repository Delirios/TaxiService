import React from "react";
import { RotateSpinner } from "react-spinners-kit";

import "./Spinner.css";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="spinner-container">
        <RotateSpinner size={150} color="#686769" loading={loading} />
      </div>
    );
  }
}

export default Spinner;
