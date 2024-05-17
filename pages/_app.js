
import '../public/assets/libs/bootstrap/css/bootstrap.min.css';
import '../public/assets/libs/line-awesome/css/line-awesome.min.css';
// import '../public/assets/libs/swiper/swiper-bundle.min.css'

import 'animate.css';
import { useEffect, useState } from "react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../public/assets/css/style-rtl.css';
import '../public/assets/css/filo-style.css'
import Head from 'next/head';
// font-family: 'Rajdhani', sans-serif;   font-family: 'Tajawal', sans-serif;
// import 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap';



export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);
       
    // }, []);
    return (<>
        <div className=''>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <div id="preload" className="preload"><div className="spin"></div></div>
            )}
        </div>
    </>)
}
