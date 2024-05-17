import PriceList from "@/components/slider/PriceList";
import Link from "next/link";
import { useState } from "react";

export default function Pricing_Section() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => { setToggled(!isToggled) };

    return (
        <>
            <div className="background-grey spdt">
                <div className="section-pricing spdb cis-best-prices-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="icon-box other-class-card">
                                    <div className="inner">
                                        <h2 className="mb-2">
                                            فئة خاصة أخرى
                                        </h2>
                                        <div className="content">
                                            <p>
                                                فصل خاص عام مع مدرس فقط</p>
                                            <h5 className="title mt-3">
                                                الحد الأدنى
                                            </h5>
                                            <h3 className="title">
                                                10 د.ك / للساعة
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 align-self-center text-center">
                                <span className="cis-yasa-other">
                                    ضد
                                </span>
                            </div>
                            <div className="col-md-5">
                                <div className="icon-box filo-class-card">
                                    <div className="inner">
                                        <h2 className="mb-2">
                                            ياسا الخاصة
                                        </h2>
                                        <div className="content">
                                            <p>
                                                ياسا خاص مع خبير أكاديمي وخبير متخصص في المجال ومستشار
                                            </p>
                                            <h5 className="title mt-3">
                                                يبدأ من
                                            </h5>
                                            <h3 className="title">
                                                بحد أدنى 5 د.ك / للساعة
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-pricing spdb">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title size-l">
                                اختر الحزمة التي تناسبك
                            </h2>
                            <p className="mb-5 text-center">
                                يمكنك أن تقرر الدفع بعد حضور فصل تجريبي
                            </p>
                        </div>

                        <div className="pricing-table layout-03 is-active">
                            <div className="row">
                                <div className="col-md-12 cis-pricing-wrap">
                                    <PriceList />
                                </div>
                            </div>
                        </div>
                        <div className="clients align-center mt60">
                            <span className="title">
                                موثوق به من قبل 5 آلاف + طالب
                            </span>
                        </div>
                    </div>
                </div>
                <section className="section align-center spdb pt-0">
                    <div className="block-trial layout-01">
                        <div className="container">
                            <img className="image-top cis-img-top" src="/assets/images/macaroni-vertical.webp" alt="Trial" />
                            <h2 className="title">
                                لا تزال غير متأكد؟
                            </h2>
                            <div className="cis-class-trial mt-2">
                                4 حصص / ساعة في 7 أيام 25 د.ك
                            </div>
                            <div className="desc"><p>
                                اطلب أسبوعًا تجريبيًا، وامض قدمًا فقط إذا شعرت بالفرق
                            </p></div>
                            <div className="button-wrap"><Link href="/book-private-class" className="button fullfield" title="جرب أول عرض لك">جرب أول عرض لك<i className="las la-long-arrow-alt-left" /></Link></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}