import Image from "next/image";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Twitter from "lucide-react/dist/esm/icons/twitter";
import SectionHeading from "./SectionHeading";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";
import { team } from "@/data/site";
import { blurProps } from "@/lib/blur";

// Social buttons are revealed on hover only where hovering is possible; touch devices always see them.
const social =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 transition-[background-color,color,opacity,transform] duration-300 hover:bg-lime hover:text-ink [@media(hover:hover)]:translate-y-3 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:translate-y-0 [@media(hover:hover)]:group-focus-within:opacity-100";

export default function Team() {
  return (
    <section id="team" className="cv-auto [contain-intrinsic-size:auto_700px] relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Team"
          title={
            <>
              Meet our <span className="text-lime">team</span>
            </>
          }
          text="Industry veterans and visionaries driving innovation forward"
        />

        <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <div className="card group flex h-full flex-col items-center px-8 py-10 text-center transition duration-300 hover:-translate-y-1.5 hover:border-lime/60 hover:shadow-lime">
                <div className="relative h-[127px] w-[127px] p-2">
                  {/* lime ring draws around the photo on hover */}
                  <svg viewBox="0 0 127 127" className="ring-draw absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
                    <circle cx="63.5" cy="63.5" r="57" fill="none" stroke="rgba(178,236,54,0.2)" strokeWidth="2" style={{ strokeDashoffset: 0 }} />
                    <circle cx="63.5" cy="63.5" r="57" fill="none" stroke="#B2EC36" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <div className="relative h-[111px] w-[111px] overflow-hidden rounded-full">
                    <Image src={m.photo} alt={m.name} fill sizes="111px" className="object-cover transition-transform duration-500 group-hover:scale-105" {...blurProps(m.photo)} />
                  </div>
                </div>
                <h3 className="mt-6 font-heading text-[20px] font-semibold">{m.name}</h3>
                <p className="mt-1 text-[16px] text-lime">{m.role}</p>
                <p className="mt-2 text-[14px] text-body">{m.focus}</p>
                <div className="mt-8 flex gap-3">
                  <a href="#" aria-label={`${m.name} on LinkedIn`} className={social}>
                    <Linkedin size={16} />
                  </a>
                  <a href="#" aria-label={`${m.name} on Twitter`} className={`${social} [@media(hover:hover)]:group-hover:delay-75`}>
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
