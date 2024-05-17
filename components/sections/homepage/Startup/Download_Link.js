import Link from "next/link";
export default function Download_Link() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row flex-align-c py-5">
                        <div className="col-lg-6">
                            <div className="pdr60 lg-pdt30 lg-pdb30">
                                <div className="heading heading-alway-dark mb32">
                                    <h2 className="heading-title size-l">
                                    قم بتنزيل تطبيق ياسا الآن وجرب طريقة جديدة للتعلم test
                                    </h2>
                                    <div className="heading-desc">
                                    تتمثل رؤية ياسا في تحويل تجربة التدريس والتعلم من خلال تضافر التكنولوجيا الفائقة مع المحتوى الجدير والمعلمين الأكفاء.
                                        </div>
                                </div>
                                <div className="apps m220">
                                <Link href="https://apps.apple.com/us/app/%D9%8A%D8%A7%D8%B3%D8%A7-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B4%D8%B1-%D9%84%D9%84%D8%B7%D8%A7%D9%84%D8%A8/id6462698345" title="" className="cis-img-btn mr16">
                                    <img src="/assets/images/app-store.png" alt="App Store"  /></Link>
                                    <Link href="https://play.google.com/store/apps/details?id=yasa.student" title="" className="cis-img-btn mr16">
                                    <img src="/assets/images/google-play.png" alt="Google Play"  /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl100">
                                <img className="wow animate__animated animate__fadeInRight" src="/assets/images/filo-images/website-view.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}