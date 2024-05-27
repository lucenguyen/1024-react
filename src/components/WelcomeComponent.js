import React, { useEffect } from 'react';
import { LISTJOINMEMBERS } from "../shared/data";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const WelcomeComponent = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            effect: 'slide',
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: Math.random() * 3*60*1000 + 30000,
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

    const slides = LISTJOINMEMBERS;

    const imageMoney = require('../assets/images/money.png');

    return (
        <section className="welcome-section">
            <div className="container">
                <h1 className="card-title text-align-center text-bold" style={{ fontWeight: 700 }}>Chào mừng đến với hội hụi 1024</h1>
                <h4 className="text-align-center text-bold">Hãy nhập số điện thoại hoặc email của bạn để được hỗ trợ!</h4>
                <div className="input-button d-flex col-lg-12 col-lg-offset-8">
                    <input className="input-email" placeholder="Nhập số điện thoại hoặc email" />
                    <button className="text-bold support-button">Nhận hỗ trợ</button>
                </div>
                <div className="welcome container d-flex col-lg-12 col-lg-offset-8">
                    <img className="money-img" src={imageMoney} alt="Money" />
                    <div className="members">
                        <p className="text-bold title-image">Các thành viên vừa tham gia:</p>
                        <div className="container swiper-join-member mh-50 oh">
                            <div className="swiper-wrapper" id="join">
                                {slides.map((slide, index) => (
                                    <div key={index} className="members-join d-flex col-xxl-6 swiper-slide">
                                        <img className="avatar-member-join" src= {slide.img} alt={slide.name} />
                                        <div>
                                            <p className="name text-bold">{slide.name}</p>
                                            <p className="role">{slide.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WelcomeComponent;
