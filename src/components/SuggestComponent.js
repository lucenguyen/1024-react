import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { LISTSUGGEST } from '../shared/data';

const SuggestComponent = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            effect: 'slide',
            slidesPerView: 3,
            spaceBetween: 70,
            loop: true,
            autoplay: {
                reverseDirection: true,
                disableOnInteraction: false,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }, []);

    return (
        <section className="suggest">
            <div className="container">
                <h2 className="pt-5 text-bold">Gợi ý các dây hụi uy tín</h2>
                <p className="pb-5">Đây là những hụi hoạt động hiệu quả, đáng tin cậy với mức độ đánh giá uy tín cao</p>

                {/* Swiper */}
                <div className="slider-container">
                    <div className="swiper-container card-slider">
                        <div className="swiper-wrapper" id="suggest">
                            {LISTSUGGEST.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="container testimonial-card" style={{ padding: '32px' }}>
                                        <div className="member d-flex">
                                            <div className="justify-content-lg-start">
                                                <div className="m-3">
                                                    <p>{item.line1}</p>
                                                    <p>{item.line2}</p>
                                                    <p>{item.line3}</p>
                                                    <p className="mb-3">{item.line4}</p>
                                                </div>
                                                <div className="d-flex">
                                                    <div style={{ borderRadius: '25%' }}>
                                                        <img className="m-2" src={item.img} alt={item.name} />
                                                    </div>
                                                    <div>
                                                        <p className="m-2 text-bold">{item.name}</p>
                                                        <p className="m-2">{item.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add Arrows */}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>

                    </div>
                </div>
            </div>
        </section>

    );
}

export default SuggestComponent;
