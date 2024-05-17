import FitnessGallerySlider from "@/components/slider/FitnessGallerySlider";

export default function Meet_tutors() {

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-xl">تعرف على مدرّسينا الرائدين!</h2>
                    </div>
                    <div className="block-gallery layout-04">
                        <div className="row row-full">
                            <div className="col-lg-12 col-full-right">
                                <div className="swiper uxp-swiper-slider">
                                    <FitnessGallerySlider/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}