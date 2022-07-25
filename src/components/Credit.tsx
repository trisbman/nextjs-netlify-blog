import React from "react";
import GitHub from "../assets/github-alt.svg";
import NextJS from "../assets/nextjs-alt.svg";
import Netlify from "../assets/netlify-alt.svg";
import NetlifyCMS from "../assets/netlify-cms-alt.svg";


export default function Credit() {
  return (
    <div className={"container"}>
      <div className="credit">
        <h3>This site made possible by using these tools</h3>
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
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          height: 100%;
          padding: 0 1.5rem;          
        }
        .credit {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        h3 {          
        }
        ul {
          padding: 0;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;             
          align-items: center;          
        }
        li {                    
          list-style: none;          
        }
      `}</style>
    </div>
  );
}
