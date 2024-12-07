import React from 'react'
import './Selects.css'

import Sorting from '../../assests/Pic1.jpg'
import Infeed from '../../assests/Pic2.jpg'
import Debarking from '../../assests/Pic3.jpg'
import Drying from '../../assests/Pic4.jpg'
import Trimming from '../../assests/Pic5.jpg'
import Wrapping from '../../assests/Pic6.jpg'

import SelectImg from '../selectImg/SelectImg'

function Selects() {
  return (
    <div name='views' className='selects'>
            <div className='container'>
                <SelectImg bgImg={Sorting} text='Sorting' />
                <SelectImg bgImg={Infeed} text='Infeed & Size Sorting' />
                <SelectImg bgImg={Debarking} text='Debarking & Shavings' />
                <SelectImg bgImg={Drying} text='Drying' />
                <SelectImg bgImg={Trimming} text='Trimming & Grading' />
                <SelectImg bgImg={Wrapping} text='Wrapping &Packaging' />
            </div>

        </div>
  )
}

export default Selects
