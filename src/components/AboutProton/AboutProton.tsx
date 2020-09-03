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
                className='about-container flex bg-global-grey w50 onmobile-w100'
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
                        <a href='https://www.facebook.com/ProtonMail' target='_blank'>
                            <img className='IconFb' src={IconFb} alt='Proton on Facebook' />
                        </a>
                        <a href='' target='_blank'>
                            <img className='IconTw' src={IconTw} alt='Proton on Twitter' />
                        </a>
                        <a href='' target='_blank'>
                            <img className='IconRd' src={IconRd} alt='Proton on Reddit' />
                        </a>
                        <a href='' target='_blank'>
                            {' '}
                            <img className='IconIg' src={IconIg} alt='Proton on Instagram' />
                        </a>
                        <a href='' target='_blank'>
                            {' '}
                            <img className='IconMd' src={IconMd} alt='Proton on Mastodon' />
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
