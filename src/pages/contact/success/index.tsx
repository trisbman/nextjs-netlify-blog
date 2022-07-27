import Layout from "../../../components/Layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";

export default function Contact() {
    const url = "/contact";
    const title = "Contact";
    return (
        <Layout>
            <BasicMeta url={url} title={title} />
            <OpenGraphMeta url={url} title={title} />
            <TwitterCardMeta url={url} title={title} />
            <div className="container">
                <p>Form submitted!</p>
            </div>
        </Layout>
    );
}