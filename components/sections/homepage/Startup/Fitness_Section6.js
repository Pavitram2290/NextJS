import FitnessGallerySlider from "@/components/slider/FitnessGallerySlider";

export default function Fitness_Section6() {

    return (
        <>

            <section className="section spdt overflow-hidden">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Exercise Collection</h2>
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