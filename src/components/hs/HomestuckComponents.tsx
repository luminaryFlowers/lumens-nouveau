import Image from "next/image";
import oneway from "../../images/anotheroneway.png";
import pfp from "../../images/sunroofhakaido.png";

type HsPageProps = {
    children?: React.ReactNode;
};

export const HsPage: React.FC<HsPageProps> = ({ children }) => {
    return (
        <div className="my-[20px] mx-auto max-w-[970px] bg-bg-page py-7">
            <div className="my-0 mx-auto max-w-[650px] bg-bg-body">
                {children}
            </div>
        </div>
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
                title="Character is Hakaido's Seer from ID:INVADED #BRAKE-BROKEN"
                alt="profile picture"
            />

            <h1 className="m-5 text-center text-[24pt] font-bold">
                luminaryFlowers
            </h1>
            <p>hi</p>
        </>
    );
};
