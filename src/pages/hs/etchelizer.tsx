import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
    EtchelizerCustomSymbols,
    EtchelizerDisplay,
    EtchelizerSymbolSelector,
} from "~/components/hs/EtchelizerComponents";
import { HsPage } from "~/components/hs/HomestuckComponents";
import { EtchelizerPatterns, AllSides } from "~/extras/etchelizerPatterns";

const Etchelizer: NextPage = () => {
    const [selectedLines, setSelectedLines] = useState<string[]>([]);
    const [customPattern, setCustomPattern] = useState<{
        name: string;
        pattern: string[];
    }>();

    const compareArrays = (array1: string[], array2: string[]) => {
        if (array1.length !== array2.length) return false;

        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) return false;
        }

        return true;
    };

    const getPatternFromSelected = () => {
        if (
            customPattern &&
            compareArrays(customPattern.pattern, selectedLines)
        ) {
            return `[${customPattern.name}]`;
        }

        for (let i = 0; i < EtchelizerPatterns.length; i++) {
            if (
                compareArrays(
                    (
                        EtchelizerPatterns[i] as {
                            name: string;
                            pattern: string[];
                        }
                    ).pattern,
                    selectedLines
                )
            ) {
                return (
                    EtchelizerPatterns[i] as { name: string; pattern: string[] }
                ).name;
            }
        }

        return "NO MATCH";
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
                    <div className="px-[48px]">
                        <h1 className="pt-6 pb-3 text-center text-[24pt] font-bold">
                            Etchelizer
                        </h1>

                        <p className="py-2">
                            {`This is a working etchelizer from Vast Error! It's
                            used for alchemy. Symbols that are entered are part
                            of the `}
                            <a
                                className="underline"
                                href="https://wiki.deconreconstruction.com/wiki/Narayan_Code"
                            >
                                Narayan Code
                            </a>
                            .
                        </p>

                        <p className="py-2">
                            {`When you enter any valid symbol that's part of the
                            Narayan Code, it'll tell you which you've entered!
                            Keep in mind that I might have messed up when
                            entering them, though!`}
                        </p>

                        <p className="pt-2 pb-5 text-center">
                            <span
                                className="cursor-pointer font-bold underline"
                                onClick={() => setSelectedLines(AllSides)}
                            >
                                Select All
                            </span>
                            <span> • </span>
                            <span
                                className="cursor-pointer font-bold underline"
                                onClick={() => setSelectedLines([])}
                            >
                                Deselect All
                            </span>
                        </p>

                        <EtchelizerDisplay
                            selectedLines={selectedLines}
                            setSelectedLines={setSelectedLines}
                        />

                        <h2 className="text-center text-[16pt] font-bold">
                            {getPatternFromSelected()}
                        </h2>
                    </div>

                    <div className="pb-[20px]">
                        <EtchelizerSymbolSelector
                            selectedLines={selectedLines}
                            setSelectedLines={setSelectedLines}
                        />

                        <EtchelizerCustomSymbols
                            selectedLines={selectedLines}
                            setSelectedLines={setSelectedLines}
                            setCustomPattern={setCustomPattern}
                        />
                    </div>
                </HsPage>
            </main>
        </>
    );
};

export default Etchelizer;
