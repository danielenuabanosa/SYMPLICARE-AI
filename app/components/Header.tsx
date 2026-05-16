import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="hidden md:flex items-center border-b border-slate-200/50 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between w-full">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-slate-950 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:outline-none">
          Skip to main content
        </a>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5ba3c4] to-[#5b5bde] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <Image src="/logo2.jpeg" alt="SympliCare AI Logo" width={40} height={40} className="rounded-xl w-full h-full object-cover" />
          </div>
          <span className="font-bold text-slate-950 text-base tracking-tight">
            SympliCare <span className="gradient-text">AI</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {[['/', 'Home'], ['/about', 'About'], ['/careers', 'Careers']].map(([href, label]) => (
            <Link key={href} href={href}
              className="text-slate-700 hover:text-slate-950 transition-colors font-medium text-sm relative px-3 py-2 rounded-lg hover:bg-slate-100/50 group">
              {label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-[#5ba3c4] to-[#d16ba0] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          <Link href="/contact"
            className="btn-gradient text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md ml-2 hover:shadow-lg transition-all">
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}

