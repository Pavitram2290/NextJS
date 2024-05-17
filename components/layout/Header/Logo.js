import Link from 'next/link'

export default function Logo() {
    return (
        <>
            <div className="logo">
                <Link href="/">
                    <img src='/assets/images/filo-images/logo.png' alt='Logo' className='filo-logo' />
                </Link>
            </div>
        </>
    )
}