import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import DashBoard from "./components/DashBoard/DashBoard";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


function App() {
  return (
    <div className="App ">
      <AuthProvider>
        <Router>
      
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/services">
              <Services />
            </Route>
            <Route path="/dashBoard">
              <DashBoard />
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
