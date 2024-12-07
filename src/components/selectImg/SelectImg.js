import React from 'react'
import './SelectImg.css'

function SelectImg({bgImg, text}) {
    return (
        <div className='selects-process'>
            <img src={bgImg} alt='/' />
            <div className="timber">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SelectImg
