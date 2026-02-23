"use client"
import * as React from "react"
import { useRef, useState } from "react"
import { profile } from "@/data/profile"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Code2, PenTool, Rocket, Heart, ArrowRight, GraduationCap, Briefcase } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const stats = [
    { value: "+2", label: { es: "Años de Experiencia", en: "Years of Experience" }, color: "#61DAFB", bg: "#61DAFB15" },
    { value: "+12", label: { es: "Proyectos Completados", en: "Projects Completed" }, color: "#3ECF8E", bg: "#3ECF8E15" },
    { value: "+10", label: { es: "Tecnologías de Vanguardia", en: "Active Technologies" }, color: "#b561d6ff", bg: "#9B59B615" },
    { value: "100%", label: { es: "Orientado a Resultados", en: "Results-Oriented" }, color: "#e6825aff", bg: "#F7DF1E15" },
]

const highlights = [
    {
        icon: GraduationCap,
        color: "#3178C6",
        gradient: "from-[#3178C6]/20 to-[#3178C6]/5",
        title: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
        desc: { es: "Estudios en ingienería con bases sólidas en algoritmos, redes y arquitectura de software", en: "Studies at UTP with solid foundations in algorithms, networks and software architecture" }
    },
    {
        icon: Code2,
        color: "#61DAFB",
        gradient: "from-[#61DAFB]/20 to-[#61DAFB]/5",
        title: { es: "Código de Calidad", en: "Quality Code" },
        desc: { es: "Código limpio, estricto y arquitectura escalable en cada proyecto", en: "Clean code, strict TypeScript and scalable architecture in every project" }
    },
    {
        icon: PenTool,
        color: "#F24E1E",
        gradient: "from-[#F24E1E]/20 to-[#F24E1E]/5",
        title: { es: "Diseño y UX", en: "Design & UX" },
        desc: { es: "Interfaz que impresionan, convierten y se adaptan a cualquier dispositivo", en: "Interfaces that impress, convert and adapt to any device" }
    },
    {
        icon: Briefcase,
        color: "#3ECF8E",
        gradient: "from-[#3ECF8E]/20 to-[#3ECF8E]/5",
        title: { es: "Experiencia Real", en: "Real Experience" },
        desc: { es: "Proyectos para clientes reales: aplicaciones, webs corporativas y plataformas escalables", en: "Projects for real clients: corporate sites and scalable platforms" }
    },
    {
        icon: Rocket,
        color: "#9B59B6",
        gradient: "from-[#9B59B6]/20 to-[#9B59B6]/5",
        title: { es: "Deployment & DevOps", en: "Deployment & DevOps" },
        desc: { es: "Vercel, Docker, CI/CD y despliegue continuo con buenas prácticas", en: "Vercel, Docker, CI/CD and continuous deployment with best practices" }
    },
    {
        icon: Heart,
        color: "#E74C3C",
        gradient: "from-[#E74C3C]/20 to-[#E74C3C]/5",
        title: { es: "Pasión por lo Digital", en: "Passion for Digital" },
        desc: { es: "Aprendizaje continuo, open source y mentalidad de crecimiento growth", en: "Continuous learning, open source contributions and a growth mindset" }
    },
]

export function About() {
    const sectionRef = useRef<HTMLElement>(null)
    const { language } = useLanguage()
    const [activeCard, setActiveCard] = useState<number | null>(null)

    useGSAP(() => {
        gsap.fromTo(".about-badge",
            { opacity: 0, y: 20, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)", scrollTrigger: { trigger: ".about-badge", start: "top 85%" } }
        )
        gsap.fromTo(".about-title",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-title", start: "top 80%" } }
        )
        gsap.fromTo(".about-desc",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger: ".about-desc", start: "top 82%" } }
        )
        gsap.fromTo(".about-stat",
            { opacity: 0, y: 40, scale: 0.8 },
            {
                opacity: 1, y: 0, scale: 1,
                duration: 0.7, stagger: 0.12, ease: "back.out(1.5)",
                scrollTrigger: { trigger: ".about-stats-row", start: "top 85%" }
            }
        )
        gsap.fromTo(".about-highlight",
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0,
                duration: 0.6, stagger: 0.1, ease: "power2.out",
                scrollTrigger: { trigger: ".about-highlights-grid", start: "top 85%" }
            }
        )
        gsap.fromTo(".about-cta",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: ".about-cta", start: "top 90%" } }
        )
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id="about" className="py-16 relative overflow-hidden">
            {/* Layered ambient glows */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="container px-4 md:px-8 max-w-6xl mx-auto">

                {/* Header — Centered, full-width */}
                <div className="text-center mb-20">
                    <div className="about-badge opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-mono mb-6 text-primary">

                    </div>
                    <h2 className="about-title opacity-0 text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight text-white">
                        {language === "es" ? "Sobre mí" : "About me"}
                    </h2>
                    <div className="about-desc opacity-0 max-w-3xl mx-auto">
                        <p className="text-xl text-white leading-relaxed">
                            {language === "es"
                                ? profile.about
                                : "I'm a developer committed to building functional, fast, and visually stunning interfaces. A Systems Engineering student at UTP with hands-on experience in real-world projects — from corporate websites to mobile platforms."}
                        </p>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="about-stats-row grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
                    {stats.map((stat) => (
                        <div
                            key={stat.value}
                            className="about-stat opacity-0 relative glass-panel rounded-3xl p-7 text-center group cursor-default overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            style={{ boxShadow: `0 0 0 0 ${stat.color}` }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 0 ${stat.color}25`
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${stat.color}`
                            }}
                        >
                            {/* Colored glow disc */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                                style={{ background: `radial-gradient(circle at center, ${stat.color}25, transparent 70%)` }}
                            />
                            {/* Top accent line */}
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full transition-all duration-500 group-hover:w-full"
                                style={{ backgroundColor: stat.color }}
                            />
                            <p
                                className="text-5xl md:text-6xl font-black mb-2 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </p>
                            <p className="text-sm text-muted-foreground font-medium leading-snug">
                                {stat.label[language]}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Highlights Grid */}
                <div className="about-highlights-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                    {highlights.map((item, i) => (
                        <div
                            key={item.title.es}
                            className={`about-highlight opacity-0 relative glass-panel rounded-3xl p-7 cursor-default overflow-hidden transition-all duration-500 hover:-translate-y-2 group`}
                            onMouseEnter={() => setActiveCard(i)}
                            onMouseLeave={() => setActiveCard(null)}
                            style={{
                                boxShadow: activeCard === i ? `0 20px 60px 0 ${item.color}20` : undefined
                            }}
                        >
                            {/* Dynamic colored background on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                            />
                            {/* Top colored accent bar */}
                            <div
                                className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                            />

                            <div className="flex flex-col gap-5">
                                {/* Icon with glowing ring */}
                                <div className="relative w-fit">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                        style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                                    >
                                        <item.icon className="w-7 h-7 transition-transform duration-300" style={{ color: item.color }} />
                                    </div>
                                    {/* Glow ring on hover */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-md"
                                        style={{ backgroundColor: item.color }}
                                    />
                                </div>

                                <div>
                                    <p className="text-lg font-bold mb-2 group-hover:text-white transition-colors duration-300">
                                        {item.title[language]}
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                        {item.desc[language]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="about-cta opacity-0 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-base font-bold group transition-all duration-500 relative overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, rgba(97,218,251,0.15), rgba(155,89,182,0.15))",
                            border: "1px solid rgba(97,218,251,0.3)"
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(97,218,251,0.3), rgba(155,89,182,0.3))"
                                ; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"
                                ; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(97,218,251,0.2)"
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(97,218,251,0.15), rgba(155,89,182,0.15))"
                                ; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"
                                ; (e.currentTarget as HTMLElement).style.boxShadow = "none"
                        }}
                    >
                        <span className="text-white">
                            {language === "es" ? "¿Hablamos de tu próximo proyecto?" : "Let's talk about your next project"}
                        </span>
                        <ArrowRight className="w-5 h-5 text-white-400 transition-transform duration-300 group-hover:translate-x-2" />
                    </a>
                </div>

            </div>
        </section>
    )
}
