import React from 'react'
import { Link } from 'react-router-dom'
import "../Navebare/Nav.css"
export default function Navebare() {
  return<>
  <nav className="navbar navbar-expand-lg py-4  fixed-top">
  <div className="container">
    <Link className="navbar-brand h1 text-white" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <Link className="nav-link  text-white fw-bold" aria-current="page" to="about">ABOUT</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link  text-white fw-bold" aria-current="page" to="portpholio">PORTPHOLIO</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link  text-white fw-bold" aria-current="page" to="contect">CONTECT</Link>
          
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  
  </>
}
