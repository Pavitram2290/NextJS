import Live_Session_Slider from '@/components/slider/Live_Session_Slider';
import PriceList from '@/components/slider/PriceList';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Live_Sessions() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <section className="section spdtb bg-light live-session-sec">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-l">حصص مباشرة</h2>
                        <div className="heading-desc">مُعلمين مستعدين لشرح الدروس للطلبة بشكل مباشر</div>
                    </div>
                    <div className="block-testimonial item-border layout-03">
                        <div className="swiper uxp-swiper-slider testimonial-slider">
                            <Live_Session_Slider />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}