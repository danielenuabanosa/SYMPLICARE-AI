interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accent?: 'teal' | 'pink' | 'indigo' | 'violet' | 'rose';
}

const accentStyles = {
  teal:   { bar: 'bg-gradient-to-r from-[#5ba3c4] to-[#4a8bad]', icon: 'bg-[#ddf2ff] text-[#5ba3c4]', border: 'hover:border-[#5ba3c4]', shadow: 'group-hover:shadow-lg group-hover:shadow-[#5ba3c4]/10' },
  pink:   { bar: 'bg-gradient-to-r from-[#d16ba0] to-[#b14d80]', icon: 'bg-[#fbe6f0] text-[#d16ba0]', border: 'hover:border-[#d16ba0]', shadow: 'group-hover:shadow-lg group-hover:shadow-[#d16ba0]/10' },
  indigo: { bar: 'bg-gradient-to-r from-[#5b5bde] to-[#3d3d9f]', icon: 'bg-[#eef2ff] text-[#5b5bde]', border: 'hover:border-[#5b5bde]', shadow: 'group-hover:shadow-lg group-hover:shadow-[#5b5bde]/10' },
  violet: { bar: 'bg-gradient-to-r from-[#7c3aed] to-[#6d28d9]', icon: 'bg-[#f5f3ff] text-[#7c3aed]', border: 'hover:border-[#7c3aed]', shadow: 'group-hover:shadow-lg group-hover:shadow-[#7c3aed]/10' },
  rose:   { bar: 'bg-gradient-to-r from-[#f43f5e] to-[#e11d48]', icon: 'bg-[#fff1f2] text-[#f43f5e]', border: 'hover:border-[#f43f5e]', shadow: 'group-hover:shadow-lg group-hover:shadow-[#f43f5e]/10' },
};

export default function Card({ title, description, icon, accent = 'teal' }: CardProps) {
  const a = accentStyles[accent];
  return (
    <div className={`relative group bg-white border border-slate-200 rounded-2xl p-6 md:p-7 transition-all duration-300 ${a.border} hover:-translate-y-1.5 ${a.shadow} overflow-hidden`}>
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${a.bar} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {icon && (
        <div className={`mb-5 inline-flex items-center justify-center w-12 h-12 ${a.icon} rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-slate-950 transition-colors leading-snug">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-base">{description}</p>

      {/* Arrow on hover */}
      <div className="flex items-center gap-1 mt-5 text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-all duration-300">
        <span>Learn more</span>
        <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
      </div>
    </div>
  );
}
