import React, {Component} from 'react';


export default class Sampath extends Component{

    constructor(props){
        super(props);

        this.onChangeCName = this.onChangeCName.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeCvv = this.onChangeCvv.bind(this);
        this.onChangeCash = this.onChangeCash.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            card_holder_name: '',
            card_number: '',
            cvv:'',
            cash_in_point:'',
            login_completed: false

        }
    }

    onChangeCName(e){
        this.setState({
            card_holder_name: e.target.value
        })
    }

    onChangeCardNumber(e){
        this.setState({
            card_number: e.target.value
        })
    }

    onChangeCvv(e){
        this.setState({
            cvv: e.target.value
        })
    }

    onChangeCash(e){
        this.setState({
            cash_in_point: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`login success`);
        console.log(`username is:${this.state.cvv}`);
        console.log(`password is:${this.state.card_number}`);

        this.setState({
            card_holder_name: '',
            card_number: '',
            cvv:'',
            cash_in_point:'',
            login_completed: false
        })
    }
    render() {
        return(
            <div style={{marginTop: 20}}>
                <h2>Sampath Credit Payment</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Card Holder's Name:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.card_holder_name}
                                onChange={this.onChangeCName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Card Number:</label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.card_number}
                                onChange={this.onChangeCardNumber}
                        />
                    </div>

                    <div className="form-group">
                        <label>CVV:</label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.cvv}
                                onChange={this.onChangeCvv}
                        />
                    </div>

                    <div className="form-group">
                        <label>Cash in point:</label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.cash_in_point}
                                onChange={this.onChangeCash}
                        />
                    </div>
                    <div className="form-group">
                        <input  type="submit"
                                className="btn btn-primary"
                                value="Pay"
                        />
                    </div>
                </form>
            </div>
        )
    }

}