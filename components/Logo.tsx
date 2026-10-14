import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2 ${className}`} aria-label="Orbit Soft Lab">
      <svg width="44" height="42" viewBox="0 0 44 42" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="orbitGrad" x1="0" y1="0" x2="44" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#72CD32" />
            <stop offset="1" stopColor="#B2EC36" />
          </linearGradient>
        </defs>
        <path
          className="logo-ring"
          d="M30.5 9.5C33 13 32 19 27.5 23.5C22 29 14.5 30.5 10.5 26.5C7 23 8 17 12.5 12.5C17.5 7.5 25 6 29 9"
          stroke="url(#orbitGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle className="logo-dot" cx="34.5" cy="7.5" r="4" fill="#B2EC36" />
      </svg>
      <span className="font-heading text-[22px] font-semibold leading-none tracking-tight">
        Orbit
        <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-body">Soft Lab</span>
      </span>
    </Link>
  );
}
