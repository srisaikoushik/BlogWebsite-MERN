import Navbar from "./components/Navbar";
import MainPage from "./MainPage";
import {useState} from "react";
import axios from 'axios';
import {Routes,Route,BrowserRouter,useNavigate} from "react-router-dom";

export default function App(){
  const [user,setUser] = useState("");
  const [id,setId] = useState("");
  //let history = useNavigate();

  function register(data) {
    axios.post('http://localhost:5000/users/signup', data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  function login(data) {
    axios.post('http://localhost:5000/users/login',data)
    .then((res)=>{
      console.log(res.data);
      setId(res.data._id);
      setUser(res.data.username);
      //history("/home",{ replace: true });
    })
    .catch((err)=>console.log(err));
}

function createPost(data){
  if(data.username===""){
    console.log("Login to create post");
    return ;
  }
  axios.post('http://localhost:5000/posts',data)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
}

function editPost(data){
  axios.post('http://localhost:5000/posts/update',data)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
}

function logout(){
    setId("");
    setUser("");
}

  return(
    <BrowserRouter>
    <div className="App">
      <Navbar user = {user} func = {logout}/>
      <MainPage user={user} id = {id} login = {login} register={register} logout = {logout} createPost = {createPost} editPost={editPost}/>
    </div>
    </BrowserRouter>
  );
}