import React from 'react';

const FooterComponent = () => {
    return (
        <section className="footer text-light">
            <div className="container">
                <div className="row" data-aos="fade-right">
                    <div className="col-lg-2 py-4 py-md-5">
                        <div className="d-flex align-items-center">
                            <h4 className="text-bold">1024</h4>
                        </div>
                    </div>

                    <div className="col-lg-2 py-4 py-md-5">
                        <div>
                            <p className="text-bold"><a href="#">Trang chủ</a></p>
                            <p><a href="#">Người quản lý</a></p>
                            <p><a href="#">Phổ biến</a></p>
                            <p><a href="#">Bình luận</a></p>
                            <p><a href="#">Thư viện</a></p>
                        </div>
                    </div>

                    <div className="col-lg-2 py-4 py-md-5">
                        <div>
                            <p className="text-bold"><a href="#">Giải pháp</a></p>
                            <p><a href="#">Đề nghị</a></p>
                            <p><a href="#">Ý tưởng</a></p>
                            <p><a href="#">Wireframing</a></p>
                            <p><a href="#">Nghiên cứu</a></p>
                        </div>
                    </div>

                    <div className="col-lg-2 py-4 py-md-5">
                        <div>
                            <p className="text-bold"><a href="#">Tài nguyên</a></p>
                            <p><a href="#">Tra cứu</a></p>
                            <p><a href="#">Blog</a></p>
                            <p><a href="#">Hướng dẫn</a></p>
                            <p><a href="#">FAQs</a></p>
                        </div>
                    </div>

                    <div className="col-lg-2 py-4 py-md-5">
                        <div>
                            <p className="text-bold"><a href="#">Tư vấn</a></p>
                            <p><a href="#">Liên hệ</a></p>
                            <p><a href="#">Đội ngũ phát triển</a></p>
                            <p><a href="#">Tài liệu</a></p>
                            <p><a href="#">Tích hợp</a></p>
                        </div>
                    </div>

                    <div className="col-lg-2 py-4 py-md-5">
                        <div>
                            <p className="text-bold"><a href="#">Công ty</a></p>
                            <p><a href="#">Thông tin</a></p>
                            <p><a href="#">Pháp lý</a></p>
                            <p><a href="#">Sự kiện</a></p>
                            <p><a href="#">Chi tiết</a></p>
                        </div>
                    </div>

                    <div className="col-12">
                        <hr />
                    </div>

                    <div className="bottom py-2 text-light">
                        <div className="container d-flex justify-content-between">
                            <div>
                                <p><a href="#">1024 @ 2024. All rights reserved.</a></p>
                            </div>
                            <div className="d-flex">
                                <p className="mx-1"><a href="#">Terms</a></p>
                                <p className="mx-1"><a href="#">Privacy</a></p>
                                <p className="mx-1"><a href="#">Contact</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterComponent;
