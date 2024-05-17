import Link from "next/link";
export default function Become_Tutor_Section() {
    return (
        <>

            <section className="section overflow-hidden gradient-bg inner-banner">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-7 spdtb">
                            <div className="pdr100">
                                <div className="heading mb32">
                                    <h1 className="heading-title size-xl">انضم إلينا (كمُعلم)</h1>
                                    <p className="heading-desc size-l">انضم الى فريق مُعلمين ياسا المميزين حيث يمكن أن يزدهر شغفك بالتعليم من خلال التعاون المشترك مع فريق عمل ياسا على إلهام الطلبة وتمكينهم من الوصول الى أقصى درجات الفهم والادراك المعرفي.</p>
                                </div>
                                <div className="button-wrap">
                                </div>
                                <div className="apps m220">
                                <Link href="https://apps.apple.com/us/app/ياسا-للمعلم/id6463125382" title="" className="cis-img-btn mr16">
                                    <img src="/assets/images/app-store.png" alt="App Store"  /></Link>
                                    <Link href="https://play.google.com/store/apps/details?id=com.yasa.tutor" title="" className="cis-img-btn mr16">

                                    <img src="/assets/images/google-play.png" alt="Google Play"  /></Link>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-end">
                            <div className="banner-img">
                                <img src="/assets/images/filo-images/becom-a-tutor-banner.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}