import { profile } from "@/data/profile";

export default function Resume() {
  return (
    <section id="resume" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 border border-line p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Resume</h2>
            <p className="mt-1 text-sm text-muted">Full CV, PDF format.</p>
          </div>
          <a
            href={profile.resumeFile}
            download
            className="whitespace-nowrap rounded-sm bg-accent px-6 py-2.5 text-sm font-medium text-base transition-opacity hover:opacity-90"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
