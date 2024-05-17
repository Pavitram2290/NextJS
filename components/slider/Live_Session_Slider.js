import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Live_Session_Slider() {
	const [pricing, setPricing] = useState([])


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
					el: '.block-gallery-pagination2'
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
						slidesPerView: 1,
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
				className="swiper-wrapper">
						<SwiperSlide className="swiper-slide">
							<div className="item">
								<div className="cis-pricing-wrap">
									<div className="pricing-box">
										<div className="inner">
											<div className="name">04:20<span className="badge-popular">مباشر  </span></div>
											<div className="price"><div className="number">10دك<sub>/ للساعة</sub></div></div>
											<h2 className="desc mb-0"> <span className="text-primary"> Rohit </span>لدية حصة مع المُعلم  <span className="text-primary"> Rahul</span></h2>
											<hr className="my-4" />
											<div className="desc d-flex gap-2 flex-wrap"> 
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
												<span className="subject-badge">Physics</span>
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
											</div>
											<div className="button-wrap"><Link href="/book-private-class" className="button fullfield" title=" Search Tutor">ابحث عن المُعلم</Link></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
				
						<SwiperSlide className="swiper-slide">
							<div className="item">
								<div className="cis-pricing-wrap">
									<div className="pricing-box">
										<div className="inner">
											<div className="name">04:20<span className="badge-popular">مباشر </span></div>
											<div className="price"><div className="number">10دك<sub>/ للساعة</sub></div></div>
											<h2 className="desc mb-0"> <span className="text-primary"> Rohit </span>لدية حصة مع المُعلم  <span className="text-primary"> Rahul</span></h2>
											<hr className="my-4" />
											<div className="desc d-flex gap-2 flex-wrap"> 
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
												<span className="subject-badge">Physics</span>
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
											</div>
											<div className="button-wrap"><Link href="/book-private-class" className="button fullfield" title=" Search Tutor">ابحث عن المُعلم</Link></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
				
						<SwiperSlide className="swiper-slide">
							<div className="item">
								<div className="cis-pricing-wrap">
									<div className="pricing-box">
										<div className="inner">
											<div className="name">04:20<span className="badge-popular">مباشر </span></div>
											<div className="price"><div className="number">10دك<sub>/ للساعة</sub></div></div>
											<h2 className="desc mb-0"> <span className="text-primary"> Rohit </span>لدية حصة مع المُعلم  <span className="text-primary"> Rahul</span></h2>
											<hr className="my-4" />
											<div className="desc d-flex gap-2 flex-wrap"> 
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
												<span className="subject-badge">Physics</span>
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
											</div>
											<div className="button-wrap"><Link href="/book-private-class" className="button fullfield" title=" Search Tutor">ابحث عن المُعلم</Link></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
				
						<SwiperSlide className="swiper-slide">
							<div className="item">
								<div className="cis-pricing-wrap">
									<div className="pricing-box">
										<div className="inner">
											<div className="name">04:20<span className="badge-popular">مباشر </span></div>
											<div className="price"><div className="number">10دك<sub>/ للساعة</sub></div></div>
											<h2 className="desc mb-0"> <span className="text-primary"> Rohit </span>لدية حصة مع المُعلم  <span className="text-primary"> Rahul</span></h2>
											<hr className="my-4" />
											<div className="desc d-flex gap-2 flex-wrap"> 
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
												<span className="subject-badge">Physics</span>
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
											</div>
											<div className="button-wrap"><Link href="/book-private-class" className="button fullfield" title=" Search Tutor">ابحث عن المُعلم</Link></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
				
						<SwiperSlide className="swiper-slide">
							<div className="item">
								<div className="cis-pricing-wrap">
									<div className="pricing-box">
										<div className="inner">
											<div className="name">04:20<span className="badge-popular">مباشر </span></div>
											<div className="price"><div className="number">10دك<sub>/ للساعة</sub></div></div>
											<h2 className="desc mb-0"> <span className="text-primary"> Rohit </span>لدية حصة مع المُعلم  <span className="text-primary"> Rahul</span></h2>
											<hr className="my-4" />
											<div className="desc d-flex gap-2 flex-wrap"> 
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
												<span className="subject-badge">Physics</span>
												<span className="subject-badge">Chemistry</span>
												<span className="subject-badge">Mathematics</span>
												<span className="subject-badge">Science</span>
											</div>
											<div className="button-wrap"><Link href="/book-private-class" className="button fullfield" title=" Search Tutor">ابحث عن المُعلم</Link></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
				
				
			</Swiper>

			<div className="swiper-pagination block-gallery-pagination2" />
		</>
	)
}
