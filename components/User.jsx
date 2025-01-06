import {React,useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./forms.css";
function User()
{
    const [user,setUser]=useState([])

    useEffect(()=>{
        axios.get("https://backend-demo-h55y.onrender.com/api/user/fetch")
        .then(result=>{
            setUser(result.data.users)
        })
        .catch(err=>{console.log(err)})
    },[]);

    function handledelete(id)
    {
        axios.delete(`https://backend-demo-h55y.onrender.com/api/user/delete/${id}`)
        .then(result=>{
            console.log("user Deleted sucessfully");
            
        })
        .catch(err=>{console.log(err)})
    }
  return (
    <div>
        <h1>User</h1>
        
        <table class="tablee">
            
            <tr >
                <th class='head'> Name</th>
                <th class='head'>Email</th>
                <th class='head'>Address</th>
                <th class='head'>Actions</th>
            </tr>
           
            
            {
                user.map((users)=>{
                    return <tr>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.address}</td>
                        <td>
                        <Link to='/create'>
                        <button class="butto"> Create User </button>
                         </Link>
                         <Link to={`/update/${users._id}`}> 
                        <button class="butto"> Update User </button>
                        </Link>
                        <button class="butto" onClick={(e)=>handledelete(users._id)}> Delete User </button>
                        </td>
                    </tr>
                })
            }
           
        </table>
    </div>
  )
}
export default User;
