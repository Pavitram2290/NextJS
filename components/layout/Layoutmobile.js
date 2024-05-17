import { useEffect } from 'react';
import BackToTop from '../elements/BackToTop';
// import SwitchDarkLight from '../elements/SwitchDarkLight.js ________________';

import PageHead from './PageHead';

export default function Layoutmobile({ headerLayout, footerLayout, children, siteContentClass, pageTitle, pageTitleSub, pageTitleDesc, pageTitleBtn, headerClass }) {
    useEffect(() => {

        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    })
    return (
        <>
            <PageHead />
            <div id="wrapper">

                <main id="main" className="site-main">
                    {pageTitle &&
                        <section className="page-title">
                            <div className="container">
                                <div className="inner align-center">
                                    {pageTitleSub && <div className="sub">{pageTitleSub}</div>}
                                    {pageTitle && <h1 className="title">{pageTitle}</h1>}
                                    {pageTitleDesc && <p className="desc">{pageTitleDesc}</p>}
                                    {pageTitleBtn &&
                                        <div className="button-wrap"><a href="#" className="button fullfield" title="Opportunities">{pageTitleBtn}</a></div>
                                    }
                                </div>
                            </div>
                        </section>
                    }


                    <div className={`site-content ${siteContentClass ? siteContentClass : ""}`}>
                        {children}
                    </div>
                </main>


            

                <BackToTop />
                {/* <SwitchDarkLight /> */}
            </div>
        </>
    )
}