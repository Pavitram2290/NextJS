import Link from "next/link";
export default function Startup_Section5() {
    return (
        <>
             <section className="section linear-gradient-06 spdtb-50 tuition-class-sec">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-md-5">
                            <div className="images has-boxshadow">
                                <img className="br60 w-100 img-jump" src="/assets/images/filo-images/tuition-class.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="pdl60 lg-mt32">
                                <div className="heading align-left mg0">
                                    <h2 className="heading-title">	هل يعتبر تطبيق ياسا مثل الفصل الدراسي؟</h2>
                                </div>
                                <div className="block-list layout-01 block-list-flex mt32">
                                    <ul>
                                        <li>
                                            <i className="las la-check align-self-start mt-1" />
                                            <span>
                                            صممت حصص ياسا بشكل فردي لكي تتناسب مع خاصية التعلم السريع والفعال للطلبة.  
                                            </span>
                                        </li>
                                        <li>
                                            <i className="las la-check align-self-start mt-1" />
                                            <span>
                                            يواجه الطالب في حصص المدرسة عدة مشاكل منها عدم إمكانية اعادة الشرح في غالب 
الوقت بسبب وقت الحصة وعدد الطلبة والتزام المعلم بالمنهج ومشكلة مسح السبورة وعدم إمكانية الطالب من الكتابة بسرعة وكل هذه المشاكل تم حلها من خلال تطبيق ياسا

                                            </span>
                                        </li>
                                        <li>
                                            <i className="las la-check align-self-start mt-1" />
                                            <span>
                                         يواجه الطالب مشكلة استمرار نفس المُعلم في فصل المدرسة رغم عدم مقدرة الطالب على فهم طريقة شرحه وأسلوبه وتم حل هذه المشكلة أيضاً في تطبيق ياسا من خلال اتاحة الفرصة أمام الطالب لاختيار المعلم المناسب له.
                                            </span>
                                        </li>
                                        <li>
                                            <i className="las la-check align-self-start mt-1" />
                                            <span>
                                           في  تطبيق ياسا يتم توجيه الطالب بما يتناسب مع وقتة ومستواه التعليمي من خلال مشرف تربوي ومستشار أكاديمي لتصميم جدول الحصص مع أفضل المعلمين المتخصصين في المجال التعليمي.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button-wrap mt32"><Link href="/book-private-class" className="button fullfield" title="جرب أول عرو ضك">جرب أول عرض لك</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}