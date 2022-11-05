import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css';


function Register() {
  return (
    <div className='HomePage'>
        {/* <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Register'>Register</Link> */}
        <Link to='/'><button className='homebutton'>HOME</button></Link>
        <Link to='/Login'><button className= 'loginbutton'>LOGIN</button></Link>
        <Link to='/Register'><button className= 'registerbutton'>REGISTER</button></Link>
    </div>
  )
}

export default Register