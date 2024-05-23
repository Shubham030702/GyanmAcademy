import React from 'react'
import './css/Home.css'
function Home() {
    return (
        <>
            <div className="banner">
                <div className="right">
                    <h3>
                        At Gyanm Academy, we're more than just an educational institution,
                        we're a community of passionate learners, dedicated educators,
                        and ambitious individuals. Our doors are open to all who seek knowledge,
                        growth, and success.
                        <br />
                        Within our halls, you'll find more than classrooms and textbooks; you'll discover a thriving ecosystem of ideas, innovation, and inspiration. Each day is an opportunity to engage with diverse perspectives, challenge conventional wisdom, and foster intellectual curiosity.
                        <br />
                        <br />
                        <div className="messagefromeducators">~Educators.</div>
                    </h3>
                </div>
            </div>
            <div className="Interactive">
                <h1>Building Foundation.</h1>
            </div>
            <div className="homesubjects">
                <div className="physics">
                    <div className="titlephysics"><h2>Physics :</h2></div>
                    <span className='classes'>Class 11th-12th</span>
                    <span className='boards'><b>Respective Boards:</b> CBSE , ICSE , Uttarakhand(UK)</span>
                </div>
                <div className="chemistry">
                    <div className="titlephysics"><h2>Chemistry :</h2></div>
                    <span className='classes'>Class 11th-12th</span>
                    <span className='boards'><b>Respective Boards:</b> CBSE , ICSE , Uttarakhand(UK)</span>
                </div>
                <div className="maths">
                    <div className="titlephysics"><h2>Mathematics :</h2></div>
                    <span className='classes'>Class 9th-12th</span>
                    <span className='boards'><b>Respective Boards:</b> CBSE , ICSE , Uttarakhand(UK)</span>
                </div>
                <div className="science">
                    <div className="titlephysics"><h2>Science :</h2></div>
                    <span className='classes'>Class 9th-12th</span>
                    <span className='boards'><b>Respective Boards:</b> CBSE , ICSE , Uttarakhand(UK)</span>
                </div>
                <div className="bio">
                    <div className="titlephysics"><h2>Biology :</h2></div>
                    <span className='classes'>Class 11th-12th</span>
                    <span className='boards'><b>Respective Boards:</b> CBSE , ICSE , Uttarakhand(UK)</span>
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
