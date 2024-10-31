import React from 'react'
import "./PageTop.css"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay } from 'swiper/modules';

function PageTop({ title, newItems }) {

    return (
        <div className="pageTop">
            <h1 className="pageHead">{title}</h1>
            <div className="topSlides"
            >

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={1}
                    // spaceBetween={1}
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
                            slidesPerView: 4,
                        },
                        2480: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {newItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="topBox">
                                <div className="topImg">
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

export default PageTop