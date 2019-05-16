import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";

import axios from 'axios';
import Sampath from "./Sampath";
import Dialog from "./Dialog";

const Train = props => (
    <tr>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.train_name}</td>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.departure_time}</td>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.distance}</td>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.price}</td>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.arrival_time}</td>
        <td>
            <Link to={"/pay/"+props.train._id}>PAY</Link>
        </td>
    </tr>
)

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {ticket: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/train')
            .then(response => {
                this.setState({ticket: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    trainList(){
        return this.state.ticket.map(function (current_train, i) {
            return <Train train={current_train} key={i}/>
        })
    }
    render() {
        return(
            <Router>
            <div>
                <br/>
                <h2>Colombo Fort Railway Station Timetable</h2>
                <br/>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Train Name</th>
                        <th>Departure Time</th>
                        <th>Distance</th>
                        <th>Price</th>
                        <th>Arrival Time</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.trainList()}
                    </tbody>
                </table>

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