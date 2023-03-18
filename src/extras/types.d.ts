type HsPageProps = {
    children?: React.ReactNode;
};

type HsProjectChunkProps = {
    children?: React.ReactNode;
    link?: string;
    title: string;
}

type ImageWithDescProps = {
    image: StaticImageData;
    alt: string;
    description: string;
}