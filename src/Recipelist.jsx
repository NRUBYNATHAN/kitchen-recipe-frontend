

  import { useState } from "react";
import { useEffect } from "react";

import { API } from "./global";
import Card from '@mui/material/Card';
import { Counter } from "./Counter";
import { Link } from 'react-router-dom';

function checkAuth(res){
  if(res.status===401){
    throw Error("unauthorised");
  }else{
return res.json()
  }
}
function logout(){
  localStorage.removeItem("token");
  window.location.href="/signup"
}
export function Recipelist () {

  const [obj, setObject] = useState([]);

const getMovies=()=>{
  fetch(`${API}/allrecipe`,{
              headers:{
                "x-auth-token":localStorage.getItem("token")
               }
             })
      .then((res) => checkAuth(res))
      .then((mvs) => setObject(mvs))
      .catch(err=>logout())
}

  useEffect(() => getMovies(), []);


  return (
 
  
    <div>
       <div  className="all">
        {obj.map((mv) => 
        (<Recipe key={mv.id} 
        data={mv} 
        id={mv._id} 
  
      
        />))}
      </div>
    </div>
   
  );
}
function Recipe({data}){
  return(
    <div>
            <Card className="card">
                          <Link to={`/recipedetails/${data._id}`}>
                              <img className="img" src={data.image} alt="chiken" />
                          </Link>
                      <div className="detail">
                              <p className="title">{data.cuisines}-cuisine </p>
                            <Link className='Link' to={`/recipedetails/${data._id}`}>
                              <h3 className="name">{data.title}</h3></Link>
                      <div className="count">
                              <p className="de">{data.rating}</p>
                            <Counter />
                      </div>
                      </div>
                      </Card>
    </div>
  );
}