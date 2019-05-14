import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const User = props => (
    <tr>
        <td>{props.user.user_name}</td>
        <td>{props.user.email}</td>
        <td>{props.user.password}</td>
        <td>{props.user.address}</td>
        <td>
            <Link to={"/edit"+props.user._id}>Edit</Link>
        </td>
    </tr>
)

export default class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {ticket: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/ticket')
            .then(response => {
                this.setState({ticket: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    userList(){
        return this.state.ticket.map(function (currentUser, i) {
            return <User user={currentUser} key={i}/>
        })
    }
    render() {
        return(
            <div>
                <h2>New Users</h2>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>

                    </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>

            </div>
        )
    }

}