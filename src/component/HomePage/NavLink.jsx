import React from 'react';
import {Link } from "react-router-dom";
import '../css/NavLink.css'
import { BsSearch } from 'react-icons/bs';
import { BsBook } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { BsArrowDownShort } from 'react-icons/bs';


function NavLink() {
  return (
    <div>
        <div className="content-navLikn">
            <div className="content--left">
                <div className="content--icon"> <i><BsSearch /></i> </div>
                <div className="content--icon"> <i><BsBook /></i> </div>
                <div className="content--icon"> <i><FaFacebookF /></i> </div>
                <div className="content--icon"> <FaDesktop /> </div>
                <div className="content--icon"> <FiMapPin /> </div>
                <div className="content--icon"> <i><TiInfoLargeOutline /></i> </div>
                <div className="content--icon"></div>
            </div>
            <div className="content-link--iterm">
                <div className="navlink--iterm--1">
                    <p>LES AUTRES SITE DE L'UNIVERSITE <i> <BsArrowDownShort /></i></p>
                    <p>FORMATION <i> <BsArrowDownShort /></i></p>
                    <p>INSCRIPTION  <i> <BsArrowDownShort /></i></p>
                    <p>FRANCAIS <i> <BsArrowDownShort /></i></p>
                </div>
                <div className="navlink--iterm--2">
                    <div className="iterm--2--title">
                        <h1>LOKO</h1>
                    </div>
                    <div className="iterm--2--link">
                        <nav>
                            <Link to="/" className="iterm--link">Home</Link> 
                            <Link to="/invoices"className="iterm--link">Info</Link>
                            <Link to="/expenses"className="iterm--link">Contacts</Link>
                            <Link to="/expenses"className="iterm--link">Guide</Link>
                        </nav>
                    </div>
                </div>
            </div>
            
        </div>
     
    </div>
  )
}

export default NavLink;