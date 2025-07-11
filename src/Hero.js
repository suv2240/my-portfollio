import React from 'react';


const Hero = () => {
    return (
        <div id="about_section">
            <div id="hero_upper-section">
                <div id="hero_left-section">
                    <h2 id="hero_name">I'm Suvankar Bairagi</h2>
                </div>

                <div id="hero_right-section">
                    <img src="https://media.licdn.com/dms/image/v2/D5622AQHAvEtmjZeFlQ/feedshare-shrink_800/B56ZXc3xeOHQAk-/0/1743167363648?e=2147483647&v=beta&t=ssCT1hMbOMF-lLj5FETnQV5RqvBXsK9Wb3IlVqi9n5o" alt="Suvankar Bairagi" id="hero_img" />

                </div>
            </div>

            <div id="hero_lower-section">
                <p className="about_section">
                    I'm a passionate Full Stack Web Developer with a strong focus on the MERN stack (MongoDB, Express.js, React, Node.js).
                    I love transforming complex problems into clean, efficient, and user-friendly digital solutions.
                </p>

                <p className="about_section">
                    With a deep interest in both frontend design and backend logic, I enjoy building full-fledged web applications from scratch. I continuously learn new technologies, follow modern design trends, and care deeply about performance and user experience.
                </p>

                <p className="about_section">
                    My mission is simple: build things that matter. Whether it’s a sleek landing page, an interactive dashboard, or a robust REST API — I craft with precision and purpose.
                </p>

                <p className="about_section">
                    When I’m not coding, you’ll find me exploring trading strategies, learning business skills, or helping others grow in tech.
                </p>
            </div>
        </div>
    );
};

export default Hero;
