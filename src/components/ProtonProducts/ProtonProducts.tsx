import React from 'react'
import '../../pages/layout.scss'

interface Props {
    color: string
    title: string
    logo: string
    button: string
    buttonUrl: string
    picture: React.ReactNode
    text: string
}

function ProtonProducts({ color, title, logo, button, buttonUrl, picture, text }: Props) {
    return (
        <div
            className='protonProducts w50 relative aligncenter p2 onmobile-w100'
            style={{ '--colorGradient': color }}
        >
            <div className="protonProducts-inner">
                <h2 className='aligncenter mb2'>
                    <img className='protonProducts-logo mrauto mlauto w100' width='269' height='40' src={logo} alt={title} />
                </h2>
                <p className='protonProducts-text mb2'>{text}</p>
                <a href={buttonUrl} className='protonProducts-button mlauto mrauto'>{button}</a>
                <div className='protonProducts-picture'>
                    {picture}
                </div>
            </div>
        </div>
    )
}

export default ProtonProducts
