import React from 'react';

export function ProfileImage() {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#333] to-[#666] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400"
        alt="Bipul Kumar"
        className="relative w-32 h-32 rounded-2xl object-cover transform group-hover:scale-[1.02] transition duration-500"
      />
    </div>
  );
}