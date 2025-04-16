import { useEffect, useState } from "react";

export default function OSINTWireDashboard() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      {/* Newspaper-Style Header */}
      <header className="text-center border-b pb-6">
        <p className="text-xs text-gray-400 uppercase tracking-wider">Powered by Microstreams.io</p>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">OSINT WIRE</h1>
        <p className="text-sm text-gray-500 mt-1">Your Daily Window into Global Conversations — {today}</p>
        <p className="italic text-md text-gray-700 mt-2">Tracking narratives, sentiment, and sources across the digital frontline</p>
      </header>

      {/* Profile-Specific Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Existing highlight blocks */}
        {/* ... */}
      </section>

      {/* Keyword Sentiment Overview */}
      <section className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sentiment by Keyword & Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div className="p-3 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="font-bold text-base text-gray-800">Zelensky</h3>
            <p>VK: 60% negative<br />Weibo: 45% neutral<br />Reddit: 70% positive</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="font-bold text-base text-gray-800">Gaza</h3>
            <p>VK: 50% neutral<br />Weibo: 30% critical of IDF<br />WhatsApp: 75% pro-Palestine</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="font-bold text-base text-gray-800">Tariffs</h3>
            <p>Weibo: 58% anti-US<br />Reddit: 40% mixed<br />Discord: 65% anti-China sentiment</p>
          </div>
        </div>
      </section>

      {/* 7-Day Engagement Trend Section */}
      <section className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">7-Day Trend: Mentions of "Drone Swarm"</h2>
        <p className="text-sm mb-3 text-gray-600">Tracking the rise of AI weapons narratives across platforms</p>
        <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center border border-dashed border-gray-300">
          <span className="text-gray-500">[Line Chart Placeholder: Mentions from VK, Weibo, Discord]</span>
        </div>
        <ul className="mt-4 text-sm list-disc list-inside text-gray-700">
          <li>VK: Surge on April 13 after MOD post linking drones to NATO drills</li>
          <li>Weibo: Rise tied to Global Times article on U.S. military tech</li>
          <li>Discord: Uptick in discussion inside “Truth Seekers Central” server</li>
        </ul>
      </section>

      {/* Footer with Offer */}
      <footer className="text-center mt-10 pt-6 border-t">
        <p className="text-lg font-semibold text-gray-800">Want something custom? Want the underlying data?</p>
        <button className="mt-3 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
          Contact Us
        </button>
        <p className="text-sm text-gray-500 mt-3">Powered by Microstreams | Data from VK, Weibo, WhatsApp, Discord, and more</p>
      </footer>
    </div>
  );
}
