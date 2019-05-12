import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";

import Sampath from "./Sampath";
import Dialog from "./Dialog";


export default class Home extends Component{
    render() {
        return(
            <Router>
            <div>
                <p>LIst of Train Details</p>
                <form>
                    <label>which train want to go:</label>
                    <select name="cars" className="custom-select">
                        <option selected>Choose a train</option>
                        <option value="volvo">Colombo</option>
                        <option value="fiat">Galle</option>
                        <option value="audi">Matara</option>
                    </select>

                    <label>Number of Tickets:</label>
                    <select name="cars" className="custom-select">
                        <option selected>Select Number of Tickets</option>
                        <option value="volvo">1</option>
                        <option value="fiat">2</option>
                        <option value="audi">3</option>
                    </select>

                </form>

                <div style={{margintop:20}} className="btn-group">
                        <Link to="/Sampath" className="nav-link">
                            <input  type="submit"
                                    className="btn btn-primary"
                                    value="  Sampath Payment"
                        />
                        </Link>



                        <Link to="/Dialog" className="nav-link">
                            <input  type="submit"
                                    className="btn btn-primary"
                                    value="  Dialog Payment"
                            />
                        </Link>
                </div>
        <Route path="/Sampath" exact component={Sampath}/>
        <Route path="/Dialog" exact component={Dialog}/>
        </div>
    </Router>
    )
    }

}