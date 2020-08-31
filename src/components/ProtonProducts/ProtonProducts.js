import React from 'react'
import '../../pages/index.scss'

function ProotonProducts(props) {
    return (
        <div className='protonProducts w50 relative onmobile-w100 ' style={{ backgroundColor: props.color }}>
            <h2>
                <img className='protonProducts-logo mrauto mlauto ' src={props.logo} alt='' />
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
