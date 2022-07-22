import Navbar from "./components/Navbar";
import {useState,useEffect} from 'react';
import axios from 'axios';
import PostCard from './components/PostCard'

function TypePosts({type,posts,user,del}){
  if(type===0){
    return(
      <div className="row justify-content-center">
        {posts.map((post)=><PostCard key={post._id} user = {user} data={post} del = {del}/>)}
        </div>
    );
  }
    return(
    <div className="row justify-content-center">
        {posts.map((post)=>{
          if(post.author === user){
            return <PostCard key={post._id} user = {user} data={post} del = {del}/>
          }
        })}
      </div>
    );
}

function Main({user,type}) {
  const [posts,setPosts] = useState([]);

  function getPosts(){
    axios.get('http://localhost:5000/posts/')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }

  function del(data){
    data.author = user;
    axios.post('http://localhost:5000/posts/'+data.id,data)
    .then((res) => {
      console.log(res.data);
      getPosts();
    })
    .catch((err) => console.log(err));
  }

  useEffect(()=>{
    getPosts();
  },[]);
  return (
    <div className="Main">
      <div className="container">
        <TypePosts  type = {type} posts = {posts} user={user} del={del}/>
      </div>
    </div>
  );
}

export default Main;