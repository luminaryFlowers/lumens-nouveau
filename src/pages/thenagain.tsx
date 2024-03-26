import { type NextPage } from "next";
import Head from "next/head";
import { HsPage } from "~/components/hs/HomestuckComponents";
import Image from "next/image";
import adventure from "../images/projects/thenagain/adventurecropped.gif";
import saviour from "../images/projects/thenagain/saviourcropped.gif";
import love from "../images/projects/thenagain/lovecropped.gif";
import recall from "../images/projects/thenagain/recallsample.gif";

const ThenAgain: NextPage = () => {
    return (
        <>
            <Head>
                <title>lumen&apos;s site</title>
                <meta
                    name="description"
                    content="An action RPG about an amnesiac and a god investigating stray memories."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HsPage>
                    <div className="px-[48px] pt-1 pb-10">
                        <h1 className="m-5 text-center text-[24pt] font-bold">
                            then;again
                        </h1>

                        <div className="border-l-2 border-solid border-gray-300 pl-6">
                            <p>
                                <i>{`This is not MY story.`}</i>
                            </p>
                            <p>
                                <i>{`Not anymore.`}</i>
                            </p>
                            <p>
                                <i>{`This is YOUR story.`}</i>
                            </p>
                            <p>
                                <i>{`And your name is...`}</i>
                            </p>
                        </div>

                        <p className="py-6">
                            <b>{`then;again`}</b>
                            {` is an action RPG about an amnesiac and a god investigating stray memories. 
                            It was made as a school project (basically my capstone!), but I'm not releasing
                            it until I'm fully happy with it!!`}
                        </p>

                        <p className="pb-6">
                            {`You'll follow `}
                            <b>{`Callisto`}</b>
                            {` and `}
                            <b>{`Mory`}</b>
                            {` in their journey to uncover the truth behind stray memories that have appeared
                            in the world. And maybe Callisto will regain his memories, in this story that is
                            thematically about memories...? It's definitely possible.`}
                        </p>

                        <Image
                            src={adventure}
                            alt="the game's first boss, adventure"
                            className="inline w-1/3 overflow-hidden object-cover"
                        />
                        <Image
                            src={saviour}
                            alt="the game's second boss, saviour"
                            className="inline w-1/3 overflow-hidden object-cover"
                        />
                        <Image
                            src={love}
                            alt="the game's third boss, love"
                            className="inline w-1/3 overflow-hidden object-cover"
                        />

                        <p className="py-6">
                            {`In then;again, you'll be able to `}
                            <b>{`recall`}</b>
                            {` a memory of your own actions, allowing
                            you to fight enemies and solve puzzles alongside yourself.`}
                        </p>
                        <Image
                            src={recall}
                            alt="a showcase of recall, a primary mechanic of the game"
                            className="w-full"
                        />

                        <p className="pt-6">
                            {`As so many wiser and cooler game developers than me have said, but likely
                            with less exclamation marks: please look forward to it!!!!!!`}
                        </p>
                    </div>
                </HsPage>
            </main>
        </>
    );
};

export default ThenAgain;
