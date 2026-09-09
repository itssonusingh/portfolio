"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Contact</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Reach out directly, or send a message below — it opens in your email client, addressed to{" "}
          {profile.email}.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-line bg-panel px-3 py-2 text-sm text-ink outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-line bg-panel px-3 py-2 text-sm text-ink outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-line bg-panel px-3 py-2 text-sm text-ink outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="rounded-sm bg-accent px-6 py-2.5 text-sm font-medium text-base transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-3 text-sm">
            <p className="text-muted">
              Email —{" "}
              <a href={`mailto:${profile.email}`} className="text-ink hover:text-accent">
                {profile.email}
              </a>
            </p>
            <p className="text-muted">Location — {profile.location}</p>
            {profile.linkedin && (
              <p className="text-muted">
                LinkedIn —{" "}
                <a href={profile.linkedin} className="text-ink hover:text-accent" target="_blank" rel="noreferrer">
                  {profile.linkedin}
                </a>
              </p>
            )}
            {profile.github && (
              <p className="text-muted">
                GitHub —{" "}
                <a href={profile.github} className="text-ink hover:text-accent" target="_blank" rel="noreferrer">
                  {profile.github}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
