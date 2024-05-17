

import Head from "next/head"

export default function HeadComponent({title,content}) {
    return (
        <>
            <Head>
            <title>{title}</title>           

            <meta name="description" content={content} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={content} />

            </Head>
        </>
    )
}