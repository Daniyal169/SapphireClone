import React from 'react'
import "./Category.css"
import cate1 from "../../asserts/img/cate1.webp"
import cate2 from "../../asserts/img/cate2.webp"
import cate3 from "../../asserts/img/cate3.webp"
import cate4 from "../../asserts/img/cate4.webp"
import cate5 from "../../asserts/img/cate5.webp"
import cate6 from "../../asserts/img/cate6.webp"
import cate7 from "../../asserts/img/cate7.webp"
import cate8 from "../../asserts/img/cate8.webp"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay } from 'swiper/modules';

function Category() {
    const category = [
        { img: cate1, text: "WOMEN" },
        { img: cate2, text: "READY TO WEAR" },
        { img: cate3, text: "MEN" },
        { img: cate4, text: "UNSTITCHED" },
        { img: cate5, text: "KIDS" },
        { img: cate6, text: "HOME" },
        { img: cate7, text: "ACCESSORIES" },
        { img: cate8, text: "BEAUTY" },
    ];

    return (
        <div className="category">
            <h1 className="cateHead">SHOP BY CATEGORY</h1>
            <div className="cateBoxes">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1050: { slidesPerView: 4 },
                        2000: {
                            slidesPerView: 8,
                        },
                    }}
                >
                    {category.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="cateBox">
                                <img src={item.img} alt={item.text} />
                                <h2>{item.text}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Category