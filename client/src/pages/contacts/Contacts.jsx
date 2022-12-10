import React, { useContext } from "react";
import "./contacts.css"
import { Icon } from '@iconify/react';

export default function Contacts() {

    return(
    <div className="contact-page">
        <div>
            <img className="immagine" src="https://c1.wallpaperflare.com/preview/23/423/784/goblin-banker-universal-studios-gringotts.jpg"/>
        </div>
        <div>
        <h2>Get in touch</h2>
        <div className="contact-info">
          <div className="item">
            <i className="icon fas fa-home"></i>
            London, United Kingdom
          </div>
          <div className="item">
            <i className="icon fas fa-phone"></i>
            +0 000 0000000
          </div>
          <div className="item">
            <Icon icon="mdi:owl" className="icon" id="owl"/>
            email@address.com
          </div>
        </div>
        </div>
        
      </div>
    

    )
        
}