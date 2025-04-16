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
        <div className="bg-white shadow-md rounded-2xl p-4">
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
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-xl font-semibold">🇷🇺 Russian State Media (RT, VK)</h2>
          <p className="text-sm mt-2">
            Article Title: “NATO’s Proxy War Escalates”<br />
            <strong>Themes:</strong> NATO aggression, Western hypocrisy, pro-Russian framing<br />
            <strong>Sentiment:</strong> Predominantly supportive – 68% agreement<br />
            <a href="https://vk.com/rt_russian" className="text-blue-600 underline text-sm" target="_blank">View Post</a><br />
            Engagement: +320 comments<br />
            Comments:
            <ul className="list-disc list-inside mt-1">
              <li>🇷🇺 "NATO will regret pushing us this far." (strong approval)</li>
              <li>🇷🇺 "Where’s the proof? This is just propaganda." (critical)</li>
              <li>🇷🇺 "Everyone’s got their side in this, truth’s in the middle." (neutral)</li>
            </ul>
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-xl font-semibold">🇮🇷 Al-Alam (VK Mirror)</h2>
          <p className="text-sm mt-2">
            Post about Houthis’ Red Sea blockade received 210+ shares.<br />
            <strong>Themes:</strong> Anti-Western resistance, maritime disruption, regional solidarity<br />
            <strong>Sentiment:</strong> 72% supportive on VK, critical on Telegram mirrors<br />
            <a href="https://vk.com/alalam" className="text-blue-600 underline text-sm" target="_blank">View Post</a><br />
            Comments:
            <ul className="list-disc list-inside mt-1">
              <li>🇮🇷 "This is a justified resistance against imperialism." (supportive)</li>
              <li>🇮🇷 "It’s hurting civilians more than governments." (critical)</li>
              <li>🇮🇷 "Can’t trust any side fully anymore." (ambivalent)</li>
            </ul>
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-xl font-semibold">🇮🇱 Israeli Spokesperson (WhatsApp)</h2>
          <p className="text-sm mt-2">
            Broadcast post: “We call on all civilians to evacuate Gaza zone X.”<br />
            <strong>Themes:</strong> Humanitarian warning, conflict escalation, evacuation order<br />
            <strong>Sentiment:</strong> WhatsApp mirrors show 63% critical, 20% neutral<br />
            <a href="#" className="text-blue-600 underline text-sm">View Shared Post</a><br />
            Comments:
            <ul className="list-disc list-inside mt-1">
              <li>🇵🇸 "Another false promise before the next strike." (angry)</li>
              <li>🇮🇱 "Necessary measure to avoid casualties." (defensive)</li>
              <li>🌐 "Heartbreaking all around." (empathetic)</li>
            </ul>
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-xl font-semibold">🇨🇳 Global Times (Weibo)</h2>
          <p className="text-sm mt-2">
            Article on U.S. tariffs sparks surge in anti-West rhetoric.<br />
            <strong>Themes:</strong> Trade war, U.S.–China economic friction, domestic resilience<br />
            <strong>Sentiment:</strong> 58% anti-U.S., 30% constructive or nationalistic<br />
            <a href="https://weibo.com/globaltimesnews" className="text-blue-600 underline text-sm" target="_blank">View Post</a><br />
            Comments:
            <ul className="list-disc list-inside mt-1">
              <li>🇨🇳 "The West only plays fair when it wins." (negative)</li>
              <li>🇨🇳 "We need to develop domestic tech faster!" (constructive)</li>
              <li>🇨🇳 "Tariffs again? Deja vu." (cynical)</li>
            </ul>
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-xl font-semibold">🧪 Chemtrails Watchers (WhatsApp)</h2>
          <p className="text-sm mt-2">
            Viral message: “Increased jet activity = weather control testing. Watch the skies!”<br />
            <strong>Themes:</strong> Weather manipulation, distrust of science, anti-government conspiracies<br />
            <strong>Sentiment:</strong> 82% supportive or believing, 10% mocking, 8% skeptical curiosity<br />
            <a href="#" className="text-blue-600 underline text-sm">View Shared Message</a><br />
            Comments:
            <ul className="list-disc list-inside mt-1">
              <li>🌀 "They spray us every week now — I’ve been filming!" (supportive)</li>
              <li>🌩️ "The clouds have looked weirder lately, not gonna lie." (curious/skeptical)</li>
              <li>😐 "This again? Y’all need better hobbies." (dismissive)</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}
