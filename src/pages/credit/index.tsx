import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../lib/posts";
import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";
import Credit from "../../components/Credit";

type Props = {
    posts: PostContent[];
    tags: TagContent[];
    pagination: {
        current: number;
        pages: number;
    };
};
export default function Index({ posts, tags, pagination }: Props) {
    const url = "/posts";
    const title = "All posts";
    return (
        <Layout>
            <BasicMeta url={url} title={title} />
            <OpenGraphMeta url={url} title={title} />
            <TwitterCardMeta url={url} title={title} />
            <Credit />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
        }
    };
};
