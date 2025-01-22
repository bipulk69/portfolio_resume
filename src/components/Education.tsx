import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export default function Education() {
  return (
    <Section title="Education" icon={<GraduationCap size={32} />}>
      <Card className="max-w-2xl mx-auto p-8">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-[#1A202C] mb-1">B.Tech in Computer Science</h3>
            <p className="text-lg text-[#4A5568]">Shivalik College of Engineering</p>
          </div>
          <div className="text-right">
            <p className="text-[#4ECDC4] font-medium">2019 - 2023</p>
            <p className="text-[#A0AEC0]">Dehradun, Uttarakhand</p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
