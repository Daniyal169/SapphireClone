import React from 'react'
import "./WhatNew.css"
import new1 from "../../asserts/img/new1.png"
import new2 from "../../asserts/img/new2.png"
import new3 from "../../asserts/img/new3.png"
import new4 from "../../asserts/img/new4.png"
import new5 from "../../asserts/img/new5.png"
import new6 from "../../asserts/img/new6.png"
import new7 from "../../asserts/img/new7.png"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay } from 'swiper/modules';


function WhatNew() {

    const newItems = [
        {
            img: new1,
            text: "Silk RTW"
        },
        {
            img: new2,
            text: "Velvet Unstitched"
        },
        {
            img: new3,
            text: "Elegant Chiffon"
        },
        {
            img: new4,
            text: "Classic Cotton"
        },
        {
            img: new5,
            text: " Embroidered"
        },
        {
            img: new6,
            text: "Stylish Linen"
        },
        {
            img: new7,
            text: "Luxurious Satin"
        },
    ];




    return (
        <div className="whatsNew">
            <h1 className="newHead">WHAT'S NEW</h1>
            <div className="newSlide"
            >
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1050: {
                            slidesPerView: 5,
                        },
                        2480: {
                            slidesPerView: 7,
                        },
                    }}
                >
                    {newItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="newBox">
                                <div className="newImg">
                                    <img src={item.img} alt="" />
                                </div>
                                <h3>{item.text}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default WhatNew