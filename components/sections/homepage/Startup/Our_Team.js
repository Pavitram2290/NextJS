import Link from "next/link";
export default function Our_Team() {
    return ( <>
            <section className="section background-grey background-full spdtb" style={{ backgroundImage: 'url(/assets/images/hi-11.png)' }}>
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">Meet Our Team</h2>
                    </div>
                    <div className="block-team layout-05">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="member-box">
                                    <div className="inner">
                                        <div className="member-avatar">
                                            <img src="/assets/images/mem-1.png" alt="Member" />
                                        </div>
                                        <div className="member-content">
                                            <h4 className="name">Ohta Kin</h4>
                                            <div className="position">Co-Founder</div>
                                            <ul className="share">
                                                <li className="twitter"><Link href="/" title="twitter"><i className="lab la-twitter" /></Link></li>
                                                <li className="linkedin"><Link href="/" title="linkedin"><i className="lab la-linkedin-in" /></Link></li>
                                                <li className="instagram"><Link href="/" title="instagram"><i className="lab la-instagram" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="member-box">
                                    <div className="inner">
                                        <div className="member-avatar">
                                            <img src="/assets/images/mem-2.png" alt="Member" />
                                        </div>
                                        <div className="member-content">
                                            <h4 className="name">Miriam Jesus</h4>
                                            <div className="position">UX, UI Designer</div>
                                            <ul className="share">
                                                <li className="twitter"><Link href="/" title="twitter"><i className="lab la-twitter" /></Link></li>
                                                <li className="linkedin"><Link href="/" title="linkedin"><i className="lab la-linkedin-in" /></Link></li>
                                                <li className="instagram"><Link href="/" title="instagram"><i className="lab la-instagram" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="member-box">
                                    <div className="inner">
                                        <div className="member-avatar">
                                            <img src="/assets/images/mem-3.png" alt="Member" />
                                        </div>
                                        <div className="member-content">
                                            <h4 className="name">John Doe</h4>
                                            <div className="position">Head of Makerting</div>
                                            <ul className="share">
                                                <li className="twitter"><Link href="/" title="twitter"><i className="lab la-twitter" /></Link></li>
                                                <li className="linkedin"><Link href="/" title="linkedin"><i className="lab la-linkedin-in" /></Link></li>
                                                <li className="instagram"><Link href="/" title="instagram"><i className="lab la-instagram" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heading align-center spdt">
                        <div className="heading-sub color-navy">Partners</div>
                        <h2 className="heading-title size-l">Inverst with Trust</h2>
                    </div>
                    <div className="images layout-17">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="item">
                                    <img src="/assets/images/hi-12.png" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="item">
                                    <img src="/assets/images/hi-13.png" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="item">
                                    <img src="/assets/images/hi-14.svg" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="item">
                                    <img src="/assets/images/hi-15.png" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="item">
                                    <img src="/assets/images/hi-16.svg" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="item">
                                    <img src="/assets/images/hi-17.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}