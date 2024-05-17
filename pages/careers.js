'use client'

import HeadComponent from "@/components/layout/Header/Head";
import Layout from "@/components/layout/Layout";
import Careers_Banner from "@/components/sections/homepage/Startup/Careers_Banner";
import Link from "next/link";

export default function Careers() {


    const title = "فرص";
    const content = "نحن نقوم بالتوظيف بانتظام في جميع مجالات أعمالنا، لذا تواصل معنا للتعرف على الفرص الجديدة.";


    return (
        <>
            <HeadComponent title={title}
            content={content}
            />
            <Layout siteContentClass="p-0">

                <Careers_Banner />
                
                <section className="section-posttype spdt">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title size-xl">الفُرَصْ</h2>
                            <div className="heading-desc size-l">نحن نوظف بانتظام في جميع مجالات أعمالنا، لذا تواصل معنا للتعرف على الفرص الجديدة.</div>
                        </div>
                        {/* <div className="posttype">
                            <div className="box">
                                <div className="content">
                                    <h3 className="title">Frontend Engineer</h3>
                                    <div className="desc">Full Time , New York, USA</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/careers-detail" className="button fullfield" title="Detail">Detail</Link>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <h3 className="title">Product Designer</h3>
                                    <div className="desc">Full Time , Lake Colby, UK</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/careers-detail" className="button fullfield" title="Detail">Detail</Link>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <h3 className="title">Full-stack Web Developer</h3>
                                    <div className="desc">Full Time , Remote</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/careers-detail" className="button fullfield" title="Detail">Detail</Link>
                                </div>
                            </div>
                        </div> */}
                        <div className="action align-center mt60 mb-60 pb-5 mb-5">
                            <p>نحن حريصون دائمًا على الاستماع من الأشخاص العظماء</p>
                            <Link href="/contact-us" title="تواصل معنا ">تواصل معنا  <i className="las la-long-arrow-alt-right" /></Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
