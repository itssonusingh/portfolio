import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { cfdProjects } from "@/data/cfdProjects";

function VideoOrPlaceholder({ video, poster, title }: { video: string | null; poster: string | null; title: string }) {
  if (video) {
    return (
      <video
        className="h-full w-full object-cover"
        controls
        preload="none"
        poster={poster ?? undefined}
        aria-label={`Simulation video: ${title}`}
      >
        <source src={video} />
        Your browser does not support embedded video.
      </video>
    );
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-panel px-6 text-center">
      <span className="font-mono text-xs text-faint">SIMULATION VIDEO — NOT YET ADDED</span>
      <p className="text-xs text-faint">
        Drop a file into /public/videos and set the path in data/cfdProjects.ts
      </p>
    </div>
  );
}

export default function CFDSimulations() {
  return (
    <section id="simulations" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          title="CFD Simulation Portfolio"
          subtitle="Selected simulation work in thermal-fluid engineering and computational analysis."
        />

        <div className="grid gap-8">
          {cfdProjects.map((p) => (
            <div key={p.slug} className="grid gap-0 border border-line md:grid-cols-2">
              <div className="aspect-video md:aspect-auto">
                <VideoOrPlaceholder video={p.video} poster={p.poster} title={p.title} />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="font-mono text-xs text-accent">{p.software.join(" · ")}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-faint">{p.duration}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.objective}</p>
                <Link
                  href={`/projects/${p.slug}`}
                  className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
                >
                  View Technical Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
