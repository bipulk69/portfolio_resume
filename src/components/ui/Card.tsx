import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 
        transform hover:-translate-y-1 hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  );
}