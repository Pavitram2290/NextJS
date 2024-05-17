// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";

export default function Teachers_Section() {
    return (<>
        <section className="section">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="heading">
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cis-teachers-content">
                            <div className="heading  mb-3">
                                <h1 className="heading-title size-l">
                                ما الذي يميز معلمي ياسا؟
احصل على أفضل المُعلمين
 </h1>
                            </div>
                            <div className="block-list layout-01 block-list-flex mt32 mb-4">
                                <ul>
                                    <li><i className="las la-check align-self-start mt-1"></i> <span>
                                     نختار المعلمين بعناية من جامعات عريقه ولديهم خبرة كبيره في مجال التعليم. </span></li>
                                    <li><i className="las la-check align-self-start mt-1"></i> <span>
                                    يتميز المعلمون لدينا بقدارتهم الكبيره على إيصال المعلومه بطريقة سهلة وذكية.
                                        </span></li>
                                    <li><i className="las la-check align-self-start mt-1"></i> <span>
                                    تحتوي السيرة الذاتيه للمعلمين المتميزين لدينا على اكثر من ألف ساعه من الخبرة في التدريس مع مئات الطلبة في العديد من دول العالم.                                   </span></li>
                                </ul>
                            </div>
                            
                            <button className="button fullfield"><Link href="/become-a-tutor" className="button fullfield" title="اكتشف المزيد">
                           انضم إلينا (كمعلم)
                           </Link> </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="block-team layout-03">
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                slidesPerView={2}
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
                                    prevEl: ".navigation-prev",
                                    nextEl: ".navigation-next",
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
                                    991: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1199: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1350: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                }}
                                className="swiper-wrapper"
                            >
                                <SwiperSlide>
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <div className="avatar-inner">
                                                    <img src="/assets/images/AhmedOssama.jpg" alt="Member" />
                                                </div>
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Ahmed Ossama</h4>
                                                {/* <div className="position">Founder &amp; CEO of Rejuves</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <div className="avatar-inner">
                                                    <img src="/assets/images/Yassmin-Rakha-R.jpg" alt="Member" />
                                                </div>
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Yassmin Rakha</h4>
                                                {/* <div className="position">CTO of Singuloritinet</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <div className="avatar-inner">
                                                    <img src="/assets/images/AhmedSadek.jpg" alt="Member" />
                                                </div>
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Ahmed Sadek</h4>
                                                {/* <div className="position">Leader of BNB Technology</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <div className="avatar-inner">
                                                    <img src="/assets/images/EmanSabry.jpg" alt="Member" />
                                                </div>
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Eman Sabry</h4>
                                                {/* <div className="position">Founder &amp; CEO of Rejuves</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <div className="avatar-inner">
                                                    <img src="/assets/images/HodaHesham.jpg" alt="Member" />
                                                </div>
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Hoda Hesham</h4>
                                                {/* <div className="position">CTO of Singuloritinet</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <div className="avatar-inner">
                                                    <img src="/assets/images/NouranRostom.jpg" alt="Member" />
                                                </div>
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Nouran Rostom</h4>
                                                {/* <div className="position">Leader of BNB Technology</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="flex flex-align-c">
                                <div className="swiper-pagination block-gallery-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>)
}
