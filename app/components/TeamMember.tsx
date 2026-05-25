"use client";

import { TeamMember as TeamMemberType } from "@/app/data/teamData";
import { useState } from "react";
import Image from "next/image";
import linkedInIcon from '@/app/assets/icons/linkedIn.png';

interface TeamMemberProps extends TeamMemberType {
  index?: number;
}

const accentGradients = [
  'from-[#77bdda] to-[#5a9bb3]',
  'from-[#6366f1] to-[#4338ca]',
  'from-[#ca86bc] to-[#aa60a0]',
  'from-[#8b5cf6] to-[#6d28d9]',
];

export default function TeamMember({ name, role, bio, photoUrl, yearsExp, expertiseAreas, linkedinUrl, index = 0 }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);
  const gradient = accentGradients[index % accentGradients.length];

  return (
    <div
      className={`group flex flex-col h-full rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        isHovered ? 'grad-border' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${gradient} transition-all duration-300 ${isHovered ? 'h-1.5' : ''}`} />

      {/* Photo Container */}
      <div className="relative overflow-hidden">
        <div className="aspect-square">
          <Image
            src={photoUrl}
            alt={name}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        {/* Years badge - always visible */}
        <div className="absolute top-3 right-3">
          <span className={`inline-block bg-gradient-to-r ${gradient} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
            {yearsExp}+ yrs
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5 leading-tight">{name}</h3>
          <p className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{role}</p>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">{bio}</p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {expertiseAreas.map((area, idx) => (
            <span key={idx}
              className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 border
                ${isHovered
                  ? `bg-gradient-to-r ${gradient} text-white border-transparent`
                  : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                }`}>
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* LinkedIn Link */}
      <div className={`px-5 py-4 border-t border-slate-100 dark:border-slate-700 flex items-center gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
          className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity group/link`}>
          <Image src={linkedInIcon} alt="LinkedIn" width={16} height={16} className="object-contain flex-shrink-0" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}

