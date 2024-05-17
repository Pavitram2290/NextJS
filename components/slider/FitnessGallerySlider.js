// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import ModalVideo from 'react-modal-video';
import { useState } from "react";


export default function FitnessGallerySlider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination2'
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
                        slidesPerView: 3,
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
                className="swiper-wrapper cis-tutor-section"
            >
                <SwiperSlide>
                    <div className="item">
                        <div className="block-video">
                            <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                                <img src="/assets/images/filo-images/vid-2.png" alt="Popup Video" />
                                <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                        <div className="block-video">
                            <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                            <img src="/assets/images/filo-images/vid-3.png" alt="Popup Video" />
                                <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <div className="block-video">
                            <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                                <img src="/assets/images/filo-images/vid-4.png" alt="Popup Video" />
                                <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                        <div className="block-video">
                            <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                                <img src="/assets/images/filo-images/vid-2.png" alt="Popup Video" />
                                <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                        <div className="block-video">
                            <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                                <img src="/assets/images/filo-images/vid-3.png" alt="Popup Video" />
                                <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="flex flex-align-c">
                <div className="swiper-pagination block-gallery-pagination2" />
                <div className="swiper-button-prev navigation-prev" />
                <div className="swiper-button-next navigation-next" />
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

            {/* <div className="row cis-tutor-section">
                <div className="col-md-4">
                    <div className="block-video">
                        <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                            <img src="/assets/images/asc7.jpg" alt="Popup Video" />
                            <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="block-video">
                        <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                            <img src="/assets/images/asc7.jpg" alt="Popup Video" />
                            <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="block-video">
                        <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                            <img src="/assets/images/asc7.jpg" alt="Popup Video" />
                            <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
