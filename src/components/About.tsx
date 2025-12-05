import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Aqdas Khan",
    focus: "Data & Forecasting",
    description:
      "Leads business data initiatives - analytics, inventory/credit risk models, forecasting, and BI dashboards that keep leadership confident.",
    highlights: [
      "Full-stack",
      "Business data analytics & forecasting",
      "Power BI storytelling & visualization",
      "Inventory and credit risk monitoring systems",
    ],
    accentClass: "bg-sky-400",
  },
  {
    name: "Vinay Kasaudhan",
    focus: "ML & Systems",
    description:
      "Architects production-ready ML pipelines, automated workflows, and analytics platforms that connect data to operational action.",
    highlights: [
      "Full-stack",
      "ML systems + automation",
      "LangChain + FastAPI orchestration",
      "Operational dashboards & analytics automation",
    ],
    accentClass: "bg-indigo-400",
  },
  {
    name: "Akshay K Upadhyay",
    focus: "AI & Web Apps",
    description:
      "Builds LLM-driven assistants, RAG flows, and pixel-perfect web experiences so teams can interact with AI confidently.",
    highlights: [
      "Full-stack",
      "LLMs & RAG workflows",
      "Full-stack Next.js / Vue dashboards",
      "Conversational agents & smooth UX",
    ],
    accentClass: "bg-cyan-400",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-950/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users className="mr-3 h-8 w-8 text-slate-200" />
            <h2 className="text-3xl md:text-4xl font-bold">About PixelPulse Devs</h2>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            PixelPulse Devs is a trio of AI, ML, and web development experts crafting intelligent,
            beautiful products - from HR intelligence tools and analytics agents to full-stack
            dashboards and enterprise ERPs. We focus on deep data intelligence, automation, and
            delightful user experiences that inspire trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/80 p-6 shadow-slate-900/60 hover:-translate-y-1 hover:shadow-xl smooth-transition"
            >
              <p className="text-xs uppercase tracking-[0.4em] mb-2 text-slate-400">
                {member.focus}
              </p>
              <h3 className="text-2xl font-semibold mb-3 text-slate-100">{member.name}</h3>
              <p className="text-sm text-slate-300 mb-4">{member.description}</p>
              <div className="space-y-2 text-sm text-slate-300">
                {member.highlights.map((line) => (
                  <div key={line} className="flex items-start gap-2">
                    <span className={`mt-0.5 h-1 w-1 rounded-full ${member.accentClass}`} aria-hidden="true" />
                    <p className="text-slate-300 leading-snug">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
