import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const interests = [
  {
    title: "AI-first internal tools",
    description:
      "We get excited about designing AI assistants that automate workflows, reduce context switching, and give teams intelligent nudges.",
  },
  {
    title: "Beautiful dashboards and UX for complex analytics",
    description:
      "Polished, responsive dashboards that distill complex analytics into graceful stories for every stakeholder.",
  },
  {
    title: "End-to-end delivery from data seeding to deployment",
    description:
      "From cleaning raw data to shipping production-ready services, we own the full stack so ideas don’t stall in handoffs.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="mr-3 h-8 w-8 text-slate-200" />
            <h2 className="text-3xl md:text-4xl font-bold">What Excites Us</h2>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Themes that light up the team and keep every sprint focused on meaningful, reliable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <Card
              key={interest.title}
              className="bg-slate-900/80 border border-slate-800/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20 smooth-transition"
            >
              <CardHeader>
                <CardTitle className="text-lg text-slate-50">{interest.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
