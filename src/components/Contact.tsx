"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const contactEmail = "pixelpulsedevs45@gmail.com";
const contactPhone = "7617662849";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Let&apos;s Collaborate</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We are available for team-based AI/ML engagements, mentoring, and full-stack product
            delivery.
          </p>
        </div>

        <Card className="mx-auto max-w-xl bg-slate-900/80 border border-slate-800/60 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-sm">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-sky-400 mt-0.5" />
              <div>
                <p className="font-medium text-slate-100">Email</p>
                <p className="text-slate-300">{contactEmail}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-sky-400 mt-0.5" />
              <div>
                <p className="font-medium text-slate-100">Phone</p>
                <p className="text-slate-300">{contactPhone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-sky-400 mt-0.5" />
              <div>
                <p className="font-medium text-slate-100">Location</p>
                <p className="text-slate-300">
                  India - collaborating remotely on AI, ML &amp; web products.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
