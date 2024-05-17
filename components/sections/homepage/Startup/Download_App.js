import Link from "next/link";


export default function Download_App() {
    return (
        <>
            <section className="section pt60 omb160">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pdr100 pt60">
                                <div className="heading heading-alway-dark mb24">
                                    <h2 className="heading-title size-l">قم بتحميل تطبيق ياسا الآن
واستعد لتجربة رائعة للتعليم
</h2>
                                    <div className="heading-desc">-	تتمثل رؤية ياسا في التعليم هي 
إيجاد محتوى جدير للمتعلمين من 
خلال تضافر التكنلوجيا الفائقة مع 
المعلمين الإكفاء.
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
                            <div className="images layout-13">
                                <img className="img01" src="/assets/images/filo-images/downloadImage-1.png" alt="Image" />
                                {/* <img className="img02 wow animate__animated animate__fadeInDown" src="/assets/images/hf-24.png" alt="Image" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}