import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';

const socialLinks = [
  { icon: <Github size={24} />, url: "https://github.com/bipulk69", label: "GitHub" },
  { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/bipulk06/", label: "LinkedIn" },
  { icon: <Code2 size={24} />, url: "https://leetcode.com/u/bipulk06/", label: "LeetCode" }
];

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map(({ icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-[#FF6B6B] transform hover:scale-110 transition-all"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}