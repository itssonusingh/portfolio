import SectionHeading from "./SectionHeading";
import { education, recognitions } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title="Education" />
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((e) => (
            <div key={e.degree} className="border-l-2 border-accent/50 pl-5">
              <p className="font-display text-base font-semibold text-ink">{e.degree}</p>
              <p className="mt-1 text-sm text-muted">{e.institution}</p>
              <p className="mt-1 font-mono text-xs text-faint">
                {e.detail} · {e.year}
              </p>
            </div>
          ))}
        </div>

        {recognitions.length > 0 && (
          <div className="mt-10 border-t border-line pt-6">
            <p className="font-display text-sm font-semibold text-ink">Recognitions</p>
            <ul className="mt-3 space-y-1.5">
              {recognitions.map((r) => (
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
