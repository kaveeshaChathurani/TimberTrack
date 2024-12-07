import React from 'react'
import './Service.css'

import logo from '../../assests/logs2.jpg'


function Service() {
  return (
    <div name='book' className='service'>
            <div className="container">
                <div className="left">
                    <h2>Unlock The Potential of AI-driven Quality Inspection in The Wood Industry.</h2>
                    <p>Our cutting-edge machine vision technology is tailored to meet the unique needs of the wood sector, revolutionizing wood quality control and enhancing production processes.Detects a wide range of defects across different wood flooring types, ensuring exceptional quality.Streamlines the inspection process with automation, significantly reducing operational expenses and providing substantial cost savings.Easily incorporates into your current workflow, boosting your production line without the need for additional space.Leverages continuously learning AI for better, more reliable defect detection.Offers immediate quality evaluations for timely adjustments, maintaining a steady standard of product excellence.</p>
                    <div className="search-col-2">
                    <div className="box">
                            <div>
                                <img src={logo} alt="/" style={{ marginRight: '1rem', width: '300px', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>Timber is the smart choice for now and the future.</h3>
                                <p>Explore the features and benefits of timber and how to use it in creating better built environments.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>Wood Flooring Quality Control Benefits.</h3>
                                <p>Inline wood flooring inspection enhances your production quality and efficiency, securing your competitive edge in the market.</p>
                                <button>View Services</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">See Automated Visual Inspection in Action</h4>
                        <p className="para">In addition to identifying and addressing cracks, detecting chipped wood, and efficiently managing live knots, EasyODM can also be utilized for tasks such as detecting warping, identifying decay caused by fungi or other biological factors, detecting insect damage, identifying splits and checks in the wood fibers, detecting discoloration or stains, analyzing grain irregularities, identifying knots and cross grain.</p>
                        
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Types of wood</label>
                            <select>
                                <option value="1">Mahogany </option>
                                <option value="1">Ash</option>
                                <option value="1">Cherry </option>
                                <option value="1">Hard Maple</option>
                                <option value="1">Teak </option>
                                <option value="1">Walnut</option>
                                <option value="1">Red & White Oak</option>
                                <option value="1">Pine </option>
                            </select>
                            <div className="input-wrap">
                                <label>Grade</label>
                                <select>
                                <option value="1">Fourth(4th) </option>
                                <option value="1">Fifth(5th)</option>
                                <option value="1">Sixth(6th) </option>
                                </select>
                            </div>
                            <div className="input-wrap">
                                <label>Standard Sizes(TxWxL)</label>
                                <select>
                                <option value="1">10x10x400 cm(4"x4"x160)</option>
                                <option value="1">12.5x12.5x400 cm(5"x5"x160)</option>
                                <option value="1">15x15x400 cm(6"x6"x160) </option>
                                </select>
                            </div>
                        </div>
                        <button>Calculator</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Service
