import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
 
  const notify = () =>{formstate==="success" ? toast.success("Login Successful", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    }): toast.warn('Invalid Credentials', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });}
  
 
  return (
    <div>
    <div>
      {formstate==="success"?null:<div className='sign1'><p className='sign'>Invalid Credentials</p></div>}
      <form className='login' onSubmit={handleSubmit}>
        <h1>login</h1>
       <TextField   value={values.email} name="email" onChange={handleChange} label="email" />
      <TextField   name="password" onChange={handleChange}  label="password"/>
      <div>
      <Button className='sigbtn' onClick={notify}   type="submit"  color={formstate} variant='contained'>{formstate==="success"?"submit":"retry"}</Button>
      <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      </div>
      {/* <Button   type="submit" color={formstate}  variant='contained'>{formstate==="success"?"submit":"retry"}</Button> */}
 
      </form>
     
     
    </div>
    
      <p className='for' onClick={()=>navigate("/forgot")} >forgot password ?</p>
    
    </div>
  );
}
