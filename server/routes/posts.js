var express = require('express');
var Post = require('../models/Post');
var User = require('../models/User');

var router = express.Router();

router.get('/',(req,res)=>{
    Post.find({})
    .then((posts)=>{
        res.json(posts);
    })
    .catch((err)=>console.log(err));
});

router.post('/',(req,res)=>{
    console.log(req.body);
   Post.create(req.body)
   .then((post)=>{
    console.log(post)
    res.send('post created');
})
   .catch((err)=>console.log(err));
});

router.post('/update',(req,res)=>{
    Post.findById(req.body.postId)
    .then((post)=>{
        if(!post){
            res.send('no such post');
            return;
        }
        console.log(post);
        Post.findByIdAndUpdate({"_id":req.body.postId},{$set:{"title":req.body.title,"content":req.body.content}})
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));

    })
    .catch((err)=>console.log(err));
})

router.post('/:postId',(req,res)=>{
    Post.findById(req.params.postId)
    .then((post)=>{
        if(!post){
            res.send('no such post');
            return;
        }
        if(post.author != req.body.author){
            res.send('not authorised');
            return;
        }
        Post.findByIdAndDelete(req.params.postId)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));

    })
    .catch((err)=>console.log(err));
})


module.exports = router;