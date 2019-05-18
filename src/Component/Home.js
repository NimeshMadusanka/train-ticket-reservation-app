import React, {Component} from 'react';
//import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import {Link} from "react-router-dom";

import axios from 'axios';


const Train = props => (
    <tr>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.train_name}</td>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.departure_time}</td>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.distance}</td>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.price}</td>
        <td className={props.train.T_details_completed ? 'completed':''}>{props.train.arrival_time}</td>
        <td>
            <Link to={"/pay/"+props.train._id}>Buy</Link>
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

        </div>

    )
    }

}