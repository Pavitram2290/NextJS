import Head from 'next/head';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "ياسا"}
                </title>
                <meta name="description" content="يمكنكم الوصول المباشر للمُعلمين على مدار الساعة وطوال أيام الأسبوع، في 60 ثانية فقط!" />
                <meta name="og:title" content="اسأل الآن" />
                <meta name="og:description" content="يمكنكم الوصول المباشر للمُعلمين على مدار الساعة وطوال أيام الأسبوع، في 60 ثانية فقط!" />
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
                    rel="stylesheet"
                /> */}
            </Head>
            
        </>
    );
};

export default PageHead;