import React from "react";
import "antd/dist/antd.css";
import "../src/assets/css/styles.less"

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";


import Page404 from "./pages/404/404.js";
import LoginPageLayout from "./pages/login/loginPageLayout";
import RegisterPageLayout from "./pages/register/registerPageLayout";
import AdminPageLayout from "./pages/admin/adminPageLayout";
import BookPageLayout from "./pages/book/bookPageLayout";
import StudentPageLayout from "./pages/student/studentPageLayout";
import PublicPageLayout from "./pages/public/publicPageLayout"
import ScrollToTop from "./routes/ScrollToTop";
// import './i18n';


const routes = (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/login" component={LoginPageLayout} />
          <Route exact path="/register" component={RegisterPageLayout} />
          <Route exact path="/admin" component={AdminPageLayout} />
          <Route exact path="/book" component={BookPageLayout} />
          <Route exact path="/student" component={StudentPageLayout} />
          <Route exact path="/public" component={PublicPageLayout} />


          <Route path="*" component={Page404} />
        </Switch>

      </ScrollToTop>
    </BrowserRouter>
  </Provider>

);
ReactDOM.render(routes, document.querySelector("#root"));
