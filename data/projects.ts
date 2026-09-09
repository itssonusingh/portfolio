export type Project = {
  title: string;
  problem: string;
  approach: string;
  tools: string[];
  contribution: string;
  result: string;
  takeaway: string;
  source: string; // where this project comes from, for transparency
};

export const projects: Project[] = [
  {
    title: "AIoT-Based Water Quality Monitoring System — Kaylana Lake",
    problem:
      "Continuous, reliable water quality monitoring for Kaylana Lake as part of a DRDO-collaborated project.",
    approach:
      "Built a Dash/Flask/Plotly monitoring dashboard with a four-model forecasting ensemble (Holt-Winters, Ridge Regression, SVR, Random Forest) validated with walk-forward backtesting, plus a three-layer anomaly detection pipeline (robust Z-score/MAD, Isolation Forest, DBSCAN).",
    tools: ["Python", "Dash", "Flask", "Plotly"],
    contribution:
      "Designed the dashboard architecture, implemented the forecasting ensemble and anomaly detection layers, and computed the Water Quality Index (WQI) per BIS IS:10500:2012. Also built an integrated chatbot component (AquaBot) for querying the monitoring data.",
    result:
      "A working AIoT monitoring dashboard combining forecasting, anomaly detection, and standards-based water quality indexing.",
    takeaway:
      "Demonstrates applied ML and IoT-systems experience — time-series forecasting, anomaly detection, and dashboard engineering — alongside the CFD/thermal simulation work above.",
    source: "Not listed on CV — from independent project work; verify details before publishing.",
  },
  {
    title: "Mechanical Characterization of Nano-Filler Polyester Composites",
    problem:
      "Understand how nano-filler reinforcement affects the mechanical performance of polyester composites.",
    approach:
      "Investigated polyester composites reinforced with nano-fillers (silica and carbon nanotubes) and analysed the effect of filler concentration on strength and toughness.",
    tools: ["Tensile testing", "Flexural testing", "Toughness testing"],
    contribution:
      "Conducted tensile, flexural, and toughness testing and analysed the resulting data.",
    result: "Established the relationship between nano-filler concentration and composite strength/toughness.",
    takeaway: "Bachelor's Thesis, AKTU University — Supervisor: Dr. Akant Singh, Dept. of Mechanical Engineering (Sept 2019 – Apr 2020).",
    source: "CV",
  },
];
