export default function About_Us_Banner() {
    return (
        <>

            <section className="section overflow-hidden gradient-bg inner-banner">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-7 spdtb">
                            <div className="pdr100">
                                <div className="heading mb32">
                                    <h1 className="heading-title size-xl">نبذة عنا</h1>
                                    {/* <p className="heading-desc size-l weight-700">Student - 1, Self-Doubt-0. Always!</p> */}
                                    <p className="heading-desc size-l">ياسا هو تطبيق وموقع الكتروني تعليمي هدفه رفع مستوى الطالب التعليمي طوال فترة دراسته من الصف السادس وحتى الصف الثاني عشر من خلال تقديم دروس خصوصية فرديه متنوعة سواءً كان لدية سؤال سريع او إذا كان يرغب في حصة فردية لمدة ساعة مع أحد المعلمين المتميزين من اختياره. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-end">
                            <div className="banner-img">
                                <img src="/assets/images/filo-images/about-us-banner.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            

        </>
    )
}