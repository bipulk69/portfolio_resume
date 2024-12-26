import React from 'react';
import { SocialLinks } from './header/SocialLinks';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full animate-float"
            style={{
              backgroundImage: `linear-gradient(45deg, #333 25%, transparent 25%), 
                               linear-gradient(-45deg, #333 25%, transparent 25%), 
                               linear-gradient(45deg, transparent 75%, #333 75%), 
                               linear-gradient(-45deg, transparent 75%, #333 75%)`,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 stagger-animation">
          <div className="space-y-4">
           
            <h1 className="text-7xl font-bold text-white tracking-tight leading-none animate-slide-right">
              Bipul Kumar
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mx-auto animate-fade-in"></div>
          </div>

          <p className="text-[#999999] text-lg tracking-wider uppercase animate-slide-left">
              Full Stack Develope
            </p>

          <div className="flex flex-col items-center gap-8 animate-fade-in">
            <div className="flex items-center gap-6">
              <a
                href="mailto:bipulkumarb6@gmail.com"
                className="px-8 py-3 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
              </a>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-50 hover:opacity-100 transition-opacity cursor-pointer animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </header>
  );
}
