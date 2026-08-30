import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Hammer,
  Wrench,
  Route as RouteIcon,
  LandPlot,
  PackageSearch,
  ClipboardCheck,
  Home,
  Settings2,
  Sparkles,
  Flame,
  Cctv,
  Zap,
  Plug,
  Cog,
  Laptop,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import logo from "@/assets/sanogo-logo.png";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { useCounters, useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanogo Group & Co. — Construction & Technical Services, Abidjan" },
      {
        name: "description",
        content:
          "Sanogo Group & Co. delivers construction, renovation, VRD, industrial electricity, security and maintenance services across Abidjan, Côte d'Ivoire.",
      },
      { property: "og:title", content: "Sanogo Group & Co. — Construction & Technical Services" },
      {
        property: "og:description",
        content:
          "Building, rehabilitation, roads & networks, fire safety, industrial maintenance and technical assistance in Abidjan, Côte d'Ivoire.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Building Construction",
    text: "New residential and commercial buildings, from technical planning to execution and completion.",
  },
  {
    icon: Hammer,
    title: "Major & Secondary Works",
    text: "Structural and secondary works handled with attention to quality, functionality and durability.",
  },
  {
    icon: Wrench,
    title: "Rehabilitation & Renovation",
    text: "Structural repairs, modernisation and adaptation of existing spaces to new requirements.",
  },
  {
    icon: RouteIcon,
    title: "Roads & Networks (VRD)",
    text: "Voirie et Réseaux Divers — roads, infrastructure networks and site development works.",
  },
  {
    icon: LandPlot,
    title: "Land Development",
    text: "Site preparation and development solutions supporting construction and real-estate projects.",
  },
  {
    icon: PackageSearch,
    title: "Materials & Equipment",
    text: "Sale and supply of construction materials and equipment for project teams and clients.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Assistance",
    text: "Advice, planning support and practical construction consulting for informed decisions.",
  },
  {
    icon: Home,
    title: "Real Estate Services",
    text: "Real-estate management and related services for property owners and clients.",
  },
  {
    icon: Settings2,
    title: "Building Maintenance",
    text: "Facility maintenance preserving the performance, safety and functionality of installations.",
  },
  {
    icon: Sparkles,
    title: "Cleaning & Facility",
    text: "Professional cleaning and upkeep keeping buildings clean, functional and presentable.",
  },
  {
    icon: Flame,
    title: "Fire Safety & Protection",
    text: "Extinguishers, fire protection networks, detection systems and safety installations.",
  },
  {
    icon: Cctv,
    title: "Electronic Security",
    text: "Video surveillance and access-control systems that strengthen building security.",
  },
  {
    icon: Plug,
    title: "Generator Installation",
    text: "Reliable power supply and backup-power installation for all types of facilities.",
  },
  {
    icon: Zap,
    title: "Industrial Electricity",
    text: "Installation and technical support for electrical systems in industrial environments.",
  },
  {
    icon: Cog,
    title: "Industrial Maintenance",
    text: "Keeping equipment and installations reliable, efficient and operationally sound.",
  },
  {
    icon: Laptop,
    title: "IT & Office Equipment",
    text: "Supply of computer equipment, office equipment and related technical services.",
  },
];

const EXPERTISE = [
  "Building Construction",
  "Major & Secondary Works",
  "Rehabilitation & Renovation",
  "Roads & Networks (VRD)",
  "Land Development",
  "Construction Materials",
  "Technical Assistance",
  "Real Estate Management",
  "Building Maintenance",
  "Cleaning Services",
  "Fire Safety Systems",
  "Video Surveillance",
  "Access Control",
  "Generator Installation",
  "Industrial Electricity",
  "Industrial Maintenance",
  "IT & Office Equipment",
];

const APPROACH = [
  { n: "01", title: "Planning", text: "We listen, survey and define scope, budget and technical requirements." },
  { n: "02", title: "Engineering", text: "Technical studies and method statements before a single block is laid." },
  { n: "03", title: "Execution", text: "Responsible site management, qualified teams and strict safety discipline." },
  { n: "04", title: "Handover & Care", text: "Clean delivery, documentation and ongoing maintenance support." },
];

const PROJECTS = [
  { img: project1, tag: "Building Construction", title: "Multi-storey residential structure" },
  { img: project2, tag: "Roads & Networks (VRD)", title: "Site access and drainage network" },
  { img: project3, tag: "Industrial Electricity", title: "Power distribution installation" },
];

function HomePage() {
  useReveal();
  useCounters();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="hidden bg-ink text-ink-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-xs">
          <div className="flex items-center gap-6 text-ink-foreground/70">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5 text-primary" /> Abidjan, Côte d'Ivoire
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-3.5 text-primary" /> sanogogroup@gmail.com
            </span>
          </div>
          <span className="inline-flex items-center gap-2 font-semibold">
            <Phone className="size-3.5 text-primary" /> +225 07 00 88 98 89
          </span>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 shadow-[var(--shadow-soft)] backdrop-blur-xl" : "bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="flex items-center">
            <img src={logo.url} alt="Sanogo Group & Co." className="h-10 w-auto" width={220} height={90} />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="story-link text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-lift)] sm:inline-flex"
            >
              Get a Quote <ArrowUpRight className="size-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex size-11 items-center justify-center border border-border text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="animate-fade-in border-t border-border bg-background px-6 pb-6 lg:hidden">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 text-sm font-semibold text-foreground/80"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden surface-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 size-[420px] rounded-full bg-primary/20 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div className="reveal">
            <span className="eyebrow">Since day one in Abidjan</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink-foreground sm:text-6xl">
              Construction &amp; technical
              <span className="block text-primary">services you can build on</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70">
              Sanogo Group &amp; Co. combines local expertise, engineering knowledge and disciplined project
              management to deliver construction, renovation, infrastructure and technical solutions across Côte
              d'Ivoire.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
              >
                Explore Services <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-ink-foreground/25 px-7 py-4 text-sm font-bold text-ink-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                Talk to our team
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-foreground/15 pt-8">
              {[
                { v: 16, s: "+", l: "Service lines" },
                { v: 100, s: "%", l: "Client focus" },
                { v: 24, s: "/7", l: "Technical support" },
              ].map((stat) => (
                <div key={stat.l}>
                  <dt className="text-3xl font-extrabold text-primary">
                    <span data-count={stat.v}>0</span>
                    {stat.s}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-ink-foreground/55">{stat.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal relative">
            <div aria-hidden className="absolute -left-5 -top-5 hidden h-28 w-28 border-4 border-primary sm:block" />
            <img
              src={heroImg}
              alt="Sanogo Group engineers reviewing construction plans on site in Abidjan"
              width={1408}
              height={1104}
              className="relative w-full object-cover shadow-[var(--shadow-soft)]"
            />
            <div className="animate-float-slow absolute -bottom-6 left-6 bg-primary px-6 py-5 text-primary-foreground shadow-[var(--shadow-lift)]">
              <p className="text-2xl font-extrabold leading-none">VRD · BTP</p>
              <p className="mt-1 text-xs uppercase tracking-widest opacity-85">Abidjan, Côte d'Ivoire</p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-ink-foreground/10 bg-ink-2 py-4">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
            {[...EXPERTISE, ...EXPERTISE].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="inline-flex items-center gap-10 text-sm font-semibold uppercase tracking-widest text-ink-foreground/45"
              >
                {item}
                <span className="size-1.5 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <img
              src={aboutImg}
              alt="Sanogo Group team with building plans in front of a construction project"
              loading="lazy"
              width={1000}
              height={1200}
              className="w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-4 hidden bg-ink px-8 py-7 text-ink-foreground shadow-[var(--shadow-soft)] sm:block">
              <p className="text-4xl font-extrabold text-primary">17</p>
              <p className="mt-1 max-w-[9rem] text-xs uppercase tracking-widest text-ink-foreground/60">
                Areas of expertise
              </p>
            </div>
          </div>

          <div className="reveal">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A construction and technical services company built on expertise.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Based in Abidjan, Sanogo Group &amp; Co. provides comprehensive construction, renovation, engineering,
              maintenance and technical solutions for residential, commercial and other development projects.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our activities span planning and execution through to renovation, maintenance and technical assistance —
              so a project stays with one accountable partner from start to long-term care.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Strong technical planning",
                "Quality workmanship",
                "Responsible project management",
                "Clear, direct communication",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 border border-border bg-card px-4 py-3 text-sm font-semibold">
                  <span className="size-2 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 bg-ink px-7 py-4 text-sm font-bold text-ink-foreground transition-transform duration-300 hover:-translate-y-1"
            >
              Start a project <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="surface-ink py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink-foreground sm:text-4xl">
              Sixteen service lines, one accountable partner.
            </h2>
          </div>

          <div className="mt-14 grid gap-px bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <article
                key={service.title}
                className="reveal group relative bg-ink p-8 transition-colors duration-300 hover:bg-ink-2"
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <span className="absolute right-6 top-6 text-xs font-bold text-ink-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <service.icon className="size-8 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
                <h3 className="mt-6 text-lg font-bold text-ink-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/60">{service.text}</p>
                <span className="mt-6 block h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-14" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">Our approach</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">How a Sanogo project runs.</h2>
          <p className="mt-4 text-muted-foreground">
            Successful construction is built on strong planning, technical expertise, quality workmanship and clear
            communication at every stage.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((step, i) => (
            <div
              key={step.n}
              className="reveal group border-t-2 border-border pt-6 transition-colors duration-300 hover:border-primary"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-5xl font-extrabold text-border transition-colors duration-300 group-hover:text-primary">
                {step.n}
              </p>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow">Capabilities in the field</span>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Work that speaks for itself.</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
              Request our references <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <figure
                key={project.title}
                className="reveal group relative overflow-hidden"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-7">
                  <span className="bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground">
                    {project.tag}
                  </span>
                  <p className="mt-3 text-lg font-bold text-ink-foreground">{project.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <span className="eyebrow">Main areas of expertise</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Everything a site needs, under one roof.</h2>
            <p className="mt-4 text-muted-foreground">
              From foundations to fire safety, surveillance to industrial maintenance — a single team coordinating the
              technical trades your project depends on.
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-3 self-center">
            {EXPERTISE.map((item) => (
              <span
                key={item}
                className="border border-border px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal surface-ink relative overflow-hidden px-8 py-16 text-center sm:px-16">
          <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl" />
          <span className="eyebrow">Our commitment</span>
          <h2 className="relative mt-4 text-3xl font-extrabold text-ink-foreground sm:text-4xl">
            Quality, reliability and safety on every project.
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-ink-foreground/70">
            New construction, rehabilitation, infrastructure work, technical installation or maintenance — Sanogo Group
            &amp; Co. delivers dependable solutions adapted to each client's needs.
          </p>
          <a
            href="#contact"
            className="relative mt-9 inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
          >
            Discuss your project <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Let's talk about your project.</h2>
            <p className="mt-4 text-muted-foreground">
              Based in Abidjan and serving surrounding areas, our team is available for construction, technical and
              maintenance enquiries.
            </p>
            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+225 07 00 88 98 89", href: "tel:+2250700889889" },
                { icon: Mail, label: "Email", value: "sanogogroup@gmail.com", href: "mailto:sanogogroup@gmail.com" },
                { icon: MapPin, label: "Office", value: "Abidjan, Côte d'Ivoire" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 border border-border bg-card p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-bold transition-colors hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-bold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className="reveal surface-ink space-y-4 p-8 sm:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const body = `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`;
              window.location.href = `mailto:sanogogroup@gmail.com?subject=${encodeURIComponent(
                `Project enquiry — ${data.get("name")}`,
              )}&body=${encodeURIComponent(body)}`;
            }}
          >
            <h3 className="text-xl font-bold text-ink-foreground">Get in touch</h3>
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full border border-ink-foreground/15 bg-transparent px-4 py-3.5 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:border-primary focus:outline-none"
            />
            <input
              name="phone"
              placeholder="Phone or email"
              className="w-full border border-ink-foreground/15 bg-transparent px-4 py-3.5 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:border-primary focus:outline-none"
            />
            <select
              name="service"
              className="w-full border border-ink-foreground/15 bg-transparent px-4 py-3.5 text-sm text-ink-foreground focus:border-primary focus:outline-none"
            >
              {["Select a service", ...EXPERTISE].map((option) => (
                <option key={option} className="bg-ink">
                  {option}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us about your project"
              className="w-full border border-ink-foreground/15 bg-transparent px-4 py-3.5 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink py-12 text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <img src={logo.url} alt="Sanogo Group & Co." className="h-10 w-auto" width={220} height={90} />
          <p className="text-xs text-ink-foreground/50">
            © {new Date().getFullYear()} Sanogo Group &amp; Co. — Construction, Engineering &amp; Technical Services,
            Abidjan.
          </p>
        </div>
      </footer>
    </div>
  );
}
