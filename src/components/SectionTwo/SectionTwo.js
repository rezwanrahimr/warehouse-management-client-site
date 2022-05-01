import React from 'react';
import itemOne from '../../image/itemOne.jpg'
import itemTwo from '../../image/itemTwo.jpg'
import itemThree from '../../image/item3.jpg'
import item4 from '../../image/item4.jpg'
import item5 from '../../image/item5.jpg'
import item6 from '../../image/item6.jpg'
import item7 from '../../image/item7.jpg'
import item8 from '../../image/item8.jpg'
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
            <div><img className='w-100' src={itemThree} alt="" /></div>
            <div className='row'>
            <div className='col-md-6'>
                    <img  className='w-100' src={item4} alt="" />
                </div>
                <div className='col-md-6 text-center  d-flex align-items-center'>
                   <div>
                   <h1 className='fw-bold'>REVOLUTION</h1>
                    <h1>BEGINS HERE</h1>
                    <h6>The Primo ZX4 is everthing you wnat in a perfect smartphone,large FHD+Display,Penta Al Cameras,Gaming Centric Processor,amazing RAM and ROM,awestruck selfie camera and much more.</h6>
                   </div>
                </div>
                
            </div>
            <div><img className='w-100' src={item5} alt="" /></div>
            <div className='row'>
                <div className='col-md-6 text-center  d-flex align-items-center'>
                   <div>
                   <h2 className='fw-bold'>Laundry</h2>
                    <h3>Have now Smarter Options</h3>
                    <h6>Multifunctrional & energy efficient Walton Washing Machine surprise you with the finest washing performance. Now make your washing innovatively convenient.</h6>
                   </div>
                </div>
                <div className='col-md-6'>
                    <img  className='w-100' src={item6} alt="" />
                </div>
            </div>
            <div><img className='w-100' src={item7} alt="" /></div>
            <div className='row'>
            <div className='col-md-6'>
                    <img  className='w-100' src={item8} alt="" />
                </div>
                <div className='col-md-6 text-center  d-flex align-items-center'>
                   <div>
                   <h1 className='fw-bold'>Microwave Oven</h1>
                    <h2>Bring Comfort to Life</h2>
                    <h6>Walton Microwave Oven Comes up with Multi-functional Authomatic Cooking Menus and several Power Level Setting that help to cook enything in no time!</h6>
                   </div>
                </div>
                
            </div>
        </div>
    );
};

export default SectionTwo;