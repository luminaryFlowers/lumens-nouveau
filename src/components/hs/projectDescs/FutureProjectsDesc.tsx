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
                        {/* <li>
                            <b>Pestercord Descend</b>:
                            {`I'm actually pretty close to being done this one,
                            but essentially, this is a way to use Pestercord
                            without needing BetterDiscord. This would allow for
                            Pestercord to be used on MacOS and Linux, too,
                            which is not possible with regular Pestercord!`}
                        </li> */}
                        <li>
                            <b>Word of Jayden</b>:
                            {` This is a project built to be a resource for BrownDust2.
                            Right now, I'm just planning on making it have a list of
                            characters and their costumes and skills, but I'd like it
                            to be more fleshed out in the future!`}
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
};

export default FutureProjectsDesc;
