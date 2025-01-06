import React from 'react'
import axios from 'axios';
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Updateuser() { 
    const {id}=useParams();
    const[name,setName]=useState();
    const [email,setEmail]=useState();  
    const [address,setAddress]=useState();
    const navigate=useNavigate();


    const submit=(e)=>{
        e.preventDefault();
        axios.put(`hhttps://backend-demo-h55y.onrender.com/api/user/update/${id}`,{name,email,address})
        .then(result=>{
            console.log(result.data);
            navigate('/');
        })
        .catch(err=>{console.log(err)})
    }
     
    return (
        <div class="forms">
        <form onSubmit={submit}>
            <h1> Update User</h1>
            <label> Name:</label>
            <input type='text' class='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
            <label>Email:</label>
            <input type='email' class='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
            <label> Address:</label>
            <input type='text' class='address'  value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Address' />
            <button class="but">Submit</button>
        </form>
    </div>
    )
    }
export default Updateuser;