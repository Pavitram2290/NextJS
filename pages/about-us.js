'use client'

import Layout from "@/components/layout/Layout";
import About_Us_Banner from "@/components/sections/homepage/Startup/About_Us_Banner";
import CEO_Info from "@/components/sections/homepage/Startup/CEO_Info";
import Who_We_Are from "@/components/sections/homepage/Startup/Who_We_Are";
import Why_Yasa from "@/components/sections/homepage/Startup/Why_Yasa";
import Link from "next/link";
import Head from "next/head"
import HeadComponent from "@/components/layout/Header/Head";

export default function AboutUs() {
    const title = "نبذة عنا";
    const content = "ياسا هو تطبيق وموقع الكتروني تعليمي هدفه رفع مستوى الطالب التعليمي طوال فترة دراسته من الصف السادس وحتى الصف الثاني عشر من خلال تقديم دروس خصوصية فرديه متنوعة";


    return (
        <>          
            <HeadComponent title={title}

            content={content}
            />
            <Layout siteContentClass="p-0">
                <About_Us_Banner />

                <Why_Yasa />

                <Who_We_Are />

                {/* <CEO_Info /> */}

               
                <section className="section-banner background-navy layout-02 leftimg-section">
                    <img src="/assets/images/filo-images/banner-image-02.png" alt="" className="section-left-img" />
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content devider-right">
                                        <div className="heading heading-alway-white">
                                            <h2 className="heading-title size-l">هل أنت مستعد لتجربة رائعة في التعليم؟</h2>
                                            <div className="heading-desc">حمل تطبيق ياسا الآن وابدأ حصصك فوراً مع نخبة من المعلمين المتميزين .</div>
                                        </div>
                                        <div class="button-wrap">
                                            <Link title="" class="cis-img-btn mr16" href="/">
                                                <img alt="" src="/assets/images/filo-images/playstore.svg" />
                                            </Link>
                                            <Link title="" class="cis-img-btn" href="/">
                                                <img alt="" src="/assets/images/filo-images/appstore.svg" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    )
}