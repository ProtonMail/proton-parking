import React from "react"
import "../../pages/index.scss"
import IconFb from "../../pictures/icon-fb.svg"
import IconTw from "../../pictures/icon-tw.svg"
import IconIg from "../../pictures/icon-ig.svg"
import IconMd from "../../pictures/icon-md.svg"
import IconRd from "../../pictures/icon-rd.svg"
import Mountain from "../../pictures/mountain.jpg"
import MountainOverlay from "../../pictures/mountain overlay.jpg"

export default function AboutProton() {
  return (
    <div className="AboutProton flex">
      <div className="About flex">
        <div className="mauto w70">
          <h3 className="AboutTitle">
            About <span style={{ color: "#657EE4" }}>Proton</span>
          </h3>
          <p className="AboutText">
            We believe universal access to privacy and security makes the world
            a better place.
          </p>
          <div className="flex w50 flex-spacebetween">
            <a href="https://www.facebook.com/ProtonMail" target="_Blank">
              <img className="icons" src={IconFb} />
            </a>
            <a href="" target="_Blank">
              <img className="icons" src={IconTw} />
            </a>
            <a href="" target="_Blank">
              {" "}
              <img className="icons" src={IconIg} />
            </a>
            <a href="" target="_Blank">
              {" "}
              <img className="icons" src={IconMd} />
            </a>
            <a href="" target="_Blank">
              <img className="icons" src={IconRd} />
            </a>
          </div>
        </div>
      </div>
      <div className="AboutPicture">
      <img src={MountainOverlay} className="w100 h100"/>
      </div>
    </div>
  )
}
