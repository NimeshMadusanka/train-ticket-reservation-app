import React, {Component} from 'react';


export default class Login extends Component{

    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_name: '',
            password: '',
            login_completed: false

        }
    }

    onChangeUserName(e){
        this.setState({
            user_name: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`login success`);
        console.log(`username is:${this.state.user_name}`);
        console.log(`password is:${this.state.password}`);

        this.setState({
            user_name: '',
            password: '',
            login_completed: false
        })
    }
    render() {
        return(
            <div style={{marginTop: 30}}>
                <h2>User Login</h2>
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
                        <label>Password:</label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <input  type="submit"
                                className="btn btn-primary"
                                value="Login"
                        />
                    </div>
                </form>
            </div>
        )
    }

}