import EcommerceTestimonialSlider from "@/components/slider/EcommerceTestimonialSlider";


export default function Startup_Section8() {
    return (
        <>
            <section className="section background-grey spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub color-navy">testimonial</div>
                        <h2 className="heading-title size-l">People who already love us</h2>
                    </div>
                    <div className="block-testimonial layout-01">
                        <div className="swiper uxp-swiper-slider testimonial-slider">
                            <EcommerceTestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}