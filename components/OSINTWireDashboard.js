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
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-semibold">🇺🇸 U.S. Embassy in China (Weibo)</h2>
          <p className="text-sm mt-2">
            Post Summary: “The United States reaffirms our commitment to peace in the Indo-Pacific.”<br />
            <strong>Themes:</strong> U.S. diplomacy, Indo-Pacific security, China–U.S. relations<br />
            <strong>Sentiment:</strong> Mixed – 45% negative, 35% neutral, 20% supportive<br />
            <a href="https://weibo.com/USembassyBeijing" className="text-blue-600 underline text-sm" target="_blank">View Post</a><br />
            Comments:
            <ul className="list-disc list-inside mt-1">
              <li>🇨🇳 "Peace? Then why all the drills near Taiwan?" (critical)</li>
              <li>🇨🇳 "Still better than Russian threats." (supportive)</li>
              <li>🇨🇳 "Just words, no action." (neutral skepticism)</li>
            </ul>
          </p>
        </div>
        {/* Additional highlights and other sections would continue here... */}
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
