import React, { useEffect } from 'react';

const Carousel = () => {
    useEffect(() => {
        // eslint-disable-next-line no-undef
        const swiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 3,
            breakpoints: {
                // when window is <= 767px
                767: {
                    slidesPerView: 1,
                },
                // when window is <= 991px
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
            },
        });
    }, []);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {/* Các slide */}
            </div>
        </div>
    );
};

export default Carousel;
