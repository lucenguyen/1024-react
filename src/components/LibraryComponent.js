import React, {useEffect, useState}  from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ListLibrary} from "../shared/list-library";
import {Navigation} from "swiper/modules";


const LibraryComponent = () => {
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
        <section className="suggest">
            <div className="container ">
                <h2 className="pt-5 text-bold line-chuhui">Thư viện đăng tải</h2>
                <p className="pb-5">Các tư liệu được thành viên đăng tải trong quá trình hoạt động trong hội</p>
                <div className="slider-container center-mobile hidden-mobie">
                    <div className="swiper-container card-slider">
                        <div className="swiper-wrapper">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView="3"
                                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                breakpoints={{
                                    429: {
                                        slidesPerView: 1,
                                    },
                                    // For larger screens (tablets and desktops)
                                    1023: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    }
                                }}

                            >
                                {ListLibrary.map((item, index) => (
                            <SwiperSlide className="swiper-slide d-flex pt-4 m-2" key={index}>
                                <div className="video-library-1 justify-content-lg-start">
                                    <div className="video text-center m-2">
                                        <iframe className="player" width="380" height="225"
                                                src="https://www.youtube.com/embed/SlPhMPnQ58k?list=RDSlPhMPnQ58k"
                                                title="Maroon 5 - Memories (Official Video)" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div className="d-flex">
                                        <div style={{ borderRadius: '25%',paddingTop: '0.7vh' }}>
                                            <img className="m-2" src={item.avatar} alt="Jane Doe" />
                                        </div>
                                        <div>
                                            <p className="m-2 text-bold">{item.role}</p>
                                            <p style={{textAlign: 'left'}} className="m-2 ml-5">{item.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>
                <div className="slider-container center-mobile">
                    <div className="swiper-container card-slider">
                        <div className="swiper-wrapper">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView="3"
                                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                direction={swiperDirection}
                                breakpoints={{
                                    429: {
                                        slidesPerView: 3,
                                        direction: 'vertical',
                                    },
                                    // For larger screens (tablets and desktops)
                                    1023: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    }
                                }}
                                navigation={true}
                                style={{ height: 'auto', maxHeight: 'calc(132vh - 100px)' }}
                            >
                                {ListLibrary.map((item, index) => (
                                    <SwiperSlide className="swiper-slide d-flex pt-4 m-2" key={index}>
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
                                                <div style={{ borderRadius: '25%', paddingTop: '0.7vh' }}>
                                                    <img className="m-2" src={item.avatar} alt="Jane Doe" />
                                                </div>
                                                <div>
                                                    <p className="m-2 text-bold">{item.role}</p>
                                                    <p style={{textAlign: 'left'}} className="m-2 ml-5">{item.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="text-center button-dropdown">
                            <svg className="mb-2" fill="none" height="35" viewBox="0 0 81 35" width="81"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.5 6.36364L5.28409 10.9148H5.375L8.15909 6.36364H10.1932L6.56818 12.1818L10.2159 18H8.17045L5.375 13.5114H5.28409L2.48864 18H0.443182L4.15341 12.1818L0.465909 6.36364H2.5ZM15.6065 18.1761C14.7467 18.1761 14.0062 17.9924 13.3849 17.625C12.7675 17.2538 12.2902 16.733 11.9531 16.0625C11.6198 15.3883 11.4531 14.5985 11.4531 13.6932C11.4531 12.7992 11.6198 12.0114 11.9531 11.3295C12.2902 10.6477 12.7599 10.1155 13.3622 9.73295C13.9683 9.35038 14.6766 9.15909 15.4872 9.15909C15.9796 9.15909 16.4569 9.24053 16.919 9.40341C17.3812 9.56629 17.7959 9.82197 18.1634 10.1705C18.5308 10.5189 18.8205 10.9716 19.0327 11.5284C19.2448 12.0814 19.3509 12.7538 19.3509 13.5455V14.1477H12.4134V12.875H17.6861C17.6861 12.428 17.5952 12.0322 17.4134 11.6875C17.2315 11.339 16.9759 11.0644 16.6463 10.8636C16.3205 10.6629 15.938 10.5625 15.4986 10.5625C15.0213 10.5625 14.6046 10.6799 14.2486 10.9148C13.8963 11.1458 13.6236 11.4489 13.4304 11.8239C13.241 12.1951 13.1463 12.5985 13.1463 13.0341V14.0284C13.1463 14.6117 13.2486 15.108 13.4531 15.517C13.6615 15.9261 13.9512 16.2386 14.3224 16.4545C14.6937 16.6667 15.1274 16.7727 15.6236 16.7727C15.9455 16.7727 16.2391 16.7273 16.5043 16.6364C16.7694 16.5417 16.9986 16.4015 17.1918 16.2159C17.3849 16.0303 17.5327 15.8011 17.6349 15.5284L19.2429 15.8182C19.1141 16.2917 18.883 16.7064 18.5497 17.0625C18.2202 17.4148 17.8054 17.6894 17.3054 17.8864C16.8092 18.0795 16.2429 18.1761 15.6065 18.1761ZM21.7358 18V9.27273H23.3665V10.6932H23.4744C23.6563 10.2121 23.9536 9.83712 24.3665 9.56818C24.7794 9.29545 25.2737 9.15909 25.8494 9.15909C26.4328 9.15909 26.9214 9.29545 27.3153 9.56818C27.7131 9.84091 28.0066 10.2159 28.196 10.6932H28.2869C28.4953 10.2273 28.8267 9.85606 29.2812 9.57955C29.7358 9.29924 30.2775 9.15909 30.9062 9.15909C31.6979 9.15909 32.3438 9.4072 32.8438 9.90341C33.3475 10.3996 33.5994 11.1477 33.5994 12.1477V18H31.9006V12.3068C31.9006 11.7159 31.7396 11.2879 31.4176 11.0227C31.0956 10.7576 30.7112 10.625 30.2642 10.625C29.7112 10.625 29.2812 10.7955 28.9744 11.1364C28.6676 11.4735 28.5142 11.9072 28.5142 12.4375V18H26.821V12.1989C26.821 11.7254 26.6733 11.3447 26.3778 11.0568C26.0824 10.7689 25.6979 10.625 25.2244 10.625C24.9025 10.625 24.6051 10.7102 24.3324 10.8807C24.0634 11.0473 23.8456 11.2803 23.679 11.5795C23.5161 11.8788 23.4347 12.2254 23.4347 12.6193V18H21.7358ZM45.1847 9.27273V10.6364H40.4176V9.27273H45.1847ZM41.696 7.18182H43.3949V15.4375C43.3949 15.767 43.4441 16.0152 43.5426 16.1818C43.6411 16.3447 43.768 16.4564 43.9233 16.517C44.0824 16.5739 44.2547 16.6023 44.4403 16.6023C44.5767 16.6023 44.696 16.5928 44.7983 16.5739C44.9006 16.5549 44.9801 16.5398 45.0369 16.5284L45.3438 17.9318C45.2453 17.9697 45.1051 18.0076 44.9233 18.0455C44.7415 18.0871 44.5142 18.1098 44.2415 18.1136C43.7945 18.1212 43.3778 18.0417 42.9915 17.875C42.6051 17.7083 42.2926 17.4508 42.054 17.1023C41.8153 16.7538 41.696 16.3163 41.696 15.7898V7.18182ZM49.4503 12.8182V18H47.7514V6.36364H49.4276V10.6932H49.5355C49.7401 10.2235 50.0526 9.85038 50.473 9.57386C50.8935 9.29735 51.4427 9.15909 52.1207 9.15909C52.7192 9.15909 53.242 9.2822 53.6889 9.52841C54.1397 9.77462 54.4882 10.142 54.7344 10.6307C54.9844 11.1155 55.1094 11.7216 55.1094 12.4489V18H53.4105V12.6534C53.4105 12.0133 53.2457 11.517 52.9162 11.1648C52.5866 10.8087 52.1283 10.6307 51.5412 10.6307C51.1397 10.6307 50.7798 10.7159 50.4616 10.8864C50.1473 11.0568 49.8991 11.3068 49.7173 11.6364C49.5393 11.9621 49.4503 12.3561 49.4503 12.8182ZM61.6378 18.1761C60.7779 18.1761 60.0374 17.9924 59.4162 17.625C58.7988 17.2538 58.3215 16.733 57.9844 16.0625C57.651 15.3883 57.4844 14.5985 57.4844 13.6932C57.4844 12.7992 57.651 12.0114 57.9844 11.3295C58.3215 10.6477 58.7912 10.1155 59.3935 9.73295C59.9995 9.35038 60.7079 9.15909 61.5185 9.15909C62.0109 9.15909 62.4882 9.24053 62.9503 9.40341C63.4124 9.56629 63.8272 9.82197 64.1946 10.1705C64.562 10.5189 64.8518 10.9716 65.0639 11.5284C65.276 12.0814 65.3821 12.7538 65.3821 13.5455V14.1477H58.4446V12.875H63.7173C63.7173 12.428 63.6264 12.0322 63.4446 11.6875C63.2628 11.339 63.0071 11.0644 62.6776 10.8636C62.3518 10.6629 61.9692 10.5625 61.5298 10.5625C61.0526 10.5625 60.6359 10.6799 60.2798 10.9148C59.9276 11.1458 59.6548 11.4489 59.4616 11.8239C59.2723 12.1951 59.1776 12.5985 59.1776 13.0341V14.0284C59.1776 14.6117 59.2798 15.108 59.4844 15.517C59.6927 15.9261 59.9825 16.2386 60.3537 16.4545C60.7249 16.6667 61.1586 16.7727 61.6548 16.7727C61.9768 16.7727 62.2704 16.7273 62.5355 16.6364C62.8007 16.5417 63.0298 16.4015 63.223 16.2159C63.4162 16.0303 63.5639 15.8011 63.6662 15.5284L65.2741 15.8182C65.1454 16.2917 64.9143 16.7064 64.581 17.0625C64.2514 17.4148 63.8366 17.6894 63.3366 17.8864C62.8404 18.0795 62.2741 18.1761 61.6378 18.1761ZM62.6207 8.22727L61.456 6.70455L60.2855 8.22727H58.7514V8.14205L60.7457 5.73295H62.1605L64.1605 8.14205V8.22727H62.6207ZM67.767 18V9.27273H69.3977V10.6932H69.5057C69.6875 10.2121 69.9848 9.83712 70.3977 9.56818C70.8106 9.29545 71.3049 9.15909 71.8807 9.15909C72.464 9.15909 72.9527 9.29545 73.3466 9.56818C73.7443 9.84091 74.0379 10.2159 74.2273 10.6932H74.3182C74.5265 10.2273 74.858 9.85606 75.3125 9.57955C75.767 9.29924 76.3087 9.15909 76.9375 9.15909C77.7292 9.15909 78.375 9.4072 78.875 9.90341C79.3788 10.3996 79.6307 11.1477 79.6307 12.1477V18H77.9318V12.3068C77.9318 11.7159 77.7708 11.2879 77.4489 11.0227C77.1269 10.7576 76.7424 10.625 76.2955 10.625C75.7424 10.625 75.3125 10.7955 75.0057 11.1364C74.6989 11.4735 74.5455 11.9072 74.5455 12.4375V18H72.8523V12.1989C72.8523 11.7254 72.7045 11.3447 72.4091 11.0568C72.1136 10.7689 71.7292 10.625 71.2557 10.625C70.9337 10.625 70.6364 10.7102 70.3636 10.8807C70.0947 11.0473 69.8769 11.2803 69.7102 11.5795C69.5473 11.8788 69.4659 12.2254 69.4659 12.6193V18H67.767Z"
                                    fill="#A029A1"/>
                                <path
                                    d="M37.6743 33.7437L31.0337 27.103C30.5747 26.644 30.5747 25.9019 31.0337 25.4478L32.1372 24.3442C32.5962 23.8853 33.3384 23.8853 33.7925 24.3442L38.4995 29.0513L43.2065 24.3442C43.6655 23.8853 44.4077 23.8853 44.8618 24.3442L45.9653 25.4478C46.4243 25.9067 46.4243 26.6489 45.9653 27.103L39.3247 33.7437C38.8755 34.2026 38.1333 34.2026 37.6743 33.7437Z"
                                    fill="#A029A1"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LibraryComponent;
