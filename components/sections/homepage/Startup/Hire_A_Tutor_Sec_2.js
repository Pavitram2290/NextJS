import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Hire_A_Tutor_Sec_2({topicList}) {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <section className="section spdtb find-qualified-tutors-sec">
                <div className="container">
                    <div className="row find-qual">
                        <div className="col-md-6">
                            <div className="row">

                            { topicList?.length > 0 &&
                                topicList.slice(0, 4).map((topic, index) => {
                                    return <div className="col-md-6" key={index}>
                                    <div className='sub-box'>
                                        <h3>{topic.TopicNameArabic}</h3>
                                        <p>{topic.TutorsCount} مدرسون</p>
                                        <img className="sm-sub" src={`/assets/images/${topic?.TopicNameEnglish.toLowerCase()}.png`} />
                                        <div className='hover-det'>
                                            <p>جرب حصص الفيديو للتعليم المباشر والفوري بتقنية ياسا المتميزة في أي وقت وأي مكان</p>
                                           <Link href="https://student.getyasa.com/login" className='hire-btn' target='_blank'>اختيار المُعلم</Link>
                                        </div>
                                    </div>
                                </div>
                            })}
                            
                                {/* <div className="col-md-6">
                                    <div className='sub-box'>
                                        <h3>English</h3>
                                        <p>2456 tutors</p>
                                        <img className="sm-sub" src="/assets/images/english.png" />
                                        <div className='hover-det'>
                                            <p>Learn how to study biology easily with the experts- hire a tutor now!</p>
                                           <button className='hire-btn'>اختيار المُعلم</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className='sub-box'>
                                        <h3>Mathematics</h3>
                                        <p>6531 tutors</p>
                                        <img className="sm-sub" src="/assets/images/arithmatic.png" />
                                        <div className='hover-det'>
                                        <p>Learn how to study biology easily with the experts- hire a tutor now!</p>
                                       <button className='hire-btn'>اختيار المُعلم</button>
                                    </div>
                                    </div>
                                </div>
                               
                                <div className="col-md-6">
                                    <div className='sub-box'>
                                        <h3>Science</h3>
                                        <p>2004 tutors</p>
                                        <img className="sm-sub" src="/assets/images/science.png" />
                                        <div className='hover-det'>
                                        <p>Learn how to study biology easily with the experts- hire a tutor now!</p>
                                       <button className='hire-btn'>اختيار المُعلم</button>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className='sub-box'>
                                        <h3>Chemistry</h3>
                                        <p>6531 tutors</p>
                                        <img className="sm-sub" src="/assets/images/chemistry.png" />
                                        <div className='hover-det'>
                                        <p>Learn how to study biology easily with the experts- hire a tutor now!</p>
                                       <button className='hire-btn'>اختيار المُعلم</button>
                                    </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="heading">
                                <h2 className="heading-title size-l">ابحث عن المُعلمين المتميزين المستعدين لشرح الحصص بشكل مباشر.</h2>
                                <p className="heading-desc size-2 mt-0">-	العديد من الطلبة وجدوا المُعلمين المناسبين لجميع المواد التي يرغبون بها
( الرياضيات , الفيزياء , الكيمياء , اللغة العربية , اللغة الإنجليزية , 
اللغة الفرنسية , العلوم ,الاحياء والعديد ...) نعم لدينا كل هذا واكثر..
يمكنك الان اختيار مُعلمك المناسب الان واتصل خلال 30 ثانية .
</p>
                                <button className='hire-tutor-org'>اختيار المُعلم</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    { topicList?.length > 0 && topicList.slice(4, 8).map((topic, index) => {
                        return <div className="col-md-3" key={index}>
                            <div className='sub-box'>
                                <h3>{topic?.TopicNameArabic}</h3>
                                <p>{topic?.TutorsCount} مدرسون</p>
                                <img className="sm-sub" src={`/assets/images/${topic?.TopicNameEnglish.toLowerCase()}.png`} />
                                <div className='hover-det'>
                                    <p>جرب حصص الفيديو للتعليم المباشر والفوري بتقنية ياسا المتميزة في أي وقت وأي مكان</p>
                                    <Link href="https://student.getyasa.com/login" className='hire-btn' target='_blank'>اختيار المُعلم</Link>
                                </div>
                            </div>
                        </div>
                    })

                    }

                        {/* <div className="col-md-3">
                            <div className='sub-box'>
                                <h3>French</h3>
                                <p>82 tutors</p>
                                <img className="sm-sub" src="/assets/images/french.png" />
                                <div className='hover-det'>
                                    <p>Learn how to study biology easily with the experts- hire a tutor now!</p>
                                    <button className='hire-btn'>اختيار المُعلم</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='sub-box'>
                            <h3>BIOLOGY</h3>
                            <p>180 tutors</p>
                            <img className="sm-sub" src="/assets/images/biology.png" />
                            <div className='hover-det'>
                            <p>Learn how to study biology easily with the experts- hire a tutor now!</p>
                           <button className='hire-btn'>اختيار المُعلم</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                            <div className='sub-box'>
                            <h3>ARABIC</h3>
                            <p>572 tutors</p>
                            <img className="sm-sub" src="/assets/images/arabic.png" />
                            <div className='hover-det'>
                            <p>Learn how to study biology easily with the experts- hire a tutor now!</p>
                           <button className='hire-btn'>اختيار المُعلم</button>
                        </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='sub-box'>
                            <h3>Physics</h3>
                            <p>1011 tutors</p>
                            <img className="sm-sub" src="/assets/images/physics.png" />
                            <div className='hover-det'>
                            <p>Learn how to study biology easily with the experts- hire a tutor now!</p>
                           <button className='hire-btn'>اختيار المُعلم</button>
                        </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}