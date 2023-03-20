import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const FeEop: NextPage = () => {
    const [unlockedUnits, setUnlockedUnits] = useState<string[]>([]);
    const [deadUnits, setDeadUnits] = useState<string[]>([]);

    return (
        <>
            <Head>
                <title>lumen&apos;s site</title>
                <meta name="description" content="luminaryFlowers' site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main></main>
        </>
    );
};

export default FeEop;
