import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import Home from "./Home";
import Footer from "./footer";
import EmployeeUpdate from "./Update";
import List from "./List";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/User" component={User} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/UpdateEmp" component={EmployeeUpdate} />
          <Route exact path="/List" component={List} />
          <Route exact path="/updateEmp/:id" component={EmployeeUpdate} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default Main;
