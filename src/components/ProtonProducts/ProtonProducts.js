import React from "react"
import "./ProtonProducts.css"

function ProotonProducts(props) {
  return (
    <div className="ProtonProducts" style={{ backgroundColor: props.color }}>
      <img className="ProtonMailLogo" src={props.logo} />
      <p className="ProtonMailText">{props.text}</p>
      <a className="ProtonMailButton">{props.button}</a>
      <div className="ProtonMailPic">
        <img src={props.picture} width="100%" />
      </div>
      <div className="WhiteDiv"></div>
    </div> 
  )
}

export default ProotonProducts
