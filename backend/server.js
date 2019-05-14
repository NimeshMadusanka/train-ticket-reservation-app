const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = express.Router();
const PORT = 4000;



app.use(cors());
app.use(bodyPaser.json());

const User = require('./user.modle');

mongoose.connect('mongodb://127.0.0.1:27017/ticket',{useNewUrlParser: true}, function (err) {
    if(err){
        throw err;
    }
    else{
        console.log("Mongodb database connection established successfully");
    }
});

userRoutes.route('/').get(function (req, res) {
    User.find(function (err, ticket) {
        if(err){
            console.log(err);
        }else {
            res.json(ticket);
        }
    });
});


userRoutes.route('/:id').get(function (req, res) {

    let id = req.params.id;
    User.findById(id,function (err, ticket) {
        res.json(ticket);
    });
});

userRoutes.route('/add').post(function (req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed')
        });
});

app.use('/ticket', userRoutes);


app.listen(PORT, function () {
    console.log("server is running on port:" +PORT);
});
















































































