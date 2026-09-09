import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          title="Engineering & Research Projects"
          subtitle="Work beyond the CFD thesis that shows the same problem-solving process."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="flex flex-col border border-line p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-3 text-sm text-muted">
                <span className="text-ink">Problem — </span>
                {p.problem}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-ink">Approach — </span>
                {p.approach}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-ink">Result — </span>
                {p.result}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="border border-line px-2 py-0.5 font-mono text-xs text-faint">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-faint">{p.takeaway}</p>
              {p.source !== "CV" && (
                <p className="mt-3 text-xs italic text-warn/80">{p.source}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
