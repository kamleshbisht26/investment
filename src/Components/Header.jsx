import React from 'react';
import './Header.css';
import Creeklogo from '../Img/Creek logo.png'

const Header = () => {
    return (
        <>
        <div className='container-fluid nav-bg'>
          <div className='row'>
            <div className='col-12'>
            
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Creeklogo} className='creek' alt="copy"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Deals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">learn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Raise Capital</a>
        </li>
        <button class="log">Login</button>
         
      </ul>
      
    </div>
  </div>
</nav>
  
</div>
          </div>
        </div>
        </>
    );
};

export default Header;
