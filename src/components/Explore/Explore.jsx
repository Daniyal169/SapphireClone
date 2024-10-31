import React from 'react'
import "./Explore.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay, Navigation } from 'swiper/modules';
import cate1 from "../../asserts/img/cate1.webp"
import cate2 from "../../asserts/img/cate2.webp"
import cate3 from "../../asserts/img/cate3.webp"
import cate4 from "../../asserts/img/cate4.webp"
import cate5 from "../../asserts/img/cate5.webp"
import cate6 from "../../asserts/img/cate6.webp"
import cate7 from "../../asserts/img/cate7.webp"
import cate8 from "../../asserts/img/cate8.webp"

function Explore() {
    const category = [
        { img: cate1, text: "Elegant Women's Wear", desc: "Chic styles for every occasion and season." },
        { img: cate2, text: "Casual & Formal Wear", desc: "Ready-to-wear outfits with a perfect fit." },
        { img: cate3, text: "Men's Premium Collection", desc: "Refined styles for modern gentlemen." },
        { img: cate4, text: "Unstitched Classics", desc: "Fabrics to craft your unique outfit." },
        { img: cate5, text: "Kids' Trendy Styles", desc: "Playful and stylish wear for kids." },
        { img: cate6, text: "Home & Living", desc: "Decor items to elevate your space." },
        { img: cate7, text: "Jewelry & Accessories", desc: "Complete your outfit with unique pieces." },
        { img: cate8, text: "Beauty & Skincare", desc: "Must-have essentials for self-care." }
    ];


    return (
        <div className="explore">
            <h1 className="expHead">MORE TO EXPLORE</h1>
            <div className="expBoxes">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    loop={true}
                    slidesPerView={1} // Default slides per view
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        240: { slidesPerView: 1 },
                        640: { slidesPerView: 1 }, // 1 slide up to 640px
                        768: { slidesPerView: 2 }, // 2 slides from 768px
                        1050: { slidesPerView: 3 }, // 3 slides from 1050px
                        2000: { slidesPerView: 5 }, // 5 slides from 2000px
                    }}
                >


                    {category.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="expBox">
                                <img src={item.img} alt={item.text} />
                                <h2>{item.text}</h2>
                                <h4>{item.desc}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Explore