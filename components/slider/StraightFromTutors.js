// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function StraightFromTutors() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                // centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination'
                }}
                // navigation={{
                //     prevEl: ".prev",
                //     nextEl: ".next",
                // }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="author">
                            <div className="avatar"><img src="/assets/images/post-author-01.jpg" alt="Avatar" /></div>
                            <div className="info">
                                <div className="name">John Smith</div>
                                <div className="badge-review">
                                    <div className="star"><span style={{ width: '100%' }} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="content">"Simply the best. Better than all the rest. I would recommend this product for beginners and advanced users."</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="author">
                            <div className="avatar"><img src="/assets/images/post-author-02.jpg" alt="Avatar" /></div>
                            <div className="info">
                                <div className="name">Ajay Smith</div>
                                <div className="badge-review">
                                    <div className="star"><span style={{ width: '100%' }} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="content">"Simply the best. Better than all the rest. I would recommend this product for beginners and advanced users."</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="author">
                            <div className="avatar"><img src="/assets/images/post-author-03.jpg" alt="Avatar" /></div>
                            <div className="info">
                                <div className="name">Vinod Smith</div>
                                <div className="badge-review">
                                    <div className="star"><span style={{ width: '100%' }} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="content">"Simply the best. Better than all the rest. I would recommend this product for beginners and advanced users."</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="author">
                            <div className="avatar"><img src="/assets/images/post-author-04.jpg" alt="Avatar" /></div>
                            <div className="info">
                                <div className="name">Rahul Smith</div>
                                <div className="badge-review">
                                    <div className="star"><span style={{ width: '100%' }} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="content">"Simply the best. Better than all the rest. I would recommend this product for beginners and advanced users."</div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination block-gallery-pagination" />
        </>
    )
}
