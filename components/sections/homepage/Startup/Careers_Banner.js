import Link from "next/link";
export default function Careers_Banner() {
    return (
        <>

            <section className="section overflow-hidden gradient-bg inner-banner">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-7 spdtb">
                            <div className="pdr100">
                                <div className="heading mb32">
                                    <h1 className="heading-title size-xl">المهنة وياسا</h1>
                                    <p className="heading-desc size-l">إنضم لفريق عملنا</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-end">
                            <div className="banner-img">
                                <img src="/assets/images/filo-images/career-banner.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            

        </>
    )
}