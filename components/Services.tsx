import Image from "next/image";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import SectionHeading from "./SectionHeading";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";
import Tilt from "./motion/Tilt";
import { serviceIcons } from "./icons";
import { services } from "@/data/site";
import { blurProps } from "@/lib/blur";

export default function Services() {
  return (
    <section id="services" className="cv-auto [contain-intrinsic-size:auto_1400px] relative overflow-hidden py-24 sm:py-32">
      <div className="glow left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />
      <div className="glow left-10 top-[30%] h-[135px] w-[135px]" />
      <div className="glow right-10 bottom-[20%] h-[135px] w-[135px]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Everything you need to build <br className="hidden sm:block" />
              what <span className="text-lime">matters.</span>
            </>
          }
        />

        <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
            return (
              <StaggerItem key={s.title}>
              <Tilt as="article" className="card group h-full overflow-hidden rounded-[28px] bg-[#0f1110] transition-[border-color,box-shadow] duration-300 hover:border-lime hover:shadow-lime">
                {/* lime tab */}
                <div className="relative h-[100px]">
                  <div
                    className="absolute left-0 top-0 flex h-[100px] w-[114px] origin-top-left items-center justify-center bg-lime text-ink transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
                    style={{ clipPath: "polygon(0 0, 70% 0, 100% 100%, 0 100%)", borderTopLeftRadius: 28 }}
                  >
                    <Icon size={44} strokeWidth={1.75} className="-translate-x-2" />
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <h3 className="font-heading text-[20px] font-semibold">{s.title}</h3>
                  <p className="mt-3 min-h-[60px] text-[13px] leading-5 text-body">{s.text}</p>

                  <div className="relative mt-5 h-[174px] overflow-hidden rounded-[20px] rounded-tr-[90px] border border-lime/40">
                    <Image src={s.image} alt={s.title} fill sizes="(min-width: 1292px) 348px, (min-width: 1024px) calc(33vw - 70px), (min-width: 768px) calc(50vw - 88px), calc(100vw - 88px)" className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" {...blurProps(s.image)} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
                    <Link href={`/services/${s.slug}`} className="btn-small absolute bottom-4 left-4 z-20 group-hover:-translate-y-1">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Tilt>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
