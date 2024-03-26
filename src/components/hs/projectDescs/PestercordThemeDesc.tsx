import { ImageWithDesc } from "~/components/general/ExtraComponents";
import display from "../../../images/projects/pestercord/display.png";

const PestercordThemeDesc = () => {
    return (
        <>
            <ImageWithDesc
                image={display}
                alt={"A picture of the Pestercord display"}
                description={"- The Pestercord display (light mode) -"}
            />

            <div className="px-[48px]">
                <p className="py-2">
                    {`Pestercord is a BetterDiscord theme made to emulate the
                    interface of Pesterchum! Its original creator, winterClover,
                    created it in June of 2020. However, they stopped working on
                    it in May of 2021, and with later updates of Discord, the
                    theme eventually stopped working.`}
                </p>

                <p className="py-2">
                    {`A little bit before 2022's 4/13, a friend of mine told me
                    about the theme, and I was very interested in it, so I
                    forked the project and got to work updating and fixing it in
                    time for Homestuck Day!`}
                </p>

                <p className="py-2">
                    {`The 4/13/2022 edition of Pestercord fixed the issues that
                    were causing the theme to break, and also features some fun
                    extras, like Pesterchum themed user profiles, dark mode
                    support, and instances of "User" or "Friend" being changed
                    to "Chum" (among other things)!`}
                </p>

                <p className="py-2">
                    <b>{`UPD8`}</b>
                    {`: I got too busy with school and couldn't find time to
                    continue to update it, but `}
                    <a
                        href="https://github.com/Saltssaumure"
                        className="underline"
                    >{`Saltssaumure`}</a>
                    {` on GitHub has taken up the torch!! Check out their new fork `}
                    <a
                        href="https://github.com/MiniDiscordThemes/Pesterchum"
                        className="underline"
                    >{`here`}</a>
                    {`!!`}
                </p>

                <p className="py-2">
                    {`(special thank you to adi for giving me ideas and also
                    sending me the original pestercord!!)`}
                </p>
            </div>
        </>
    );
};

export default PestercordThemeDesc;
