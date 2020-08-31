import React from 'react'
import '../../pages/index.scss'
import IconFb from '../../pictures/icon-fb.svg'
import IconTw from '../../pictures/icon-tw.svg'
import IconIg from '../../pictures/icon-ig.svg'
import IconMd from '../../pictures/icon-md.svg'
import IconRd from '../../pictures/icon-rd.svg'
import Mountain from '../../pictures/mountain.jpg'
import MountainOverlay from '../../pictures/mountain-overlay.jpg'

export default function AboutProton() {
    return (
        <div className='about-proton flex relative'>
            <div className='about-container flex bg-global-grey'>
                <div className='w70 mauto about-content'>
                    <h2 className='about-title'>
                        About <span className='color-pm-blue'>Proton</span>
                    </h2>
                    <p className='about-text'>
                        We believe universal access to privacy and security makes the world a better place.
                    </p>
                    <div className='flex flex-spacebetween w50 about-icons'>
                        <a href='https://www.facebook.com/ProtonMail' target='_Blank'>
                            <img className='AboutIconFb' src={IconFb} alt='' />
                        </a>
                        <a href='' target='_Blank'>
                            <img className='AboutIconTw' src={IconTw} alt='' />
                        </a>
                        <a href='' target='_Blank'>
                            {' '}
                            <img className='AboutIconIg' src={IconIg} alt='' />
                        </a>
                        <a href='' target='_Blank'>
                            {' '}
                            <img className='AboutIconMd' src={IconMd} alt='' />
                        </a>
                        <a href='' target='_Blank'>
                            <img className='AboutIconRd' src={IconRd} alt='' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='about-picture onmobile-w100 w50' style={{ backgroundImage: `url(${MountainOverlay})` }}>
                {/* <img src={MountainOverlay} className='w100 h100' /> */}
            </div>
        </div>
    )
}
