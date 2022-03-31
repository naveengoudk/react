import React from 'react';
import './App.css';
import logo from "./avatar.png"


var arrow="<"
function App() {

  const obj ={
    name:"Naveen",
    employeeid:"0008976",
    Appointment:"9:00 (24-03-2022",
    Email:"Nk@gmail.com",
    Phone:"+9187654321",
    Status:"completed",
    statusTime:"10:30 (25-03-2022)",
    productName:"Advertising agency",
    productDescription:"Advertising is a marketing communication that employs an openly sponsored, non-personal message to promote or sell a product, service or idea.[1]: 465  Sponsors of advertising are typically businesses wishing to promote their products or services. Advertising is differentiated from public relations in that an advertiser pays for and has control over the message",

  }


  return (
    <div className="site-container">
     <div className='header'>
       <div className='backicon'>
      <a href='#'><i class="fa-solid fa-angle-left"></i></a>
       </div>
     
      <div className='name'>
        <h1>{obj.name}</h1>
        <p>{obj.employeeid}</p>
      </div>
      <div className='print'>
        <button type='submit'>Print</button>
      </div>
      </div>
      

    <div className='customer-info'>
      <p><b>Appointment : </b><span>{obj.Appointment}</span></p>
      <p><b>Email : </b><span>{obj.Email}</span></p>
      <p> <b>Phone : </b><span>{obj.Phone}</span></p>
      </div>

      <div className='order-info'>
        <div className='h3div'>
        <h3>Status <ul><li>{obj.Status}</li></ul></h3>
        </div>
        <div>
          <h3>Door</h3>
          <p>Mark</p>
        </div>
        <div>
          <h3>Time</h3>
          <p>{obj.statusTime}</p>
        </div> 
     </div>

     <div className='product-list'>

       <div className='input'>
         <input className='inputbox' type={"checkbox"}></input>
       </div>
       
          <img src={logo}></img>

          <div className='details'>
          <h2>{obj.productName} </h2>
          <p>{obj.productDescription}</p>
          </div>


          <div className='fronticon'>
      <a href='#'><i class="fa-solid fa-angle-right"></i> </a>
       </div>
          
        </div>
    </div>
  );
}

export default App;
