import { ImageWithDesc } from "~/components/general/ExtraComponents";
import preview from "../../../images/projects/niereact/preview.png";

const NiereactDesc = () => {
    return (
        <>
            <ImageWithDesc
                image={preview}
                description={"- The tutorial site -"}
                alt={"An image of the tutorial site for NieReact"}
            />

            <div className="px-[48px]">
                <p className="py-2">
                    {`NieReact is a React based website template made to imitate
                    the look of the NieR:Automata menu UI.`}
                </p>

                <p className="py-2">
                    {`I first made a NieR based website a couple years ago, but it
                    kind of sucked to be honest. It was a lot of terrible,
                    barely readable code.`}
                </p>

                <p className="py-2">
                    {`A while later, though, I had learned how to use React
                    decently well, so I rebuilt it with React, with the
                    intention of making it a lot easier to add or remove
                    information.`}
                </p>

                <p className="py-2">
                    {`Thus, NieReact was born! It uses a JS file to essentially
                    store all of the website data, and just fills in the site
                    with whatever's in that file.`}
                </p>

                <p className="py-2">
                    {`The link above will take you to the tutorial site! The site
                    itself uses the template, so it doubles as a sort of preview
                    for what it looks like in action.`}
                </p>
            </div>
        </>
    );
};

export default NiereactDesc;
