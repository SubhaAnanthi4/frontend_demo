import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aboutus from '../components/Aboutus.jsx';
import Home from '../components/Home.jsx';
import Contactus from '../components/Contactus.jsx';
import Homee from '../components/Homee.jsx';
function App() {
  const handleRefresh=()=>{
    window.location.href='/';
  }
  return (
    <>
   
      <Router>
      
        <header>
        <nav>
          <div className='logo'>
          <img className="logoi" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/d4bb068321073.560bb2b94d7e5.jpg"></img>
           <span onClick={handleRefresh}>Ice Scream </span>  
           </div>
           <div className='pages'>
        
            <Link to="/Home">Home</Link>
            <Link to="/Aboutus">About Us</Link>
            <Link to="/Contactus">Contact Us</Link>
            </div> 
        </nav>
        </header>
        
        <Routes>
          {/*<Route path='/' element={<App />} ></Route>*/}
          <Route path="/" element={<Homee />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
        
      </Router>
      
      
      <footer>
        <h4 > &#169; 2024 Scream Ice Creams . All Rights Reserved</h4>
      </footer>
      
    </>
  );
}

export default App;
