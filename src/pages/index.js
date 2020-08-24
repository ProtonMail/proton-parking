import React, { useState, useEffect, useRef } from "react"
import "./index.css"
import WelcomeProton from "../components/WelcomeProton/WelcomeProton"
import ProotonProducts from "../components/ProtonProducts/ProtonProducts"
import AboutProton from "../components/AboutProton/AboutProton"
import PictureMail from "../pictures/DP PM.png"
import PictureVPN from "../pictures/DP PVPN.png"
import PictureCalendar from "../pictures/DP PC.png"
import PictureDrive from "../pictures/DP PD.png"
import LogoMail from "../pictures/logo-mail.svg"
import LogoCalendar from "../pictures/logo-cal.svg"
import LogoDrive from "../pictures/logo-drive.svg"
import LogoVPN from "../pictures/logo-vpn.svg"

export default function Home() {
  const allProperties = {
    mail: {
      pic: PictureMail,
      text: "Encrypted email that respects your privacy",
      logo: LogoMail,
      color: "#657ee4",
      button: "Learn More"
    },
    vpn: {
      pic: PictureVPN,
      text:
        "High-speed VPN to access blocked content and secure your Internet connection",
      logo: LogoVPN,
      color: "#5FB364",
      button: "Learn More"
    },
    calendar: {
      pic: PictureCalendar,
      text: "Encrypted calendar that keeps your plans private",
      logo: LogoCalendar,
      color: "#657EE4",
      button: "Learn More"
    },
    drive: {
      pic: PictureDrive,
      text:
        "Encrypted file storage on the cloud to store and backup your files safely",
      logo: LogoDrive,
      color: "#00C5B8",
      button: "Coming Soon"
    },
  }
  const [checked, setChecked] = useState("mail")
  const [about, setAbout] = useState(true)
  const checkedRef = useRef(checked)
  checkedRef.current = checked
  const TTT = ["mail", "vpn", "calendar", "drive"]

  const handleRadioChange = e => {
    setChecked(e.target.value)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const previousChecked = checkedRef.current
      const indexToCheck =
        TTT.indexOf(previousChecked) + 1 === TTT.length
          ? 0
          : TTT.indexOf(previousChecked) + 1
      const item = TTT[indexToCheck]
      setChecked(item)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {!about ? (
        <AboutProton />
      ) : (
        <div className="MainDiv" >
          <WelcomeProton />
          <ProotonProducts
            picture={allProperties[checked].pic}
            logo={allProperties[checked].logo}
            text={allProperties[checked].text}
            color={allProperties[checked].color}
            button={allProperties[checked].button}
          />
          {/* {Object.keys(allProperties).map(key => {
          <input
          className="SelectRadioButton"
          type="radio"
          id={key}
          name={key}
          value={key}
          checked={checked === {key}}
          onChange={handleRadioChange}
        />
        })} */}
          <div className="SelectProduct">
            <input
              className="SelectRadioButton"
              type="radio"
              id="2"
              name="mail"
              value="mail"
              checked={checked === "mail"}
              onChange={handleRadioChange}
            />
            <input
              className="SelectRadioButton"
              type="radio"
              id="3"
              name="mail"
              value="vpn"
              checked={checked == "vpn"}
              onChange={handleRadioChange}
            />
            <input
              className="SelectRadioButton"
              type="radio"
              id="4"
              name="mail"
              value="calendar"
              checked={checked === "calendar"}
              onChange={handleRadioChange}
            />
            <input
              className="SelectRadioButton"
              type="radio"
              id="5"
              name="mail"
              value="drive"
              checked={checked === "drive"}
              onChange={handleRadioChange}
            />
            <input type="radio" id="6" name="mail" value="" />
          </div>
        </div>
      )}
    </div>
  )
}
