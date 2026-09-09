import SectionHeading from "./SectionHeading";
import { experience, responsibilities } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title="Experience" />
        <div className="space-y-8">
          {experience.map((e) => (
            <div key={e.role + e.org} className="grid gap-2 border-b border-line/60 pb-8 last:border-none sm:grid-cols-[220px_1fr]">
              <div>
                <p className="font-display text-base font-semibold text-ink">{e.role}</p>
                <p className="mt-1 text-sm text-muted">{e.org}</p>
                <p className="mt-1 font-mono text-xs text-faint">{e.duration}</p>
              </div>
              <ul className="space-y-1.5">
                {e.bullets.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {responsibilities.length > 0 && (
          <div className="mt-10 border-t border-line pt-6">
            <p className="font-display text-sm font-semibold text-ink">Positions of Responsibility</p>
            <ul className="mt-3 space-y-1.5">
              {responsibilities.map((r) => (
                <li key={r} className="text-sm text-muted">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
