'use client'

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeadComponent from "@/components/layout/Header/Head";

export default function ContactUs() {
    const [formValues, setFormValues] = useState();
    const title = "اتصل بنا";
    const content = "إذا كانت لديك أي أسئلة حول الاشتراك أو لم تكن متأكدًا من الخطة المناسبة لك، فاتصل بفريقنا ودعنا نحدد موعدًا لإجراء مكالمة.";

    const onChangehandler = (e) => {
        setFormValues((preValue) => ({
            ...preValue,
            [e.target.name]: e.target.value
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        saveContactForm(formValues);
    }

    const saveContactForm = (payload) => {
        const apiUrl = 'https://us-central1-yasa-21022022.cloudfunctions.net/SendContactUsForm';
        axios.post(apiUrl, payload)
            .then(response => {
                console.log('Submit Contact Form:', response.data);
                if(response.data.IsSuccess) {
                    toast.success('تم استلام طلبك وسيتواصل معك أحد أعضاء فريقنا');
                }
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };


    return (
        <>
        <ToastContainer />
        <HeadComponent title={title}
            content={content}
            />

            <Layout className="p-0" siteContentClass="p-0">
                <div className="contact-us-sec spdtb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading mw-100 text-center">
                                    <h1 className="heading-title size-xl">تواصل معنا</h1>
                                    <p className="heading-desc size-l mt-0">يسعدنا التحدث إليك</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-content">
                                    <div className="heading">
                                        <h2 className="heading-title">لنتحدث</h2>
                                        <div className="heading-desc">إذا كانت لديك أي أسئلة حول الاشتراك أو لم تكن متأكدًا من الخطة المناسبة لك، فاتصل بفريقنا ودعنا نحدد موعدًا لإجراء مكالمة.</div>
                                    </div>
                                    <div className="contact-boxs">
                                        <div className="row">
                                            {/* <div className="col-md-6">
                                                <div className="contact-box">
                                                    <Link href="/tel:00965-94407190" title="اتصل بنا" className="background-navy">اتصل بنا<span>00965-94407190</span></Link>
                                                </div>
                                            </div> */}
                                            <div className="col-md-6">
                                                <div className="contact-box">
                                                    <Link href="/mailto:support@getyasa.com" title="راسلنا" className="background-dark">راسلنا<span>support@getyasa.com</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="heading-title mt-4 mb-1">تابعنا على</h2>
                                    <ul class="cis-social-list">
                                        <li><a title="Facebook" href="https://www.facebook.com/yasaapp"><i class="lab la-facebook-f"></i></a></li>
                                        <li><a title="Twitter" href="https://twitter.com/yasaapp"><i class="lab la-twitter"></i></a></li>
                                        <li><a title="Instagram" href="https://www.instagram.com/yasaapp_official"><i class="lab la-instagram"></i></a></li>
                                        <li><a title="Linkedin" href="https://www.linkedin.com/company/yasaedtech/"><i class="lab la-linkedin-in"></i></a></li>
                                        <li><a title="Youtube" href="https://www.youtube.com/channel/UCEF4qTys3Soq5Sdwufdk7iQ"><i class="lab la-youtube"></i></a></li>
                                    </ul>
                                    {/* <div className="heading">
                                        <h2 className="heading-title">العنوان</h2>
                                        <div className="heading-desc">2866  Oakway Lane, New York, USA</div>
                                    </div> */}
                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.5709488808353!2d48.02592026962681!3d29.332677567617495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c58a7896f19%3A0x26a4e68e56c11aa3!2sAl%20Khomasi%20Group!5e0!3m2!1sen!2skw!4v1692722571479!5m2!1sen!2skw" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-form layout-01">
                                    <div className="heading">
                                        <h2 className="heading-title">كيف نستطيع مساعدتك؟ </h2>
                                        <div className="heading-desc">يرجى إخبارنا عن استفسارك عن طريق ملء النموذج أدناه.</div>
                                    </div>
                                    <form action="#" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="field-input">
                                                    <label htmlFor="firstname">الاسم الأول*</label>
                                                    <input type="text" name="firstname" id="firstname" onChange={onChangehandler} placeholder="أدخل اسمك الأول" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="field-input">
                                                    <label htmlFor="Lastname">الاسم الأخير*</label>
                                                    <input type="text" name="Lastname" id="Lastname" onChange={onChangehandler} placeholder="أدخل اسمك الأخير" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="field-input">
                                                    <label htmlFor="Email">البريد الإلكتروني*</label>
                                                    <input type="text" name="Email" id="Email" onChange={onChangehandler} placeholder="أدخل بريدك الإلكتروني" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="field-input">
                                                    <label htmlFor="PhoneNo">رقم الهاتف</label>
                                                    <input type="text" name="PhoneNo" id="PhoneNo" onChange={onChangehandler} placeholder="أدخِل رقم هاتفك" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="field-input field-textarea">
                                                    <label htmlFor="Message">الرسالة*</label>
                                                    <textarea name="Message" id="Message" cols={30} rows={10} onChange={onChangehandler} placeholder="اكتب رسالتك" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="field-submit">
                                                    <input type="submit" defaultValue="Send Message" name="إرسال" value="إرسال" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
