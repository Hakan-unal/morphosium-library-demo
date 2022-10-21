import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { Router } from "react-router-dom";
import { history } from "./jwt/_helpers/history";

const App = () => (
    <Provider store={configureStore()}>
        <Router basename="/" history={history}></Router>
    </Provider>
);
export default App;
