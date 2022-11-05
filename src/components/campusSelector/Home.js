import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css';


function Home() {
  return (
    <div className='HomePage'>
      <body>
        <header className='homeheader'>.</header>
      </body>
          <Link to='/'><button className='homebutton'>Home</button></Link> 
          <Link to='/MapOne'><button className= 'loginbutton'>Map1</button></Link>
          <Link to='/MapTwo'><button className= 'registerbutton'>Map2</button></Link>
          <Link to='/MapThree'><button className= 'registerbutton'>Map3</button></Link> 
          
        <div>
          <link to='/calendar/Calendar'></link>
        </div>     
      <div>
      <Link to='/Calendar'><button className= 'registerbutton'>Calendar</button></Link> 
      </div>
    </div> 
  )
} 

export default Home