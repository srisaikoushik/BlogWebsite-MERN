import { useState } from "react";
import {Link} from "react-router-dom";
export default function Modals({type,func}){


    var [username,setUsername] = useState("");
    var [password,setPassword] = useState("");

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
                <center><h3>{type} FORM</h3></center>
                  <div className="form-inline mb-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" value={username} onChange={e=>setUsername(e.target.value)} required/>
                  </div>
                {/* <!-- Password input --> */}
                <div className="form-inline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="text" id="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} required/>
                </div>

                <center><button type="button" className="btn btn-primary btn-block mb-4"
                onClick={()=>func({"username":username,"password":password})}><Link to="/" className="link-dark text-decoration-none">{type}</Link></button></center>
                </div>
            </div>
        </div>
    );
}