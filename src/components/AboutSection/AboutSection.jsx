import React from 'react'
import "./AboutSection.css"

function AboutSection({ aboutInfo }) {
    return (
        <>
            {
                aboutInfo.map((item) => (
                    <div className="aboutSection">
                        <h1>{item.title}</h1>
                        <p>{item.cont}</p>
                    </div>
                ))
            }
        </>
    )
}

export default AboutSection