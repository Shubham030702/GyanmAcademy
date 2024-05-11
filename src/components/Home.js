import React, { useState } from 'react'
import './css/Home.css'
function Home() {
    return (
        <>
            <div className="banner">
                <div className="right">
                    <h3>
                        At Gyanm Academy, we're more than just an educational institution;
                        we're a community of passionate learners, dedicated educators,
                        and ambitious individuals. Our doors are open to all who seek knowledge,
                        growth, and success.
                    </h3>
                </div>
            </div>

            <div className="Interactive">
                <h1>Interactive Classes</h1>
            </div>
            <div className="Imgslide">
                <div className="pic pic1" ></div>
                <div className="pic pic2" ></div>
                <div className="pic pic3" ></div>
                <div className="pic pic4" ></div>
                <div className="pic pic5" ></div>
                <div className="pic pic6" ></div>
            </div>
        </>
    )
}

export default Home
