import { snapshot } from "@/data/profile";

export default function Snapshot() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {snapshot.map((s) => (
            <div key={s.label} className="bg-base p-6">
              <p className="font-display text-base font-semibold text-ink">{s.label}</p>
              <p className="mt-1.5 text-sm leading-snug text-muted">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
