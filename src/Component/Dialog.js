import React, {Component} from 'react';


export default class Dialog extends Component{

    constructor(props){
        super(props);

        this.onChangePhNumber = this.onChangePhNumber.bind(this);
        this.onChangePinNumber = this.onChangePinNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            phone_number: '',
            pin_number: '',
            payment_completed: false

        }
    }

    onChangePhNumber(e){
        this.setState({
            phone_number: e.target.value
        })
    }

    onChangePinNumber(e){
        this.setState({
            pin_number: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`payment success`);
        console.log(`ph is:${this.state.phone_number}`);
        console.log(`pin is:${this.state.pin_number}`);

        this.setState({
            phone_number: '',
            pin_number: '',
            payment_completed: false
        })
    }
    render() {
        return(
            <div style={{marginTop: 20}}>
                <h2>Dialog Payment</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Phone Numbeer:</label>
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
                                value="pay"
                        />
                    </div>
                </form>
            </div>
        )
    }

}