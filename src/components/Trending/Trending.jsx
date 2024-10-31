import React from 'react'
import "./Trending.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { women } from "../../db/Data"
import ProductBox from '../ProductBox/ProductBox.jsx';

function Trending() {


    return (
        <div className="trending">
            <h1 className="trendHead">TRENDING</h1>
            <div className="trendBoxes">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1050: { slidesPerView: 4 },
                        2000: {
                            slidesPerView: 8,
                        },
                    }}
                >
                    {women.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ProductBox product={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Trending
