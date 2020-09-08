import React, { useState, useEffect, useRef } from 'react'
import './layout.scss'
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
    title: string
    text: string
    logo: string
    color: string
    button: string
    buttonUrl: string
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
            title: 'ProtonMail',
            text: 'Encrypted email that respects your privacy',
            logo: LogoMail,
            color: '#657ee4',
            button: 'Learn More',
            buttonUrl: 'https://protonmail.com/'
        },
        vpn: {
            pic: PictureVPN,
            title: 'ProtonVPN',
            text: 'High-speed VPN to access blocked content and secure your Internet connection',
            logo: LogoVPN,
            color: '#5FB364',
            button: 'Learn More',
            buttonUrl: 'https://protonvpn.com/'
        },
        calendar: {
            pic: PictureCalendar,
            title: 'ProtonCalendar',
            text: 'Encrypted calendar that keeps your plans private',
            logo: LogoCalendar,
            color: '#657EE4',
            button: 'Learn More',
            buttonUrl: 'https://protonmail.com/blog/protoncalendar-beta-announcement/'
        },
        drive: {
            pic: PictureDrive,
            title: 'ProtonDrive',
            text: 'Encrypted file storage on the cloud to store and backup your files safely',
            logo: LogoDrive,
            color: '#00C5B8',
            button: 'Coming Soon',
            buttonUrl: 'https://protonmail.com/blog/protondrive-security/'
        },
    }
    const [checked, setChecked] = useState('mail')
    const checkedRef = useRef(checked)
    const [windowWidth, setWidth] = useState(window.innerWidth)

    checkedRef.current = checked

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth
            setWidth(newWidth)
        }

        window.addEventListener('resize', updateWindowDimensions)

        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [])

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.value)
    }

    return (
        <div>
            {checked === 'about' ? (
                <AboutProton windowSize={windowWidth} />
            ) : (
                <div className='main-container flex'>
                    <WelcomeProton />
                    <ProtonProducts
                        picture={allProperties[checked].pic}
                        title={allProperties[checked].title}
                        logo={allProperties[checked].logo}
                        text={allProperties[checked].text}
                        color={allProperties[checked].color}
                        button={allProperties[checked].button}
                    />
                </div>
            )}
            <div
                className='select-product flex flex-column absolute'
                style={{ top: checked === 'about' && windowWidth <= 680 ? '10px' : '' }}
            >
                {listOfPages.map((page) => {
                    const radioText = allProperties[page] ? allProperties[page].title : 'About Proton';
                    return (
                        <>
                            <label 
                                for={page}
                                title={radioText}
                                >
                                <span className="sr-only">{radioText}</span>
                                <input
                                    className='select-radioButton cursor-pointer'
                                    type='radio'
                                    id={page}
                                    name={page}
                                    value={page}
                                    key={page}
                                    checked={checked === page}
                                    onChange={handleRadioChange}
                                />
                            </label>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
