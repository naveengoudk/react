import React from 'react'
import Card from './Card';
import "./Postview.css"



export default function Postview() {

  const [currState , changeState] = React.useState([])


React.useEffect(()=>{
  fetch("http://localhost:3004/data")
  .then(res => res.json())
  .then(data => changeState(data))
  
},[])

const ele = currState.map((item)=>{
    return <Card key={item.name}{...item}/>
})
 


  return (
   <div>
       <header className='header'>
       <img className='logo' src='./images/logo.png' height="100%"></img>
         <h1>
           Instaclone
           </h1>
           <img className='camera' src='images/camera.jpeg'  height='100%'></img>
       </header>
     {ele}
   </div>
  )
}
