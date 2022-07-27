import React from "react";
import GitHub from "../assets/github-alt.svg";
import NextJS from "../assets/nextjs-alt.svg";
import Netlify from "../assets/netlify-alt.svg";
import NetlifyCMS from "../assets/netlify-cms-alt.svg";


export default function Credit() {
  return (
    <div className={"container"}>
      <div className="credit">
        <p>This site made possible by using these tools</p>
        <ul>
          {/* NextJS */}
          <li>
            <a href="https://nextjs.org/">
              <NextJS />
            </a>
          </li>
          {/* Netlify */}
          <li>
            <a href="https://www.netlify.com/">
              <Netlify />
            </a>
          </li>
          {/* GitHub */}
          <li>
            <a href="https://github.com">
              <GitHub width={75} height={75} />
            </a>
          </li>
          {/* Netlify CMS */}
          <li>
            <a href="https://www.netlifycms.com/">
              <NetlifyCMS style={{
                backgroundColor: "black",
                borderRadius: "4px",
                padding: "0.5rem"
              }} />
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .credit {
          display: flex;
          flex-direction: column;          
          flex: 1 1 auto;
        }
        ul {
          padding: 0;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;             
          align-items: center;          
        }
      `}</style>
    </div>
  );
}
