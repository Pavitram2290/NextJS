// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function DoYouNeedYasa() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
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
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
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
                    992: {
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
                        <div className="icon-box cis-ic-design cis-arrow-left-centered">
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">1: 1 دروس خصوصية</h4>
                                </div>
                                <img alt='' src='/assets/images/filo-images/need-yasa-img-1.png' className='cis-ic-img' />
                            </div>
                        </div>
                        <div className="icon-box p48 cis-ic-expert cis-arrow-1">
                            <div className="inner">
                                <div className="icon">
                                    <img src="/assets/images/filo-images/academic-expert.jpg" alt="Icon" />
                                </div>
                                <div className="content">
                                    <h3 className="title">    خبير أكاديمي</h3>
                                    <div className="desc">
                                        للتدريس الفردي في الفصول لتعزيز حل المشكلات
                                    </div>
                                </div>
                                <div className='cis-ib-top-left-0'>
                                    1 <br />
                                    <img src='/assets/images/filo-images/need-yasa-icon-1.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="icon-box cis-ic-design cis-arrow-left-centered">
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        التخطيط والإرشاد الأكاديمي
                                    </h4>
                                </div>
                                <img alt='' src='/assets/images/filo-images/need-yasa-img-2.png' className='cis-ic-img' />
                            </div>
                        </div>
                        <div className="icon-box p48 cis-ic-expert cis-arrow-2">
                            <div className="inner">
                                <div className="icon">
                                    <img src="/assets/images/filo-images/domain-expert.jpg" alt="Icon" />
                                </div>
                                <div className="content">
                                    <h3 className="title">
                                        خبير بالمجال
                                    </h3>
                                    <div className="desc">
                                        للتخطيط الاستراتيجي وتصميم خطة الدورة الخاصة بك
                                    </div>
                                </div>
                                <div className='cis-ib-top-left-0'>
                                    2 <br />
                                    <img src='/assets/images/filo-images/need-yasa-icon-2.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item">
                        <div className="icon-box cis-ic-design cis-arrow-left-centered">
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        المراقبة والتحفيز المستمر
                                    </h4>
                                </div>
                                <img alt='' src='/assets/images/filo-images/need-yasa-img-3.png' className='cis-ic-img' />
                            </div>
                        </div>
                        <div className="icon-box p48 cis-ic-expert cis-arrow-3">
                            <div className="inner">
                                <div className="icon">
                                    <img src="/assets/images/filo-images/academic-counsellor.jpg" alt="Icon" />
                                </div>
                                <div className="content">
                                    <h3 className="title">
                                        مستشار أكاديمي
                                    </h3>
                                    <div className="desc">
                                        للمراقبة المستمرة والتغذية الراجعة عن أدائك
                                    </div>
                                </div>
                                <div className='cis-ib-top-left-0'>
                                    3 <br />
                                    <img src='/assets/images/filo-images/need-yasa-icon-3.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination block-gallery-pagination" />

            <div className="swiper-nextprev">
                <span className="slider-btn next">
                    Next
                </span>
                <span className="slider-btn prev">
                    Prev
                </span>
            </div>


        </>
    )
}
