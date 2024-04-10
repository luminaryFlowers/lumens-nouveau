// import { type NextPage, GetServerSideProps } from "next";
import { Feed, type FeedOptions, Item } from "feed";
import { GetServerSidePropsContext } from "next";

const PalestineClicks = () => {
    return <></>;
};

type response = {
    res: any;
};

const rssInfoBlock: FeedOptions = {
    title: "Palestine Clicks RSS Feed",
    description: "A daily RSS feed for arab.org's Click to Help Palestine",
    id: "https://lumens.live",
    link: "https://lumens.live",
    language: "en",
    copyright: "n/a",
};

export async function getServerSideProps({
    res,
    req,
}: GetServerSidePropsContext) {
    const feed = new Feed(rssInfoBlock);

    let date: Date = new Date();
    date.setHours(0, 0, 0, 0);

    feed.addItem({
        title: "Daily Palestine Click",
        link: "https://arab.org/click-to-help/palestine/",
        date: date,
    });

    res.setHeader("Content-Type", "text/xml");
    res.write(feed.rss2());
    res.end();

    return { props: {} };
}

export default PalestineClicks;
