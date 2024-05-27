import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { LISTSUGGEST } from '../shared/data';

const CommentComponent = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            effect: 'slide',
            slidesPerView: 3,
            spaceBetween: 0,
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
        <section className="comment">
            <div className="container">
                <h2 className="pt-5 title-commemt text-bold">Những bình luận nổi bật</h2>
                <div className="d-flex comment-title">
                    <p className="pb-5">Dưới đây là những bình luận của các thành viên trong hội hụi 1024 đã bình luận,
                        trình bày về trải nghiệm khi tham gia hội.
                    </p>
                    <div>
                        <button className="req-comment mb-5">Yêu cầu bình luận</button>
                    </div>
                </div>

                {/* Swiper */}
                <div className="slider-container">
                    <div className="swiper-container card-slider">
                        <div className="swiper-wrapper" id="comment">
                            {LISTSUGGEST.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="container comment-card testimonial-card pb-5">
                                        <div className="member d-flex pt-4">
                                            <div className="justify-content-lg-start">
                                                <div className="m-3">
                                                    <p>{item.line1}</p>
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
                        {/* end of swiper-wrapper */}
                        {/* Add Arrows */}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                    {/* end of swiper-container */}
                </div>
                {/* end of slider-container */}
            </div>
        </section>
    );
};

export default CommentComponent;
