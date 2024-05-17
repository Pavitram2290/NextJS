import Head from 'next/head';
import Layout from "@/components/layout/Layout";

import Startup_Section3 from '@/components/sections/homepage/Startup/Startup_Section3';
import Startup_Section4 from '@/components/sections/homepage/Startup/Startup_Section4';
import Startup_Section5 from '@/components/sections/homepage/Startup/Startup_Section5';
import Pricing_Section from "@/components/sections/homepage/Startup/Pricing_Section";
import Service_Section from "@/components/sections/homepage/Startup/Service_Section";
import Teachers_Section from "@/components/sections/homepage/Startup/Teachers_Section";
import Download_links from "@/components/sections/homepage/Startup/Download_links";
import Hide_A_Tutor_banner from "@/components/sections/homepage/Startup/Hide_A_Tutor_banner";


import Home_Banner from "@/components/sections/homepage/Startup/Home_Banner";
import FeedBack from "@/components/sections/homepage/Startup/FeedBack";
import Section_1 from "@/components/sections/homepage/Startup/Section_1";
import Our_Journey from "@/components/sections/homepage/Startup/Our_Journey";
import HowDoesItWork from "@/components/sections/homepage/Startup/HowDoesItWork";
import Download_Link from "@/components/sections/homepage/Startup/Download_Link";
import Download_App from "@/components/sections/homepage/Startup/Download_App";

export default function Index() {

    return (
        <>
             <Head>
                <title>ياسا للطالب</title>
                <meta name="description" content="يمكنكم الوصول المباشر للمُعلمين على مدار الساعة وطوال أيام الأسبوع، في 60 ثانية فقط!" />
                <meta name="og:title" content="اسأل الآن" />
                <meta name="og:description" content="يمكنكم الوصول المباشر للمُعلمين على مدار الساعة وطوال أيام الأسبوع، في 60 ثانية فقط!" />
            </Head>
            <Layout siteContentClass="pt0 pb0">
                <Home_Banner />

                <HowDoesItWork />
                <Hide_A_Tutor_banner />
                <Section_1 />

                {/* <Our_Journey /> */}

                <Teachers_Section />

                

                {/* <FeedBack /> */}
                
                {/* <Download_App /> */}
                <Startup_Section4 />
                
            </Layout>

        </>
    )
}