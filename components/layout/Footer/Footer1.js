import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="footer-item footer-about">
                                        <div className="logo">
                                            <Link href="/">
                                                <img src='/assets/images/filo-images/logo-white.svg' alt='Logo' className='filo-logo' />
                                            </Link>
                                        </div>
                                        <p>
                                      مهمة ياسا هي رفع مستوى التعليم في الشرق الأوسط
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="footer-item footer-menu">
                                        <h6>
                                        روابط سريعة

                                        </h6>
                                        <ul>
                                        <li className="is-mega-menu">
                        <Link href="/about-us">نبذة عن ياسا</Link>
                    </li>
                                        <li>
                                                <Link href="https://blog.getyasa.com" target='_blank' title="مدونة">
                                                    مدونة
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/contact-us" title="اتصل بنا">
                                                    اتصل بنا
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/careers" title="وظائف">
                                                وظائف
                                                </Link>
                                            </li>
                                         
                                        
                                            <li>
                                                <Link href="/privacy-policy" title="سياسة الخصوصية">
                                                    سياسة الخصوصية
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/terms-and-condition" title="الأحكام والشروط">
                                                    الأحكام والشروط
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="footer-item footer-menu">
                                        <h6>
                                        موارد</h6>
                                        <ul>
                        
                                         
                                        <li>
                                                <Link href="/" title=" اسأل الآن">
                                                اسأل الآن
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/hire-a-tutor" title="اختيار المُعلم">
                                                اختيار المُعلم
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/private-class" title="برنامج الحصص الخاصة">
                                                برنامج الحصص الخاصة </Link>
                                            </li>
                                           
                                            {/* <li>
                                                <Link href="/" title="اسأل سؤالا">
                                                    اسأل سؤالا
                                                </Link>
                                            </li> */}
                                            <li>
                                                <Link href="/book-private-class" title="التدريس الخصوصي">
                                                    التدريس الخصوصي
                                                </Link>
                                                
                                            </li>

                                            <li>
                                                <Link href="/become-a-tutor" title="كن مدرسًا">
                                               انضم إلينا (كمعلم) 
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="footer-item footer-menu">
                                        <h6>
                                        وسائل التواصل الاجتماعي

                                        </h6>
                                        <ul className='cis-social-list'>
                                            <li>
                                                <Link href="https://www.facebook.com/getyasa.official" title="Facebook">
                                                <i className="lab la-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://twitter.com/yasaapp" title="Twitter">
                                                <i className="lab la-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/getyasa.official" title="Instagram">
                                                <i className="lab la-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/company/yasaedtech/" title="Linkedin">
                                                <i className="lab la-linkedin-in"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.youtube.com/channel/UCEF4qTys3Soq5Sdwufdk7iQ" title="Youtube">
                                                <i className="lab la-youtube"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-item footer-newsletter">
                                        <h6>
                                        النشرة 
                                            </h6>
                                        <p>اشترك في النشرة لدينا وابق على اطلاع دائم حول الشركة</p>
                                        <form action="#" className="newsletter">
                                            <div className="field-input">
                                                <input
                                                    type="email"
                                                    defaultValue=""
                                                    placeholder="عنوان البريد الإلكتروني"
                                                />
                                            </div>
                                            <div className="field-submit">
                                                <button>
                                                شارك    

                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner flex flex-content-sb flex-align-c">
                            <div className="copyright">YASA Edtech © 2023. جميع الحقوق محفوظة</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}