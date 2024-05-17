import CounterUp from "@/components/elements/CounterUp";

export default function Our_Journey() {

    return (
        <>
            <div className="section spdtb our-journey-sec bg-light">
                <div className="container">
                    <div className="block-counter layout-06">
                        <div className="row g-0">
                            <div className="col-12">
                                <div class="heading mb32 text-center"><h1 class="heading-title size-xl">رحلتنا</h1></div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={4.2} time={1} /></span><span className="suffix"> تقييم</span></div>
                                    <div className="title">180,000 التعليقات</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={600} time={1} /></span> <span className="suffix">+</span> </div>
                                    <div className="title">طلاب سعداء</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={20} time={1} /></span><span className="suffix">+</span></div>
                                    <div className="title">المعلمين الخبراء</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={24} time={1} /></span><span className="suffix">+</span></div>
                                    <div className="title">الفصول كل يوم</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}