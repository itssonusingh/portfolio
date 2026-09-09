const steps = [
  "Problem Definition",
  "Geometry",
  "Mesh",
  "Physics Setup",
  "Boundary Conditions",
  "Solver",
  "Convergence",
  "Post-Processing",
  "Validation",
  "Engineering Conclusion",
];

export default function Workflow() {
  return (
    <section className="border-b border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Engineering Workflow</h2>
        <p className="mt-2 max-w-2xl text-muted">The process followed on the CFD project above.</p>

        <ol className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-4">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className="flex items-center gap-2 border border-line px-3 py-1.5 text-sm text-ink">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </span>
              {i < steps.length - 1 && <span className="text-faint">→</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
