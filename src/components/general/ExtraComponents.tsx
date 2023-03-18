import Image, { type StaticImageData } from "next/image";

type ImageWithDescProps = {
    image: StaticImageData;
    alt: string;
    description: string;
};

export const ImageWithDesc: React.FC<ImageWithDescProps> = ({
    image,
    alt,
    description,
}) => {
    return (
        <>
            <Image src={image} alt={alt} className="w-full" />
            <p className="mt-[14px] mb-[10px] text-center italic">
                {description}
            </p>
        </>
    );
};
