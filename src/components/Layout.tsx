import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            min-height: 100%;
            height: 90vh;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              height: unset;
              flex: 1 0 auto;
            }
          }
        `}
      </style>
      <style jsx global>{`
        .container {
          display: flex;
          max-width: 1200px;
          width: 100%;
          height: 100%;
          padding: 0 1.5rem;    
        }
        nav .container {
          padding: 0;
        }
        li {                    
          list-style: none;          
        }
        @media (min-width: 769px) {
          .container {         
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
