import Link from "next/link";
import { useState } from "react";

export default function Download_links() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => { setToggled(!isToggled) };
    return (
        <>
            <div className='cis-download-classes'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                            <div className="heading mx-0 mb-4 mw-100">
                                <h1 className="heading-title text-white text-center">تحميل المواد الدراسية مجانا</h1>
                            </div>
                        </div>
                        <div className="col">
                            <ul className="cis-footer-list">
                                <li>CLASS 6</li>
                                <li><Link href="/">Science</Link></li>
                                <li><Link href="/">Chemistry</Link></li>
                                <li><Link href="/">Physics</Link></li>
                                <li><Link href="/">Physics</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="cis-footer-list">
                                <li>CLASS 7</li>
                                <li><Link href="/">Science</Link></li>
                                <li><Link href="/">Chemistry</Link></li>
                                <li><Link href="/">Physics</Link></li>
                                <li><Link href="/">Physics</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="cis-footer-list">
                                <li>CLASS 8</li>
                                <li><Link href="/">Science</Link></li>
                                <li><Link href="/">Chemistry</Link></li>
                                <li><Link href="/">Physics</Link></li>
                                <li><Link href="/">Physics</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="cis-footer-list">
                                <li>CLASS 9</li>
                                <li><Link href="/">Science</Link></li>
                                <li><Link href="/">Chemistry</Link></li>
                                <li><Link href="/">Physics</Link></li>
                                <li><Link href="/">Physics</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="cis-footer-list">
                                <li>CLASS 10</li>
                                <li><Link href="/">Science</Link></li>
                                <li><Link href="/">Chemistry</Link></li>
                                <li><Link href="/">Physics</Link></li>
                                <li><Link href="/">Physics</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="cis-footer-list">
                                <li>CLASS 11</li>
                                <li><Link href="/">Science</Link></li>
                                <li><Link href="/">Chemistry</Link></li>
                                <li><Link href="/">Physics</Link></li>
                                <li><Link href="/">Physics</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="cis-footer-list">
                                <li>CLASS 12</li>
                                <li><Link href="/">Science</Link></li>
                                <li><Link href="/">Chemistry</Link></li>
                                <li><Link href="/">Physics</Link></li>
                                <li><Link href="/">Physics</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}