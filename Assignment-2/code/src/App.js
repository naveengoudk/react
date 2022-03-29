import "./App.css";
import React from 'react'


export default function App() {
  const employee = {
    name: 'Tom',
    location: 'New York',
    bloodGroup: 'B+',
    age: 28,
    profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
         }
    
  return (
    <div className='contact-info'>
      <img src={employee.profileImg} width={"100%"}></img>
      <h1>{employee.name}</h1>
      <p>Location</p>
      <h3>{employee.location}</h3>
      <p>Blood group</p>
      <h3>{employee.bloodGroup}</h3>
      <p>Age</p>
      <h3>{employee.age}</h3>

    </div>
  )
}
