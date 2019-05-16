import React, {Component} from 'react';
import axios from 'axios';



export default class Edit extends Component{

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

    componentDidMount() {
        axios.get('http://localhost:4000/sign/'+this.props.match.params.id)
            .then(response =>{
                this.setState({
                    user_name: response.data.user_name,
                    email: response.data.email,
                    password: response.data.password,
                    confirm_password: response.data.confirm_password,
                    address: response.data.address,
                    SignUp_completed: response.data.SignUp_completed,
                })
            }).catch(function (error) {
                            console.log(error)
                })
    }

    onChangeUserName(e){
        this.setState({
            user_name: e.target.value
        });
    }

    onChange_email(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onChangeCPassword(e){
        this.setState({
            confirm_password: e.target.value
        });
    }

    onChange_address(e){
        this.setState({
            address: e.target.value
        });
    }

    onChange_userCompleted(e){
        this.setState({
            SignUp_completed: !this.state.SignUp_completed
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`signup success`);
        console.log(`username is:${this.state.user_name}`);
        console.log(`password is:${this.state.password}`);

        const update_user = {
            user_name: this.state.user_name,
            email:this.state.email,
            password:this.state.password,
            confirm_password:this.state.confirm_password,
            address:this.state.address,
            SignUp_completed:this.state.SignUp_completed
        }

        axios.post('http://localhost:4000/sign/update/'+this.props.match.params.id, update_user)
            .then(res => console.log(res.data));

            this.props.history.push('/');


    }
    render() {
        return(

                <div>
                    <h2>Update User</h2>

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

{/*                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChange_userCompleted}
                                    checked={this.state.SignUp_completed}
                                    value={this.state.SignUp_completed}
                            />
                            <label className="form-check-label" htmlFor="completedCheckbox">Completed</label>
                        </div>*/}

                        <div className="form-group">
                            <input  type="submit"
                                    className="btn btn-primary"
                                    value="Update"
                            />
                        </div>
                    </form>
                </div>

        )
    }

}