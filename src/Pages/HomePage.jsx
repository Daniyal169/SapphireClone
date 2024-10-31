import React from 'react'
import WhatNew from '../components/WhatNew/WhatNew.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Trending from '../components/Trending/Trending.jsx'
import Explore from '../components/Explore/Explore.jsx'
import Testimonial from '../components/Testimonial/Testimonial.jsx'
import Category from '../components/Category/Category.jsx'

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