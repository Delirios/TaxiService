import React from "react";
import { TaxiServiceConsumer } from "../taxi-service-context/TaxiServiceContext";

const WithTaxiService = () => (Wrapped) => {
  return (props) => {
    return (
      <TaxiServiceConsumer>
        {(taxiService) => {
          return <Wrapped {...props} taxiService={taxiService} />;
        }}
      </TaxiServiceConsumer>
    );
  };
};

export default WithTaxiService;
