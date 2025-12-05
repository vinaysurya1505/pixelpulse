import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const highlights = [
  {
    title: "Top 5% of Batch - IIT Madras BS in Data Science & Programming",
    person: "Aqdas Khan",
    year: "2023–2027",
    description:
      "Consistent academic performance across core math, programming, and data science coursework.",
  },
  {
    title: "Best Capstone Project - Business Data Management",
    person: "Vinay Kasaudhan",
    year: "2025",
    description:
      "Awarded for an end-to-end business data management solution delivering actionable insights.",
  },
  {
    title: "Engage2Value Competition - Rank 22/1700+",
    person: "Akshay K Upadhyay",
    year: "2025",
    description:
      "High-scoring Kaggle-style challenge on predicting purchase value using advanced feature engineering.",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Award className="mr-3 h-8 w-8 text-sky-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Team Highlights</h2>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Some milestones that reflect our rigour, competitiveness, and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="bg-slate-900/80 border-slate-700/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20 smooth-transition"
            >
              <CardHeader>
                <CardTitle className="text-base font-semibold text-slate-50">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-sky-300 mb-1">{item.person}</p>
                <p className="text-xs text-slate-400 mb-3">{item.year}</p>
                <p className="text-sm text-slate-300 mb-4">{item.description}</p>
                <Badge className="bg-sky-600/80 border border-sky-400/60 text-slate-50 text-[11px]">
                  Achievement
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
