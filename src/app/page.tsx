export const dynamic = "force-static";

import Link from "next/link";
import styles from "./page.module.css";
import { title } from "process";

export const generateMetadata = () => {
  return {
    title: "Profile page - Saladmaki",
    description: "Profile page of Saladmaki",
  };
};

export default function Home() {
  return (
    <>
      <div className={styles.top}>
        <section>
          <h2>
            Welcome to <span>SALADMAKI's</span> Profile site.
          </h2>
          <p>
            I am a high school student with a passion for programming. And I
            love game creation, 3D modeling, web development, and more.
          </p>
        </section>
      </div>
      <main className={styles.main}>
        <div className={styles.content}>
          <section>
            <h3>👤 About Me</h3>
            {/* code */}
            <pre>
              <code>
                {`name: Saladmaki
age: 15
bloodType: A
hobbies:
  - Programming
  - 3D modeling
  - Web design
  - Listening Music
dreams:
  - Game creator
  - Electrician`}
              </code>
            </pre>
          </section>
          <section>
            <h3 className={styles.skills}>
              Skills
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
                loading="lazy"
                alt="Unity"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
                loading="lazy"
                alt="Blender"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                loading="lazy"
                alt="C"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                loading="lazy"
                alt="HTML5"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                loading="lazy"
                alt="JavaScript"
              />
            </h3>
            {/* code */}
            <pre>
              <code>
                {`Programming Languages:
  - JavaScript
  - C (studying)
Web Development: 
  - HTML
  - CSS
  - JavaScript
Frameworks:
  - Next.js (studying)
Game Development: Unity
3D Modeling: Blender`}
              </code>
            </pre>
          </section>
          <section>
            <h3>📂 Projects</h3>
            <ul>
              <li>
                <Link
                  href="https://github.com/saladmaki/calculator"
                  target="_blank"
                >
                  Simple calculator
                </Link>
                : Simple calculator made in C language.
              </li>
              <li>
                <Link href="https://github.com/saladmaki/realtime-chat-app">
                  Real-time chat
                </Link>
                : Real-time chat application build with Express and Socket.IO.
              </li>
            </ul>
          </section>
          <section>
            <h3>📁 SiteMap</h3>
            <ul>
              <li>
                <Link href="./blog/" target="_blank">
                  /blog
                </Link>
                : My blog site!
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
