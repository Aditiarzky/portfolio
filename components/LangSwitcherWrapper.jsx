"use client";

import { useState, useEffect } from "react";
import LangSwitcher from "./lang-switcher";
import Header from "./header";
import About from "./about";
import Experiences from "./experiences/experiences";
import Education from "./education/education";
import Volunteering from "./volunteering/volunteering";
import Projects from "./projects/projects";
import Credits from "./credits";

export default function LangSwitcherWrapper() {
  const [lang, setLang] = useState("en");
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`/translations/${lang}.json`);
      const json = await res.json();
      setData(json);
    };
    loadData();
  }, [lang]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
      {/* Tombol Switch */}
      <Header data={data.general}></Header>
      <div className="lg:pl-[50%]">
        <div className="mb-6">
            <LangSwitcher onChange={(l) => setLang(l)} />
        </div>
        <About data={data.general}></About>
        <Experiences data={data.experiences}></Experiences>
        <Education data={data.education}></Education>
        <Volunteering data={data.volunteering}></Volunteering>
        <Projects data={data.projects}></Projects>
        <Credits data={data.general}></Credits>
      </div>
    </div>
  );
}
