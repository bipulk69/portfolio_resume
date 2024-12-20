import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export default function Projects() {
  const projects = [
    {
      name: "SustainInsight",
      description: "Carbon emissions calculation platform with real-time analytics and interactive dashboards. Built with Next.js, MongoDB, and Recoil.",
      technologies: ["TypeScript", "Next.js", "MongoDB", "Recoil", "Docker"],
      url: "https://prod.sustaininsight.com/"
    },
    {
      name: "Rider App",
      description: "Cross-platform delivery management app with real-time tracking and secure payments. Built with React Native and AWS.",
      technologies: ["React Native", "Redux", "Node.js", "MySQL"],
      url: "https://play.google.com/store/apps/details?id=com.ucleanlaundry"
    },
    {
      name: "Path Visualizer",
      description: "Interactive visualization of Dijkstra's algorithm with dynamic graph creation and step-by-step animation.",
      technologies: ["React", "TypeScript", "Algorithms"],
      url: "https://github.com/bipulk69/shortest-path/tree/main"
    }
  ];

  return (
    <Section title="Projects" icon={<FolderGit2 size={32} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold text-[#1A202C] mb-3">{project.name}</h3>
            <p className="text-[#4A5568] mb-4 flex-grow">{project.description}</p>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#F7F9FC] text-[#4ECDC4] text-sm px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#FF6B6B] hover:text-[#ff5252] font-medium transition-colors"
              >
                View Project →
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}