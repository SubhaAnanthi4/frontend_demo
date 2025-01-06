import React from 'react';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import User from '../components/User.jsx';
import Createuser from '../components/Createuser.jsx';
import Updateuser from '../components/Updateuser.jsx';
function Apps(){
return(
    <div>
       
   <Router>
   <Routes>
    <Route path="/" element={<User />} />
    <Route path="/create" element={<Createuser />} />
    <Route path="/update/:id" element={<Updateuser />} />
   </Routes>
   </Router>
   </div>
)
}
export default Apps;