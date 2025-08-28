"use client";

import { useState, useEffect } from "react";

export default function LangSwitcher({ onChange }) {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    const newLang = lang === "en" ? "id" : "en";
    setLang(newLang);
    onChange(newLang);
  };

  return (
    <button
      onClick={toggleLang}
      className="py-2 rounded-lg shadow bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      {lang === "en" ? "Switch to Bahasa Indonesia" : "Switch to English"}
    </button>
  );
}
