import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { TaxiServiceProvider } from "./client/components/taxi-service-context/TaxiServiceContext";

import App from "./client/pages/app/App";
import TaxiService from "./services/taxi-service/TaxiService";
import store from "./client/redux/store";

const taxiService = new TaxiService();
ReactDOM.render(
  <Provider store={store}>
    <TaxiServiceProvider value={taxiService}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaxiServiceProvider>
  </Provider>,
  document.getElementById("root")
);
