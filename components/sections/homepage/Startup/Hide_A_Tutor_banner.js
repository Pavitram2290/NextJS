import Link from "next/link";
export default function Hide_A_Tutor_banner() {
    return (
        <>

            <section className="section overflow-hidden gradient-bg inner-banner">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-7 spdtb">
                            <div className="pdr100">
                                <div className="heading mb32">
                                    <h1 className="heading-title size-xl">	أكتشف مهارات المُعلمين في الكويت</h1>
                                    <ul className="cis-banner-list">
                                   <li>يمكنك النجاح بالاختبارات وتعلم مهارات دراسية جديدة وتطوير مستواك الدراسي مع نخبة من المُعلمين المتميزين.</li>
                                   <li>ابدأ بشرح الصعوبات التي تواجهك او الطموحات التي تسعى لها ونحن بدورنا نعرض عليك أفضل المُعلمين على مستوى الكويت ويمكنك اختيار معلمك المناسب.</li>
                               
                                    </ul>
                                </div>
                                <div className="button-wrap">
                                    <Link href="https://student.getyasa.com" target="_Blank" className="button fullfield btn-xl" title="DOWNLOAD APP">اختيار المُعلم - مجاناً الآن</Link>
                                    {/* <Link href="/" className="button fullfield-dark btn-xl" title="سجل">سجل</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-end">
                            <div className="banner-img">
                                <img src="/assets/images/filo-images/becom-a-tutor-banner.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}