'use client'

import Head from 'next/head';
import Layout from "@/components/layout/Layout";
import App_Work from "@/components/sections/homepage/Startup/App_Work";
import Become_Tutor_Section from "@/components/sections/homepage/Startup/Become_Tutor_Section";
import Get_From_Webinar from "@/components/sections/homepage/Startup/Get_From_Webinar";
import Getting_Started from "@/components/sections/homepage/Startup/Getting_Started";
import Meet_tutors from "@/components/sections/homepage/Startup/Meet_tutors";
import Section_Faq from "@/components/sections/homepage/Startup/Section_Faq";
import Steps_Section from "@/components/sections/homepage/Startup/Steps_Section";
import Tutor_section from "@/components/sections/homepage/Startup/Tutor_section";
import What_Is_Yasa from "@/components/sections/homepage/Startup/What_Is_Yasa";
import Why_Filo_Tutor from "@/components/sections/homepage/Startup/Why_Filo_Tutor";
import HeadComponent from "@/components/layout/Header/Head";

export default function Index() {

    const title = "انضم إلينا (كمعلم)";
    const content = "انضم الى فريق مُعلمين ياسا المميزين حيث يمكن أن يزدهر شغفك بالتعليم من خلال التعاون المشترك مع فريق عمل ياسا على إلهام الطلبة وتمكينهم من الوصول الى أقصى درجات الفهم والادراك المعرفي.";


    return (
        <>
            <HeadComponent title={title}
            content={content}
            />
            <Layout siteContentClass="pt0 pb0">
                <Become_Tutor_Section />
                <What_Is_Yasa />

                <Get_From_Webinar />

                <Getting_Started />

                <Steps_Section />
                
                <App_Work />



                <Why_Filo_Tutor />

                <Section_Faq />




                {/* <Meet_tutors />


                <Tutor_section />

                 */}

                
            </Layout>

        </>
    )
}