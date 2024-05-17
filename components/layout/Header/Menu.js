import Link from "next/link";
import { useState } from "react";

export default function Menu({isActive}) {
    // const [isOpen, setIsOpen] = useState(false)

    // function toggleMenu() {
    //     setIsOpen((prev) => !prev);
    // }

    return (
        <>
            <div className={'main-menu' + (isActive ? ' is-active' : '')}>
                <div className="menu-action">
                    {/* <span className="item menu-back">
                        <i className="las la-arrow-left" />
                    </span> */}
                    {/* <span className="item menu-close" onClick={toggleMenu}>
                        <i className="las la-times" />
                    </span> */}
                </div>

                <ul>
                    <li className="is-mega-menu">
                        <Link href="/" title=" اسأل الآن">اسأل الآن</Link>
                    </li>
                    <li className="is-mega-menu">
                        <a href="/hire-a-tutor" title="اختيار المُعلم">اختيار المُعلم</a>
                    </li>
                    {/* <li className="is-mega-menu">
                        <Link href="/private-class">برنامج الحصص الخاصة</Link>
                    </li> */}
                    {/* <li className="is-mega-menu">
                        <Link href="/about-us">نبذة عن ياسا</Link>
                    </li> */}
                    <li className="is-mega-menu">
                        <a href="/become-a-tutor">انضم إلينا (كمعلم) </a>
                    </li>
                    {/* <li className="is-mega-menu">
                        <Link href="https://blog.getyasa.com" target='_blank'>مدونة</Link>
                    </li> */}
                </ul>

            </div>

        </>
    )
}