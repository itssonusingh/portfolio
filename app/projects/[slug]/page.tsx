import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cfdProjects } from "@/data/cfdProjects";

export function generateStaticParams() {
  return cfdProjects.map((p) => ({ slug: p.slug }));
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line py-5 first:border-none first:pt-0">
      <p className="font-mono text-xs uppercase tracking-wide text-faint">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{value}</p>
    </div>
  );
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = cfdProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/#simulations" className="text-sm text-accent hover:underline">
          ← Back to simulations
        </Link>

        <p className="mt-6 font-mono text-xs text-accent">{project.software.join(" · ")}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">{project.title}</h1>
        <p className="mt-2 text-sm text-faint">{project.role}</p>
        <p className="mt-1 font-mono text-xs text-faint">{project.duration}</p>

        <div className="mt-8 aspect-video border border-line bg-panel">
          {project.video ? (
            <video className="h-full w-full object-cover" controls preload="none" poster={project.poster ?? undefined}>
              <source src={project.video} />
            </video>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
              <span className="font-mono text-xs text-faint">SIMULATION VIDEO — NOT YET ADDED</span>
              <p className="max-w-xs text-xs text-faint">
                Drop a file into /public/videos and set the path in data/cfdProjects.ts
              </p>
            </div>
          )}
        </div>

        <div className="mt-10">
          <Field label="Engineering Problem" value={project.engineeringProblem} />
          <Field label="Objective" value={project.objective} />
          <Field label="Geometry" value={project.geometry} />
          <Field label="Mesh" value={project.mesh} />
          <Field label="Physics / Models" value={project.physics} />
          <Field label="Boundary Conditions" value={project.boundaryConditions} />
          <Field label="Solver Setup" value={project.solverSetup} />
          <Field label="Post-Processing" value={project.postProcessing} />
          <Field label="Results" value={project.results} />
          <Field label="My Contribution" value={project.contribution} />
          <Field label="Conclusion" value={project.conclusion} />
        </div>

        {project.images.length > 0 ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.images.map((img) => (
              <figure key={img.src} className="border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.caption} className="w-full" />
                <figcaption className="border-t border-line p-3 text-xs text-faint">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-dashed border-line p-8 text-center">
            <p className="font-mono text-xs text-faint">
              GEOMETRY / MESH / CONTOUR IMAGES — NOT YET ADDED
            </p>
            <p className="mt-1 text-xs text-faint">
              Add images to data/cfdProjects.ts once available.
            </p>
          </div>
        )}

        {project.publication && (
          <p className="mt-10 border-t border-line pt-6 text-sm text-muted">{project.publication.label}</p>
        )}
      </main>
      <Footer />
    </>
  );
}
