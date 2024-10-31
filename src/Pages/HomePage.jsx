import React from 'react'
import WhatNew from '../components/WhatNew/WhatNew'
import Hero from '../components/Hero/Hero'
import Trending from '../components/Trending/Trending'
import Explore from '../components/Explore/Explore'
import Testimonial from '../components/Testimonial/Testimonial'
import Category from '../components/Category/Category'

function HomePage() {
    return (
        <>
            <Hero />
            <WhatNew />
            <Category />
            <Trending />
            <Explore />
            <Testimonial />
        </>
    )
}

export default HomePage