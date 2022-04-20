import React from 'react'
import NavLink from './NavLink';
import homeImage from "../../img/imageHome1.jpg"
import "../css/home.css"
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Actualite from './Actualite';

function Home() {
  return (
    <div>
        <div>
            <NavLink />
        </div>
        <div className="imageHome">
            <img src={homeImage} alt="logo" />
        </div>
        <div className="content-info-home">
            <div>
                <div className="title--home-card">
                    <h2>LE GROUPE LOKO</h2>
                </div>
                <div className="card--info">
                    <h3>Tout est parti d’un premier maillon posé en 1948/49. Il compte aujourd’hui 18 établissements bénéficiant ...</h3>
                    <p> le groupe loko possède plus de 08 Etablissements d'Enseignement secondaire général technique et professionnel, 09 Grandes Ecoles
                            et 01 Université ...</p>
                </div>
                <div className="icon-home--card">
                    <p><i> <AiOutlineArrowRight/> </i> <Link to="/invoices"className="card--link"> plus d'info...</Link></p>
                </div>
            </div>
           
        </div>
        <div className="actualite-content">
            <Actualite/>
        </div>
    </div>
  )
}

export default Home;