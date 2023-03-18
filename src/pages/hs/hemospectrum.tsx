import { type NextPage } from "next";
import Head from "next/head";
import { HsPage } from "~/components/hs/HomestuckComponents";

const Hemospectrum: NextPage = () => {
    return (
        <>
            <Head>
                <title>lumen&apos;s site</title>
                <meta name="description" content="luminaryFlowers' site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HsPage>{`hemospectrum page`}</HsPage>
            </main>
        </>
    );
};

export default Hemospectrum;
