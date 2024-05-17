import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Hire_A_Tutor_Sec_1() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <section className="section spdtb find-qualified-tutors-sec">
                <div class="container">
                    <div class="heading align-center">
                        <div class="heading-sub color-navy">كيف اختار المُعلم ؟</div>
                        <h2 class="heading-title size-l">بثلاث خطوات بسيطة !</h2>
                    </div>
                    <div class="block-icon-box align-center">
                        <div class="row flex-align-c">
                            <div class="col-lg-4">
                                <div class="icon-box">
                                    <div class="inner">
                                        <img src='./assets/images/step--02.png'/>
                                        <div class="number">01.</div>
                                        <div class="content">
                                            <h3 class="title">	البحث عن المُعلم المناسب</h3>
                                            <div class="desc">يعرض لك تطبيق ياسا مسبقاً تصنيفات دقيقة للمُعلم
 من حيث الخبرة والسعر والتقييم لتسهيل عملية الاختيار
 بما يتناسب متطلباتك التعليمية.


</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-4">
                                <div class="icon-box">
                                    <div class="inner">
                                        <img src='./assets/images/step--03.png'/>
                                        <div class="number">02.</div>
                                        <div class="content">
                                            <h3 class="title">خلال 30 ثانية يمكنك التواصل مع المُعلم
</h3>
                                            <div class="desc">بمجرد الضغط على طلب الاتصال بالمُعلم
وقبول المُعلم للطلب ستكون على اتصال مباشر معه.


</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                            <div class="icon-box">
                                <div class="inner">
                                    <img src='./assets/images/step--01.png'/>
                                    <div class="number">03.</div>
                                    <div class="content">
                                        <h3 class="title">	استمتع بالحصة المباشرة
</h3>
                                        <div class="desc">اندمج مع الحصة الدراسية المباشرة التي تتميز
بسبورة للشرح وامكانيات عالية الجودة للصوت
والصورة ومشاركة الملفات والمحادثة والعديد 
من المميزات الأخرى.
</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}