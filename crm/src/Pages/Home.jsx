import React from 'react';
import '../StylesCSS/Home.css';
import cat from '../image/C.jpg'

function Home() {
    return (
        <>
            <header>
                <h1>We are a <span>Creative</span></h1>
                <h1>Design Agency</h1>
            </header>
            <section className="services">
                <div className="service">
                    <img src={cat} alt="Beauty" />
                    <h2>Beauty</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, quia voluptas deleniti repudiandae
                        vitae nulla quasi architecto quos necessitatibus explicabo sed, eum iure deserunt, a aspernatur quisquam
                        eligendi molestiae reiciendis.
                    </p>
                </div>
                <div className="service">
                    <img src={cat} alt="Construction" />
                    <h2>Construction</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, officia? Officiis eius nostrum nisi
                        nemo earum. Provident earum architecto harum voluptate sapiente obcaecati omnis voluptatem, eaque ut,
                        ipsam doloribus neque?
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;
