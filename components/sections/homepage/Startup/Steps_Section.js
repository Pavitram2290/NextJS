import Link from "next/link";

export default function Steps_Section() {
    return (
        <>
            <section className="section spdtb overflow-hidden steps-section">
                
                <div className="container">
                    <div className="heading heading-alway-dark align-left mb32">
                        <h2 className="heading-title size-xl text-center">كيفية البدء</h2>
                    </div>
                    <div className="row row-full">
                        
                        <div className="col-lg-3 align-self-center">
                            <div className="cis-app-link-insteps">
                                <Link href="https://play.google.com/store/apps/details?id=com.yasa.tutor">
                                    <img src="/assets/images/filo-images/play-store.png" alt=""/>
                                </Link>
                                <Link href="https://apps.apple.com/us/app/ياسا-للمعلم/id6463125382">
                                    <img src="/assets/images/filo-images/apple-store.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block col-full-right">
                            <div className="steps-mob-img">
                                <img className="" src="/assets/images/filo-images/filo-app.png" alt="Banner" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block-timeline layout-01">
                                <div className="item">
                                    <span className="cis-stepnum">1</span>
                                    <div className="date">حمل تطبيق ياسا للمُعلم  </div>
                                    <div className="desc">انقر هنا لتحميل التطبيق</div>
                                    <hr className="cis-bottom-line" />
                                </div>
                                <div className="item">
                                    <span className="cis-stepnum">2</span>
                                    <div className="date">سجل باستخدام رقم هاتفك او بريدك الإلكتروني</div>
                                    <div className="desc">تابع ملأ معلوماتك الأساسية</div>
                                    <hr className="cis-bottom-line" />
                                </div>
                                <div className="item">
                                    <span className="cis-stepnum">3</span>
                                    <div className="date">التحقق وقبول طلب تسجيلك</div>
                                    <div className="desc">تابع خطوات ملأ بياناتك الشخصية والموافقة على الشروط والأحكام
ويتم قبول طلب تسجيلك بعد ذلك من قبل فريق الدعم الفني في ياسا

                                    </div>
                                    <hr className="cis-bottom-line" />
                                </div>
                                <div className="item">
                                    <span className="cis-stepnum">4</span>
                                    <div className="date">كُن على استعداد للاستجابة لاتصالات الطلبة</div>
                                    <div className="desc">بمجرد فتحك لتطبيق ياسا للمُعلم واختيارك لوضعية الاتصال ستكون جاهز للاستجابة لاتصالات الطلبة .</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}