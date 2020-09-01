import React from 'react'
import '../../pages/layout.scss'
import IconFb from '../../pictures/icon-fb.svg'
import IconTw from '../../pictures/icon-tw.svg'
import IconIg from '../../pictures/icon-ig.svg'
import IconMd from '../../pictures/icon-md.svg'
import IconRd from '../../pictures/icon-rd.svg'
// import Mountain from '../../pictures/mountain.jpg'
import MountainOverlay from '../../pictures/mountain-overlay.jpg'

interface Props {
    windowSize: number
}

export default function AboutProton(props: Props) {
    return (
        <div className='about-proton flex relative'>
            <div
                className='about-container flex bg-global-grey'
                style={{ backgroundImage: props.windowSize <= 680 ? `url(${MountainOverlay})` : '' }}
            >
                <div className='w70 mauto about-content'>
                    <h2 className='about-title'>
                        About <span className='color-pm-blue'>Proton</span>
                    </h2>
                    <p className='about-text'>
                        We believe universal access to privacy and security makes the world a better place.
                    </p>
                    <div className='flex flex-spacebetween w50 about-icons'>
                        <a href='https://www.facebook.com/ProtonMail' target='_Blank'>
                            <img className='AboutIconFb' src={IconFb} alt='Proton on Facebook' />
                        </a>
                        <a href='' target='_Blank'>
                            <img className='AboutIconTw' src={IconTw} alt='Proton on Twitter' />
                        </a>
                        <a href='' target='_Blank'>
                            {' '}
                            <img className='AboutIconIg' src={IconIg} alt='Proton on Instagram' />
                        </a>
                        <a href='' target='_Blank'>
                            {' '}
                            <img className='AboutIconMd' src={IconMd} alt='Proton on Mastodon' />
                        </a>
                        <a href='' target='_Blank'>
                            <img className='AboutIconRd' src={IconRd} alt='Proton on Reddit' />
                        </a>
                    </div>
                </div>
            </div>
            <div
                className='about-picture onmobile-w100 w50'
                style={{ backgroundImage: `url(${MountainOverlay})` }}
            ></div>
        </div>
    )
}
