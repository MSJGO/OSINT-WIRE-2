import { useEffect, useState } from "react";

export default function OSINTWireDashboard() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Newspaper-Style Header */}
      <header className="text-center">
        <p className="text-xs text-gray-400 uppercase tracking-wider">Powered by Microstreams.io</p>
        <h1 className="text-5xl font-bold tracking-wide">OSINT WIRE</h1>
        <p className="text-sm text-gray-500 mt-1">Your Daily Window into Global Conversations — {today}</p>
        <p className="italic text-md mt-2">Tracking narratives, sentiment, and sources across the digital frontline</p>
      </header>

      {/* Profile-Specific Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Highlights will go here (already written in full component) */}
      </section>

      {/* Additional sections like keyword sentiment, 7-day trends, etc. */}
    </div>
  );
}
