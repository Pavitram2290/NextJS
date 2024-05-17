// import { Button } from '@/out/assets/libs/bootstrap/js/bootstrap.bundle'
import Link from 'next/link'

export default function HeaderRight() {
    return (
        <>
            <div className="header-right flex flex-align-c flex-content-e header-icon-btns">
                <div className="buttons">
                    <Link href="https://student.getyasa.com/">
                        <button
                            type="button"
                            className="btn btn-dark">
                            <i class="las la-school"></i> دخول الطالب
                        </button>
                    </Link>
                </div>
                <div className="buttons">
                    <Link href="https://tutor.getyasa.com">
                        <button
                            type="button"
                            className="btn btn-primary">
                            <i class="las la-user-tie"></i> دخول المعلم
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}