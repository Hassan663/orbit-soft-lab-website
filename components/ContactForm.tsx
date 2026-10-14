"use client";

import { useEffect, useState } from "react";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import Loader2 from "lucide-react/dist/esm/icons/loader-2";
import Send from "lucide-react/dist/esm/icons/send";
import XCircle from "lucide-react/dist/esm/icons/x-circle";
import { budgetRanges, services } from "@/data/site";

type Fields = { name: string; email: string; company: string; service: string; budget: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", company: "", service: "", budget: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.service) e.service = "Please choose a service.";
  if (!f.budget) e.budget = "Please choose a budget range.";
  if (f.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
  return e;
}


// placeholder text stays hidden until focus so the floating label can sit in its place
const inputCls =
  "peer w-full rounded-[12px] border bg-ink px-4 pb-2 pt-6 text-[15px] text-white outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-transparent focus:border-lime focus:shadow-[0_0_0_3px_rgba(178,236,54,0.18),0_0_24px_rgba(178,236,54,0.18)] focus:placeholder:text-white/35";

function Field({
  id,
  label,
  floated,
  multiline,
  children,
}: {
  id: string;
  label: string;
  floated?: boolean;
  multiline?: boolean;
  children: React.ReactNode;
}) {
  const resting = multiline
    ? "peer-placeholder-shown:top-5 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-white/50"
    : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-white/50";
  return (
    <div className="relative">
      {children}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 top-2 text-[11px] font-medium text-lime transition-all duration-200 ${
          floated ? "" : `${resting} peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-lime`
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [justSent, setJustSent] = useState(false);

  // show the check mark briefly, then return the button to its idle label
  useEffect(() => {
    if (!justSent) return;
    const t = setTimeout(() => setJustSent(false), 2500);
    return () => clearTimeout(t);
  }, [justSent]);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data: { success: boolean; message?: string; errors?: Errors } = await res.json();
      if (!res.ok || !data.success) {
        if (data.errors) setErrors(data.errors);
        setServerMsg(data.message ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setServerMsg(data.message ?? "Thanks! We will be in touch within one business day.");
      setStatus("success");
      setJustSent(true);
      setFields(empty);
    } catch {
      setServerMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const border = (k: keyof Fields) => (errors[k] ? "border-red-400/70" : "border-white/10");
  const err = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-[12px] text-red-400">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Fields) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="card rounded-[24px] p-6 sm:p-10">
      <h2 className="font-heading text-[24px] font-semibold uppercase">
        Tell us about your <span className="text-lime">project</span>
      </h2>
      <p className="mt-2 text-[14px] text-body">Fields marked * are required.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <Field id="name" label="Name *">
            <input id="name" value={fields.name} onChange={set("name")} placeholder="Your full name" autoComplete="name" className={`${inputCls} ${border("name")}`} {...aria("name")} />
          </Field>
          {err("name")}
        </div>
        <div>
          <Field id="email" label="Email *">
            <input id="email" type="email" value={fields.email} onChange={set("email")} placeholder="you@company.com" autoComplete="email" className={`${inputCls} ${border("email")}`} {...aria("email")} />
          </Field>
          {err("email")}
        </div>
        <div className="sm:col-span-2">
          <Field id="company" label="Company">
            <input id="company" value={fields.company} onChange={set("company")} placeholder="Company name (optional)" autoComplete="organization" className={`${inputCls} ${border("company")}`} />
          </Field>
        </div>
        <div>
          <Field id="service" label="Service *" floated>
            <select id="service" value={fields.service} onChange={set("service")} className={`${inputCls} ${border("service")}`} {...aria("service")}>
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">Other</option>
            </select>
          </Field>
          {err("service")}
        </div>
        <div>
          <Field id="budget" label="Budget *" floated>
            <select id="budget" value={fields.budget} onChange={set("budget")} className={`${inputCls} ${border("budget")}`} {...aria("budget")}>
              <option value="">Select a range</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </Field>
          {err("budget")}
        </div>
        <div className="sm:col-span-2">
          <Field id="message" label="Message *" multiline>
            <textarea id="message" rows={6} value={fields.message} onChange={set("message")} placeholder="Goals, timeline, links, anything that helps us understand the project" className={`${inputCls} ${border("message")} resize-y !pt-7`} {...aria("message")} />
          </Field>
          {err("message")}
        </div>
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary mt-8 w-full min-w-[200px] disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto">
        {/* three stacked labels cross-fade with CSS; only the active one is visible */}
        <span className="grid place-items-center [&>*]:[grid-area:1/1]">
          <span className={`btn-state ${status !== "loading" && !justSent ? "is-active" : ""}`}>
            Send Message <Send size={18} />
          </span>
          <span className={`btn-state ${status === "loading" ? "is-active" : ""}`} aria-hidden={status !== "loading"}>
            Sending <Loader2 size={20} className="animate-spin" />
          </span>
          <span className={`btn-state ${justSent ? "is-active" : ""}`} aria-hidden={!justSent}>
            Sent
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path className={justSent ? "check-draw" : undefined} d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </span>
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="animate-fade-up mt-6 flex items-start gap-3 rounded-[12px] border border-lime/40 bg-lime/10 p-4 text-[14px] text-white">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-lime" /> {serverMsg}
          </p>
        )}
        {status === "error" && (
          <p className="animate-fade-up mt-6 flex items-start gap-3 rounded-[12px] border border-red-400/40 bg-red-400/10 p-4 text-[14px] text-white">
            <XCircle size={20} className="mt-0.5 shrink-0 text-red-400" /> {serverMsg}
          </p>
        )}
      </div>
    </form>
  );
}
