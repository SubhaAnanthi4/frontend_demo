import React from 'react'
import {useState} from 'react';
import "./forms.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Createuser() {
const [name,setName]=useState();
const [email,setEmail]=useState();
const [address,setAddress]=useState();
const navigate=useNavigate();

const submit=(e)=>{
    e.preventDefault();
    axios.post("https://backend-demo-h55y.onrender.com/api/user/create",{name,email,address})
    .then(result=>{
        console.log(result.data);
        navigate('/');
    })
   .catch(err=>{console.log(err)})
}
  return (
    <div class="forms">
        <form onSubmit={submit}>
            <h1> Create User</h1>
            <label> Name:</label>
            <input type='text' class='name'  placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}}/>
            <label>Email:</label>
            <input type='email' class='email' placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <label> Address:</label>
            <input type='text' class='address' placeholder='Enter Address' onChange={(e)=>{setAddress(e.target.value)}}/>
            <button class="but">Submit</button>
        </form>
    </div>
  )
} export default Createuser;    