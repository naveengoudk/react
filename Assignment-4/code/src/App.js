import React from 'react'
import Header from './landingpage/Header'
import Postview from './postviewpage/Postview'
import {
    BrowserRouter as Router,
    Routes, 
    Route,
    Link
  } from "react-router-dom";

export default function App() {
  return (

        <Router>
            <Routes>
                <Route path="/" element={<Header/>} />
                <Route path='/postview' element={<Postview/>}/>
            </Routes>
        </Router>
   
  )
}
