import type { Metadata } from "next";
import Image from "next/image";
import Clock from "lucide-react/dist/esm/icons/clock";
import Mail from "lucide-react/dist/esm/icons/mail";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Phone from "lucide-react/dist/esm/icons/phone";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/Accordion";
import { socialIcons } from "@/components/icons";
import { contactInfo, faqs, pageHeroes, socials } from "@/data/site";
import { blurProps } from "@/lib/blur";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Start your project with Orbit Soft Lab. Reach our UAE and Pakistan offices or send us a message.",
  path: "/contact",
  image: "/images/page-contact.webp",
});

export default function ContactPage() {
  const cards = [
    { icon: Mail, label: "Email", lines: [contactInfo.email], href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: "Phone", lines: [contactInfo.phone], href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
    ...contactInfo.offices.map((o) => ({ icon: MapPin, label: o.name, lines: [o.address], href: undefined })),
    { icon: Clock, label: "Working Hours", lines: [contactInfo.hours], href: undefined },
  ];

  return (
    <PageShell>
      <PageHero {...pageHeroes.contact} crumbs={[{ label: "Contact" }]} />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="glow -left-40 top-1/3 h-[420px] w-[420px]" />
        <div className="container-x relative grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {cards.map((c) => {
                const body = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime text-ink">
                      <c.icon size={22} />
                    </span>
                    <div>
                      <p className="font-heading text-[16px] font-semibold">{c.label}</p>
                      {c.lines.map((l) => (
                        <p key={l} className="mt-1 text-[14px] leading-6 text-body">
                          {l}
                        </p>
                      ))}
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="card flex gap-4 rounded-[18px] p-5 transition hover:border-lime/60">
                    {body}
                  </a>
                ) : (
                  <div key={c.label} className="card flex gap-4 rounded-[18px] p-5">
                    {body}
                  </div>
                );
              })}
            </div>

            <div className="relative mt-4 h-[200px] overflow-hidden rounded-[18px] border border-lime/25">
              <Image
                src={contactInfo.mapImage}
                alt="Night map view showing our office locations"
                fill
                sizes="(min-width: 1292px) 500px, (min-width: 1024px) calc(42vw - 40px), calc(100vw - 40px)"
                className="object-cover" {...blurProps(contactInfo.mapImage)} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {contactInfo.offices.map((o) => (
                  <span key={o.name} className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] text-white">
                    <MapPin size={13} className="text-lime" /> {o.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="eyebrow">Follow us</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((s) => {
                  const Icon = socialIcons[s.icon as keyof typeof socialIcons];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/80 transition hover:bg-lime hover:text-ink"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="relative overflow-hidden pb-24 sm:pb-32">
        <div className="container-x max-w-[900px]">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Before you <span className="text-lime">ask</span>
              </>
            }
          />
          <Accordion items={faqs.slice(0, 5)} className="mt-14" />
        </div>
      </section>
    </PageShell>
  );
}
