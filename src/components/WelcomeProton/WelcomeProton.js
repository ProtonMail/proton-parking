import React from "react"
import "../../pages/index.scss"
import IconFb from "../../pictures/icon-fb.svg"
import IconTw from "../../pictures/icon-tw.svg"
import IconIg from "../../pictures/icon-ig.svg"
import IconMd from "../../pictures/icon-md.svg"
import IconRd from "../../pictures/icon-rd.svg"

function WelcomeProton() {
  return (
    <div className="WelcomeProton w50 flex flex-column onmobile-w100 relative">
      {/* <div className=""> */}
      <h1 className="WelcomeProtonTitle color-white ">
        Welcome to <span style={{ color: "#657EE4" }}>Proton</span>
      </h1>
      <p className="WelcomeProtonDesc color-white">
        You've arrived at a Proton product that doesn’t exist (yet).
      </p>
      <p className="WelcomeProtonText color-white">
        But check out these other products that respect your privacy and keep
        your data safe.
      </p>

      <div className="ArrowLeft"></div>
      <span className="arrow arrow-right"></span>

      {/* </div> */}
      <div className="flex pt2 pl2 LinksCustom">
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
  )
}

export default WelcomeProton
