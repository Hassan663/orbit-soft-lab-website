import Accordion from "./Accordion";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/data/site";

export default function FAQ() {
  return (
    <section id="faq" className="cv-auto [contain-intrinsic-size:auto_900px] relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <span className="text-lime">questions</span>
            </>
          }
          text="Find quick answers to common questions about our services, process, and how we work."
        />

        <Accordion items={faqs} columns={2} className="mt-16" />
      </div>
    </section>
  );
}
