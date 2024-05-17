import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function HowDoesItWork() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <section className="section spdtb home-step-sec">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">كيف يعمل ياسا؟</h2>
                        <div className="heading-desc">بالتعاون مع آلاف المُعلمين المتميزين أنشأنا ياسا</div>
                    </div>

                    <div class="block-icon-box layout-09 item-grey step-line-wrap">
                        <div className='step-line'></div>
                        <div className="row align-items-center">
                             <div className='col-md-6'>
                                <div className='img-holder'>
                                    <img src="./assets/images/filo-images/step-process-1.png" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="icon-box">
                                    <div class="inner">
                                        <div className="icon"><span className="number">1</span></div>
                                        <div className="content">
                                            <h4 className="title size-l">موفاهم دروسك؟</h4>
                                            <p className="desc">عندك شعور إن الدروس صعبة وتتمنى أحد يشرح لك عدل.
</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="row align-items-center">
                            <div className='col-md-6'>
                                <div className='img-holder'>
                                    <img src="./assets/images/filo-images/step-process-2.png" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="icon-box">
                                    <div className="inner">
                                        <div className="icon"><span class="number">2</span></div>
                                        <div className="content">
                                            <h4 className="title size-l">صور سؤالك </h4>
                                            <p className="desc"> اختر أي شيء تريده – نظرية أو مفهوم أو سؤال أو حتى صيغة رياضية!</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="row align-items-center">
                            <div className='col-md-6'>
                                <div className='img-holder'>
                                    <img src="./assets/images/filo-images/step-process-3.png" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="icon-box">
                                    <div className="inner">
                                        <div className="icon"><span className="number">3</span></div>
                                        <div className="content">
                                            <h4 className="title size-l">نشرح لك الحل ببساطة باتصال فيديو مباشر مع المُعلم </h4>
                                            <p className="desc">نستخدم تقنية السبورة البيضاء وتسجيل فيديو للحصص
وتحويل الكتابة لمذكرة PDF ومميزات أخرى كثيرة!
</p>
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