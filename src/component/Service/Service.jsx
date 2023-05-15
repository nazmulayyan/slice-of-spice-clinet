import React from 'react';
import img1 from '../../assets/service/brekafast.jpg';
import img2 from '../../assets/service/lunch.jpg';
import img3 from '../../assets/service/dinner.jpg';
import img4 from '../../assets/service/others.jpg';


const Service = () => {
    return (
        <div className='pb-20'>
            <div className='text-center'>
                <h4 className='text-center text-4xl font-bold uppercase mt-20 text-rose-500 '>Our Service</h4>
                <h5 className='text-center text-4xl font-bold uppercase mt-2 mb-14'>what we offer</h5>
            </div>
            <div className='grid md:grid-cols-4 gird-cols-1 gap-4 text-center'>
                <div>
                    <img className='m-auto' src={img1} alt="" />
                    <h3 className='text-3xl font-semibold uppercase mt-4 pb-2'>Breakfast</h3>
                    <p className='text-xl font-'>Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry’s stan</p>
                </div>
                <div>
                    <img className='m-auto' src={img2} alt="" />
                    <h3 className='text-3xl font-semibold uppercase mt-4 pb-2'>Lunch</h3>
                    <p className='text-xl font-'>Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry’s stan</p>
                </div>
                <div>
                    <img className='m-auto' src={img3} alt="" />
                    <h3 className='text-3xl font-semibold uppercase mt-4 pb-2'>Dinner</h3>
                    <p className='text-xl font-'>Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry’s stan</p>
                </div>
                <div>
                    <img className='m-auto' src={img4} alt="" />
                    <h3 className='text-3xl font-semibold uppercase mt-4 pb-2'>Others</h3>
                    <p className='text-xl font-'>Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry’s stan</p>
                </div>
            </div>
        </div>
    );
};

export default Service;