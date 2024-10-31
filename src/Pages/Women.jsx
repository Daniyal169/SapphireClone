import React from 'react'
import new1 from "../asserts/img/new1.png"
import new2 from "../asserts/img/new2.png"
import new3 from "../asserts/img/new3.png"
import new4 from "../asserts/img/new4.png"
import PageTop from '../components/PageTop/PageTop'
import AboutSection from '../components/AboutSection/AboutSection'
import AllProducts from '../components/WomenSection/AllProducts'
import { women } from "../db/Data"
import Filter from '../components/Filter/Filter'



function WomenPage() {
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
            title: "ABOUT SAPPHIRE WOMAN",
            cont: "With a dazzling assortment of women’s apparel, you’re sure to find stylish ready to wear pieces for casual looks, elegant unstitched ensembles, chic western wear and everything in between. Stay on trend this season with our latest collections and discover new favourites every week!"
        }
    ]

    return (
        <>
            <PageTop newItems={newItems} title={"WOMEN"} />
            <Filter type={"Women"} />
            <AllProducts products={women} />
            <AboutSection aboutInfo={aboutInfo} />
        </>
    )
}

export default WomenPage