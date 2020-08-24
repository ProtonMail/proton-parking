import React from "react"
import './AboutProton.css'
import IconFb from "../../pictures/icon-fb.svg"
import IconTw from "../../pictures/icon-tw.svg"
import IconIg from "../../pictures/icon-ig.svg"
import IconMd from "../../pictures/icon-md.svg"
import IconRd from "../../pictures/icon-rd.svg"
import Mountain from '../../pictures/mountain.jpg'
import MountainOverlay from '../../pictures/mountain overlay.jpg'

export default function AboutProton() {
  return (
    <div className="AboutProton" style={{display:"flex"}}>
      <div className="About">
        <h3 className="AboutTitle">About <span style={{color:'#657EE4'}}>Proton</span></h3>
        <p className="AboutText">
          We believe universal access to privacy and security makes the world a
          better place.
        </p>
        <div>
          <a href="https://www.facebook.com/ProtonMail" target="_Blank">
            <img className="IconFb" src={IconFb} />
          </a>
          <a href="" target="_Blank">
            <img className="IconTw" src={IconTw} />
          </a>
          <a href="" target="_Blank">
            {" "}
            <img className="IconIg" src={IconIg} />
          </a>
          <a href="" target="_Blank">
            {" "}
            <img className="IconMd" src={IconMd} />
          </a>
          <a href="" target="_Blank">
            <img className="IconRd" src={IconRd} />
          </a>
        </div>
      </div>
      <div className="AboutPicture">
          
      </div>
    </div>
  )
}
