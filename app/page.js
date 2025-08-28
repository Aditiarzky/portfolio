import React from "react";
import LangSwitcherWrapper from "@/components/LangSwitcherWrapper";

export default function Home() {
  // server component hanya wrapper layout
  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
      {/* Komponen Switch Bahasa */}
      <div className="mb-6">
        <LangSwitcherWrapper />
      </div>
    </main>
  );
}
