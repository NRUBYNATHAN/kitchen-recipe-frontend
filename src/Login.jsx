import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {

  const navigate=useNavigate();
  const[formstate,setFormstate]=useState("success")
  const {handleChange,handleSubmit,values}=useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    onSubmit:async(value)=>{
      console.log(value)
      
        const data= await fetch(`${API}/userLogin`,{
          method:"POST",
          headers: {"Content-type": "application/json",},
          body:JSON.stringify(value)
        })
        if(data.status===401){
console.log("error ❌")
setFormstate("error")
        }else{
          setFormstate("success")
        
const result=await data.json()
console.log(result)
localStorage.setItem("token",result.token)
navigate("/allrecipe")
        }
    }
  })
 
 
  
 
  return (
    <div>
    <div>
      {formstate==="success"?null:<div className='sign1'><p className='sign'>Invalid Credentials</p></div>}
      <form className='login' onSubmit={handleSubmit}>
        <h1>login</h1>
       <TextField   value={values.email} name="email" onChange={handleChange} label="email" />
      <TextField   name="password" onChange={handleChange}  label="password"/>
      <Button   type="submit" color={formstate}  variant='contained'>{formstate==="success"?"submit":"retry"}</Button>
 
      </form>
     
     
    </div>
    
      <p className='for' onClick={()=>navigate("/forgot")} >forgot password ?</p>
    
    </div>
  );
}
