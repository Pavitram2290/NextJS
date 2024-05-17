import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";


export default function PriceList() {
	const [pricing, setPricing] = useState([])

	const getPricingList = () => {
		const apiUrl = 'https://us-central1-yasa-21022022.cloudfunctions.net/GetPackages';
		const headers = {
			langid: 2
		};
		axios.get(apiUrl, { headers })
			.then(response => {
				setPricing(response.data.Data)
			})
			.catch(error => {
				console.error('Error posting data:', error);
			});
	};

	useEffect(() => {
		getPricingList();
	}, []);

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
				className="swiper-wrapper"
			>
				{
					pricing?.map((price) => (
						<SwiperSlide key={price?.ID} className="swiper-slide">
							<div className="item">
								<div className="cis-pricing-wrap">
									<div className="pricing-box">
										<div className="inner">
											<div className="name">{price?.Value}<span className="badge-popular">{price?.Discount}</span></div>
											<div className="price"><div className="number">{price?.Price}</div></div>
											<div className="desc"><p>{price?.NumberofClasses}</p></div>
											<h2 className="desc">{price?.PerHourCharges}</h2>
											<div className="button-wrap"><Link href="/book-private-class" className="button fullfield" title=" جرب أول عرض لك">جرب أول عرض لك</Link></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))
				}
			</Swiper>

			<div className="swiper-pagination block-gallery-pagination2" />
		</>
	)
}
