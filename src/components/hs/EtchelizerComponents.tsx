import { useState } from "react";
import { AllSides, EtchelizerPatterns } from "~/extras/etchelizerPatterns";
import { HsHiderChunk } from "./HomestuckComponents";
import { Fragment } from "react";

type EtchelizerGenProps = {
    selectedLines: string[];
    setSelectedLines: (a: string[]) => void;
};

type EtchelizerCSProps = {
    selectedLines: string[];
    setSelectedLines: (a: string[]) => void;
    setCustomPattern: (a: { name: string; pattern: string[] }) => void;
};

export const EtchelizerSymbolSelector: React.FC<EtchelizerGenProps> = ({
    setSelectedLines,
}) => {
    const sortedPatterns = EtchelizerPatterns.map((pattern) => pattern.name);
    sortedPatterns.sort();

    const getListFromName = (patternName: string) => {
        for (let i = 0; i < EtchelizerPatterns.length; i++) {
            if (
                (EtchelizerPatterns[i] as { name: string; pattern: string[] })
                    .name === patternName
            )
                return (
                    EtchelizerPatterns[i] as { name: string; pattern: string[] }
                ).pattern.slice();
        }

        return [];
    };

    return (
        <>
            <HsHiderChunk title="Known Symbols">
                <p className="px-[48px] text-center font-bold leading-[2] [&>span]:cursor-pointer [&>span]:underline">
                    {sortedPatterns.map((pattern) => {
                        return (
                            <Fragment key={pattern}>
                                <> &nbsp;</>
                                <span
                                    onClick={() =>
                                        setSelectedLines(
                                            getListFromName(pattern)
                                        )
                                    }
                                >
                                    {pattern}
                                </span>
                                <>&nbsp; </>
                            </Fragment>
                        );
                    })}
                </p>
            </HsHiderChunk>
        </>
    );
};

export const EtchelizerCustomSymbols: React.FC<EtchelizerCSProps> = ({
    selectedLines,
    setSelectedLines,
    setCustomPattern,
}) => {
    const [currentCode, setCurrentCode] = useState("");
    const [inputCode, setInputCode] = useState("");
    const [inputName, setInputName] = useState("");
    const [errorShown, setErrorShown] = useState(false);

    const convertSymbolToCode = () => {
        let codeString = "";

        for (let i = 0; i < selectedLines.length; i++) {
            codeString += String.fromCharCode(
                AllSides.indexOf(selectedLines[i] as string) + 65
            );
        }

        return codeString;
    };

    const getPatternFromCode = (code: string) => {
        const symbolList: string[] = [];

        for (let i = 0; i < code.length; i++) {
            if (
                code.charCodeAt(i) - 65 < AllSides.length &&
                code.charCodeAt(i) >= 0
            )
                symbolList.push(AllSides[code.charCodeAt(i) - 65] as string);
        }

        return symbolList;
    };

    const importCode = (code: string) => {
        try {
            const splitCode: string[] = code.split("|");
            let name = "";
            let pattern: string[] = [];

            if (splitCode.length > 1) {
                name = splitCode[0] as string;
                pattern = getPatternFromCode(splitCode[1] as string);
            } else {
                pattern = getPatternFromCode(splitCode[0] as string);
            }

            setCustomPattern({
                name: name ? name : "UNNAMED PATTERN",
                pattern: pattern,
            });
            setInputName(name);
            setCurrentCode(code);
            setSelectedLines(pattern.slice());

            setErrorShown(false);
        } catch (e) {
            setErrorShown(true);
        }
    };

    return (
        <>
            <HsHiderChunk title="Custom Symbol">
                <div className="px-[48px] pb-4">
                    <p className="py-2">
                        {`Here, you can save a symbol, or use symbols that other
                        people have made! Once you've filled in a symbol that
                        you're satisfied with, simply give it a name (or don't!)
                        and press "set". That'll give you a code that you can
                        save or share!`}
                    </p>

                    <p className="py-2">
                        {`Or, if you've already got a code, you can put it into
                        the "import code" section and press "go" to import it.`}
                    </p>

                    <p className="py-2 text-center">
                        <b>IMPORT CODE</b>
                        <br />
                        <input
                            className="border-1 rounded-sm border border-gray-400 py-0.5 px-1"
                            type="text"
                            placeholder="Symbol Code"
                            value={inputCode}
                            onChange={(e) => setInputCode(e.target.value)}
                        />
                        <br />
                        <span
                            className="cursor-pointer font-bold underline"
                            onClick={() => importCode(inputCode)}
                        >
                            Go
                        </span>
                        <> • </>
                        <span
                            className="cursor-pointer font-bold underline"
                            onClick={() => setInputCode("")}
                        >
                            Clear
                        </span>
                        {errorShown ? <p>Could not import code.</p> : null}
                    </p>

                    <p className="py-2 text-center">
                        <b>NAME SYMBOL</b>
                        <br />
                        <input
                            className="border-1 rounded-sm border border-gray-400 py-0.5 px-1"
                            type="text"
                            placeholder="Symbol Name"
                            value={inputName}
                            onChange={(e) =>
                                e.target.value.includes("|") ||
                                e.target.value.length > 20
                                    ? null
                                    : setInputName(e.target.value)
                            }
                        />
                        <br />
                        <span
                            className="cursor-pointer font-bold underline"
                            onClick={() => {
                                const code = `${
                                    inputName ? `${inputName}|` : ""
                                }${convertSymbolToCode()}`;
                                setCurrentCode(code);
                                importCode(code);
                            }}
                        >
                            Set
                        </span>
                    </p>

                    <p className="py-2 text-center">
                        <b>CURRENT CODE</b>
                        <br />
                        {currentCode ? currentCode : "NO CODE"}
                    </p>
                </div>
            </HsHiderChunk>
        </>
    );
};

export const EtchelizerDisplay: React.FC<EtchelizerGenProps> = ({
    selectedLines,
    setSelectedLines,
}) => {
    const SELECTED_COLOUR = "#68DE1C";
    const DESELECTED_COLOUR = "rgba(0,0,0,0.1)";

    const selDeselLine = (lineName: string) => {
        const index = selectedLines.indexOf(lineName);

        if (index > -1) {
            selectedLines.splice(index, 1);
        } else {
            selectedLines.push(lineName);
        }

        selectedLines.sort();

        setSelectedLines(selectedLines.slice());
    };

    const getColour = (lineName: string) => {
        return selectedLines.includes(lineName)
            ? SELECTED_COLOUR
            : DESELECTED_COLOUR;
    };

    return (
        <svg
            width="60%"
            height="100%"
            viewBox="0 0 61.531762 59.211358"
            version="1.1"
            id="etchelizer-svg"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="crispEdges"
            className="mx-auto"
        >
            <defs id="defs2" />
            <g id="layer1">
                <path
                    style={{
                        fill: getColour("etch-main-top"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-main-top")}
                    d="m 10.087987,9.3664217 c 0,-0.602675 3.113973,-3.395556 4.645919,-4.166864 2.21249,-1.113949 5.739719,-2.547541 8.062762,-3.276994 1.843346,-0.578824 2.392205,-0.619657 8.193401,-0.609556 5.956496,0.01037 6.328856,0.04152 8.863536,0.74138 3.11684,0.860608 4.7716,1.581727 7.42604,3.236167 1.78802,1.114424 3.74845,2.916996 3.47254,3.192913 -0.0628,0.06284 -1.11198,-0.415224 -2.33142,-1.062368 -3.02489,-1.60528 -6.34732,-2.948684 -8.56383,-3.462726 -2.73182,-0.633553 -9.986418,-1.27483 -12.571032,-1.111229 -3.944547,0.249683 -11.56239,2.943078 -14.833214,5.244491 -2.194702,1.544234 -2.364702,1.635879 -2.364702,1.274786 z"
                    id="etch-main-top"
                />
                <path
                    style={{
                        fill: getColour("etch-main-left"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-main-left")}
                    d="m 8.8973621,49.27861 c -1.265289,-0.70275 -3.556918,-3.63962 -4.829917,-6.18985 -0.440659,-0.88278 -1.198839,-3.08543 -1.684845,-4.89479 -0.840529,-3.12921 -0.883282,-3.50922 -0.876168,-7.78765 0.0077,-4.62341 0.274948,-6.44561 1.649266,-11.244793 1.117483,-3.9023 4.426202,-8.73125 5.982518,-8.73125 0.297043,0 -0.03984,0.666195 -1.137897,2.25021 -1.804817,2.60356 -4.083209,7.871903 -4.523842,10.460503 -0.160006,0.93999 -0.35604,3.79267 -0.435631,6.33928 -0.141127,4.51559 -0.125072,4.70655 0.648547,7.71385 0.981738,3.81633 2.397366,6.84731 4.510952,9.65833 1.9217999,2.55595 2.1099729,3.21093 0.697017,2.42616 z"
                    id="etch-main-left"
                />
                <path
                    style={{
                        fill: getColour("etch-main-right"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-main-right")}
                    d="m 52.212816,49.25791 c 3.070754,-3.77965 4.569454,-6.7656 5.477914,-10.91406 0.63318,-2.89135 1.17381,-8.83063 0.93795,-10.30414 -0.96457,-6.02609 -3.67542,-13.202653 -6.130914,-16.230637 -1.02827,-1.268016 -1.451311,-2.1062513 -0.93635,-1.8553463 1.23799,0.6031803 1.72737,1.0621033 2.996814,2.8103023 1.72197,2.371388 3.95405,7.419861 4.79522,10.845721 0.4713,1.91946 0.56717,3.12802 0.58114,7.32576 0.0158,4.7369 -0.027,5.18745 -0.74082,7.80521 -1.01168,3.71011 -2.41692,6.62794 -4.24403,8.8123 -1.36181,1.62808 -2.810094,2.82576 -3.420194,2.82838 -0.12667,5.3e-4 0.1808,-0.50503 0.68327,-1.12349 z"
                    id="etch-main-right"
                />
                <path
                    style={{
                        fill: getColour("etch-main-bottom"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-main-bottom")}
                    d="m 26.147269,57.09306 c -0.06264,-0.0626 -0.992932,-0.22334 -2.067316,-0.35711 -1.074384,-0.13376 -2.397325,-0.30916 -2.93987,-0.38977 -1.52139,-0.22605 -5.827845,-1.83895 -7.673514,-2.87397 -1.708578,-0.95814 -3.339534,-2.42332 -3.03571,-2.72714 0.0946,-0.0946 1.157485,0.31272 2.361962,0.90515 6.256415,3.07729 8.580903,3.76791 13.434749,3.99155 4.937729,0.22751 12.861335,-0.29142 15.081245,-0.9877 0.94589,-0.29668 2.36121,-0.73808 3.14517,-0.98089 1.47283,-0.45616 5.20246,-2.35497 5.46729,-2.78347 0.23047,-0.37291 0.64796,-0.28793 0.64796,0.1319 0,1.01398 -5.43366,4.01551 -8.86354,4.89618 -3.23327,0.83018 -7.92177,1.35069 -11.875159,1.31835 -1.963155,-0.0161 -3.620627,-0.0804 -3.683267,-0.14308 z"
                    id="etch-main-bottom"
                />

                <path
                    style={{
                        fill: getColour("etch-tr-top"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-tr-top")}
                    d="m 30.725489,11.449744 c 0,-0.166914 0.41176,-0.805975 0.91501,-1.420137 1.325746,-1.6178983 4.236536,-3.0134853 6.976016,-3.3446763 3.03888,-0.367386 6.53376,0.05948 8.28339,1.011747 1.62999,0.887156 3.66933,2.6395193 3.66933,3.1529903 0,0.205914 -0.0344,0.374389 -0.0764,0.374389 -0.19219,0 -2.0148,-1.003292 -2.71598,-1.4950643 -2.55039,-1.788727 -7.55781,-2.345665 -11.01117,-1.22469 -2.3102,0.749897 -4.16565,1.7076623 -4.961886,2.5612723 -0.68613,0.735565 -1.07836,0.875298 -1.07836,0.384169 z"
                    id="etch-tr-top"
                />
                <path
                    style={{
                        fill: getColour("etch-tr-left"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-tr-left")}
                    d="m 30.002491,28.78302 c -1.691367,-2.21891 -1.998334,-2.7831 -2.61667,-4.80931 -0.576826,-1.89019 -0.645984,-2.48513 -0.492094,-4.233333 0.35996,-4.08916 1.199116,-6.383855 2.59932,-7.107929 0.736086,-0.380646 0.769175,-0.375751 0.58261,0.08619 -1.421194,3.518919 -1.544217,4.015739 -1.668341,6.737339 -0.141251,3.097183 -0.0083,3.718743 1.447924,6.766663 0.533387,1.11643 0.873349,2.19773 0.823269,2.61853 l -0.0853,0.71679 z"
                    id="etch-tr-left"
                />
                <path
                    style={{
                        fill: getColour("etch-tr-right"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-tr-right")}
                    d="m 50.833815,29.04932 c 0,-0.23702 0.43039,-0.90734 0.956421,-1.4896 0.52604,-0.58226 1.26284,-1.72778 1.63735,-2.54561 0.606484,-1.3244 0.676824,-1.79401 0.643484,-4.29563 -0.0417,-3.129093 -0.46245,-4.443973 -2.286844,-7.146777 -0.824501,-1.221479 -0.894561,-1.435321 -0.497551,-1.518848 0.625341,-0.131567 2.038311,1.545477 2.977665,3.534162 2.22254,4.705303 1.49299,10.382173 -1.653914,12.869653 -1.421781,1.12385 -1.776611,1.24222 -1.776611,0.59265 z"
                    id="etch-tr-right"
                />
                <path
                    style={{
                        fill: getColour("etch-tr-bottom"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-tr-bottom")}
                    d="m 38.251125,33.71636 c -0.88136,-0.12322 -1.96807,-0.3826 -2.4149,-0.5764 -1.57419,-0.68276 -4.273356,-3.39507 -3.37862,-3.39507 0.0795,0 1.0618,0.52873 2.18281,1.17496 2.33836,1.348 3.67906,1.71988 6.23326,1.72899 2.08158,0.007 5.68094,-0.97634 7.10294,-1.94133 1.94894,-1.32259 3.09493,-0.92152 1.44419,0.50544 -0.53605,0.46338 -1.89593,1.23498 -3.02196,1.71468 -1.68889,0.71947 -2.44105,0.88447 -4.29628,0.94246 -1.23693,0.0387 -2.97007,-0.0305 -3.85144,-0.15373 z"
                    id="etch-tr-bottom"
                />

                <path
                    style={{
                        fill: getColour("etch-tl-top"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-tl-top")}
                    d="m 28.102079,10.65279 c -0.933551,-0.584901 -1.886051,-1.0999313 -2.116667,-1.1445123 -0.230615,-0.04458 -0.836019,-0.257797 -1.345342,-0.473814 -3.776456,-1.60169 -7.703448,-1.297025 -11.555119,0.896474 -0.753344,0.4290243 -1.438103,0.6670823 -1.523123,0.5295173 -0.30932,-0.5004913 1.2584,-1.8960303 3.217861,-2.8644493 1.849354,-0.914 2.220008,-0.999789 4.719367,-1.092308 2.91034,-0.107733 4.214122,0.172818 6.860806,1.476325 1.409779,0.694325 3.836458,2.8655033 3.836458,3.4325253 0,0.495702 -0.214797,0.417777 -2.094241,-0.759758 z"
                    id="etch-tl-top"
                />
                <path
                    style={{
                        fill: getColour("etch-tl-left"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-tl-left")}
                    d="m 9.9169581,29.41369 c -1.098692,-1.25199 -2.969853,-5.1304 -3.272266,-6.78252 -0.711106,-3.884853 0.243787,-7.738023 2.558131,-10.32253 1.6256689,-1.815439 1.8473689,-1.261888 0.465333,1.161862 -1.371989,2.406135 -1.698035,3.750365 -1.693972,6.983938 0.0039,3.06469 0.596921,4.95173 2.3793459,7.57066 1.455173,2.13809 1.129677,3.17339 -0.4365719,1.38859 z"
                    id="etch-tl-left"
                />
                <path
                    style={{
                        fill: getColour("etch-tl-right"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-tl-right")}
                    d="m 31.259729,28.93128 c -0.003,-0.37471 0.4281,-1.92252 0.95753,-3.43958 1.652936,-4.73642 1.550846,-8.660063 -0.30554,-11.742901 -1.06333,-1.765825 -0.67308,-1.90968 0.882016,-0.325142 1.58402,1.614 2.1645,3.31081 2.16753,6.33602 0.002,2.136073 -0.11738,2.781893 -0.94719,5.117763 -0.61399,1.72832 -1.26771,3.03761 -1.849456,3.70416 -0.87769,1.00562 -0.89994,1.01421 -0.90489,0.34968 z"
                    id="etch-tl-right"
                />
                <path
                    style={{
                        fill: getColour("etch-tl-bottom"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-tl-bottom")}
                    d="m 15.874286,33.49092 c -2.087325,-0.54598 -3.934216,-1.68135 -3.934216,-2.41856 0,-0.57232 0.331855,-0.51489 1.719792,0.29764 1.413031,0.82722 3.819114,1.2853 6.751089,1.2853 3.280128,0 5.004177,-0.4768 7.67447,-2.12245 1.347565,-0.83048 1.732658,-0.96927 1.801188,-0.64916 0.125053,0.58416 -2.767375,3.2444 -3.897698,3.58482 -0.523581,0.15769 -2.618841,0.33048 -4.656133,0.38399 -2.905828,0.0763 -4.082266,-0.002 -5.458492,-0.36158 z"
                    id="etch-tl-bottom"
                />

                <path
                    style={{
                        fill: getColour("etch-br-top"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-br-top")}
                    d="m 32.312985,29.24806 c 0,-0.53973 2.98324,-2.67991 4.31784,-3.09762 1.88849,-0.59107 5.0628,-0.76445 7.19568,-0.39303 2.12314,0.36973 5.15801,1.82868 5.78062,2.77892 0.60397,0.92177 0.1658,0.89791 -1.98475,-0.10809 -1.93315,-0.9043 -5.24914,-1.46041 -7.2396,-1.21412 -2.69268,0.33319 -5.53834,1.01129 -6.1989,1.47715 -0.8637,0.60914 -1.87089,0.90888 -1.87089,0.55679 z"
                    id="etch-br-top"
                />
                <path
                    style={{
                        fill: getColour("etch-br-left"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-br-left")}
                    d="m 29.946847,47.04718 c -0.985512,-0.82925 -1.893128,-2.33575 -2.677273,-4.44384 -0.495836,-1.33301 -0.559898,-1.91336 -0.438095,-3.96875 0.08386,-1.41504 0.371801,-3.06324 0.698518,-3.99833 0.547936,-1.56824 2.674673,-4.62682 3.217192,-4.62682 0.3716,0 0.0581,0.94471 -0.70116,2.1132 -1.173142,1.80534 -1.968643,7.02658 -1.424401,9.34898 0.30394,1.29697 0.532448,1.83089 2.001861,4.6774 0.94342,1.82759 0.74342,2.09307 -0.676642,0.89816 z"
                    id="etch-br-left"
                />
                <path
                    style={{
                        fill: getColour("etch-br-right"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-br-right")}
                    d="m 49.677615,49.11515 c -0.071,-0.11489 0.23469,-0.73996 0.67932,-1.38907 0.44462,-0.6491 1.172061,-1.95409 1.616541,-2.89997 0.74272,-1.58059 0.81732,-1.99921 0.92164,-5.17175 0.12661,-3.85026 -0.25215,-5.99061 -1.40964,-7.96572 -0.771321,-1.31615 -0.816251,-1.67438 -0.188641,-1.50384 0.804221,0.21853 2.185491,2.3514 2.740065,4.23103 0.69421,2.35295 0.9478,6.6856 0.50244,8.58444 -0.42091,1.79461 -1.902064,4.24559 -3.276735,5.42225 -1.08656,0.93005 -1.36346,1.05106 -1.58499,0.69263 z"
                    id="etch-br-right"
                />
                <path
                    style={{
                        fill: getColour("etch-br-bottom"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-br-bottom")}
                    d="m 38.941945,52.46285 c -0.79245,-0.13141 -2.065,-0.53421 -2.82788,-0.89511 -0.76289,-0.3609 -1.50281,-0.65619 -1.64427,-0.65619 -0.44337,0 -2.973846,-2.12952 -2.822146,-2.37497 0.0794,-0.1284 1.243786,0.28236 2.587616,0.91279 4.29644,2.01559 8.67866,2.25517 12.38687,0.67718 2.14251,-0.91172 2.3596,-0.95069 2.3596,-0.42364 0,0.68236 -3.10199,2.53156 -4.24662,2.53156 -0.26656,0 -0.55824,0.11906 -0.64817,0.26458 -0.19613,0.31734 -3.13784,0.29664 -5.145,-0.0362 z"
                    id="etch-br-bottom"
                />

                <path
                    style={{
                        fill: getColour("etch-bl-top"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-bl-top")}
                    d="m 11.822684,29.50439 c -0.184784,-0.29899 1.181146,-1.46865 2.502013,-2.1425 3.687536,-1.88124 13.051615,-0.98457 15.066049,1.44268 0.590825,0.7119 0.06287,0.80595 -1.167824,0.20803 -2.229182,-1.08302 -4.145786,-1.4136 -7.22429,-1.24607 -3.992408,0.21727 -6.036223,0.58293 -7.442443,1.33152 -1.34471,0.71584 -1.517231,0.75628 -1.733505,0.40634 z"
                    id="etch-bl-top"
                />
                <path
                    style={{
                        fill: getColour("etch-bl-left"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-bl-left")}
                    d="m 9.7739121,48.11872 c -4.140639,-4.14064 -4.537877,-10.56597 -0.947641,-15.3281 0.766704,-1.01696 1.6023669,-1.8889 1.8570279,-1.93763 0.672971,-0.12877 0.582011,0.19026 -0.555428,1.94811 -1.5748519,2.43386 -2.0271559,4.04076 -2.0069829,7.13022 0.01092,1.67209 0.165106,3.04566 0.418955,3.73223 0.39796,1.07635 1.9547199,3.91827 2.7746089,5.06516 0.783101,1.09543 -0.240378,0.69017 -1.5405399,-0.60999 z"
                    id="etch-bl-left"
                />
                <path
                    style={{
                        fill: getColour("etch-bl-right"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-bl-right")}
                    d="m 31.660779,47.4869 c -0.0873,-0.1413 0.19719,-1.36333 0.632256,-2.71562 0.43561,-1.35392 0.80625,-3.11259 0.82488,-3.91392 0.0508,-2.18401 -0.863296,-7.72311 -1.589826,-9.63401 -0.35125,-0.92386 -0.22969,-1.08613 0.51503,-0.68757 0.852046,0.456 1.574946,2.42611 2.136886,5.82366 0.63306,3.82752 0.63178,4.06399 -0.0374,6.91444 -0.42032,1.79037 -0.76249,2.60211 -1.43733,3.40984 -0.487126,0.58305 -0.957146,0.94448 -1.044466,0.80318 z"
                    id="etch-bl-right"
                />
                <path
                    style={{
                        fill: getColour("etch-bl-bottom"),
                        strokeWidth: 0.264583,
                    }}
                    onClick={() => selDeselLine("etch-bl-bottom")}
                    d="m 20.67132,53.53407 c -0.945885,-0.0893 -2.61276,-0.43255 -3.704167,-0.76284 -3.02066,-0.91411 -6.274837,-3.18316 -4.564062,-3.18238 0.254661,1.1e-4 1.236927,0.36915 2.182812,0.82009 1.756751,0.8375 5.890475,1.82553 7.637669,1.82553 1.481991,0 4.817445,-1.01364 5.856081,-1.77965 0.509323,-0.37564 1.311212,-1.04348 1.781974,-1.4841 0.902552,-0.84476 1.287352,-0.82874 1.010962,0.0421 -0.33111,1.04326 -2.986404,3.13182 -5.044967,3.96821 -1.259015,0.51153 -3.289219,0.72929 -5.156302,0.55306 z"
                    id="etch-bl-bottom"
                />
            </g>
        </svg>
    );
};
