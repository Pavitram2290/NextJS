import Link from "next/link";

export default function Startup_Section6() {

    return (
        <>

            <section className="section section-banner layout-11 overflow-hidden">
                <div className="container">
                    <div className="inner background-navy">
                        <div className="row flex-align-c">
                            <div className="col-lg-5">
                                <div className="images layout-02">
                                    <div className="inner my-5">
                                        <img className="img31 wow animate__animated animate__fadeInUp" src="https://askfilo.com/images/home/ready-learning.svg" alt="Image" />
                                        <img className="img32 wow animate__animated animate__fadeInUp" src="https://askfilo.com/images/home/ready-learning.svg" alt="Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="content align-left pdr80 lg-pdl30 lg-pdr30 lg-mt32 lg-pdb30">
                                    <div className="heading heading-alway-white mb32">
                                        <h2 className="heading-title size-l">Are you ready to  <span className="border-yellow">take control</span> of your learning?</h2>
                                        <div className="heading-desc">Download Filo and start learning with your favourite tutors right away!</div>
                                    </div>
                                    <div className="button-wrap">
                                        <Link href="/" title="" className="cis-img-btn mr16">
                                            <img alt="" src="/assets/images/filo-images/playstore.svg"/>
                                        </Link>
                                        <Link href="/" title="" className="cis-img-btn">
                                            <img alt="" src="/assets/images/filo-images/appstore.svg"/>
                                        </Link>
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