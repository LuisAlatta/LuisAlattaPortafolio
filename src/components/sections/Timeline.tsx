"use client"
import * as React from "react"
import { useRef } from "react"
import { timeline } from "@/data/timeline"
import { GraduationCap, Code2, Briefcase, Rocket, Calendar, Tag } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useLanguage } from "@/context/LanguageContext"

const iconMap = {
    education: GraduationCap,
    code: Code2,
    briefcase: Briefcase,
    rocket: Rocket,
}

const typeLabel = {
    education: { es: "Educación", en: "Education" },
    project: { es: "Proyecto", en: "Project" },
    work: { es: "Trabajo", en: "Work" },
}

export function Timeline() {
    const sectionRef = useRef<HTMLElement>(null)
    const { language } = useLanguage()

    useGSAP(() => {
        gsap.fromTo(".timeline-header",
            { opacity: 0, y: 40 },
            {
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: ".timeline-header", start: "top 80%" }
            }
        )

        // Animate the vertical line growing
        gsap.fromTo(".timeline-line",
            { scaleY: 0, transformOrigin: "top center" },
            {
                scaleY: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: { trigger: ".timeline-line", start: "top 75%", end: "bottom 20%", scrub: 1 }
            }
        )

        const items = gsap.utils.toArray(".timeline-item") as HTMLElement[]
        items.forEach((item, i) => {
            const isEven = i % 2 === 0
            gsap.fromTo(item,
                { opacity: 0, x: isEven ? -40 : 40, y: 10 },
                {
                    opacity: 1, x: 0, y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: { trigger: item, start: "top 88%" }
                }
            )
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id="timeline" className="py-32 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 md:px-8 max-w-5xl mx-auto">

                {/* Header */}
                <div className="timeline-header mb-20 text-center opacity-0">
                    <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-xs font-semibold font-mono mb-6 text-primary">
                        <Calendar className="w-3.5 h-3.5" />
                        {language === "es" ? "Mi Recorrido" : "My Journey"}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {language === "es" ? "Trayectoria" : "Experience"}
                    </h2>
                    <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8" />
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {language === "es"
                            ? "Cada proyecto, cada línea de código y cada cliente ha moldeado quién soy como desarrollador."
                            : "Every project, every line of code, and every client has shaped who I am as a developer."}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center vertical line */}
                    <div className="timeline-line hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent transform -translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {timeline.map((item, i) => {
                            const IconComp = iconMap[item.icon as keyof typeof iconMap] || Briefcase
                            const isEven = i % 2 === 0
                            const type = item.type as keyof typeof typeLabel

                            return (
                                <div
                                    key={item.id}
                                    className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 opacity-0`}
                                >
                                    {/* LEFT content (only on even - desktop) */}
                                    <div className={`w-full md:w-1/2 md:pr-16 ${isEven ? "md:text-right" : "md:order-3 md:pl-16 md:pr-0 md:text-left"}`}>
                                        {isEven && (
                                            <TimelineCard item={item} IconComp={IconComp} type={type} language={language} accent={item.accent} />
                                        )}
                                        {!isEven && (
                                            <div className="hidden md:block" />
                                        )}
                                    </div>

                                    {/* Center icon node */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                                        <div
                                            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center border-2 shadow-xl shadow-black/30"
                                            style={{ borderColor: `${item.accent}50` }}
                                        >
                                            <IconComp className="w-6 h-6" style={{ color: item.accent }} />
                                        </div>
                                    </div>

                                    {/* RIGHT content (only on odd - desktop) */}
                                    <div className={`w-full md:w-1/2 md:pl-16 ${!isEven ? "" : "md:order-3 md:pl-16 md:pr-0"}`}>
                                        {!isEven && (
                                            <TimelineCard item={item} IconComp={IconComp} type={type} language={language} accent={item.accent} />
                                        )}
                                        {isEven && (
                                            <div className="hidden md:block" />
                                        )}
                                    </div>

                                    {/* Mobile only: icon + card stacked */}
                                    <div className="md:hidden flex items-start gap-4 w-full">
                                        <div
                                            className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center border shrink-0 shadow-lg shadow-black/20"
                                            style={{ borderColor: `${item.accent}40` }}
                                        >
                                            <IconComp className="w-6 h-6" style={{ color: item.accent }} />
                                        </div>
                                        <TimelineCard item={item} IconComp={IconComp} type={type} language={language} accent={item.accent} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

function TimelineCard({ item, type, language, accent }: {
    item: { year: string, title: string, subtitle: string, description: string, tags?: string[] }
    IconComp: React.ElementType
    type: string
    language: string
    accent: string
}) {
    const label = typeLabel[type as keyof typeof typeLabel]

    return (
        <div className="glass-panel rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 w-full text-left">
            {/* Type badge + year */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}12` }}
                >
                    <Tag className="w-3 h-3" />
                    {label ? label[language as "es" | "en"] : type}
                </span>
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-lg font-bold mb-1 leading-snug">{item.title}</h3>
            <p className="text-sm font-medium text-muted-foreground mb-3">{item.subtitle}</p>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>

            {/* Tags */}
            {item.tags && (
                <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-foreground/60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}
