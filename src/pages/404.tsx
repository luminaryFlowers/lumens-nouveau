import { NextPage } from "next";
import Head from "next/head";
import { HsPage } from "~/components/hs/HomestuckComponents";
import rapture from "../images/rapture.gif";
import Image from "next/image";

const NotFound: NextPage = () => {
    return (
        <>
            <Head>
                <title>lumen&apos;s site</title>
                <meta name="description" content="luminaryFlowers' site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HsPage>
                    <Image
                        src={rapture}
                        alt="a gif of a cat"
                        className="h-[200px] w-full max-w-[650px] object-cover"
                    />
                    <p className="py-8 px-[48px]">
                        {`uh oh... this page doesn't exist..!!!!`}
                    </p>
                </HsPage>
            </main>
        </>
    );
};

export default NotFound;
