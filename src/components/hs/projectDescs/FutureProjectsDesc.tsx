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
                            <b>{`then;again`}</b>:
                            {` This is a game project I'll be working on as part of school! 
                            It's a story-oriented action game about an amnesiac named Callisto who 
                            has a mysterious connection to the previous end of the world, and a god 
                            named Memory who seeks to bring back their dead companion.`}
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
};

export default FutureProjectsDesc;
