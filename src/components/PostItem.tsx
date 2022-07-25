import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <Date date={parseISO(post.date)} />
        <div className="image" style={
          { backgroundImage: `url(${post.coverImage})` }
        }>
        </div>
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
              width: 100%;
            }
            .image  {
              background-size: cover;      
              background-position: center;        
              margin-bottom: 1rem;
              height: 250px;
              width: 100%;              
              overflow: hidden;
              border-radius: 4px;
            }
            img {              
              width: 100%;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
