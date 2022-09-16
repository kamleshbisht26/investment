import React from 'react'
import Deals from './deal/Deals'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Header'
import Card from './Components/Card';
import './App.css';
import './DealResponsive.css';


const App = () => {
  return (
<div className="deal">
  <Header/>
 
  <Deals/>
 
  


</div>
  )
}

export default App
