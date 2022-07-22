import { useState } from "react";
import {Link,useParams} from "react-router-dom";
export default function UpdatePost({editPost}){
    var {postId,titleEn,contentEn} = useParams();
    var [title,setTitle] = useState(window.atob(titleEn));
    var [content,setContent] = useState(window.atob(contentEn));

    const style = {
        "marginTop" : "12em",
        "alignItems" : "center"
    }
    const border = {
        "border": "2px solid black"
    }
    return(
        <div className="container" >
            <div className="row justify-content-center" style={style}>
                <div className="col-6 col-md-5" style={border}>
                <center><h3>UPDATE POST</h3></center>
                  <div className="form-inline mb-2">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" className="form-control" value={title} onChange={e=>setTitle(e.target.value)} required/>
                  </div>
                {/* <!-- Password input --> */}
                <div className="form-inline mb-4">
                    <label className="form-label" htmlFor="content">Content</label>
                    <textarea type="text" id="content" className="form-control" value={content} onChange={e=>setContent(e.target.value)} required/>
                </div>

                <center><button type="button" className="btn btn-primary btn-block mb-4"
                  onClick={()=>editPost({"postId":postId,"title":title,"content":content})}><Link to="/" className="link-dark text-decoration-none">UPDATE POST</Link></button></center>
                </div>
            </div>
        </div>
    );
}