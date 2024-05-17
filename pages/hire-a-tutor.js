'use client'

import axios from 'axios';
import Head from 'next/head';
import Layout from "@/components/layout/Layout";
import App_Work from "@/components/sections/homepage/Startup/App_Work";
import Hide_A_Tutor_banner from "@/components/sections/homepage/Startup/Hide_A_Tutor_banner";
import Get_From_Webinar from "@/components/sections/homepage/Startup/Get_From_Webinar";
import Getting_Started from "@/components/sections/homepage/Startup/Getting_Started";
import Meet_tutors from "@/components/sections/homepage/Startup/Meet_tutors";
import Section_Faq from "@/components/sections/homepage/Startup/Section_Faq";
import Steps_Section from "@/components/sections/homepage/Startup/Steps_Section";
import Tutor_section from "@/components/sections/homepage/Startup/Tutor_section";
import What_Is_Yasa from "@/components/sections/homepage/Startup/What_Is_Yasa";
import Why_Filo_Tutor from "@/components/sections/homepage/Startup/Why_Filo_Tutor";
import Download_App from "@/components/sections/homepage/Startup/Download_App";
import Hire_A_Tutor_Sec_2 from "@/components/sections/homepage/Startup/Hire_A_Tutor_Sec_2";
import Live_Sessions from "@/components/sections/homepage/Startup/Live_sessions";
import Hire_A_Tutor_Sec_1 from "@/components/sections/homepage/Startup/Hire_A_Tutor_Sec_1";

export default function HireATutor({topicList}) {
    return (
        <>
            <Head>
                <title>اختيار المُعلم</title>
                <meta name="description" content="أكتشف مهارات المُعلمين في الكويت" />
                <meta name="og:title" content="اختيار المُعلم" />
                <meta name="og:description" content="أكتشف مهارات المُعلمين في الكويت" />
            </Head>
            <Layout siteContentClass="pt0 pb0">
                <Hide_A_Tutor_banner />

                <Hire_A_Tutor_Sec_1 />
                
                <Hire_A_Tutor_Sec_2 topicList={topicList} />

                {/* <Live_Sessions /> */}

                <Download_App />

            </Layout>

        </>
    )
}

export async function getStaticProps() {
    const apiUrl = 'https://us-central1-yasa-f94a6.cloudfunctions.net/GetTopicsForYasa';

    let topicList = [];
    try {
        const response = await axios.get(apiUrl)
        topicList =  response.data.Data
    } catch (error) {
        console.log('Error: ', error);
    }
    
    return {
        props: {
            topicList
        },
    };
}