import React from 'react'
import './Deals.css'
// import Data from '../Data';
import Card from '../Components/Card';
const Deals = () => {
  const Data=[

    {
          id:1,
          image:"melvano.png",
          small:"smallicon.png",
          topTitle:"Melvano",
          para:"An IIT Madras-backed adaptive learning app with 2.1 Lakh users. The team from IIT have built an AI engine that creates personalised coursework ",
          percentage:"454.50%",
          days:"5 Days",
          amount:"11,650",
          subscriber:"820",


      },
      {
        id:2,
        image:"fityoga.png",
        small:"smallicon1.png",
        topTitle:"Melvano",
        para:"An IIT Madras-backed adaptive learning app with 2.1 Lakh users. The team from IIT have built an AI engine that creates personalised coursework ",
        percentage:"45.50%",
        days:"5 Days",
        amount:"15,650",
        subscriber:"952",


    },
    {
        id:3,
        image:"melvano.png",
        small:"smallicon.png",
        topTitle:"Melvano",
        para:"An IIT Madras-backed adaptive learning app with 2.1 Lakh users. The team from IIT have built an AI engine that creates personalised coursework ",
        percentage:"454.50%",
        days:"5 Days",
        amount:"11,650",
        subscriber:"820",


    },
    {
        id:4,
        image:"fityoga.png",
        small:"smallicon1.png",
        topTitle:"Melvano",
        para:"An IIT Madras-backed adaptive learning app with 2.1 Lakh users. The team from IIT have built an AI engine that creates personalised coursework ",
        percentage:"459.50%",
        days:"12Days",
        amount:"11,650",
        subscriber:"820",


    },
    {
        id:5,
        image:"melvano.png",
        small:"smallicon.png",
        topTitle:"Melvano",
        para:"An IIT Madras-backed adaptive learning app with 2.1 Lakh users. The team from IIT have built an AI engine that creates personalised coursework ",
        percentage:"454.50%",
        days:"5 Days",
        amount:"11,650",
        subscriber:"820",


    },
    {
        id:6,
        image:"fityoga.png",
        small:"smallicon.png",
        topTitle:"Melvano",
        para:"An IIT Madras-backed adaptive learning app with 2.1 Lakh users. The team from IIT have built an AI engine that creates personalised coursework ",
        percentage:"454.50%",
        days:"10Days",
        amount:"15,650",
        subscriber:"562",


    },
    {
      id:7,
      image:"melvano.png",
      small:"smallicon.png",
      topTitle:"Melvano",
      para:"An IIT Madras-backed adaptive learning app with 2.1 Lakh users. The team from IIT have built an AI engine that creates personalised coursework ",
      percentage:"454.50%",
      days:"5 Days",
      amount:"11,650",
      subscriber:"820",


  },
  {
      id:8,
      image:"fityoga.png",
      small:"smallicon.png",
      topTitle:"Melvano",
      para:"An IIT Madras-backed adaptive learning app with 2.1 Lakh users. The team from IIT have built an AI engine that creates personalised coursework ",
      percentage:"454.50%",
      days:"10Days",
      amount:"15,650",
      subscriber:"562",


  },
  {
    id:9,
    image:"melvano.png",
    small:"smallicon.png",
    topTitle:"Melvano",
    para:"An IIT Madras-backed adaptive learning app with 2.1 Lakh users. The team from IIT have built an AI engine that creates personalised coursework ",
    percentage:"454.50%",
    days:"5 Days",
    amount:"11,650",
    subscriber:"820",


},










]


 
  return (
 <div className="deals">
  <div className="deal_title">
       <h1>DEALS</h1>
       
         <span className='browse'>Browse current investment opportunities on Creek.</span>
    
  </div>
  <div className="row">
  {
  Data.map((ash) => (
              
    <div className="col-md-4" key={ash.id}><Card data={ash}/></div>

  ))
}

  </div>


 


                             
   

  
 </div>
  )
}

export default Deals;
