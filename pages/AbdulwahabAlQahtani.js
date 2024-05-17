'use client'

import Link from 'next/link';
export default function BuisnessCard() {
    return (
        <>
            <div className="buisness-section">
                <div className="buisness-card">
                    <div className="buisness-header">
                        <img src='/assets/images/buisness-Intersect.png' alt=""/>
                    </div>
                    <div className='buisness-logo'>
                        <Link href="/">
                            <img src='/assets/images/filo-images/logo-white.svg' alt='Logo' className='filo-logo' />
                        </Link>
                    </div>
                    <div className='b-content'>
                        <div className='basic-details'>
                            <h3>Abdulwahab AlQahtani</h3>
                            <p>Founder & Chairman</p>
                            <div className='basic-contact'><img src='/assets/images/tel.svg' alt="" /><a href="tel:+91 9345724567">+965 9947 7570</a></div>
                            <div className='basic-contact'><img src='/assets/images/env.svg' alt="" /><a href="mailto:rashid@gmail.com">abdulwahab@getyasa.com</a></div>
                        </div>
                        <div className='download-details'>
                            <h3>Download YASA</h3>
                            <p>one and only <span>live</span> instant tutoring platform in the region</p>
                            <div className="store-btn">
                                <a href="https://getyasa.com/"><img src='/assets/images/app-store.svg' alt="" /></a>
                                <a href="https://play.google.com/store/apps/details?id=yasa.student&pcampaignid=web_share"><img src='/assets/images/google-play.svg' alt="" /></a>
                            </div>
                            <div className='social-cont-wrap'>
                                <div className='social-cont'><span><img src='/assets/images/env.svg' alt="" /></span><a href="tel:+91 9345724567">support@getyasa.com</a></div>
                                <div className='social-cont'><span><img src='/assets/images/globe.svg' alt="" /></span><a href="javascript:void(0)">www.getyasa.com</a></div>
                            </div>
                        </div>
                        <div className="connect-us">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/yasaapp"><img src='/assets/images/facebook.svg' alt='' /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/yasaapp_official"><img src='/assets/images/insta.svg' alt='' /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/yasaapp"><img src='/assets/images/twitter.svg' alt='' /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/yasaedtech/"><img src='/assets/images/linkedin.svg' alt='' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
