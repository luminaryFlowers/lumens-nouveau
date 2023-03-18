import { NextPage } from "next";
import Head from "next/head";
import { HsPage } from "~/components/hs/HomestuckComponents";
import { useState } from "react";

const Repsweeps: NextPage = () => {
    const [years, setYears] = useState(0);
    const [sweeps, setSweeps] = useState(0);

    const sweepsChange = (n: number) => {
        setSweeps(n);
        setYears(Math.round(n * 2.23 * 100) / 100);
    };

    const yearsChange = (n: number) => {
        setYears(n);
        setSweeps(Math.round((n / 2.23) * 100) / 100);
    };

    return (
        <>
            <Head>
                <title>lumen&apos;s site</title>
                <meta name="description" content="luminaryFlowers' site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HsPage>
                    <div className="px-[48px] pt-1 pb-10">
                        <h1 className="m-5 text-center text-[24pt] font-bold">
                            Repsweeps
                        </h1>

                        <p>
                            {`This is a simple tool to convert Repitonian sweeps
                            (from Vast Error) into Earth years. Per `}
                            <a
                                className="underline"
                                href="https://twitter.com/deconrecon_/status/1345556989875806210"
                            >
                                this tweet
                            </a>
                            {`, a Repitonian sweep is 2.23 Earth years.`}
                        </p>

                        <div className="inline-block w-1/2 text-center">
                            <h2 className="my-[10px] cursor-pointer px-[48px] text-[16pt] font-bold">
                                Years
                            </h2>
                            <input
                                type="number"
                                className="rounded-sm border-[1px] border-gray-400 py-1 px-2 text-center text-[11pt]"
                                placeholder="Enter years"
                                value={years}
                                onChange={(e) => {
                                    yearsChange(parseFloat(e.target.value));
                                }}
                            />
                        </div>

                        <div className="inline-block w-1/2 text-center">
                            <h2 className="my-[10px] cursor-pointer px-[48px] text-[16pt] font-bold">
                                Sweeps
                            </h2>
                            <input
                                type="number"
                                className="rounded-sm border-[1px] border-gray-400 py-1 px-2 text-center text-[11pt]"
                                placeholder="Enter sweeps"
                                value={sweeps}
                                onChange={(e) => {
                                    sweepsChange(parseFloat(e.target.value));
                                }}
                            />
                        </div>
                    </div>
                </HsPage>
            </main>
        </>
    );
};

export default Repsweeps;
