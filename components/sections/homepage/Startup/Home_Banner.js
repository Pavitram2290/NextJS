import Link from "next/link";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';


import Modal from 'react-modal'
import { useRouter } from "next/router";

export default function Home_Banner() {
    const router = useRouter();
    const customStyles = { overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' }, content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)' } }

    const onAskButtonClick = () => {
        window.open('https://student.getyasa.com/', '_blank');
    }
    return (
        <>
            <section className="section gradient-bg">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-7 spdtb">
                            <div className="heading mb32">
                                <h2 className="heading-title size-l">
                               يمكنكم الوصول المباشر للمُعلمين على مدار الساعة وطوال أيام الأسبوع، في 60 ثانية فقط!
                                </h2>
                                <div className="heading-desc size-m">
                               جرب حصص الفيديو للتعليم المباشر والفوري بتقنية ياسا المتميزة في أي وقت وأي مكان.
                                </div>
                                <div className="newsletter mt-3 mx-0">
                                    <div className="field-input">
                                        <input
                                            type="email"
                                            name="email"
                                            defaultValue=""
                                            placeholder='اطرح سؤالًا مثل "اشرح المعادلات الخطية بمفهوم متغير واحد"'
                                        />
                                    </div>
                                    <div className="field-submit">
                                        <button className="button fullfield" onClick={onAskButtonClick}>اسأل</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5 align-self-end">
                            <div className="banner-img"><img src="/assets/images/filo-images/home-banner-img.png" alt="Image" />
                                <span className="over-text-info oti-1">
                                    <img src="/assets/images/filo-images/Home-icon-1.png" alt="" />
                                    <p> اسأل الآن</p>
                                </span>
                                <span className="over-text-info  oti-2">
                                    <img src="/assets/images/filo-images/Home-icon-2.png" alt="" />
                                    <p> دروس خاصة</p>
                                </span>
                                <span className="over-text-info  oti-3">
                                    <img src="/assets/images/filo-images/Home-icon-3.png" alt="" />
                                    <p> 
                                    اختيار المُعلم


</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}