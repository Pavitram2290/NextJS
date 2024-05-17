// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";

export default function Teachers_Section() {
    return (<>




<section className="section">
                <div className="container">
                    <div className="row flex-align-t py-5">
                        <div className="col-lg-6">
                            <div className="pdl60 lg-mt32">
                                <div className="heading heading-alway-dark mg0">
                                    <h2 className="heading-title">
                                    ما الذي يميز معلمي ياسا؟
احصل على أفضل المُعلمين                                    </h2>
<div class="block-list layout-01 block-list-flex ">
                                <ul>
                                    <li><i class="las la-check align-self-start mt-3"></i> <span>
                                     نختار المعلمين بعناية من جامعات عريقه ولديهم خبرة كبيره في مجال التعليم. </span></li>
                                    <li><i className="las la-check align-self-start mt-1"></i> <span>
                                    يتميز المعلمون لدينا بقدارتهم الكبيره على إيصال المعلومه بطريقة سهلة وذكية.
                                        </span></li>
                                    <li><i className="las la-check align-self-start mt-1"></i> <span>
                                    تحتوي السيرة الذاتيه للمعلمين المتميزين لدينا على اكثر من ألف ساعه من الخبرة في التدريس مع مئات الطلبة في العديد من دول العالم.                                   </span></li>
                                </ul>
                            </div>
                                </div><br></br>
                                <button className="button fullfield"><Link href="/become-a-tutor" className="button fullfield" title="اكتشف المزيد">
                           انضم إلينا (كمعلم)
                           </Link> </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="section-pricing spdb cis-best-prices-sec">

                        <div className="icon-box filo-class-card">
                            <div className="container">
                                <img className="image-top cis-img-top" src="/assets/images/teacher.jpg" alt="Image" />
                            </div></div></div>
                        </div>
                    </div>
                </div>
            </section>











        {/* <section className="section">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="heading">
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cis-teachers-content">
                            <div className="heading  mb-3">
                                <h1 className="heading-title size-l">
                                ما الذي يميز معلمي ياسا؟
احصل على أفضل المُعلمين
 </h1>
                            </div>
                            <div className="block-list layout-01 block-list-flex mt32 mb-4">
                                <ul>
                                    <li><i className="las la-check align-self-start mt-1"></i> <span>
                                     نختار المعلمين بعناية من جامعات عريقه ولديهم خبرة كبيره في مجال التعليم. </span></li>
                                    <li><i className="las la-check align-self-start mt-1"></i> <span>
                                    يتميز المعلمون لدينا بقدارتهم الكبيره على إيصال المعلومه بطريقة سهلة وذكية.
                                        </span></li>
                                    <li><i className="las la-check align-self-start mt-1"></i> <span>
                                    تحتوي السيرة الذاتيه للمعلمين المتميزين لدينا على اكثر من ألف ساعه من الخبرة في التدريس مع مئات الطلبة في العديد من دول العالم.                                   </span></li>
                                </ul>
                            </div>
                            
                            <button className="button fullfield"><Link href="/become-a-tutor" className="button fullfield" title="اكتشف المزيد">
                           انضم إلينا (كمعلم)
                           </Link> </button>
                        </div>
                    </div>
                   
                    <div className="section-pricing spdb cis-best-prices-sec">

                       
                    <div className="container">
                        <div className="row">
                     
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


                </div>
            </div>
        </section> */}


    </>)
}
