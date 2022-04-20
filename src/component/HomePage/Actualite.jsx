import React from 'react'
import { Link } from 'react-router-dom';
import '../css/actualite.css'

const Actualite = () => {
  return (
    <div>
        <div className="container--actualite">
            <div className="actualite-title">
                <p><h3> L'ACTUALITE<span> DE</span></h3> L'UNIVERSITE</p>
            </div>
            <div className="actualite--plus">
                <Link to="/invoices" className="actualite--link">voir toutes les d'actualités</Link>
            </div>
        </div>
    </div>
  )
}

export default Actualite;