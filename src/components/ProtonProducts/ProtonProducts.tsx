import React from 'react'
import '../../pages/layout.scss'

interface Props {
    color: string
    title: string
    logo: string
    button: string
    buttonUrl: string
    picture: string
    text: string
}

function ProtonProducts(props: Props) {
    return (
        <div
            className='protonProducts w50 relative aligncenter p2 onmobile-w100'
            style={{
                '--colorGradient': props.color
            }}
        >
            <div className="protonProducts-inner">
                <h2 className='aligncenter mb2'>
                    <img className='protonProducts-logo mrauto mlauto w100' width='269' height='40' src={props.logo} alt={props.title} />
                </h2>
                <p className='protonProducts-text mb2'>{props.text}</p>
                <a href={props.buttonUrl} className='protonProducts-button mlauto mrauto'>{props.button}</a>
                <div className='protonProducts-picture'>
                    <img src={props.picture} className='w100' alt='' loading="lazy" />
                </div>
            </div>
            
        </div>
    )
}

export default ProtonProducts
