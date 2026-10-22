"use client"
import * as React from "react"
import { Code2, PenTool, Rocket, Heart, ArrowUpRight, GraduationCap, Briefcase } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useRevealGroup } from "@/hooks/useReveal"

const stats = [
    { value: 2, prefix: "+", suffix: "", label: { es: "Años de experiencia", en: "Years of experience" } },
    { value: 18, prefix: "+", suffix: "", label: { es: "Proyectos realizados", en: "Projects delivered" } },
    { value: 10, prefix: "+", suffix: "", label: { es: "Tecnologías en práctica", en: "Technologies in practice" } },
    { value: 100, prefix: "", suffix: "%", label: { es: "Enfoque en resultados", en: "Results-oriented" } },
]

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

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
    const numberRef = React.useRef<HTMLSpanElement>(null)

    React.useEffect(() => {
        const element = numberRef.current
        if (!element || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
        let frame = 0
        const observer = new IntersectionObserver(entries => {
            if (!entries.some(entry => entry.isIntersecting)) return
            observer.disconnect()
            const start = performance.now()
            const animate = (now: number) => {
                const progress = Math.min((now - start) / 1400, 1)
                const count = Math.round(value * (1 - Math.pow(1 - progress, 3)))
                element.textContent = `${prefix}${count}${suffix}`
                if (progress < 1) frame = requestAnimationFrame(animate)
            }
            frame = requestAnimationFrame(animate)
        }, { threshold: 0.7 })
        observer.observe(element)
        return () => {
            observer.disconnect()
            cancelAnimationFrame(frame)
        }
    }, [value, prefix, suffix])

    return (
        <span className="about-number">
            <span className="sr-only">{prefix}{value}{suffix}</span>
            <span ref={numberRef} aria-hidden="true">{prefix}{value}{suffix}</span>
        </span>
    )
}

export function About() {
    const sectionRef = useRevealGroup<HTMLElement>()
    const { language } = useLanguage()
    const es = language === "es"

    return (
        <section ref={sectionRef} id="about" className="py-20 md:py-28">
            <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20 xl:gap-28 items-start">
                    <div>
                        <h2 data-reveal className="reveal text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">
                            {es ? "Sobre mí" : "About me"}
                        </h2>
                        <p data-reveal className="reveal reveal-delay-1 max-w-xl text-2xl md:text-3xl leading-snug tracking-tight text-white">
                            {es ? "Me involucro en tu proyecto, de la primera idea a la última línea de código." : "Hands-on with your project, from the first idea to the last line of code."}
                        </p>
                        <p data-reveal className="reveal reveal-delay-2 mt-6 max-w-xl text-base md:text-lg leading-relaxed text-zinc-400">
                            {es
                                ? "Soy Luis, desarrollador Full Stack y estudiante de Ingeniería de Sistemas. Me gusta entender qué necesita un negocio y convertirlo en una web o aplicación que funcione, se sienta bien y pueda crecer."
                                : "I'm Luis, a Full Stack developer and Systems Engineering student. I like understanding what a business needs and turning it into a website or app that works, feels right and can grow."}
                        </p>
                        <p data-reveal className="reveal reveal-delay-3 mt-4 max-w-xl text-base md:text-lg leading-relaxed text-zinc-400">
                            {es ? "Trabajo en todo el proceso: experiencia de usuario, desarrollo, despliegue y mejora continua. Con atención al detalle y sin perder de vista para qué estamos construyendo." : "I work across the whole process: user experience, development, deployment and ongoing improvement. With attention to detail and a clear sense of what we're building for."}
                        </p>
                        <div data-reveal className="reveal reveal-delay-4 mt-8">
                            <a href="#contact" className="about-contact-link inline-flex items-center gap-3 py-2 text-base font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                {es ? "Conversemos sobre tu idea" : "Let's talk about your idea"}
                                <ArrowUpRight aria-hidden="true" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <dl className="grid grid-cols-2 gap-x-5 gap-y-10 lg:pt-2 lg:gap-y-14">
                        {stats.map((stat, i) => (
                            <div key={stat.label.es} data-reveal className={`reveal reveal-delay-${i + 1} about-stat`}>
                                <dt className="text-sm md:text-base text-zinc-400 mt-3">{stat.label[language]}</dt>
                                <dd className="text-white"><AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} /></dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="mt-14 md:mt-20 grid gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-14">
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
        </section>
    )
}
