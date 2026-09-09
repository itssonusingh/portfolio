import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="blueprint border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28">
        <div>
          <p className="mb-4 font-mono text-sm text-accent">{profile.subheadline}</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#simulations"
              className="rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-base transition-opacity hover:opacity-90"
            >
              View My Simulations
            </a>
            <a
              href={profile.resumeFile}
              download
              className="rounded-sm border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} className="hover:text-accent" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            {profile.github && (
              <a href={profile.github} className="hover:text-accent" target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>

        <div className="flex items-start justify-center md:justify-end">
          <div className="relative h-56 w-48 overflow-hidden border border-line sm:h-64 sm:w-56">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="224px"
              className="object-cover grayscale contrast-110"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
