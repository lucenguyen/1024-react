import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LISTCOMMENT } from '../shared/list-comment';
import avatar from "../assets/images/huynh-that-small.png";

const CommentComponent = () => {

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
                                spaceBetween={30}
                                slidesPerView="3"
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    429: {
                                        slidesPerView: 1,
                                    },
                                    1023: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    }
                                }}
                                navigation={true}
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

                        <div className="swiper-slide hidden-suggest ">
                            <div className="container text-center pb-4 ">
                                <div className="member box-shadown d-flex pt-4 ">
                                    <div className="justify-content-lg-start">
                                        <div className="m-3">
                                            <p>Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien.
                                                Viverra blandit sem neque pretium. Duis enim semper fermentum consequat
                                                aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante
                                                laoreet.</p>
                                        </div>

                                        <div className="d-flex">
                                            <img style={{ width: '48px', height: '48px',paddingTop: '0.8vh' }} className="m-2" src={avatar} />
                                            <div>
                                                <p className="m-2 text-bold">Huỳnh Thất</p>
                                                <p className="m-2">Chủ hụi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide hidden-suggest ">
                            <div className="container text-center pb-4 ">
                                <div className="member box-shadown d-flex pt-4 ">
                                    <div className="justify-content-lg-start">
                                        <div className="m-3">
                                            <p>Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien.
                                                Viverra blandit sem neque pretium. Duis enim semper fermentum consequat
                                                aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante
                                                laoreet.</p>
                                        </div>

                                        <div className="d-flex">
                                            <img style={{ width: '48px', height: '48px',paddingTop: '0.8vh' }} className="m-2" src={avatar} />
                                                <div>
                                                    <p className="m-2 text-bold">Huỳnh Thất</p>
                                                    <p className="m-2">Chủ hụi</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide hidden-suggest ">
                            <div className="container text-center pb-4 ">
                                <div className="member box-shadown d-flex pt-4 ">
                                    <div className="justify-content-lg-start">
                                        <div className="m-3">
                                            <p>Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien.
                                                Viverra blandit sem neque pretium. Duis enim semper fermentum consequat
                                                aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante
                                                laoreet.</p>
                                        </div>

                                        <div className="d-flex">
                                            <img style={{ width: '48px', height: '48px',paddingTop: '0.8vh' }} className="m-2" src={avatar} />
                                            <div>
                                                <p className="m-2 text-bold">Huỳnh Thất</p>
                                                <p className="m-2">Chủ hụi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of swiper-container */}
                </div>
                {/* end of slider-container */}
            </div>
        </section>
    );
};

export default CommentComponent;
