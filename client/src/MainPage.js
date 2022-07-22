import {Routes,Route,BrowserRouter} from "react-router-dom";
import {useState} from "react";
import Main from './Main';
import Modals from './components/Modals';
import axios from 'axios';
import WritePost from "./components/WritePost";
import UpdatePost from "./components/UpdatePost";


function MainPage({user,id,login,register,logout,createPost,editPost}) {
  var normalposts = 0;
  var userposts = 1;
  return (
    <div className="MainPage">
      <Routes>
      <Route path="/" element={<Main user={user} func={logout} type={normalposts}/>} />
      <Route path="/users/:username" element={<Main user={user} func={logout} type={userposts}/>} />
      <Route path="/login" element={<Modals type={"LOGIN"} func={login}/>} />
      <Route path="/signup" element={<Modals type={"REGISTER"} func = {register}/>} />
      <Route path="/createpost" element={<WritePost id={id} username={user} func={createPost}/>} />
      <Route path="/updatepost/:postId/:titleEn/:contentEn" element={<UpdatePost editPost={editPost}/>} />
      </Routes>
    </div>
  );
}

export default MainPage;
