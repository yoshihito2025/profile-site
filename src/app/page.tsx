export const dynamic = "force-static";

import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

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
            Welcome to <span>SALADMAKI&apos;s</span> Profile site.
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
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
                loading="lazy"
                alt="Unity"
                width={100}
                height={100}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
                loading="lazy"
                alt="Blender"
                width={100}
                height={100}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                loading="lazy"
                alt="C"
                width={100}
                height={100}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                loading="lazy"
                alt="HTML5"
                width={100}
                height={100}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                loading="lazy"
                alt="JavaScript"
                width={100}
                height={100}
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
                <Link
                  href="https://github.com/saladmaki/realtime-chat-app"
                  target="_blank"
                >
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
                <Link href="./blog/">/blog</Link>: My blog site!
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
