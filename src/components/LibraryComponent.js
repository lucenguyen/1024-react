import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const LibraryComponent = () => {
    useEffect(() => {
        new Swiper('.swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);

    return (
        <section className="suggest">
            <div className="container">
                <h2 className="pt-5 text-bold">Thư viện đăng tải</h2>
                <p className="pb-5">Các tư liệu được thành viên đăng tải trong quá trình hoạt động trong hội</p>
                <div className="slider-container">
                    <div className="swiper-container card-slider">
                        <div className="swiper-wrapper">
                            {/* Slide 1 */}
                            <div className="swiper-slide d-flex pt-4 m-2">
                                <div className="video-library justify-content-lg-start">
                                    <div className="video text-center m-2">
                                        <iframe className="player" width="380" height="225"
                                                src="https://www.youtube.com/embed/SlPhMPnQ58k?list=RDSlPhMPnQ58k"
                                                title="Maroon 5 - Memories (Official Video)" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div className="d-flex">
                                        <div style={{ borderRadius: '25%' }}>
                                            <img className="m-2" src="assets/images/bao-tram-small.png" alt="Jane Doe" />
                                        </div>
                                        <div>
                                            <p className="m-2 text-bold">Jane Doe</p>
                                            <p className="m-2">Senior Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Repeat the above block for additional slides */}
                        </div>
                        {/* Add Arrows */}
                        <div className="swiper-button-next button-video"></div>
                        <div className="swiper-button-prev button-video"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LibraryComponent;
