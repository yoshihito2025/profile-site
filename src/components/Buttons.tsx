"use client";

import { useState } from "react";

export default function Buttons() {
  const [printMsg, setPrintMsg] = useState("");
  const copying = () => {
    navigator.clipboard
      .writeText(location.href)
      .then(() => {
        setPrintMsg("Copied!");
      })
      .catch(() => {
        setPrintMsg("Failed to copy...");
      });
    setTimeout(() => {
      setPrintMsg("");
    }, 1300);
  };
  const sharing = () => {
    location.href =
      "line://msg/text/Saladmaki's website: " +
      encodeURIComponent(location.href);
  };
  return (
    <>
      <div className="buttons">
        <div className="print-msg">
          {printMsg ? <div>{printMsg}</div> : ""}
        </div>
        <button id="link" onClick={copying}>
          🔗
        </button>
        <button id="share" onClick={sharing}>
          💬
        </button>
      </div>
    </>
  );
}
