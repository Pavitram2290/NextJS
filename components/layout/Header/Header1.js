
import HeaderRight from './HeaderRight';
import Logo from './Logo';
import Menu from './Menu';
import CanvasMenu from './CanvasMenu';
import Link from 'next/link';
import { useState } from 'react';

export default function Header({headerClass}) {
    
    const [isActive, setIsActive] = useState(false)

    function toggleMenu() {
        setIsActive((prev) => !prev);
    }


    return (
        <>

            <header id="header" className={`site-header ${headerClass}`}>
            {/* <CanvasMenu /> */}
                <div className="container">
                    <div className="row flex-align-c inner">
                        <div className="col-lg-3 col-auto">
                            <div className="header-left flex flex-align-c">
                                <button className={'d-max-992 menuToggle' + (isActive ? " menuClose" : "" )} onClick={toggleMenu}>
                                    <i className="las la-bars"></i>
                                    <i className="las la-times" />
                                </button>
                                <Logo />
                            </div>
                        </div>
                        <div className="col-lg-9 col-auto">
                        <div className='leftNavWrap'>
                            <Menu isActive={isActive} />
                            <div className="header-right flex flex-align-c flex-content-e header-icon-btns">
                                <div className="buttons">
                                    <Link href="https://student.getyasa.com/" target='_blank'>
                                        <button
                                            type="button"
                                            className="btn btn-dark">
                                            <i className="las la-school"></i> دخول الطالب
                                        </button>
                                    </Link>
                                </div>
                                <div className="buttons">
                                    <Link href="https://tutor.getyasa.com" target='_blank'>
                                        <button
                                            type="button"
                                            className="btn btn-primary">
                                            <i className="las la-user-tie"></i> دخول المعلم
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-0 text-center">
                            <div className="header-center">
                                < M e n u  />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            < H e a d  e r R i g  h t />
                        </div> */}
                    </div>
                </div>
            </header>
        </>
    )
}