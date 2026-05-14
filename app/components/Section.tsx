interface SectionProps {
  id?: string;
  heading?: string;
  subheading?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  heading,
  subheading,
  children,
  className = '',
}: SectionProps) {
  const hasBgClass = className.includes('bg-');
  const isTextCenter = className.includes('text-center');
  
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-28 ${!hasBgClass ? 'bg-white dark:bg-slate-900' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {heading && (
          <div className={`mb-16 md:mb-20 animate-fade-up ${isTextCenter ? 'text-center' : ''}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 dark:text-white mb-6 leading-[1.2] tracking-tight">
              {heading}
            </h2>
            {subheading && (
              <p className={`text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light ${isTextCenter ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
