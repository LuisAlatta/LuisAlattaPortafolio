"use client"
import * as React from "react"
import { Code2, PenTool, Rocket, Heart, ArrowUpRight, GraduationCap, Briefcase } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useRevealGroup } from "@/hooks/useReveal"

const highlights = [
    {
        icon: GraduationCap,
        title: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
        desc: { es: "Bases sólidas en algoritmos, redes y arquitectura de software.", en: "Solid foundations in algorithms, networks and software architecture." },
    },
    {
        icon: Code2,
        title: { es: "Código que se sostiene", en: "Code built to last" },
        desc: { es: "Código limpio y una arquitectura que puede crecer con tu proyecto.", en: "Clean code and architecture that can grow with your project." },
    },
    {
        icon: PenTool,
        title: { es: "Diseño con intención", en: "Intentional design" },
        desc: { es: "Interfaces claras, cuidadas y cómodas en cualquier pantalla.", en: "Considered, clear interfaces that feel right on every screen." },
    },
    {
        icon: Briefcase,
        title: { es: "Experiencia real", en: "Real experience" },
        desc: { es: "Webs corporativas, aplicaciones y plataformas para clientes reales.", en: "Corporate websites, apps and platforms for real clients." },
    },
    {
        icon: Rocket,
        title: { es: "Hasta la puesta en marcha", en: "All the way to launch" },
        desc: { es: "Vercel, Docker y despliegues continuos: del desarrollo a producción.", en: "Vercel, Docker and continuous delivery: from development to production." },
    },
    {
        icon: Heart,
        title: { es: "Curiosidad constante", en: "Always curious" },
        desc: { es: "Aprendizaje continuo, open source y ganas de hacer las cosas mejor.", en: "Continuous learning, open source and a drive to do things better." },
    },
]

export function About() {
    const sectionRef = useRevealGroup<HTMLElement>()
    const { language } = useLanguage()
    const es = language === "es"

    return (
        <section ref={sectionRef} id="about" className="py-16 md:py-20">
            <div className="w-full px-5 sm:px-6 md:px-12 lg:px-20 xl:px-28">
                <h2 data-reveal className="reveal text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 sm:mb-8 md:mb-10">
                    {es ? "Sobre mí" : "About me"}
                </h2>
                <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-16">
                    <div>
                        <p data-reveal className="reveal reveal-delay-1 text-xl md:text-2xl leading-snug tracking-tight text-white">
                            {es ? "Me involucro en tu proyecto, de la primera idea a la última línea de código." : "Hands-on with your project, from the first idea to the last line of code."}
                        </p>
                        <p data-reveal className="reveal reveal-delay-2 mt-5 text-base md:text-lg leading-relaxed text-zinc-400">
                            {es
                                ? "Soy Luis, desarrollador Full Stack y estudiante de Ingeniería de Sistemas. Me gusta entender qué necesita un negocio y convertirlo en una web o aplicación que funcione, se sienta bien y pueda crecer."
                                : "I'm Luis, a Full Stack developer and Systems Engineering student. I like understanding what a business needs and turning it into a website or app that works, feels right and can grow."}
                        </p>
                        <p data-reveal className="reveal reveal-delay-3 mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
                            {es ? "Trabajo en todo el proceso: experiencia de usuario, desarrollo, despliegue y mejora continua. Con atención al detalle y sin perder de vista para qué estamos construyendo." : "I work across the whole process: user experience, development, deployment and ongoing improvement. With attention to detail and a clear sense of what we're building for."}
                        </p>
                        <div data-reveal className="reveal reveal-delay-4 mt-6">
                            <a href="#contact" className="about-contact-link inline-flex items-center gap-3 py-2 text-base font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                {es ? "Conversemos sobre tu idea" : "Let's talk about your idea"}
                                <ArrowUpRight aria-hidden="true" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                        {highlights.map((item, i) => (
                            <div key={item.title.es} data-reveal className={`reveal reveal-delay-${i + 1}`}>
                                <div className="about-detail flex items-start gap-4 py-2">
                                    <item.icon aria-hidden="true" className="about-detail-icon mt-1 h-5 w-5 shrink-0 text-zinc-500" strokeWidth={1.5} />
                                    <div>
                                        <h3 className="text-base md:text-lg font-medium text-white mb-2">{item.title[language]}</h3>
                                        <p className="text-sm md:text-base leading-relaxed text-zinc-400 max-w-sm">{item.desc[language]}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
