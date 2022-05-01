import React from 'react';
import itemOne from '../../image/itemOne.jpg'
import itemTwo from '../../image/itemTwo.jpg'
import './SectionTwo.css'

const SectionTwo = () => {
    return (
        <div>
            <div><img className='itemOne' src={itemOne} alt="" /></div>
            <div className='row'>
                <div className='col-md-6 text-center  d-flex align-items-center'>
                   <div>
                   <h2 >Energy Efficient & Eco Friendly</h2>
                    <h1>Air Conditioner</h1>
                    <h6>Air Conditioner Integrated With Intelligent Inverter Technology Save Electricity up to 70%.</h6>
                   </div>
                </div>
                <div className='col-md-6'>
                    <img  className='w-100' src={itemTwo} alt="" />

                </div>
            </div>
        </div>
    );
};

export default SectionTwo;