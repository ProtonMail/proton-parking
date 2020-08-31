// import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import React, { useState, useEffect, useRef } from 'react'
import './index.scss'
import WelcomeProton from '../components/WelcomeProton/WelcomeProton'
import ProtonProducts from '../components/ProtonProducts/ProtonProducts'
import AboutProton from '../components/AboutProton/AboutProton'
import PictureMail from '../pictures/DP-PM.png'
import PictureVPN from '../pictures/DP-PVPN.png'
import PictureCalendar from '../pictures/DP-PC.png'
import PictureDrive from '../pictures/DP-PD.png'
import LogoMail from '../pictures/logo-mail.svg'
import LogoCalendar from '../pictures/logo-cal.svg'
import LogoDrive from '../pictures/logo-drive.svg'
import LogoVPN from '../pictures/logo-vpn.svg'

interface Property {
    pic: string
    text: string
    logo: string
    color: string
    button: string
}

interface AllProperties {
    [key: string]: Property
    mail: Property
    vpn: Property
    calendar: Property
    drive: Property
}

export default function Home() {
    const listOfPages: string[] = ['mail', 'vpn', 'calendar', 'drive', 'about']
    const allProperties: AllProperties = {
        mail: {
            pic: PictureMail,
            text: 'Encrypted email that respects your privacy',
            logo: LogoMail,
            color: '#657ee4',
            button: 'Learn More',
        },
        vpn: {
            pic: PictureVPN,
            text: 'High-speed VPN to access blocked content and secure your Internet connection',
            logo: LogoVPN,
            color: '#5FB364',
            button: 'Learn More',
        },
        calendar: {
            pic: PictureCalendar,
            text: 'Encrypted calendar that keeps your plans private',
            logo: LogoCalendar,
            color: '#657EE4',
            button: 'Learn More',
        },
        drive: {
            pic: PictureDrive,
            text: 'Encrypted file storage on the cloud to store and backup your files safely',
            logo: LogoDrive,
            color: '#00C5B8',
            button: 'Coming Soon',
        },
    }
    const [checked, setChecked] = useState('mail')
    // const [about, setAbout] = useState(true)
    const checkedRef = useRef(checked)
    checkedRef.current = checked
    // const [widthh, setWidth] = useState(0)

    // useEffect(() => {
    //   const updateWindowDimensions = () => {
    //     const newHeight = window.innerWidth
    //     setWidth(newHeight)
    //     console.log('updating height')
    //   }

    //   window.addEventListener('resize', updateWindowDimensions)

    //   return () => window.removeEventListener('resize', updateWindowDimensions)
    // }, [])

    // console.log('give height', widthh)

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.value)
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const previousChecked = checkedRef.current
    //         const indexToCheck =
    //             listOfPages.indexOf(previousChecked) + 1 === listOfPages.length
    //                 ? 0
    //                 : listOfPages.indexOf(previousChecked) + 1
    //         const item = listOfPages[indexToCheck]
    //         setChecked(item)
    //     }, 5000)
    //     return () => clearInterval(interval)
    // }, [])

    // const { languages, changeLanguage } = useI18next();

    return (
        <div>
            {/* <ul className='languages'>
        {languages.map((lng) => (
          <li key={lng}>
            <a
              href='#'
              onClick={(e) => {
                console.log('what')
                console.log(lng)
                e.preventDefault()
                changeLanguage(lng)
              }}
            >
              {lng}
            </a>
          </li>
        ))}
      </ul> */}
            {checked === 'about' ? (
                <AboutProton />
            ) : (
                <div className='main-container flex'>
                    <WelcomeProton />
                    <ProtonProducts
                        picture={allProperties[checked].pic}
                        logo={allProperties[checked].logo}
                        text={allProperties[checked].text}
                        color={allProperties[checked].color}
                        button={allProperties[checked].button}
                    />
                </div>
            )}
            <div
                className='select-product flex flex-column absolute'
                // style={{ top: checked === 'about'  ? '320px': '882px'}}
            >
                {listOfPages.map((page) => {
                    return (
                        <input
                            className='select-radioButton cursor-pointer'
                            type='radio'
                            id='2'
                            name={page}
                            value={page}
                            key={page}
                            checked={checked === page}
                            onChange={handleRadioChange}
                        />
                    )
                })}
            </div>
        </div>
    )
}
