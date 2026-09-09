import SectionHeading from "./SectionHeading";
import { publications } from "@/data/publications";

const statusColor: Record<string, string> = {
  Proceedings: "text-accent",
  Springer: "text-accent",
  "Submitted / Under Process": "text-warn",
};

export default function Publications() {
  return (
    <section id="publications" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title="Publications" />
        <div className="space-y-6">
          {publications.map((p) => (
            <div key={p.citation} className="border border-line p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-sm font-semibold text-ink">{p.type}</span>
                <span className={`font-mono text-xs ${statusColor[p.status] ?? "text-faint"}`}>
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.citation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
