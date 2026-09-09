export type CfdProject = {
  slug: string;
  title: string;
  role: string;
  duration: string;
  engineeringProblem: string;
  objective: string;
  geometry: string;
  mesh: string;
  physics: string;
  boundaryConditions: string;
  solverSetup: string;
  postProcessing: string;
  results: string;
  contribution: string;
  conclusion: string;
  software: string[];
  video: string | null;
  poster: string | null;
  images: { src: string; caption: string }[];
  publication?: { label: string; href?: string };
};

// Sourced directly from the CV entry "CFD Analysis of Heat Transfer in
// PCM-Based Compact Heat Storage" (Master's Thesis, Jan 2025 – May 2026).
// video / poster / images are left null — drop real files into
// /public/videos and /public/images/cfd and update the paths below.
export const cfdProjects: CfdProject[] = [
  {
    slug: "pcm-compact-heat-storage",
    title: "CFD Analysis of Heat Transfer in PCM-Based Compact Heat Storage",
    role: "Master's Thesis — Supervisor: Dr. Shobhana Singh, Dept. of Mechanical Engineering, IIT Jodhpur",
    duration: "Jan 2025 – May 2026",
    engineeringProblem:
      "Compact thermal energy storage systems using spherical encapsulated phase change material (PCM) require accurate prediction of melting and solidification behaviour to size and design the storage effectively.",
    objective:
      "Analyse melting and solidification in spherical encapsulated PCM for thermal energy storage (TES) using transient CFD simulation.",
    geometry: "Spherical encapsulated PCM capsule geometry.",
    mesh:
      "Structured and unstructured meshing, with a grid independence study performed to confirm mesh-independent results.",
    physics:
      "Transient melting and solidification (phase change) heat transfer; results interpreted using the non-dimensional Rayleigh and Nusselt numbers.",
    boundaryConditions: "Defined as part of the transient simulation setup (see solver setup).",
    solverSetup: "Pressure-based and coupled solver settings, using the Finite Volume Method (FVM).",
    postProcessing:
      "Temperature distribution and liquid fraction evolution during melting/solidification; Rayleigh and Nusselt number analysis.",
    results:
      "Simulation results were validated and verified to enhance accuracy of the melting/solidification prediction.",
    contribution:
      "Executed the full simulation workflow independently — meshing, grid independence study, boundary conditions, solver setup, post-processing, and validation/verification — under academic supervision.",
    conclusion:
      "The work demonstrates a validated transient CFD workflow for predicting PCM melting/solidification behaviour in compact thermal storage geometries.",
    software: ["ANSYS Fluent"],
    video: null,
    poster: null,
    images: [],
    publication: {
      label:
        "Related: MCDA-Guided Selection of PCM for High-Temperature Energy Storage Application and Numerical Assessment of Top-Ranked PCMs — ASME IMECE-INDIA2026",
    },
  },
];
