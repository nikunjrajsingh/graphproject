// import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { select, axisBottom,scaleLinear,axisRight,scaleBand } from "d3"; 
// import Loginform from "./components/Loginform";
import Loginform from "./components/Loginform";
import Modla from "./components/Modla";


function App() {

  const adminUser ={
    email: "admin@admin.com",
    password: "admin123"

  }
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    }else{
      console.log("Details do not match");
      setError("Details do not match");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: ""});
  }

  return(
    <div className="App">
     {(user.email !== "") ? (
       <div className="welcome">
         <h2>Welcome,<span>{user.name}</span></h2>
         <Modla/>
         <button onClick={Logout}>Logout</button>
       </div>
     ) : (
       <Loginform Login={Login} error={error}/>
     )}
    </div>
  
  )

  
   
    
  
}

export default App;
