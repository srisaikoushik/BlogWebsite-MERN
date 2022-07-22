var User = require('../models/User');

exports.registerUser = async (req, res)=>{
    User.find({username:req.body.username})
    .then((users) => {
        if(!users){
            res.send('user exists');
            return;
        }
        User.create(req.body)
        .then((val)=>{
            console.log(val);
            res.send('done');
        })
        .catch((err)=>console.log(err));
    })
    .catch((err)=>console.log(err));
}

exports.loginUser = async (req, res)=>{
    User.find({username:req.body.username})
    .then((users)=>{
        console.log(users);
        if(!users){
            res.json({"_id":"","username":""});
        }
        else if(users[0].password === req.body.password){
            res.json({"_id":users[0]._id,"username":users[0].username});
        }
        else{
            res.json({"_id":"","username":""});
        }
    })
    .catch((err)=>console.log(err));

}

exports.logoutUser = async(req,res)=>{
    console.log(req.body);
    res.send('done');
}