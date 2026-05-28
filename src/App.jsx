import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Phone,
  Server,
  Database,
  Bot,
  Mic2,
  Layers3,
  Sparkles,
  Menu,
} from "lucide-react";

const projects = [
  {
    title: "Armonización Amorosa",
    description:
      "Sitio web comercial orientado a presencia digital, presentación de servicios y captación de usuarios.",
    stack: ["React", "Web", "SEO", "Responsive"],
    link: "https://armonizacionamorosa.com/",
  },
  {
    title: "Centro Esotérico Internacional",
    description:
      "Página web para servicios, información comercial y contacto directo con clientes.",
    stack: ["Frontend", "UX", "Responsive", "Integración"],
    link: "https://centroesotericointernacional.com/",
  },
  {
    title: "SEATNY",
    description:
      "Proyecto web corporativo para marca con enfoque comercial, presencia digital y experiencia visual limpia.",
    stack: ["Web", "UI", "Branding", "Performance"],
    link: "https://seatny.com/",
  },
  {
    title: "The Industry of Dreams",
    description:
      "Sitio web desarrollado para fortalecer presencia digital, identidad visual y comunicación de marca.",
    stack: ["Web Design", "Frontend", "Responsive", "UI"],
    link: "https://theindustryofdreams.com/",
  },
  {
    title: "Sistema de clonación de voz",
    description:
      "Sistema con ElevenLabs para clonar voz en tiempo real e integrarla en flujos automatizados de audio.",
    stack: ["Node.js", "ElevenLabs", "APIs", "Audio"],
    link: "#contacto",
  },
  {
    title: "Bot conversacional con IA",
    description:
      "Bot que contesta llamadas y conversa mediante Gemini API, micrófonos virtuales, bocinas virtuales y WhatsApp.",
    stack: ["Gemini API", "Node.js", "WhatsApp", "Microservicios"],
    link: "#contacto",
  },
];

const skills = [
  { icon: Code2, title: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind", "Responsive UI"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", "APIs REST", "JWT", "Microservicios"] },
  { icon: Database, title: "Base de datos", items: ["MySQL", "Consultas SQL", "Modelado relacional", "Optimización básica"] },
  { icon: Layers3, title: "Herramientas", items: ["Git", "GitHub", "Docker", "Postman", "Integración de APIs"] },
];

const stats = [
  { value: "+2", label: "años de experiencia" },
  { value: "+6", label: "proyectos destacados" },
  { value: "Full", label: "stack developer" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Github({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-xs font-medium text-stone-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 shadow-sm">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

export default function PortfolioAndresMarin() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f2eb] text-stone-950 antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        .noise {
          background-image: radial-gradient(#1c191711 0.7px, transparent 0.7px);
          background-size: 18px 18px;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 noise opacity-60" />
      <div className="pointer-events-none fixed left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/50 blur-3xl" />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/70 bg-[#f6f2eb]/80 px-4 py-3 shadow-sm backdrop-blur-xl">
          <a href="#inicio" className="group flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-stone-950 text-sm font-black text-white transition-transform duration-300 group-hover:rotate-3">
              AM
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold">Andrés Marin</p>
              <p className="text-xs text-stone-500">Full Stack Developer</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
            <a className="transition hover:text-stone-950" href="#sobre-mi">Sobre mí</a>
            <a className="transition hover:text-stone-950" href="#habilidades">Habilidades</a>
            <a className="transition hover:text-stone-950" href="#proyectos">Proyectos</a>
            <a className="transition hover:text-stone-950" href="#contacto">Contacto</a>
          </div>

          <a
            href="mailto:andresmg0709@gmail.com"
            className="hidden rounded-full bg-stone-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800 md:inline-flex"
          >
            Hablemos
          </a>

          <button className="rounded-xl border border-stone-200 bg-white p-2 md:hidden" aria-label="Abrir menú">
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <section id="inicio" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-20 pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
            <motion.div variants={fadeUp} transition={{ duration: 0.55 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-stone-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Disponible para proyectos freelance y oportunidades tech
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-stone-950 sm:text-6xl lg:text-7xl"
            >
              Construyo soluciones web completas, limpias y escalables.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-stone-600"
            >
              Soy Andrés Marin, Full Stack Developer en Medellín. Desarrollo interfaces modernas,
              backends con Node.js, APIs REST, paneles administrativos, automatizaciones e
              integraciones con IA, voz y WhatsApp.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.65 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#proyectos"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-stone-950/10 transition duration-300 hover:-translate-y-1 hover:bg-stone-800"
              >
                Ver proyectos
                <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/Muertex24"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white/80 px-6 py-3 text-sm font-bold text-stone-900 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-stone-300"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.65 }} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/70 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <p className="text-2xl font-black tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-white/70" />
            <div className="relative rounded-[2rem] border border-white/80 bg-[#191714] p-5 text-white shadow-2xl shadow-stone-950/20">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-4 font-mono text-sm leading-7 text-stone-300">
                <p><span className="text-stone-500">const</span> developer = &#123;</p>
                <p className="pl-5"><span className="text-stone-500">name:</span> "Andrés Marin",</p>
                <p className="pl-5"><span className="text-stone-500">role:</span> "Full Stack Developer",</p>
                <p className="pl-5"><span className="text-stone-500">stack:</span> ["React", "Node", "MySQL", "Docker"],</p>
                <p className="pl-5"><span className="text-stone-500">focus:</span> "APIs, IA, automatización",</p>
                <p>&#125;;</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                  <Bot className="mb-3 h-6 w-6 text-white" />
                  <p className="text-sm font-semibold">Bots con IA</p>
                  <p className="mt-1 text-xs text-stone-400">Gemini + WhatsApp</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                  <Mic2 className="mb-3 h-6 w-6 text-white" />
                  <p className="text-sm font-semibold">Voz en tiempo real</p>
                  <p className="mt-1 text-xs text-stone-400">ElevenLabs API</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="sobre-mi" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-sm backdrop-blur"
          >
            <SectionLabel>Sobre mí</SectionLabel>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
              Desarrollo desde la idea hasta el producto funcional.
            </h2>
            <p className="mt-5 leading-8 text-stone-600">
              Tengo 2 años de experiencia como desarrollador web independiente, trabajando con clientes reales y creando soluciones que conectan diseño, frontend, backend, bases de datos y servicios externos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {["Integración de múltiples APIs", "Paneles administrativos", "Automatización de procesos", "Microservicios", "Autenticación con JWT", "Soluciones con IA aplicada"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/70 bg-white/60 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/80">
                <div className="mb-4 h-10 w-10 rounded-2xl bg-stone-950" />
                <p className="font-bold text-stone-950">{item}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Enfoque práctico para crear herramientas útiles, escalables y orientadas a resultados.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="habilidades" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="mb-10 max-w-2xl">
          <SectionLabel>Stack técnico</SectionLabel>
          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            Tecnologías para construir productos completos.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/85"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-stone-950 text-white transition duration-300 group-hover:rotate-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black">{skill.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="proyectos" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Proyectos</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Trabajo real, soluciones funcionales y productos web.
            </h2>
          </div>
          <a
            href="mailto:andresmg0709@gmail.com"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-bold shadow-sm transition duration-300 hover:-translate-y-1"
          >
            Proponer proyecto
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-stone-950/5"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#d8cfc0] ring-1 ring-stone-950/5" />
                  <a
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                    className="grid h-10 w-10 place-items-center rounded-full border border-stone-200 bg-white text-stone-950 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="text-2xl font-black tracking-[-0.04em]">{project.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{project.description}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contacto" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="rounded-[2.5rem] border border-white/70 bg-stone-950 p-6 text-white shadow-2xl shadow-stone-950/15 md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">
                Contacto
              </div>
              <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                ¿Construimos algo útil, moderno y escalable?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
                Escríbeme para desarrollar sitios web, paneles administrativos, automatizaciones, integraciones con APIs o soluciones con inteligencia artificial.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="space-y-4">
                <a href="mailto:andresmg0709@gmail.com" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-semibold">andresmg0709@gmail.com</span>
                </a>
                <a href="tel:+573116461512" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
                  <Phone className="h-5 w-5" />
                  <span className="text-sm font-semibold">311 646 1512</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-semibold">Medellín, Colombia</span>
                </div>
                <a href="https://github.com/Muertex24" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
                  <Github className="h-5 w-5" />
                  <span className="text-sm font-semibold">github.com/Muertex24</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 pb-10 text-sm text-stone-500 md:flex-row">
        <p>© 2026 Andrés Marin. Todos los derechos reservados.</p>
        <p>Diseñado con React, Tailwind y microinteracciones suaves.</p>
      </footer>
    </main>
  );
}
