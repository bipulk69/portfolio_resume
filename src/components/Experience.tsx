import React from "react";
import { Briefcase } from "lucide-react";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";

export default function Experience() {
  const experiences = [
    {
      company: "Greensturn",
      role: "Software Developer",
      period: "05/2024 - Present",
      location: "Gurgaon, India",
      description: `Sustain Insight
        • Leading carbon emissions calculation platform for construction projects
        • Built RESTful APIs with Express and MongoDB
        • Implemented data visualization with Next.js and Recoil
        • Created interactive dashboards with real-time updates`,
    },
    {
      company: "Uclean",
      role: "Software Developer",
      period: "06/2022 - 05/2024",
      location: "Delhi, India",
      description: `Rider Management App
        • Built cross-platform mobile app with React Native
        • Implemented Redux state management
        • Integrated geolocation and payment systems
        • Deployed on AWS with CI/CD pipeline

        Store Website
        • Redesigned UI/UX for better engagement
        • Optimized backend with Sails.js
        • Enhanced PDF generation system
        • Built responsive interface with Angular`,
    },
  ];

  return (
    <Section
      title="Experience"
      icon={<Briefcase size={32} />}
      className="bg-[#F7F9FC]"
    >
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1A202C] mb-1">
                  {exp.company}
                </h3>
                <p className="text-lg text-[#4A5568]">{exp.role}</p>
              </div>
              <div className="text-right">
                <p className="text-[#4ECDC4] font-medium">{exp.period}</p>
                <p className="text-[#A0AEC0]">{exp.location}</p>
              </div>
            </div>
            <div className="space-y-2 text-[#4A5568]">
              {exp.description.split("\n").map((line, i) => (
                <p key={i} className="leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
