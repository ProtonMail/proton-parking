import React from 'react'
import '../../pages/layout.scss'

interface Props {
    color: string
    logo: string
    button: string
    picture: string
    text: string
}

function ProotonProducts(props: Props) {
    return (
        <div
            className='protonProducts w50 relative onmobile-w100 '
            style={{
                backgroundImage: `linear-gradient(to bottom, ${props.color} 0%, ${props.color} 75%, #fff 75% , #fff 100%)`,
            }}
        >
            <h2>
                <img className='protonProducts-logo mrauto mlauto w100' src={props.logo} alt='' />
            </h2>
            <p className='protonProducts-text mrauto mlauto '>{props.text}</p>
            <a className='protonProducts-button'>{props.button}</a>
            <div className='protonProducts-picture'>
                <img src={props.picture} className='w100' alt='' />
            </div>
        </div>
    )
}

export default ProotonProducts
