"use client";

import { useState, useEffect } from "react";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function Header() {
  const [date, setDate] = useState({
    Mo: "00",
    Da: "00",
    Ho: "00",
    Mi: "00",
    Se: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const pad = (n: number) => n.toString().padStart(2, "0");
      const now = new Date();
      setDate({
        Mo: pad(now.getMonth() + 1),
        Da: pad(now.getDate()),
        Ho: pad(now.getHours()),
        Mi: pad(now.getMinutes()),
        Se: pad(now.getSeconds()),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <div className="header-container">
          <Link href="/">
            <h1 className={rubik.className}>yoshihito2025</h1>
          </Link>
          <ul>
            <li>
              <Link href="https://github.com/yoshihito2025" target="_blank">
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/yoshihito.2025"
                target="_blank"
              >
                Instagram
              </Link>
            </li>
          </ul>
          <p id="date" className="date">
            {date.Mo}/{date.Da} - {date.Ho}:{date.Mi}:{date.Se}
          </p>
          <Image
            width={100}
            height={100}
            src="/logo.svg"
            alt="yoshihito2025's Logo"
            className="logo"
          />
        </div>
      </header>
      <div className="top-space"></div>
    </>
  );
}
