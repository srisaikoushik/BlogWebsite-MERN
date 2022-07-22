import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function LoginLogout({user,func}){
    var urluser = "/users/"+user;
    if(user===""){
        return (
            <><li className="nav-item">
                <Link className="nav-link" to="/login">LOGIN</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signup">REGISTER</Link>
            </li></>
        );
    }
    else{
        return(
        <><li className="nav-item">
            <button onClick={()=>func()} className="btn btn-danger"><Link className="nav-link" to="/">LOGOUT</Link></button>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={urluser}>{user}</Link>
        </li></>
        );
    }
}
export default function Navbar({user,func}){
    return(
        <div className="container">
            <ul className="nav nav-fill">
                <li className="nav-item">
                    <Link className="nav-link" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/createpost">WRITE</Link>
                </li>
                <LoginLogout user={user} func={func}/>
            </ul>
        </div>
    );
}