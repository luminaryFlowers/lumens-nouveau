import Image from "next/image";
import oneway from "../../images/anotheroneway.png";
import pfp from "../../images/avatars/sunroofhakaido.png";
import { useState } from "react";
import { Chevron } from "../general/Icons";
import PestercordThemeDesc from "./projectDescs/PestercordThemeDesc";
import PestercordNoisesDesc from "./projectDescs/PestercordNoisesDesc";
import VEWebAppsDesc from "./projectDescs/VEWebAppsDesc";
import NiereactDesc from "./projectDescs/NiereactDesc";
import FutureProjectsDesc from "./projectDescs/FutureProjectsDesc";
import Link from "next/link";
import HomestuckPageStyles from "./HomestuckPageStyles";
import ThenAgainDesc from "./projectDescs/ThenAgainDesc";

export const HsLinkHeader = () => {
    return (
        <p className="pt-3 text-center text-white [&>a]:border-b [&>a]:border-b-white [&>a]:pb-[1px]">
            <Link href="/">
                <span>Home</span>
            </Link>
            <span> • </span>
            <Link href="/hs/repsweeps">
                <span>Repsweeps</span>
            </Link>
            <span> • </span>
            <Link href="/hs/etchelizer">
                <span>Etchelizer</span>
            </Link>
            <span> • </span>
            <Link href="/hs/hemospectrum">
                <span>Hemospectrum</span>
            </Link>
            {/* <span> • </span>
                <Link to="/hs/etchtime"><span>Etch Time</span></Link> */}
        </p>
    );
};

export const HsPage: React.FC<HsPageProps> = ({ children }) => {
    return (
        <>
            <HomestuckPageStyles />
            <HsLinkHeader />
            <div className="my-[20px] mx-auto max-w-[970px] bg-bg-page py-7">
                <div className="my-0 mx-auto max-w-[650px] bg-bg-body">
                    {children}
                </div>
            </div>
        </>
    );
};

export const HsIntroChunk = () => {
    return (
        <>
            <Image
                src={oneway}
                alt="banner pic of a train station"
                className="h-[225px] w-full max-w-[650px] object-cover"
            />

            <Image
                src={pfp}
                className="relative mx-auto mt-[-90px] w-[180px] rounded-full shadow-xl"
                title="Character is Dave Strider from Homestuck Beyond Canon"
                alt="profile picture"
            />

            <h1 className="mt-5 text-center text-[24pt] font-bold accent-text">
                luminaryFlowers
            </h1>

            <hr className="mt-1 mb-6 mx-24 border-t-2 border-bg-page" />

            <div className="px-12">
                <p className="text-center">
                    <a
                        href="https://blog.lumens.live/"
                        className="font-bold underline"
                    >
                        BLOG
                    </a>
                    <span> • </span>
                    <a
                        href="https://ko-fi.com/lumens"
                        className="font-bold underline"
                    >
                        KO-FI
                    </a>
                    <span> • </span>
                    <a
                        href="https://github.com/luminaryFlowers"
                        className="font-bold underline"
                    >
                        GITHUB
                    </a>
                </p>

                <p className="mt-2 py-2">
                    {`You can call me Lumen, or LF! I'm a 22 year old guy with a
                    penchant for programming. My pronouns are he/they. I don't
                    use this much capitalization usually.`}
                </p>

                <p className="py-2">
                    {`This is my sort of portfolio/project website, so everything
                    that I work on will be going here! This site was made with NextJS
                    using Typescript.`}
                </p>

                <p className="py-2">
                    {`Later, this Homestuck-themed part of the website will
                    contain only Homestuck-adjacent projects, but I have no clue
                    what I want to do with the rest of the site, so the site
                    will be like this for the foreseeable future!`}
                </p>

                <p className="py-2">
                    {`Therefore, for now, there'll be some non-Homestuck projects
                    here! Ignore them, or don't!`}
                </p>
            </div>
            <div className="pb-[20px]">
                <HsHiderChunk title="then;again" link="/thenagain">
                    <ThenAgainDesc />
                </HsHiderChunk>
                <HsHiderChunk
                    title="Pestercord Theme"
                    link="https://github.com/luminaryFlowers/Pesterchum-Discord-Theme"
                >
                    <PestercordThemeDesc />
                </HsHiderChunk>
                <HsHiderChunk
                    title="Pestercord Noises"
                    link="https://github.com/luminaryFlowers/pestercord-noises"
                >
                    <PestercordNoisesDesc />
                </HsHiderChunk>
                <HsHiderChunk title="Vast Error Web Apps">
                    <VEWebAppsDesc />
                </HsHiderChunk>
                <HsHiderChunk
                    title="NieReact"
                    link="https://luminaryflowers.github.io/niereact/"
                >
                    <NiereactDesc />
                </HsHiderChunk>
                <HsHiderChunk title="Future Plans">
                    <FutureProjectsDesc />
                </HsHiderChunk>
            </div>
        </>
    );
};

export const HsSectionDivider = () => {
    return <hr className="mx-[40px] my-[24px] border-[#757575]" />;
};

export const HsHiderChunk: React.FC<HsProjectChunkProps> = ({
    children,
    link,
    title,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const reverseOpenState = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <HsSectionDivider />

            <h2
                className="my-[10px] cursor-pointer px-[48px] text-[18pt] font-bold"
                onClick={reverseOpenState}
            >
                <Chevron
                    fill="black"
                    size={28}
                    className={!isOpen ? "" : "rotate-180"}
                />{" "}
                {title}
            </h2>

            {isOpen ? (
                <div className="overflow-hidden">
                    {link ? (
                        <p className="px-[48px] py-4">
                            ==&gt;{" "}
                            <a href={link} className="font-bold underline">
                                FIND IT HERE
                            </a>
                        </p>
                    ) : null}
                    {children}
                </div>
            ) : null}
        </>
    );
};
