"use client"
import * as React from "react"
import { projects, projectIcons, Project } from "@/data/projects"
import Image from "next/image"
import { useReveal } from "@/hooks/useReveal"
import { ProjectDetail } from "@/components/projects/ProjectDetail"

function AppIcon({ project, className }: { project: Project; className?: string }) {
    const icon = projectIcons[project.slug]

    if (icon) {
        return (
            <div className={`relative w-full h-full rounded-[24%] bg-white flex items-center justify-center p-[10%] shadow-lg ring-1 ring-black/10 overflow-hidden ${className ?? ""}`}>
                <Image
                    src={icon}
                    alt={project.title}
                    width={140}
                    height={140}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                />
            </div>
        )
    }

    const initials = project.title.replace(/[^A-Za-zÁÉÍÓÚÑ0-9 ]/g, "").split(" ").slice(0, 2).map(w => w[0]).join("")
    return (
        <div
            className={`relative w-full h-full rounded-[24%] flex items-center justify-center shadow-lg overflow-hidden ${className ?? ""}`}
            style={{ background: `linear-gradient(150deg, ${project.accent}, ${project.accent}99)` }}
        >
            <span className="text-white font-black text-[22px] tracking-tight drop-shadow">{initials}</span>
        </div>
    )
}

// Intervalo del showcase automático (ms)
const AUTOPLAY_MS = 4000

export function Projects() {
    const headerRef = useReveal<HTMLDivElement>()
    const desktopRef = React.useRef<HTMLDivElement>(null)
    const [active, setActive] = React.useState<Project | null>(null)
    const [closing, setClosing] = React.useState(false)
    const [originX, setOriginX] = React.useState("50%")
    const [autoplay, setAutoplay] = React.useState(true)
    const autoIndexRef = React.useRef(0)

    // Showcase automático: mientras el usuario no elija nada,
    // abre cada proyecto durante 4s y pasa al siguiente en bucle.
    React.useEffect(() => {
        if (!autoplay) return
        setClosing(false)
        setOriginX("50%")
        setActive(projects[autoIndexRef.current % projects.length])
        const id = window.setInterval(() => {
            autoIndexRef.current = (autoIndexRef.current + 1) % projects.length
            setClosing(false)
            setOriginX("50%")
            setActive(projects[autoIndexRef.current])
        }, AUTOPLAY_MS)
        return () => window.clearInterval(id)
    }, [autoplay])

    const setOrigin = (e: React.MouseEvent<HTMLElement>) => {
        const desk = desktopRef.current?.getBoundingClientRect()
        const btn = e.currentTarget.getBoundingClientRect()
        if (desk && desk.width) {
            const pct = ((btn.left + btn.width / 2 - desk.left) / desk.width) * 100
            setOriginX(`${Math.max(2, Math.min(98, pct))}%`)
        }
    }

    const openApp = (project: Project, e: React.MouseEvent<HTMLElement>) => {
        setOrigin(e)
        const wasAutoplay = autoplay
        setAutoplay(false)
        if (!wasAutoplay && active?.id === project.id && !closing) {
            closeApp()
            return
        }
        setClosing(false)
        setActive(project)
    }

    const closeApp = () => {
        setClosing(true)
        window.setTimeout(() => {
            setActive(null)
            setClosing(false)
            autoIndexRef.current = 0
            setAutoplay(true) // vuelve al showcase automático
        }, 280)
    }

    return (
        <section id="projects" className="py-16 w-full">
            <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">
                <div ref={headerRef} className="reveal mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Proyectos</h2>
                    <div className="w-24 h-1 bg-primary mb-6 mx-auto rounded-full" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Un escritorio con cada proyecto como una app. Haz clic en el dock para abrir su caso de estudio.
                    </p>
                </div>

                {/* macOS-style desktop */}
                <div
                    ref={desktopRef}
                    className="relative w-full max-w-6xl mx-auto h-[600px] sm:h-[680px] lg:h-[760px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl select-none"
                    style={{ background: "radial-gradient(120% 120% at 20% 0%, #1e2a44 0%, #121a2b 45%, #0a0e17 100%)" }}
                >
                    {/* Wallpaper glows */}
                    <div className="absolute -top-20 -left-10 w-96 h-96 rounded-full bg-indigo-500/20 blur-[110px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-500/15 blur-[130px] pointer-events-none" />

                    {/* Menu bar */}
                    <div className="absolute top-0 inset-x-0 h-8 z-30 flex items-center justify-between px-4 text-[11px] font-medium text-white/80 bg-black/25 backdrop-blur-md border-b border-white/10">
                        <span className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 rounded-[3px] bg-white/80" />
                            <strong className="font-semibold">{active ? active.title : "Portafolio"}</strong>
                        </span>
                        <span className="hidden sm:inline text-white/60">Luis Alatta · Arequipa, Perú</span>
                    </div>

                    {/* Desktop hint (no app open) */}
                    {!active && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
                            <p className="text-white/70 text-lg md:text-xl font-medium">Haz clic en una app del dock</p>
                            <p className="text-white/40 text-sm mt-1">para abrir el proyecto aquí mismo</p>
                        </div>
                    )}

                    {/* App window */}
                    {active && (
                        <div
                            key={active.slug}
                            className={`absolute inset-x-0 top-8 bottom-0 z-20 ${closing ? "animate-app-close" : "animate-app-open"}`}
                            style={{ "--app-origin-x": originX } as React.CSSProperties}
                        >
                            <div className="flex flex-col h-full bg-[#0c0f16]/97 backdrop-blur-xl border-t border-white/10">
                                {/* Title bar */}
                                <div className="flex items-center gap-2 px-4 h-11 shrink-0 bg-white/5 border-b border-white/10">
                                    <button
                                        onClick={closeApp}
                                        aria-label="Cerrar"
                                        className="group w-3.5 h-3.5 rounded-full bg-[#ff5f57] flex items-center justify-center"
                                    >
                                        <span className="opacity-0 group-hover:opacity-100 text-[9px] leading-none text-black/60 font-bold">×</span>
                                    </button>
                                    <span className="w-3.5 h-3.5 rounded-full bg-[#febc2e]" />
                                    <span className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
                                    <span className="mx-auto pr-10 text-xs font-medium text-white/70 truncate">{active.title}</span>
                                </div>
                                {/* Window body (full-screen, contenido centrado y legible) */}
                                <div className="flex-1 overflow-y-auto px-6 md:px-10 pt-6 pb-28">
                                    <div className="max-w-4xl mx-auto">
                                        <ProjectDetail project={active} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Dock */}
                    <div className="absolute bottom-4 inset-x-0 z-30 flex justify-center px-4">
                        {/* Caja con headroom para que la magnificación y el nombre no se recorten */}
                        <div className="max-w-full overflow-x-auto overflow-y-visible scrollbar-none pt-24">
                        <div className="flex items-end gap-2 sm:gap-2.5 px-3 py-2.5 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/15 shadow-2xl w-max mx-auto">
                            {projects.map((project) => {
                                const isActive = active?.id === project.id
                                return (
                                    <button
                                        key={project.id}
                                        onClick={(e) => openApp(project, e)}
                                        aria-label={`Abrir ${project.title}`}
                                        className="group relative shrink-0 flex flex-col items-center"
                                    >
                                        {/* Tooltip (por encima del icono magnificado) */}
                                        <span className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/85 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                                            {project.title}
                                        </span>

                                        <div className="w-12 h-12 sm:w-14 sm:h-14 origin-bottom transition-transform duration-200 ease-out group-hover:scale-[1.4] group-hover:-translate-y-2">
                                            <AppIcon project={project} />
                                        </div>

                                        {/* Running dot */}
                                        <span className={`mt-1 h-1 w-1 rounded-full transition-opacity ${isActive ? "bg-white opacity-90" : "opacity-0"}`} />
                                    </button>
                                )
                            })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
