import React from 'react';
import { Code, Database, Wrench, Terminal } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["JavaScript", "TypeScript", "C++", "SQL"]
    },
    {
      title: "Frameworks",
      icon: <Terminal size={24} />,
      skills: ["React", "Next.js", "Node.js", "Express", "React Native"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: ["Git", "Docker", "AWS", "CI/CD"]
    }
  ];

  return (
    <Section title="Skills" icon={<Code size={32} />} className="bg-[#F7F9FC]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[#4ECDC4]">{category.icon}</div>
              <h3 className="text-xl font-semibold text-[#1A202C]">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#F7F9FC] text-[#4A5568] px-3 py-1 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}