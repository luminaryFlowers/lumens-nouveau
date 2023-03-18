const FutureProjectsDesc = () => {
    return (
        <>
            <div className="px-[48px]">
                <p className="py-2">
                    {`The homework I get from school means that the amount
                    of projects I can take on, and the progress I can make
                    on them, is pretty limited, but I love doing personal
                    projects!`}
                </p>

                <p className="py-2">
                    {`Below is a list of some things I'd be interested in making!
                    Keep in mind that these are not guaranteed to happen!`}
                    <ul className="list-disc px-10 pt-2">
                        <li>
                            <b>Pestercord Descend</b>:
                            {` I'm actually pretty close to being done this one,
                            but essentially, this is a way to use Pestercord
                            without needing BetterDiscord. This would allow for
                            Pestercord to be used on MacOS and Linux, too,
                            which is not possible with regular Pestercord!`}
                        </li>
                        <li>
                            <b>Emblem of Picking</b>:
                            {` This would be a Fire Emblem Engage project!
                            The goal would be to act as a tool for managing
                            a Fire Emblem Engage PMU. You'd feed it your list
                            for the PMU, and then when you select a chapter or
                            map, it would tell you which units you'll be
                            deploying for that map.`}
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
};

export default FutureProjectsDesc;
