"use client"
import * as React from "react"
import { projects, projectIcons, Project } from "@/data/projects"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { ProjectDetail } from "@/components/projects/ProjectDetail"

const CATEGORIES = ["Todos", "Web", "Full Stack", "Corporativo", "Móvil"] as const

function AppIcon({ project }: { project: Project }) {
    const icon = projectIcons[project.slug]

    if (icon) {
        return (
            <div className="relative w-full h-full rounded-[22%] bg-white flex items-center justify-center p-[9%] shadow-lg ring-1 ring-black/5 overflow-hidden">
                <Image
                    src={icon}
                    alt={project.title}
                    width={160}
                    height={160}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                />
            </div>
        )
    }

    const initials = project.title.replace(/[^A-Za-zÁÉÍÓÚÑ0-9 ]/g, "").split(" ").slice(0, 2).map(w => w[0]).join("")
    return (
        <div
            className="relative w-full h-full rounded-[22%] flex items-center justify-center shadow-lg overflow-hidden"
            style={{ background: `linear-gradient(150deg, ${project.accent}, ${project.accent}99)` }}
        >
            <span className="text-white font-black text-[28px] tracking-tight drop-shadow">{initials}</span>
        </div>
    )
}

export function Projects() {
    const [filter, setFilter] = React.useState<(typeof CATEGORIES)[number]>("Todos")
    const [selected, setSelected] = React.useState<Project | null>(null)
    const headerRef = useReveal<HTMLDivElement>()
    const panelRef = React.useRef<HTMLDivElement>(null)

    const filtered = projects.filter(p => filter === "Todos" ? true : p.category === filter)
    const isOpen = selected !== null

    React.useEffect(() => {
        if (selected && panelRef.current && window.innerWidth < 1024) {
            panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [selected])

    return (
        <section id="projects" className="py-16 w-full">
            <div className="w-full px-4 md:px-8 lg:px-12">
                <div ref={headerRef} className="reveal mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Proyectos</h2>
                    <div className="w-24 h-1 bg-primary mb-6 mx-auto rounded-full" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Cada proyecto es una aplicación real. Haz clic en un icono para abrir su caso de estudio aquí mismo.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Launcher: grid ↔ panel */}
                <div className={`flex flex-col ${isOpen ? "lg:flex-row lg:items-start lg:gap-8" : ""}`}>
                    {/* Icon grid */}
                    <div
                        className={`grid transition-all duration-500 ${isOpen
                            ? "grid-cols-4 sm:grid-cols-6 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 lg:w-[240px] xl:w-[320px] lg:shrink-0"
                            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8 w-full"
                            }`}
                    >
                        {filtered.map((project: Project) => {
                            const active = selected?.id === project.id
                            return (
                                <button
                                    key={project.id}
                                    onClick={() => setSelected(project)}
                                    className="group flex flex-col items-center text-center focus:outline-none"
                                    aria-label={`Abrir ${project.title}`}
                                    aria-pressed={active}
                                >
                                    <div className={`relative aspect-square w-full max-w-[132px] transition-all duration-300 group-hover:-translate-y-1.5 ${active ? "-translate-y-1.5" : ""}`}>
                                        <div className={`w-full h-full rounded-[22%] transition-all duration-300 ${active ? "ring-4 ring-primary ring-offset-2 ring-offset-background" : ""}`}>
                                            <AppIcon project={project} />
                                        </div>

                                        {/* Overlay descripción (solo cuando el panel está cerrado) */}
                                        {!isOpen && (
                                            <div className="absolute inset-0 rounded-[22%] bg-gradient-to-t from-black/95 via-black/80 to-black/50 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                                                <p className="text-[11px] leading-snug text-white/90 line-clamp-5">
                                                    {project.shortDescription}
                                                </p>
                                                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-white">
                                                    Abrir <ArrowUpRight className="w-3 h-3" />
                                                </span>
                                            </div>
                                        )}

                                        {/* Flag */}
                                        <div className="absolute -top-1.5 -right-1.5 z-10 rounded-full overflow-hidden ring-2 ring-background shadow">
                                            <Image
                                                src={`https://flagcdn.com/w40/${project.flag}.png`}
                                                alt={project.flag}
                                                width={22}
                                                height={22}
                                                className="w-5 h-5 object-cover"
                                                unoptimized
                                            />
                                        </div>
                                    </div>

                                    <p className={`mt-3 text-sm font-semibold leading-tight transition-colors ${active ? "text-primary" : "text-white group-hover:text-primary"}`}>
                                        {project.title}
                                    </p>
                                    {!isOpen && <p className="text-[11px] text-muted-foreground mt-0.5">{project.category}</p>}
                                </button>
                            )
                        })}
                    </div>

                    {/* Detail panel */}
                    {selected && (
                        <div
                            ref={panelRef}
                            className="mt-10 lg:mt-0 lg:flex-1 min-w-0 glass-panel rounded-3xl p-6 md:p-8 motion-safe:animate-hero-pop"
                        >
                            <ProjectDetail project={selected} onClose={() => setSelected(null)} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
