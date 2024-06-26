import React, {useEffect, useState} from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LISTCOMMENT } from '../shared/list-comment';
import { Navigation } from 'swiper/modules';

const CommentComponent = () => {
    const [swiperDirection, setSwiperDirection] = useState('horizontal');

    const handleResize = () => {
        if ( window.innerWidth < 430) {
            setSwiperDirection('vertical');
        } else {
            setSwiperDirection('horizontal');
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="comment">
            <div className="container">
                <h2 className="pt-5 line-chuhui title-commemt text-bold">Những bình luận nổi bật</h2>
                <div className="d-flex comment-title">
                    <p className="pb-5">Dưới đây là những bình luận của các thành viên trong hội hụi 1024 đã bình luận,
                        trình bày về trải nghiệm khi tham gia hội.
                    </p>
                    <div>
                        <button className="req-comment mb-5">Yêu cầu bình luận</button>
                    </div>
                </div>

                {/* Swiper */}
                <div className="slider-container center-mobile">
                    <div className="swiper-container card-slider">
                        <div className="swiper-wrapper" id="comment">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={10}
                                slidesPerView={3}
                                loop={true}
                                direction={swiperDirection}
                                breakpoints={{
                                    429: {
                                        slidesPerView: 3,
                                        direction: 'vertical',
                                        spaceBetween: 10
                                    },
                                    1023: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    }
                                }}
                                navigation={true}
                                style={{ height: 'auto', maxHeight: 'calc(140vh - 100px)' }}
                            >
                            {LISTCOMMENT.map((item, index) => (
                                <SwiperSlide className="swiper-slide" key={index}>
                                    <div className="container comment-card testimonial-card pb-5">
                                        <div className="member d-flex pt-4">
                                            <div className="justify-content-lg-start">
                                                <div className="m-3">
                                                    <p>{item.line1}</p>
                                                </div>
                                                <div className="d-flex">
                                                    <div style={{ borderRadius: '25%' }}>
                                                        <img style={{paddingTop: '0.8vh'}} className="m-2" src={item.img} alt={item.name} />
                                                    </div>
                                                    <div>
                                                        <p className="m-2 text-bold">{item.name}</p>
                                                        <p className="m-2">{item.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            </Swiper>
                        </div>
                        {/* end of swiper-wrapper */}
                    </div>
                    {/* end of swiper-container */}
                </div>
                {/* end of slider-container */}
            </div>
        </section>
    );
};

export default CommentComponent;
