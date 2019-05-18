import React from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Contact from "./Component/Contact";
import Edit from "./Component/Edit";
import Pay from "./Component/Pay";

import logo from "./Ticket-logo3.png.jpg";

function App() {
  return (
      <Router>
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={logo} width="30" height="30" />

            <Link to="/" className="navbar-brand">TRAIN TICKET RESERVATION SYSTEM</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">

                    <li className="navbar-nav">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li className="navbar-nav">
                        <Link to="/Login" className="nav-link">Login</Link>
                    </li>

                    <li className="navbar-nav">
                        <Link to="/SignUp" className="nav-link">SignUp</Link>
                    </li>

                    <li className="navbar-nav">
                        <Link to="/Contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>

        <Route path="/" exact component={Home}/>
        <Route path="/Login" exact component={Login}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/Contact" exact component={Contact}/>
        <Route path="/edit/:id" exact component={Edit}/>
        <Route path="/pay/:id" exact component={Pay}/>
        <Route path="/pay" exact component={Pay}/>


    </div>
      </Router>
  );
}

export default App;
