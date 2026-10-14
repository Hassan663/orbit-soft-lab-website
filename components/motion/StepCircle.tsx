import Counter from "./Counter";

// Server component (Counter is the only client part). The lime arc draws once in view via CSS:
// 300 of the 465px circumference is drawn, matching the original static ring.
export function StepCircle({ n, delay = 0 }: { n: string; delay?: number }) {
  return (
    <div className="step-ring relative h-[156px] w-[156px]" data-io="" style={{ "--d": `${delay * 1000}ms` } as React.CSSProperties}>
      <svg viewBox="0 0 156 156" className="absolute inset-0 h-full w-full">
        <circle cx="78" cy="78" r="72" fill="#2a2c2b" />
        <circle
          className="step-arc"
          cx="78"
          cy="78"
          r="74"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="300 465"
          transform="rotate(-100 78 78)"
        />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#B2EC36" />
            <stop offset="1" stopColor="#72CD32" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute left-1 top-1 h-[37px] w-[37px] rounded-full bg-lime shadow-lime" />
      <span className="absolute inset-0 flex items-center justify-center font-heading text-[56px] font-semibold text-lime">
        <Counter value={n} duration={0.6} />
      </span>
    </div>
  );
}
