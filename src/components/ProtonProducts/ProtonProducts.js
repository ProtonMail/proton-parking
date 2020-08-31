import React from 'react'
import '../../pages/index.scss'

function ProotonProducts(props) {
    return (
        <div className='ProtonProducts w50 relative onmobile-w100 ' style={{ backgroundColor: props.color }}>
            <img className='ProtonMailLogo mrauto mlauto ' src={props.logo} />
            <p className='ProtonMailText mrauto mlauto '>{props.text}</p>
            <a className='ProtonMailButton'>{props.button}</a>
            <div className='ProtonMailPic'>
                <img src={props.picture} width='100%' />
            </div>
        </div>
    )
}

export default ProotonProducts
