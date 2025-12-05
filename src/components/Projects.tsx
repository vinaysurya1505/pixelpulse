import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const projects = [
  {
    title: "Human Resource Intelligence Studio",
    date: "Contribution · Ongoing",
    description:
      "Intelligent HR assistant with a secure Flask backend, Vue 3 dashboards, and GenAI experiences for chatbot support, JD builder, career path guidance, letters, and resume analytics.",
    impact:
      "Helps organizations onboard, grow, and offboard employees faster by automating HR documents, surfacing insights, and giving every role an AI-assisted workspace.",
    tags: ["Flask", "Vue 3", "GenAI", "HR Tech", "AI Assistant"],
  },
  {
    title: "PixelPulse Insight Hub",
    date: "Flagship Hub",
    description:
      "Modular analytics platform with AI-driven analyst agents, forecasting dashboards, and operational tools for SMEs, turning scattered spreadsheets into always-on business intelligence.",
    impact:
      "Grants leaders clarity by converging data sources and surfacing trustworthy intelligence on demand.",
    tags: ["AI Agents", "Dashboards", "Full-Stack", "Automation"],
  },
  {
    title: "Data Analyst Agent",
    date: "Contribution · Ongoing",
    description:
      "LLM-powered agent ingesting CSVs, running automated EDA, training ML models, and returning visuals plus narrative through a FastAPI + LangChain UI.",
    impact: "Reduces time spent on boilerplate EDA so teams can focus on insights.",
    tags: ["LLM", "LangChain", "FastAPI", "EDA"],
  },
  {
    title: "Autolysis - Automated Data Storytelling",
    date: "2025",
    description:
      "Python system that turns arbitrary datasets into structured stories with charts, clustering, anomaly detection, and actionable recommendations.",
    impact: "Makes data understandable for non-technical stakeholders and accelerates decisions.",
    tags: ["Python", "ML", "Storytelling"],
  },
  {
    title: "Healthcare Operations Management Platform",
    date: "2024",
    description:
      "ERP-style admin panel for diagnostic centers with patient, doctor, billing, expenses, and analytics modules for real-time financial visibility.",
    impact: "Delivers operational and financial clarity so care teams can focus on patients.",
    tags: ["ERP", "Healthcare", "Dashboards"],
  },
  {
    title: "Smart Vehicle Parking System",
    date: "2024",
    description:
      "Full-stack parking management with real-time booking, admin dashboards, notifications, and background workers powered by Flask, Vue, and Redis.",
    impact: "Reduces congestion and improves utilization across campuses and commercial spaces.",
    tags: ["Flask", "Vue", "Redis", "Real-time"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="mr-3 h-8 w-8 text-slate-200" />
            <h2 className="text-3xl md:text-4xl font-bold">Contributions & Impact</h2>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A showcase of the team’s ongoing AI, ML, and web initiatives that keep data flowing from
            exploration to impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-900/80 border border-slate-800/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 smooth-transition"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-50">
                  {project.title}
                </CardTitle>
                <p className="text-xs text-slate-400">{project.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-3">{project.description}</p>
                <p className="text-sm text-cyan-200 italic mb-3">{project.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-slate-800/70 border border-slate-700/70 text-slate-100 text-[11px]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
