import React from 'react';
import "./Hero.css";
import home1 from "../../asserts/img/home.webp";
import home2 from "../../asserts/img/home2.webp";
import home3 from "../../asserts/img/home3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules'; // Import Pagination

function Hero() {
    const homeImg = [
        { img: home1 },
        { img: home2 },
        { img: home3 },
    ];

    return (
        <div className="hero">
            <Swiper
                modules={[Autoplay, Pagination]} // Add Pagination module
                loop={true}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                pagination={{ clickable: true }} // Enable clickable dots
            >
                {homeImg.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="heroImg">
                            <img src={item.img} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="heroCont">
                <div className="heroLeft"></div>
                <div className='heroRight'>
                    <h1 className="heroTitle">WINTER '24</h1>
                    <h3 className="heroSub">UNSTITCHED | READY TO WEAR</h3>
                    <button className="heroBtn">GET A SNEAK PEAK</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
