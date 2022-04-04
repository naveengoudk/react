import React from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'
import Postview from '../postviewpage/Postview'

export default function Header() {
    let navigate = useNavigate()
  return (
    <div className='landingpage'>
        <section className='leftsection'>
            <img src='images/landingpage.jpeg'></img>
        </section>
        <section>
        <h1 className='heading'>10x team </h1>
        <div>
        <button><Link className='link' to="./postview" >Enter</Link></button>
        
        </div>
        
        </section>
    </div>
  )
}
