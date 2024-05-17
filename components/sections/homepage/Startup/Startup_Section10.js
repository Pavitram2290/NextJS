import Link from "next/link";
export default function Startup_Section10() {

    return (
        <>
            <section className="section-banner background-navy layout-02" style={{ backgroundImage: 'url("/assets/images/banner-image-02.jpg")' }}>
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content devider-right">
                                    <div className="heading heading-alway-white">
                                        <h2 className="heading-title">How does it work?</h2>
                                        <p className="heading-desc">All classes have a single student and teacher. All classes have a single student and teacher. All classes have a single student and teacher.</p>
                                    </div>
                                    <div className="button-wrap">
                                        <Link href="/contact-01" className="button borderline-white">Contact Us <i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}