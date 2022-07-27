import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <span className="handle">@trisbman</span>
          <h1>
            Tristan Budiman<span className="fancy">.</span>
          </h1>
          <h2>Web Developer</h2>
          <div className="fancy-link">
            <a href="/posts">
              <span>
                Check out my projects
              </span>
            </a>          
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
           
      // fancy link     
      .fancy-link {
        margin-bottom: 1rem;
      }         
      a {
        box-sizing: border-box;
        --color: black;
        position: relative;
        text-decoration: none;
        color: var(--color);        
        padding: 0.2rem 0;
      }
      a::before {
        --line-width: 115%;
        --line-height: 1px;
        --line-easing: ease;
        --line-transition-duration: 300ms;
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: var(--line-width);
        height: var(--line-height);
        transform-origin: right;
        transform: scaleX(0);
        background: var(--color);
        transition: transform var(--line-transition-duration) var(--line-easing);
        z-index: 1;
      }
      a:hover::before {
        transform-origin: left;
        transform: scaleX(1);
      }
      a:hover span {
        --deg: -45deg;
      }
      a:hover span::before {
        transform: rotate(var(--deg));
      }
      a:hover span::after {
        transform: translateX(-1px) rotate(var(--deg));
      }
      a span {
        --line-arrow-width: 1px;
        --line-arrow-height: 6px;
        --line-arrow-easing: cubic-bezier(0.3, 1.5, 0.5, 1);
        --line-arrow-transition-duration: 200ms;
        --line-arrow-transition-delay: 240ms;
      }
      a span::before, a span::after {
        content: "";
        position: absolute;
        right: -18%;
        bottom: 0px;
        background: var(--color);
        transition: transform var(--line-arrow-transition-duration) var(--line-arrow-easing);
        transition-delay: var(--line-arrow-transition-delay);
        z-index: 2;
      }
      a span::before {
        width: var(--line-arrow-width);
        height: var(--line-arrow-height);
        transform-origin: 0% 100%;
        transform: rotate(-90deg);
      }
      a span::after {
        height: var(--line-arrow-width);
        width: var(--line-arrow-height);
        transform-origin: 100% 0%;
        transform: translateX(-1px) rotate(0deg);
      }
      `}</style>
    </Layout>
  );
}
