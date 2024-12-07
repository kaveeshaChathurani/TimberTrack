import React from 'react'
import './Features.css'

import Identification from '../../assests/identity.jpg'
import Defects from '../../assests/defect.jpg'
import Cutting from '../../assests/cutting.jpg'
import Information from '../../assests/Info.jpg'
import Sustainability from '../../assests/sustain.jpg'

function Features() {
  return (
    <div name='features' className='features'>
            <div className="container">
                <h1>Get to the
                truth of Timber</h1>
                <p>Machine vision for wood sector..</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Identification} alt="/"/>
                    <img src={Defects} alt="/"/>
                    <img src={Cutting} alt="/"/>
                    <img src={Information} alt="/"/>
                    <img src={Sustainability} alt="/"/>
                </div>
            </div>
        </div>
  )
}

export default Features
