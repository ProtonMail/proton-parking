import React from 'react'
import '../../pages/index.scss'
import IconFb from '../../pictures/icon-fb.svg'
import IconTw from '../../pictures/icon-tw.svg'
import IconIg from '../../pictures/icon-ig.svg'
import IconMd from '../../pictures/icon-md.svg'
import IconRd from '../../pictures/icon-rd.svg'
import Mountain from '../../pictures/mountain.jpg'
import MountainOverlay from '../../../public/mountainOverlay.jpg'

export default function AboutProton() {
    return (
        <div className='AboutProton flex relative'>
            <div
                className='About flex bg-global-grey'
                // style={{ backgroundImage: `url(${Mountain})` }}
            >
                <div className='w70 mauto AboutContent'>
                    <h2 className='AboutTitle'>
                        About <span className='color-pm-blue'>Proton</span>
                    </h2>
                    <p className='AboutText'>
                        We believe universal access to privacy and security makes the world a better place.
                    </p>
                    <div className='flex flex-spacebetween w50 AboutIcons'>
                        <a href='https://www.facebook.com/ProtonMail' target='_Blank' alt='Proton on Facebook'>
                            <img className='AboutIconFb' src={IconFb} />
                        </a>
                        <a href='' target='_Blank' alt='Proton on Twitter'>
                            <img className='AboutIconTw' src={IconTw} />
                        </a>
                        <a href='' target='_Blank' alt='Proton on Instagram'>
                            {' '}
                            <img className='AboutIconIg' src={IconIg} />
                        </a>
                        <a href='' target='_Blank' alt='Proton on Mastodon'>
                            {' '}
                            <img className='AboutIconMd' src={IconMd} />
                        </a>
                        <a href='' target='_Blank' alt='Proton on Reddit'>
                            <img className='AboutIconRd' src={IconRd} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='AboutPicture onmobile-w100 w50' style={{ backgroundImage: `url(${MountainOverlay})` }}>
                {/* <img src={MountainOverlay} className='w100 h100' /> */}
            </div>
        </div>
    )
}
