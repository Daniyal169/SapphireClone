import React from 'react'
import new1 from "../asserts/img/new1.png"
import new2 from "../asserts/img/new2.png"
import new3 from "../asserts/img/new3.png"
import new4 from "../asserts/img/new4.png"
import PageTop from '../components/PageTop/PageTop.jsx'
import AboutSection from '../components/AboutSection/AboutSection.jsx'
import { kids } from "../db/Data.js"
import AllProducts from '../components/WomenSection/AllProducts.jsx'
import Filter from '../components/Filter/Filter.jsx'



function KidsPage() {
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
            title: "ABOUT SAPPHIRE KIDS",
            cont: "Our latest Kids collection has been meticulously curated to offer a wide range of versatile silhouettes. Our collection features a variety of Eastern kurtas and Western dresses, all carefully crafted from the finest quality fabrics. Each piece in our collection is trendy, unique and exquisite. The collection boasts a range of dainty prints and vibrant hues, which are sure to make your little star stand out in the crowd. Our outfits are perfect for a variety of occasions, from casual outings to formal events.   With a focus on both style and comfort, we have ensured that each piece in our collection is not only fashionable but also comfortable to wear. The fabrics used in our collection are of the highest quality, ensuring that the clothes are durable and long-lasting. Our collection is a perfect blend of traditional and contemporary designs, which are sure to appeal to a wide range of tastes and preferences."
        }
    ]

    return (
        <>
            <PageTop newItems={newItems} title={"KIDS"} />
            <Filter type={"Kids"} />
            <AllProducts products={kids} />
            <AboutSection aboutInfo={aboutInfo} />
        </>
    )
}

export default KidsPage