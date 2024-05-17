'use client'

import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function CareerDetail() {
    return (
        <>
            <Layout pageTitleDesc="Full Time , New York, USA" pageTitle="Product Designer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-left">
                            <Link href="/careers" className="button fullfield mb-2">Back to Careers</Link>
                        </div>
                        <div className="col-lg-12">
                            <div className="post-content content pdr50">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu maximus velit. Maecenas egestas rhoncus condimentum. Cras dapibus elit dui. Phasellus felis odio, interdum lacinia nulla eget, tincidunt condimentum dui. Nunc auctor fringilla iaculis. Ut imperdiet, diam vitae bibendum ornare, urna eros ornare mauris, sit amet tempor tortor tortor sit amet mi.</p>
                                <h3>Product Designer</h3>
                                <p>Phasellus felis odio, interdum lacinia nulla eget, tincidunt condimentum dui. Nunc auctor fringilla iaculis. Ut imperdiet, diam vitae bibendum ornare,</p>
                                <h4>What you’ll do</h4>
                                <p>Phasellus felis odio, interdum lacinia nulla eget, tincidunt condimentum dui. Nunc auctor fringilla iaculis.</p>
                                <h4>Skills &amp; Qualifications</h4>
                                <p>Phasellus felis odio, interdum lacinia nulla eget, tincidunt condimentum dui. Nunc auctor fringilla iaculis.</p>
                                <ul>
                                    <li>Phasellus felis odio, interdum lacinia nulla eget, tincidunt condimentum dui.</li>
                                    <li>Nunc auctor fringilla iaculis.</li>
                                    <li>Ut imperdiet, diam vitae bibendum ornare.</li>
                                    <li>Urna eros ornare mauris, sit amet tempor tortor tortor sit amet mi.</li>
                                </ul>
                                <h4>How to apply</h4>
                                <p>Phasellus felis odio, interdum lacinia nulla eget, tincidunt condimentum dui. Nunc auctor fringilla iaculis.Ut imperdiet, diam vitae bibendum ornare, urna eros ornare mauris, sit amet tempor tortor tortor sit amet mi.</p>
                                <Link href="/" className="button fullfield mt32" title="Apply for this job">Apply for this job</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
