
import Link from 'next/link'

export default function Awards_Tutors() {
    return (
        <>
            <section className="section spdt cis-awards-secs">
                <div className="container">
                    <div className="block-image-box layout-01">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading align-center mb32">
                                    <h2 className="heading-title size-xl">Filo awards Tutors!</h2>
                                    <div className="heading-desc">We have huge respect for the tutors who work extra hard to ensure their students get all the help they need. To acknowledge such heroes among the Filo Tutor Family, we honour them by presenting the “Teaching Innovation Award”.</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-box">
                                    <div className="thumbnail">
                                        <img src="assets/images/post-author-01.jpg" alt="Thumbnail" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Vishwajeet</h4>
                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                        <div className="button-wrap">
                                            <Link href="/" className="button fullfield btn-sm" title="See Video">See Video <i class="las la-play-circle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-box">
                                    <div className="thumbnail">
                                        <img src="assets/images/post-author-02.jpg" alt="Thumbnail" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Deepak</h4>
                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                        <div className="button-wrap">
                                        <Link href="/" className="button fullfield btn-sm" title="See Video">See Video <i class="las la-play-circle"></i></Link>
                                        </div>
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