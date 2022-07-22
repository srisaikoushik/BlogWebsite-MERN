import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from 'react-router-dom';

function Cmp({user,del,data}){
    var title = window.btoa(data.title);
    var content = window.btoa(data.content);
    var editlink = "/updatepost/"+data._id+"/"+title+"/"+content;
    if(user===data.author){
        return (
            <div className="button">
                
               <button className="btn"><Link to={editlink} ><i className="bi bi-pen mr-2"></i></Link></button>
            <button className='btn btn-danger' onClick={()=>del({"id":data._id})}><i className="bi bi-trash"></i></button>
            </div>
        );
    }
}

export default function PostCard({user,data,del}){
    var style = {
        padding: '10px',
        border: '2px solid',
        borderRadius: '10px'
    }
    return(
    <div className="col-6 col-sm-3 m-3" style={style}>
            <h3>{data.title}</h3>
            <Cmp user={user} data={data} del={del}/>
            <hr />
            <p>author: {data.author}</p>
            <p>{data.content}</p>
    </div>
    );
}