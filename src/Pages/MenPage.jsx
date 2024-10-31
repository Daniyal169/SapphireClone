import React from 'react'
import new1 from "../asserts/img/new1.png"
import new2 from "../asserts/img/new2.png"
import new3 from "../asserts/img/new3.png"
import new4 from "../asserts/img/new4.png"
import PageTop from '../components/PageTop/PageTop.jsx'
import AboutSection from '../components/AboutSection/AboutSection.jsx'
import { men } from "../db/Data.js"
import AllProducts from '../components/WomenSection/AllProducts.jsx'
import Filter from '../components/Filter/Filter.jsx'



function MenPage() {
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

    ];

    const aboutInfo = [
        {
            title: "ABOUT SAPPHIRE MAN",
            cont: "SAPPHIRE Man is a perfect blend of modern elegance and timeless style, designed to make a dapper statement this season. With a commitment to quality reflected in every detail, our Men's Stitched & Unstitched collections offer versatility that transcends trends, allowing you to curate a wardrobe suitable for every occasion. Whether you're looking for something formal or casual, SAPPHIRE Man has got you covered."
        }
    ]

    return (
        <>
            <PageTop newItems={newItems} title={"MEN"} />
            <Filter type={"Men"} />
            <AllProducts products={men} />
            <AboutSection aboutInfo={aboutInfo} />
        </>
    )
}

export default MenPage