import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function What_Is_Yasa() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-2">
                            <div className="lg-mt32">
                                <div className="heading mb24">
                                    <h2 className="heading-title size-l">ما هو ياسا؟</h2>
                                    <div className="heading-desc">ا   ياسا هي منصة للتعليم الفوري والمباشر الرائدة في الشرق الأوسط التي أحدثت ثورة في طريقة وصول الطلبة الى المعرفة بفضل تقنيات الاتصال السريعة مع المعلمين المتميزين في المجال التعليمي حيث تفتح حصصنا التفاعلية الفردية الباب أمام عالم من الإمكانات من خلال التعليم الصوتي والمرئي الفعال داخل التطبيق فيكتسب الطلبة رؤية تعليمية لامثيل لها مع العديد من المميزات التقنية المتطورة والمتنوعة التي تساعد المُعلم خلال الحصص على التواصل الأمثل مع الطلبة والتغلب على التحديات وتعميق المفاهيم وتحقيق التميز التعليمي لذلك تعتبر منصة ياسا فرصة لامثيل لها للبدء في تجربة تعليمية متطورة و رائعة لكل مُعلم يطمح للعمل في مجال التعليم الإلكتروني ويبحث عن فرصة وظيفية تتيح له استغلال قدراته في جميع الأوقات ومن أي مكان.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
                            <img className="br8 wow animate__animated animate__fadeInLeft" src="/assets/images/filo-images/whay-is-yasa-new.png" alt="Image" />
                        </div>
                        <div className='col-md-12'>
                            <div className="heading mb24 mw-100">
                                <h2 className="heading-title size-l">لماذا تختار ياسا؟</h2>
                                <div className="heading-desc">أعزاءنا المعلمين كلنا ندرك أن التعليم التقليدي مقيد بعدة عقبات تمنعكم من الانطلاق في مجالكم بما في ذلك التواجد الفعلي في مكان وزمان محدد وتُقلص من قدراتكم في إيصال المعلومة وتحُد من طموحاتكم المشروعة في الكسب المادي المستمر في كل وقت ومن أي مكان لذلك فإن منصة ياسا التعليمية تجاوزت كل هذه العقبات من خلال اتاحة الفرصة امامكم للمشاركة ضمن فريق مُعلمينا حيث يتوفر لكم من خلال تطبيقنا أحدث تقنيات التعليم الإلكتروني بمزايا متعددة واختيارات متنوعة لإيصال المعلومة للطالب بشكل فوري ومباشر مع تقييم مستمر لأدائكم ووصول دائم للطلبة تضمنون من خلاله استمراركم بالعمل 24 ساعه وطوال أيام الأسبوع حسب قدراتكم فيتضاعف بذلك دخلكم المادي الذي تحددونه انتم من خلال تواجدكم المستمر في التطبيق والاستجابة الى أكبر قدر من المكالمات وبذل المجهود الرائع والمستمر , انظموا الآن الى فريق مُعلمين ياسا وكونوا سباقين في الانطلاق ضمن تجربة رائعة في التعليم.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="block-video">
                                <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                                    <img src="/assets/images/filo-images/vid-1.png" alt="Popup Video" />
                                    <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl100 pdr100 lg-mt32">
                                <div className="heading mb24">
                                    <h2 className="heading-title size-l">كيف تبدو التجربة عند العمل مع ياسا؟ </h2>
                                    {/* <div className="heading-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />




        </>
    )
}