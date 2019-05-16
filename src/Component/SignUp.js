import React, {Component} from 'react';

import axios from 'axios';
export default class SignUp extends Component{
    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChange_email = this.onChange_email.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
        this.onChange_address = this.onChange_address.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_name: '',
            email:'',
            password: '',
            confirm_password:'',
            address:'',
            SignUp_completed: false

        }
    }

    onChangeUserName(e){
        this.setState({
            user_name: e.target.value
        })
    }

    onChange_email(e){
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onChangeCPassword(e){
        this.setState({
            confirm_password: e.target.value
        })
    }

    onChange_address(e){
        this.setState({
            address: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();

        console.log(`signup success`);
        console.log(`username is:${this.state.user_name}`);
        console.log(`password is:${this.state.password}`);

        const newUser = {
            user_name: this.state.user_name,
            email:this.state.email,
            password:this.state.password,
            confirm_password:this.state.confirm_password,
            address:this.state.address,
            SignUp_completed:this.state.SignUp_completed
        }

        axios.post('http://localhost:4000/sign/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            user_name: '',
            email:'',
            password: '',
            confirm_password:'',
            address:'',
            SignUp_completed: false
        })
    }
    render() {
        return(
            <div style={{marginTop: 20}}>
                <h2>User SignUp</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.user_name}
                                onChange={this.onChangeUserName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input  type="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChange_email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.confirm_password}
                                onChange={this.onChangeCPassword}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChange_address}
                        />
                    </div>
                    <div className="form-group">
                        <input  type="submit"
                                className="btn btn-primary"
                                value="SignUp"
                        />
                    </div>
                </form>
            </div>
        )
    }

}