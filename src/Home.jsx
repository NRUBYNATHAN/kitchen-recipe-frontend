import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
export function Home() {
  const navigate=useNavigate()
  return (
    <div>
      <div>
     <img className='homesrc' src="https://bloggerspassion.com/wp-content/uploads/2019/12/best-food-blogs-to-follow.jpg"/>
   <div className='homebtn'>
<Button variant='contained' color="primary" onClick={()=>navigate("/signup")}>signup</Button>
   </div>
   </div>
 
   </div>
 
   

  )}