import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
    <Link to= '/'><button>Click to go home</button></Link>
    <Link to= '/Login'>Login</Link>
    <Link to= '/Register'>Register</Link>
    
    </div>
  )
}

export default Home