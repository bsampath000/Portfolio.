import React from 'react'
import avatar from '../images/avatar.png'

const Home = () => {
    return (
        <section className="home-section">

            <main className="home-main">
                <div className="text-container">
                    <h1>I’m Sampath.</h1>
                    <p> I’m a <strong>frontend web developer.</strong> I love solving problems using technology. 
                    I’m also into <strong>competitive programming</strong>.

                    <br/>
                    <br/>
                    When I'm not coding, I'm found outdoors cycling or playing Kho-Kho.
                    
                    </p>

                    <button className="resume-btn">See Resume</button>
                </div>
                <img src={avatar} alt="avatar" className="avatar-img"/>
            </main>

        </section>
    )
}

export default Home
