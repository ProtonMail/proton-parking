import React from 'react'
import '../../pages/index.scss'
import IconFb from '../../pictures/icon-fb.svg'
import IconTw from '../../pictures/icon-tw.svg'
import IconIg from '../../pictures/icon-ig.svg'
import IconMd from '../../pictures/icon-md.svg'
import IconRd from '../../pictures/icon-rd.svg'

function WelcomeProton(props) {
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

            <div className='ArrowLeft'></div>
            <span className='arrow arrow-right'></span>

            <div className='flex pt2 pl2 LinksCustom'>
                <a href='https://www.facebook.com/ProtonMail' target='_Blank' alt='Proton on Facebook'>
                    <img className='IconFb' src={IconFb} alt='' />
                </a>
                <a href='' target='_Blank' alt='Proton on Twitter'>
                    <img className='IconTw' src={IconTw} alt='' />
                </a>
                <a href='' target='_Blank' alt='Proton on Instagram'>
                    {' '}
                    <img className='IconIg' src={IconIg} alt='' />
                </a>
                <a href='' target='_Blank' alt='Proton on Mastodon'>
                    {' '}
                    <img className='IconMd' src={IconMd} alt='' />
                </a>
                <a href='' target='_Blank' alt='Proton on Reddit'>
                    <img className='IconRd' src={IconRd} alt='' />
                </a>
            </div>
        </div>
    )
}

export default WelcomeProton
