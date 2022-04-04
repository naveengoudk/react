import React from 'react'
import Card from './Card';
import "./Postview.css"
import Data from "../Data"
import { Link } from 'react-router-dom';



export default function Postview() {

  const [currState , changeState] = React.useState(Data)
 

  React.useEffect(()=>{
    changeState(Data)
  },[currState])

const ele = currState.map((item)=>{
    return <Card key={item.name}{...item}/>
})
 


  return (
   <>
       <header className='header'>
       <img className='logo' src='./images/logo.png' height="100%"></img>
         <h1><Link className='link' to='/'> Instaclone</Link></h1>
           <img className='camera' src='images/camera.jpeg'  height='100%'></img>
       </header>
     {ele}
   </>
  )
}
