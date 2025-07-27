"use client";

import { useState, useEffect } from "react";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export default function Header() {
  const [date, setDate] = useState({
    Mo: 0,
    Da: 0,
    Ho: 0,
    Mi: 0,
    Se: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDate({
        Mo: now.getMonth() + 1,
        Da: now.getDate(),
        Ho: now.getHours(),
        Mi: now.getMinutes(),
        Se: now.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <div className="header-container">
          <h1 className={rubik.className}>Saladmaki</h1>
          <ul>
            <li>
              <Link href="https://github.com/saladmaki" target="_blank">
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/salad._.maki"
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
            alt="Saladmaki's Logo"
            className="logo"
          />
        </div>
      </header>
      <div className="top-space"></div>
    </>
  );
}
