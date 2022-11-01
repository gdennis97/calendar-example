import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapOne from './components/campusSelector/MapOne';
import MapTwo from './components/campusSelector/MapTwo';
import MapThree from './components/campusSelector/MapThree';
import Calendar from './components/campusSelector/Calendar'

function App() {

return (
  <div>
          <Router>
            <Routes> 
              {/* <Route path='/MapOne' element={<MapOne/>}></Route>
              <Route path='/MapTwo' element={<MapTwo/>}></Route> */}
              <Route path='/' element={<MapThree/>}></Route>  
            </Routes>
          </Router>   
        </div>
);
}
export default App;
