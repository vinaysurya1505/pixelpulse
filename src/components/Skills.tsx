import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const skills = [
  {
    category: "AI & Machine Learning",
    items: [
      "Supervised & unsupervised ML",
      "Feature engineering",
      "Time-series forecasting",
      "Scikit-learn & XGBoost",
      "Generative AI (Gemini / LLMs)",
      "Prompt design",
      "RAG workflows",
    ],
  },
  {
    category: "Data Analytics & BI",
    items: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Tableau", "EDA"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Flask", "REST", "Data pipelines", "Celery", "Redis"],
  },
  {
    category: "Frontend & Web Experience",
    items: ["Vue 3", "Next.js", "TypeScript", "Responsive dashboards", "Tailwind CSS"],
  },
  {
    category: "Data & Cloud",
    items: ["BigQuery", "Common SQL DBs", "GCP", "Docker"],
  },
  {
    category: "Collaboration & Delivery",
    items: ["Git", "Code reviews", "Documentation", "Mentoring", "Agile-style iteration"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Layers className="mr-3 h-8 w-8 text-sky-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Team Skill Stack</h2>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Together, we cover the full lifecycle: from raw data ingestion and modelling to
            production-grade APIs and polished frontends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/15 smooth-transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-sky-300">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    className="bg-slate-800/80 border border-slate-600/70 text-slate-100 text-xs"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
