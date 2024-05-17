import Link from "next/link";
export default function Startup_Section1() {
    return (
        <>

            <section className="section overflow-hidden gradient-bg">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-7 spdtb">
                            <div className="pdr100">
                                <div className="heading mb32">
                                    <h1 className="heading-title size-x">صمم برنامج حصصك الخاصة مع مُعلم من اختيارك</h1>
                                    <ul className="cis-banner-list">
                                   <li> الحصص مخصصة لك بشكل فردي.</li>
                                   <li> المُعلم من اختيارك.</li>
                                   <li> يمكنك تصميم جدولك حسب الوقت المناسب لك 24 ساعة وطوال أيام الأسبوع.</li>
                                   <li> تم إدارة جدول حصصك الخاصة من قبل مشرفين متخصصين في مجال التعليم.</li>
                                   <li> تم توجيه النصائح المناسب لك من قبل مشرفينا بما يتناسب مع مستواك العلمي.</li>
                                    </ul>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/book-private-class" className="button fullfield btn-xl" title="DOWNLOAD APP">جرب أول عرض لك</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-end">
                            <div className="banner-img">
                                <img src="/assets/images/filo-images/yasa-banner.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}