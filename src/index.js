import React from "react";
import "antd/dist/antd.css";
import "../src/assets/css/styles.less"

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";


import Page404 from "./pages/404/404.js";
import LandingPageLayout from "./pages/landingPage/LandingPageLayout.js";
import ScrollToTop from "./routes/ScrollToTop";


const routes = (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={LandingPageLayout} />
          <Route path="*" component={Page404} />
        </Switch>

      </ScrollToTop>
    </BrowserRouter>
  </Provider>

);
ReactDOM.render(routes, document.querySelector("#root"));
