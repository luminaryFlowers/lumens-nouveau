const PestercordNoisesDesc = () => {
    return (
        <>
            <div className="px-[48px]">
                <p className="py-2">
                    {`Pestercord Noises was pretty much exactly what it says on the
                    tin! It was a plugin for BetterDiscord which replaces some
                    Discord noises with Pesterchum noises, made to accompany the
                    Pestercord theme.`}
                </p>

                <p className="py-2">
                    {`Unfortunately, after some updates to Discord and BetterDiscord,
                    the method I'd used to make it was vaporised. I don't really
                    have the time or motivation to get it working again, but if
                    anyone reading this wants to get it up and running again, the
                    source code is readily available for reference!`}
                </p>

                <p className="py-2">
                    {`There were two versions of this: one that changed the call
                    connect/disconnect noises, as well as the message receive
                    noise, and one that changed just the call connect/disconnect
                    noises.`}
                </p>

                <p className="py-2">
                    {`I have no pictures for this project, for reasons you might
                    be able to guess!`}
                </p>

                <p className="py-2">
                    {`This was really very difficult to make because I hadn't done
                    anything like it before. Also because there was no
                    documentation that really helped me. It was me and inspect
                    element and brute force and the head banging wall vs the
                    world.`}
                </p>

                <p className="py-2">
                    {`Unrelated, but I just realised that "[S] Pestercord" would
                    have been a way better name. As of writing this, the plugin 
                    hasn't worked for months and I'm just thinking about this now. 
                    I'm gutted, essentially.`}
                </p>
            </div>
        </>
    );
};

export default PestercordNoisesDesc;
