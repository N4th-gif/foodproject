import React from "react";

/**
 * IntroCard.jsx
 * A clean, responsive React component to introduce yourself.
 * Uses Tailwind CSS utility classes (no external UI libs required).
 * Props:
 *  - name: string
 *  - title: string
 *  - bio: string
 *  - avatar: url string (optional)
 *  - socials: array of { name, href, icon } (optional)
 */

export default function IntroCard({
  name = "Your Name",
  title = "Your Title / Role",
  bio = "A short friendly bio about yourself. Say what you do and what you care about.",
  avatar = null,
  socials = [],
}) {
  return (
    <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
      <div className="flex gap-4 items-center">
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="w-20 h-20 rounded-full object-cover ring-2 ring-gray-100"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-semibold text-gray-700">
              {name.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>
          )}
        </div>

        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="text-sm md:text-base text-indigo-600 font-medium mt-1">{title}</p>
          <p className="text-sm text-gray-600 mt-3">{bio}</p>

          {socials && socials.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50"
                >
                  {s.icon ? (
                    <span className="w-4 h-4 inline-block">{s.icon}</span>
                  ) : (
                    <span className="w-4 h-4 inline-block text-gray-500">•</span>
                  )}
                  <span className="text-xs md:text-sm">{s.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href="#contact"
          className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
        >
          Contact
        </a>
        <a
          href="#portfolio"
          className="inline-block px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}

/* Example usage:

<IntroCard
  name="Sophea Dara"
  title="Frontend Developer"
  bio="I build delightful, accessible web apps. Coffee + code enthusiast."
  avatar="https://example.com/me.jpg"
  socials={[
    { name: 'GitHub', href: 'https://github.com/username' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/username' },
  ]}
/>

Notes:
- This component expects Tailwind CSS to be configured in your app.
- You can pass small SVGs or React nodes as `icon` inside each social item for richer buttons.
*/
