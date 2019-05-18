import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Dialog from "./Dialog";
import Sampath from "./Sampath";
import axios from "axios";



export default class Pay extends Component{

    constructor(props){
        super(props);



        this.state = {
            price: '',

        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/train/'+this.props.match.params.id)
            .then(response =>{
                const train_name =response.data.train_name;
                const price = response.data.price;

                this.setState({
                    price: response.data.price,

                })

                console.log(train_name);
                console.log(price);

                document.getElementById("a").innerHTML="a1"+ train_name;
                document.getElementById("b").innerHTML= + price;
            }).catch(function (error) {
            console.log(error)
        })
    }
    onSubmit(e){
        e.preventDefault();
        calculatio();



        function calculatio() {


            //let f1 = price;
            let f1 = document.getElementById("price").value;
            let f2 = document.getElementById("number").value;

            let result = parseFloat(f1)* parseFloat(f2);

            if(!isNaN(result)){
                document.getElementById("answer").innerHTML="Total Price: Rs-"+ result;
            }

            console.log(result);

        }

    }

    render() {
        return(
            <Router>
            <div>
                <h2>pay</h2>

                <form onClick={this.onSubmit}>
                    <h6 id="a"></h6>
                    <h6 id ="b"></h6>
{/*                    <label>which train want to go:</label>
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
                    </select>*/}

                    <div className="form-group">
                        <label>Ticket price:</label>
                        <input  type="text"
                                className="form-control"
                                id="price"
                                value={this.state.price}

                        />
                    </div>

                    <div className="form-group">
                        <label>Number of Tickets:</label>
                        <input  type="text"
                                className="form-control"
                                id="number"


                        />
                    </div>

                    <div className="form-group">
                        <input  type="submit"
                                className="btn btn-primary"
                                value="Get Total price"

                        />
                    </div>

                    <h6 id="a"></h6>
                    <h6 id ="b"></h6>
                    <br/>
                    <h6 id="answer"></h6>
                    <br/>

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
                <Route path="/Dialog" exact component={Dialog}/>
                <Route path="/Sampath" exact component={Sampath}/>
            </div>
            </Router>
        )
    }

}