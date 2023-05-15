import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import banner1 from '../../assets/banner/slide1.png';
import banner2 from '../../assets/banner/slide2.png';
import banner3 from '../../assets/banner/slide3.png';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = () => {
    return (
        <div className='md:flex md:flex-row flex-row-reverse w-full items-center py-10'>

            <div className='md:w-1/2'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    speed={2000}

                >
                    <SwiperSlide>
                        <div>
                            <h1 className='text-6xl capitalize leading-snug  font-bold'>a true test of japanese cousine</h1>
                            <div className='mt-10'>
                                <button className="btn btn-outline text-rose-500 capitalize">Book a table</button>
                                <button className="btn btn-outline text-rose-500 capitalize ms-6">order online</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h1 className='text-6xl capitalize leading-snug  font-bold'>the freshest test of japanese cousine</h1>
                            <div className='mt-10'>
                                <button className="btn btn-outline text-rose-500 capitalize">Book a table</button>
                                <button className="btn btn-outline text-rose-500 capitalize ms-6">order online</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h1 className='text-6xl leading-snug capitalize font-bold'>we bring together the freshest test </h1>
                            <div className='mt-10'>
                                <button className="btn btn-outline text-rose-500 capitalize">Book a table</button>
                                <button className="btn btn-outline text-rose-500 capitalize ms-6">order online</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='md:w-1/2 md:block hidden'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    speed={2000}
                >
                    <SwiperSlide>
                        <img src={banner1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner3} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;