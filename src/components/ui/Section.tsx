import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  icon: React.ReactNode;
}

export function Section({ children, className = '', title, icon }: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-10 animate-slide-left">
          <div className="text-[#FF6B6B] animate-float">{icon}</div>
          <h2 className="text-3xl font-bold text-[#1A202C]">{title}</h2>
        </div>
        <div className="stagger-animation">
          {children}
        </div>
      </div>
    </section>
  );
}