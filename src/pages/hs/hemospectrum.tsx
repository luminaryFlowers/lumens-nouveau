import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { HsPage } from "~/components/hs/HomestuckComponents";
import { COLOURS, CHARACTERS_COLOURS } from "~/extras/hemospectrumStuff";
import { type RGBColor, SketchPicker, HSLColor } from "react-color";

const Hemospectrum: NextPage = () => {
    const [selectedColour, setSelectedColour] = useState<RGBColor>({
        a: 1,
        r: 0,
        g: 0,
        b: 0,
    });
    const [selectedHSL, setSelectedHSL] = useState<HSLColor>({
        a: 1,
        h: 0,
        s: 0,
        l: 0,
    });
    const [noticeColour, setNoticeColour] = useState("#000000");

    const getColourIndex = (hueVal: number) => {
        return Math.floor(((hueVal + 14) % 360) / 30);
    };

    const getSubShadeIndex = (briVal: number) => {
        return Math.min(Math.floor((briVal / 255) * 3), 2);
    };

    const getCharacterElement = (name: string) => {
        return (
            <span key={name}>
                {" ["}

                <a
                    className="font-bold text-black underline"
                    href={`https://wiki.deconreconstruction.com/wiki/${name}`}
                >
                    {name}
                </a>
                {"] "}
            </span>
        );
    };

    const getCharacterList = (list: string[]) => {
        if (!list || !list.length) return null;
        return list.map((name) => getCharacterElement(name));
    };

    const getAndSetSharedCharacters = (subShade: string) => {
        return getCharacterList(CHARACTERS_COLOURS[subShade] as string[]);
    };

    const getInfoBlock = () => {
        const hueVal = selectedHSL.h;
        const brightness = Math.max(
            selectedColour.r,
            selectedColour.g,
            selectedColour.b
        );
        const colour = COLOURS[getColourIndex(hueVal)] as {
            colour: string;
            subShades: string[];
        };
        let message;
        let sharedCharacters;

        try {
            if (
                (colour as { colour: string; subShades: string[] }).colour ===
                    "lime" ||
                noticeColour === "#6c8400"
            ) {
                message = `LIME`;
                if (noticeColour === "#6c8400") {
                    message += ` (true lime!)`;
                    sharedCharacters = getAndSetSharedCharacters("lime");
                } else if (hueVal >= 76 && hueVal <= 89) {
                    const subShade =
                        COLOURS[2]!.subShades[getSubShadeIndex(brightness)];
                    message += ` (rounding down, however, this is YELLOW: ${(
                        subShade as string
                    ).toUpperCase()}!)`;
                    sharedCharacters = getAndSetSharedCharacters(
                        subShade as string
                    );
                } else if (hueVal > 89 && hueVal <= 105) {
                    const subShade =
                        COLOURS[4]!.subShades[getSubShadeIndex(brightness)];
                    message += ` (rounding up, however, this is GREEN: ${(
                        subShade as string
                    ).toUpperCase()}!)`;
                    sharedCharacters = getAndSetSharedCharacters(
                        subShade as string
                    );
                }
            } else if (noticeColour === "#b95c00") {
                message = `BRONZE: CLAY (or: cornsyrup!)`;
                sharedCharacters = getAndSetSharedCharacters("cornsyrup");
            } else {
                const subShade = colour.subShades[getSubShadeIndex(brightness)];
                message = `${colour.colour.toUpperCase()}: ${(
                    subShade as string
                ).toUpperCase()}`;
                sharedCharacters = getAndSetSharedCharacters(
                    subShade as string
                );
            }
        } catch (e) {
            message = `did you set some value out of bounds? im actually mad at you right now`;
            console.log(e);
            sharedCharacters = ``;
        }

        return (
            <span style={{ color: noticeColour, fontWeight: "bold" }}>
                {message}
                <br />
                {sharedCharacters ? (
                    <>
                        Shared by: <br />
                    </>
                ) : null}
                {sharedCharacters}
            </span>
        );
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
                    <div className="px-[48px] pt-1">
                        <h1 className="m-5 text-center text-[24pt] font-bold">
                            Hemospectrum
                        </h1>

                        <p className="py-2">
                            {`This is a tool that tells you what blood caste and
                            subcaste a colour falls under!`}
                        </p>

                        <p className="py-2">
                            {`It's based on the Metatron bot's &gt;+hemo command,
                            from the Vast Error Discord server. It should give
                            essentially the exact same results. If it doesn't:
                            oops! :D`}
                        </p>

                        <p className="py-2">
                            {`Also, it'll tell you what characters from Vast Error
                            share the same subcaste as a picked colour!`}
                        </p>
                    </div>

                    <SketchPicker
                        disableAlpha={true}
                        presetColors={[
                            "#7F0000",
                            "#C44000",
                            "#B95C00",
                            "#B49E18",
                            "#6C8400",
                            "#407D00",
                            "#00A596",
                            "#004696",
                            "#00007F",
                            "#39017F",
                            "#A00078",
                            "#510049",
                            "#039639",
                        ]}
                        color={selectedColour}
                        width="80%"
                        onChangeComplete={(colour) => {
                            setSelectedColour(colour.rgb);
                            setNoticeColour(colour.hex);
                            setSelectedHSL(colour.hsl);
                        }}
                        className="mx-auto my-5"
                    />

                    <p className="pb-8 text-center">{getInfoBlock()}</p>
                </HsPage>
            </main>
        </>
    );
};

export default Hemospectrum;
