import Link from "next/link";
import { useState } from 'react';
export default function Section_Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="heading align-center mb60">
                        <h2 className="heading-title size-xl">الأسئلة الشائعة</h2>
                        <p className="heading-desc heading-desc size-l">
                        لم تحصل على إجابتك?{" "}
                            <Link href="/contact-us" title="اتصل بدعمنا الآن">
                                اتصل بدعمنا الآن
                            </Link>
                        </p>
                    </div>
                    <div className="block-accordion enable layout-02">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className={isActive.key == 1 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(1)}>
                                    <h4 className="title">
                                        1. متى وكيف سأتلقى مستحقاتي المالية من تطبيق ياسا للمُعلم؟
                                        </h4>
                                    <div className="content" style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}>
                                  <p>  آلية تحويل المستحقات المالية بسيط جداً حيث يتم تحويل المبالغ المالية للمُعلم المستفيد اسبوعياً في كل يوم ثلاثاء الى حسابه البنكي و يعتمد التحويل المالي على عاملين مهمين وهما :</p>
                                    <p>

                                    <b>أ-</b> استكمال (بيانات حسابك البنكي) من خلال ملفكم الشخصي في تطبيق (ياسا للمُعلم).<br></br>
<b>ب-</b> طلب مباشر من المُعلم بتحويل مستحقاته المالية الجاهزة للصرف الى حسابه البنكي قبل موعد التحويل الأسبوعي بيومين على الأقل من خلال (الرصيد المالي) في ملفكم الشخصي في تطبيق (ياسا للُمعلم).

                                   </p>

                                   <p>

                                   تنبيه : لا يتم تحويل اي مبالغ مالية أقل من خمسة دنانير.
                                   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 2 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(2)}>
                                    <h4 className="title">
                                    2. كيف يتم حساب أجور المُعلمين في تطبيق ياسا للمُعلم؟
                                    </h4>
                                    <div className="content" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}>
                                    <p>هناك فئتان من الحصص لدى تطبيق ياسا للمُعلم:</p>

                                    {/* <ul>
                                        <li>
                                            <Link href='/'> للمعيارين الحادي عشر والثاني عشر (الفيزياء والكيمياء والأحياء والرياضيات): روبية. 140/ساعة</Link>
                                        </li>
                                        <li>
                                            <Link href='/'>For 9th & 10th (All topics/subjects): Rs. 110/hr</Link>
                                        </li>
                                        <li>
                                            <Link href='/'>لامتحانات الوظائف الحكومية (جميع المواضيع): روبية. 110/ساعة</Link>
                                        </li>
                                    </ul> */}

                                    <p>
                                    <b>أ-</b> حصة السؤال السريع التي يجب ألا تتجاوز مدتها عن (15 دقيقة) للحصة وهي مخصصة للإجابة عن سؤال واحد فقط ويتم احتساب أجرها ب (750 فلس) / 15 دقيقة وفي حال زادت مدة الشرح عن ربع ساعة فإن أجر الدقائق الإضافية سيكون أقل ويتم حساب هذا التنازل التدريجي بالتسعير للدقيقة لوغاريتماتياً عن طريق الذكاء الصناعي.<br></br>
<b>ب-</b> حصص المُعلمين المتميزين والتي يتم تحديد أجرها مسبقاً من قبل المُعلم ومدتها ساعة واحدة فقط وتحصل ياسا على 25% مقابل كل ساعة.

                                    
                                    
</p>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 3 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(3)}>
                                    <h4 className="title">
                                    3. هل يجب على المُعلم قضاء عدد محدد من الساعات على تطبيق ياسا للمُعلم؟ 
                                    </h4>
                                    <div className="content" style={isActive.key == 3 ? { display: 'block' } : { display: 'none' }}>
                                        <p>ياسا تهتم وتراعي فريق المُعلمين بالكامل من خلال الحرص على عدم شعور المُعلم بالإرهاق أو الضغط المتواصل أثناء اعطاء المزيد والمزيد من الحصص ولذلك فإن سياستنا تعتمد على منح الحرية الكاملة لكل مُعلم لاستقبال الحصص وفقاً لجدولة الزمني وتفضيلاته بحيث يعتمد قرار تواجده بشكل متصل في تطبيق ياسا للمُعلم على إرادته ونحن ندرك تماماً امكانية عدم اتصال المُعلم بشكل مستمر بسبب التزامات الحياة الأخرى لذلك فإننا لا نقيد المُعلمين بعدد ساعات معينة في اليوم او الأسبوع او الشهر وانما يكون ذلك وفقاً لتقديرهم وإمكانياتهم.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 4 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(4)}>
                                    <h4 className="title">
                                    4. ماهي المؤهلات التعليمية الواجب توافرها للانضمام الى فريق مُعلمين ياسا؟ 
                                        </h4>
                                    <div className="content" style={isActive.key == 4 ? { display: 'block' } : { display: 'none' }}>
                                        <p>هناك فئتان من المُعلمين يمكنهم الانضمام الى فريق مُعلمين ياسا:</p>
                                        <p><b>أ-</b> المُعلم المبتدأ: هو المعلم الذي لا يحمل شهادة في مجال التعليم وانما هو قادر على التعليم ويكون ضمن فئة المُعلمين الذين يتم اختيارهم للرد على الأسئلة السريعة فقط.

<br></br><b>ب-</b> المُعلم المحترف: هو المُعلم الحاصل على شهادة جامعية في مجال التعليم ويكون ضمن فئة المُعلمين المميزين الذين بإمكانهم المشاركة في جميع برامج ياسا للتعليم.
</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 5 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(5)}>
                                    <h4 className="title">
                                    5. من الأشخاص الذين يمكنهم الانضمام الى فريق مُعلمين ياسا؟
                                    </h4>
                                    <div className="content" style={isActive.key == 5 ? { display: 'block' } : { display: 'none' }}>
                                        <p>
                                        هناك فئتان من المُعلمين يمكنهم الانضمام الى فريق مُعلمين ياسا:</p>  
                                                                               
                                    <p> 
                                    <b>أ-</b> المُعلم المبتدأ: هو المعلم الذي لا يحمل شهادة في مجال التعليم وانما هو قادر على التعليم ويكون ضمن فئة المُعلمين الذين يتم اختيارهم للرد على الأسئلة السريعة فقط.

<br></br><b>ب-</b> المُعلم المحترف: هو المُعلم الحاصل على شهادة جامعية في مجال التعليم ويكون ضمن فئة المُعلمين المميزين الذين بإمكانهم المشاركة في جميع برامج ياسا للتعليم.

                                        
                                                                            </p></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 6 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(6)}>
                                    <h4 className="title">
                                    6. ما هو برنامج ياسا لتوجيه المُعلمين؟
                                    </h4>
                                    <div className="content" style={isActive.key == 6 ? { display: 'block' } : { display: 'none' }}>
                                        <p>
                                        نقوم بتنفيذ برامج توجيهية عبر الإنترنت في ياسا للحفاظ على كفاءة المُعلمين في الحصص ولتحسين جودة المُعلم الجديد على تطبيق ياسا للمُعلم.
                                        </p></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 7 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(7)}>
                                    <h4 className="title">
                                    7. كيف يمكنني أن أصبح ضمن فريق المُعلمين المتميزين في ياسا؟ 
                                    </h4>
                                    <div className="content" style={isActive.key == 7 ? { display: 'block' } : { display: 'none' }}>
                                        <p>
                                        ياسا تسعد بانضمام أي مُعلم إلى فريقها ولتكون ضمن المُعلمين المميزين يجب أن تكون حاصل على شهادة في مجال التعليم.
                                        </p></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 8 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(8)}>
                                    <h4 className="title">
                                    8. كيف يمكنني إلغاء حضر ياسا للمُعلم؟ 
                                    </h4>
                                    <div className="content" style={isActive.key == 8 ? { display: 'block' } : { display: 'none' }}>
                                        <p>
                                        يمكنكم التواصل مع فريق ياسا للدعم الفني support@getyasa.com                                        </p></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 9 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(9)}>
                                    <h4 className="title">
                                    9. حاولت أن استكمل إجراءات التسجيل في تطبيق ياسا للمُعلم، ولكن دائماً اواجه مشكلة فنية في التسجيل؟
                                    </h4>
                                    <div className="content" style={isActive.key == 9 ? { display: 'block' } : { display: 'none' }}>
                                        <p>
                                        يمكنكم التواصل مع فريق ياسا للدعم الفني support@getyasa.com.
                                        </p>
                                      
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 10 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(10)}>
                                    <h4 className="title">
                                    10. هل من الآمن مشاركة تفاصيل بياناتي الشخصية او المصرفية على تطبيق ياسا للمُعلم؟ 
                                    </h4>
                                    <div className="content" style={isActive.key == 10 ? { display: 'block' } : { display: 'none' }}>
                                        <p>
                                        احترام خصوصية الفرد ضمن سياساتنا الأساسية ونضمن لك سرية بياناتك ولن تتم مشاركتها مع أي شخص.                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={isActive.key == 11 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(11)}>
                                    <h4 className="title">
                                    11. ما الذي سيطلبه فريق ياسا من المُعلمين في برنامج توجيه المُعلمين؟ 
                                    </h4>
                                    <div className="content" style={isActive.key == 11 ? { display: 'block' } : { display: 'none' }}>
                                        <p>
                                        نقوم بإجراء برامج التوجيه عبر الأنترنت للحفاظ على فعالية المعلمين في حصصهم الخاصة ولتحسين جودة المعلمين الجدد على تطبيق ياسا للمُعلم حيث إن هذا البرنامج ليس برنامج اختبار للمُعلمين، ولكن لمساعدتهم في فهم النظام الأساسي لتطبيق ياسا للمُعلم بشكل أفضل.                                        </p>
                                        <p>يمكن لأي مُعلم أن يتوجه بالسؤال أو الاستفسار او أن يتقدم بأي تظلم لفريق الدعم الفني وسنقوم بالرد عليكم بأسرع وقت ممكن support@getyasa.com</p>
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