'use client'

import Layout from "@/components/layout/Layout";
import Startup_Section1 from '@/components/sections/homepage/Startup/Startup_Section1';
import Startup_Section3 from '@/components/sections/homepage/Startup/Startup_Section3';
import Startup_Section4 from '@/components/sections/homepage/Startup/Startup_Section4';
import Startup_Section5 from '@/components/sections/homepage/Startup/Startup_Section5';
import Pricing_Section from "@/components/sections/homepage/Startup/Pricing_Section";
import Service_Section from "@/components/sections/homepage/Startup/Service_Section";
import Teachers_Section from "@/components/sections/homepage/Startup/Teachers_Section";
import Download_links from "@/components/sections/homepage/Startup/Download_links";
import HeadComponent from "@/components/layout/Header/Head";
export default function Private_Class() {
    const title = "جرب أول عرض لك";
    const content = "لأن خدمات ياسا للحصص الخاصة المجدولة تساعدك في تحسين مستواك التعليمي بحيث تركز على أهم جوانب الضعف لديك وبشكل منظم.";
    return (
        <>
        <HeadComponent title={title}
            content={content}
            />
            <Layout siteContentClass="pt0 pb0">
                  {/* Banner  */}
                <Startup_Section1 />
                  {/* Banner  */}


                  {/* Do you need Yasa*/}
                  <Service_Section />
                  {/* Do you need Yasa*/}

                  {/* Is this like a... */}
                 <Startup_Section5 />
                  {/* Is this like a... */}
                    
                <Startup_Section3 />

                {/* Pricing */}
                {/* <Pricing_Section /> */}
                {/* Pricing */}



                
                <Startup_Section4 />



                <Teachers_Section />

                <Download_links />
                
            </Layout>

        </>
    )
}