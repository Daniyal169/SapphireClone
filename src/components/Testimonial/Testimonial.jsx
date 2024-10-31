import React from 'react'
import "./Testimonial.css"
import test1 from "../../asserts/img/test1.jpg"
import test2 from "../../asserts/img/test2.webp"
import test3 from "../../asserts/img/test3.webp"
import test4 from "../../asserts/img/test4.jpg"
import test5 from "../../asserts/img/test5.webp"
import test6 from "../../asserts/img/test6.webp"
import test7 from "../../asserts/img/test7.webp"
import test8 from "../../asserts/img/test8.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper/modules';
import { LiaShoppingBagSolid } from "react-icons/lia";


function Testimonial() {
    const test = [
        {
            img: test1,
            title: "Tahfeen Ashray",
            userName: "@tahfeen",
            tagline: "2 Piece Embroidered Suit"
        },
        {
            img: test2,
            title: "Arisha Noor",
            userName: "@arishanoor",
            tagline: "3 Piece Casual Summer Dress"
        },
        {
            img: test3,
            title: "Zara Shah",
            userName: "@zarashah",
            tagline: "2 Piece Silk Evening Gown"
        },
        {
            img: test6,
            title: "Alina Baig",
            userName: "@alinabaig",
            tagline: "3 Piece Printed Lawn Suit"
        },
        {
            img: test5,
            title: "Maham Raza",
            userName: "@mahamraza",
            tagline: "2 Piece Traditional Bridal Lehenga"
        },
        {
            img: test4,
            title: "Nadia Khan",
            userName: "@nadiakhan",
            tagline: "3 Piece Chiffon Party Dress"
        },
        {
            img: test7,
            title: "Sara Ali",
            userName: "@saraali",
            tagline: "2 Piece Velvet Winter Collection"
        },
        {
            img: test8,
            title: "Sana Javed",
            userName: "@sanajaved",
            tagline: "3 Piece Formal Embroidered Kurta"
        }
    ];


    return (
        <div className="testimonial">
            <h1>STYLED BY YOU</h1>
            <h4>#SapphireXMe</h4>
            <div className="testBoxes">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    navigation={true}
                    loop={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1050: { slidesPerView: 4 },
                    }}

                >

                    {test.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testBox">
                                <div className='testImg'>
                                    <img src={item.img} alt="" />
                                    <LiaShoppingBagSolid />
                                </div>
                                <div className="testCont">
                                    <h1>{item.title}</h1>
                                    <p>{item.userName}</p>
                                    <p>wearing out</p>
                                    <h3>{item.tagline}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial