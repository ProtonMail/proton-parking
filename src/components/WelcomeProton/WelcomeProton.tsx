import React from 'react'
import '../../pages/layout.scss'
import IconFb from '../../pictures/icon-fb.svg'
import IconTw from '../../pictures/icon-tw.svg'
import IconIg from '../../pictures/icon-ig.svg'
import IconMd from '../../pictures/icon-md.svg'
import IconRd from '../../pictures/icon-rd.svg'
import IconArrow from '../../pictures/arrow.svg'

function WelcomeProton() {
    return (
        <div className='welcomeProton w50 flex flex-column onmobile-w100 relative bg-global-grey'>
            <h1 className='welcomeProton-title color-white '>
                Welcome to <span className='color-pm-blue'>Proton</span>
            </h1>
            <p className='welcomeProton-description color-white'>
                You've arrived at a Proton product that doesn’t exist (yet).
            </p>
            <p className='welcomeProton-text color-white'>
                But check out these other products that respect your privacy and keep your data safe.
            </p>
            <img className='' src={IconArrow} alt='' />

            <div className='flex pt2 pl2 LinksCustom'>
                <a href='https://www.facebook.com/ProtonMail' target='_blank'>
                    <img className='IconFb' src={IconFb} alt='Proton on Facebook' />
                </a>
                <a href='' target='_blank'>
                    <img className='IconTw' src={IconTw} alt='Proton on Twitter' />
                </a>
                <a href='' target='_blank'>
                    {' '}
                    <img className='IconIg' src={IconIg} alt='Proton on Instagram' />
                </a>
                <a href='' target='_blank'>
                    {' '}
                    <img className='IconMd' src={IconMd} alt='Proton on Mastodon' />
                </a>
                <a href='' target='_blank'>
                    <img className='IconRd' src={IconRd} alt='Proton on Reddit' />
                </a>
            </div>
        </div>
    )
}

export default WelcomeProton
