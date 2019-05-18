const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const signRoute = express.Router();
const trainRoute = express.Router();
const dpaymentRoute = express.Router();
const spaymentRoute = express.Router();

const PORT = 4000;



app.use(cors());
app.use(bodyPaser.json());

const User = require('./user.modle');
const Train = require('./train.modle');
const Spayment = require('./Spayment.model');
const Dpayment = require('./Dpayment.model');


mongoose.connect('mongodb://127.0.0.1:27017/ticket',{useNewUrlParser: true}, function (err) {
    if(err){
        throw err;
    }
    else{
        console.log("Mongodb database connection established successfully");
    }
});

spaymentRoute.route('/').get(function (req, res) {
    Spayment.find(function (err, ticket) {
        if(err){
            console.log(err);
        }else {
            res.json(ticket);
        }
    });
});


spaymentRoute.route('/:id').get(function (req, res) {

    let id = req.params.id;
    Spayment.findById(id,function (err, ticket) {
        res.json(ticket);
    });
});

spaymentRoute.route('/add').post(function (req, res) {
    let spayment = new Spayment(req.body);
    spayment.save()
        .then(spayment => {
            res.status(200).json({'payment': 'payment added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new payment failed')
        });
});


dpaymentRoute.route('/').get(function (req, res) {
    Dpayment.find(function (err, ticket) {
        if(err){
            console.log(err);
        }else {
            res.json(ticket);
        }
    });
});


dpaymentRoute.route('/:id').get(function (req, res) {

    let id = req.params.id;
    Dpayment.findById(id,function (err, ticket) {
        res.json(ticket);
    });
});

dpaymentRoute.route('/add').post(function (req, res) {
    let dpayment = new Dpayment(req.body);
    dpayment.save()
        .then(dpayment => {
            res.status(200).json({'payment': 'payment added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new payment failed')
        });
});

trainRoute.route('/').get(function (req, res) {
    Train.find(function (err, ticket) {
        if(err){
            console.log(err);
        }else {
            res.json(ticket);
        }
    });
});


trainRoute.route('/:id').get(function (req, res) {

    let id = req.params.id;
    Train.findById(id,function (err, ticket) {
        res.json(ticket);
    });
});

trainRoute.route('/add').post(function (req, res) {
    let train = new Train(req.body);
    train.save()
        .then(train => {
            res.status(200).json({'user': 'train added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new train failed')
        });
});

signRoute.route('/').get(function (req, res) {
    User.find(function (err, ticket) {
        if(err){
            console.log(err);
        }else {
            res.json(ticket);
        }
    });
});


signRoute.route('/:id').get(function (req, res) {

    let id = req.params.id;
    User.findById(id,function (err, ticket) {
        res.json(ticket);
    });
});

signRoute.route('/add').post(function (req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed')
        });
});


signRoute.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function (err, ticket) {
        if(!ticket)
            res.status(404).send('data is not found');


        else
            ticket.user_name = req.body.user_name;
            ticket.email = req.body.email;
            ticket.password = req.body.password;
            ticket.confirm_password = req.body.confirm_password;
            ticket.address = req.body.address;
            ticket.SignUp_completed = req.body.SignUp_completed;



            ticket.save().then(user => {
                res.json('user updated');
            })

                .catch(err => {
                    res.status(400).send("update not possible")
                });
    });
});



app.use('/sign', signRoute);
app.use('/train', trainRoute);
app.use('/dialog_payment', dpaymentRoute);
app.use('/sampath_payment', spaymentRoute);


app.listen(PORT, function () {
    console.log("server is running on port:" +PORT);
});
















































































