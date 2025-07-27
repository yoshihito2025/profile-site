import Link from "next/link";
import "./blog-content.css";

export default function ArticleList() {
  return (
    <div className="contents">
      <div className="content">
        <h1>Welcome to Saladmaki's site.</h1>
        <ul id="articles" className="articles">
          <li>
            <Link href="about:blank">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, architecto.
              </p>
            </Link>
          </li>
          <li>
            <Link href="about:blank">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, architecto.
              </p>
            </Link>
          </li>
          <li>
            <Link href="about:blank">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, architecto.
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
