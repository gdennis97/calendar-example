import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapOne from './components/campusSelector/MapOne';
import MapTwo from './components/campusSelector/MapTwo';
import MapThree from './components/campusSelector/MapThree';

import Home from './components/campusSelector/Home'
import {Link} from 'react-router-dom'
import MainCalendar  from './components/campusSelector/Calendar';



function App(){
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
  let [loggedIn, setLoggedIn] = useState(false);
  // let [validUsers, setValidUsers] = useState([{}]);
  let validUsers = 'Wendy'
  let validPassword = 'Xiong'

  function handleClick(){
    if(name === '' || password === '' ){
      alert('There is no username or no password');
    } else if (name === validUsers && validPassword){
      setLoggedIn(true);
      
    } else {
      alert('Your username or password is incorrect');
    }
    // setLoggedIn(true);
    // alert(`My name is ${name} and my password is ${password}, ${loggedIn}`);
  }

  function handleName(e){
    setName(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
}

  function handleLogOut(e){
    setLoggedIn(false);
    setName('');
    setPassword('');
  }

  if(loggedIn === false){
    return(
      <div className='App'>
      {/* <h1 className='HelloKitty'>.</h1> */}
        <input className='username' placeholder= 'Enter Your Username' onChange={handleName}/>
      <br />
        <input placeholder= 'Enter Your Password' onChange={handlePassword} type= 'password' pattern= '[0-9]' inputMode='numeric'/>
      <br />
        <button className='LoginButton' onClick={handleClick}>LOGIN</button>
      <h1>{name}</h1>
    </div>
    
  )
} else {
  return(
    <body>
      <div>
      <button className= 'LoggedOutButton' onClick={handleLogOut}>LOGOUT</button>  
        <Router>
          <Routes>
            <Route path='/' element={<MainCalendar/>}></Route>
            <Route path='/MapOne' element={<MapOne/>}></Route>
            <Route path='/MapTwo' element={<MapTwo/>}></Route>
            <Route path='/MapThree' element={<MapThree/>}></Route>
          </Routes>
        </Router>
      </div>
    <div> 
        
      </div>
    </body>
  )
}
}

export default App; 
