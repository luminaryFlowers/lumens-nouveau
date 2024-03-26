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
                            <b>{`then;again`}</b>:
                            {` I'm working on this right now!!! It's current and 
                            future because it's unreleased.`}
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
};

export default FutureProjectsDesc;
