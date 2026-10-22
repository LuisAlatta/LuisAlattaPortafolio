"use client"
import * as React from "react"
import { projects, projectIcons, Project } from "@/data/projects"
import Image from "next/image"
import { useReveal } from "@/hooks/useReveal"
import { ExternalLink, Home, Monitor } from "lucide-react"

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

const dockEndOrder = ["fixmantech", "3s-suministros", "nexia-2026"]
const dockProjects = projects.filter(project =>
    !["motomajes", "pidetodomajes", "muebles-fercho"].includes(project.slug)
).sort((a, b) => dockEndOrder.indexOf(a.slug) - dockEndOrder.indexOf(b.slug))

export function Projects() {
    const headerRef = useReveal<HTMLDivElement>()
    const desktopRef = React.useRef<HTMLDivElement>(null)
    const [active, setActive] = React.useState<Project | null>(dockProjects[0] ?? null)
    const [originX, setOriginX] = React.useState("50%")
    const [reloadKey, setReloadKey] = React.useState(0)

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
        setActive(project)
    }

    const closeApp = () => {
        setActive(null)
    }

    return (
        <section id="projects" className="py-16 w-full">
            <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">
                <div ref={headerRef} className="reveal mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Proyectos</h2>
                    <div className="w-24 h-1 bg-primary mb-6 mx-auto rounded-full" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Elige una web del dock y explórala directamente en el monitor.
                    </p>
                </div>

                {/* macOS-style desktop */}
                <div
                    ref={desktopRef}
                    className="relative w-full max-w-6xl mx-auto h-[600px] sm:h-[680px] lg:h-[760px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
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
                            className="absolute inset-x-0 top-8 bottom-24 sm:bottom-28 z-20 animate-app-open"
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
                                    <span className="ml-2 min-w-0 flex-1 text-xs font-medium text-white/70 truncate">{active.title}</span>
                                    {active.demoUrl && (
                                        <div className="flex items-center gap-1">
                                            <button onClick={() => setReloadKey(key => key + 1)} aria-label="Volver al inicio de la web" title="Volver al inicio de la web" className="p-2 rounded-md text-white/60 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                                                <Home className="w-4 h-4" />
                                            </button>
                                            <a href={active.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${active.title} en una pestaña nueva`} title="Abrir en una pestaña nueva" className="p-2 rounded-md text-white/60 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                                {active.demoUrl ? (
                                    <div className="flex flex-1 min-h-0 flex-col">
                                        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2 text-[11px] text-white/50">
                                            <span className="truncate">{new URL(active.demoUrl).hostname}</span>
                                            <a href={active.demoUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 underline underline-offset-2 hover:text-white">¿No carga? Abrir web ↗</a>
                                        </div>
                                        <iframe
                                            key={`${active.slug}-${reloadKey}`}
                                            src={active.demoUrl}
                                            title={`Sitio web de ${active.title}`}
                                            className="w-full flex-1 min-h-0 border-0 bg-white"
                                            sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            loading="lazy"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                                        <Monitor className="w-10 h-10 text-white/40" />
                                        <h3 className="text-xl font-semibold text-white">{active.title}</h3>
                                        <p className="max-w-sm text-sm text-white/60">La web de este proyecto todavía no tiene un enlace público disponible.</p>
                                        <a href={`/proyectos/${active.slug}`} className="rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10">Ver proyecto</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Dock */}
                    <div className="absolute bottom-4 inset-x-0 z-30 flex justify-center px-4 pointer-events-none">
                        {/* Caja con headroom para que la magnificación y el nombre no se recorten */}
                        <div className="max-w-full overflow-x-auto overflow-y-visible scrollbar-none pt-24">
                        <div className="flex items-end gap-2 sm:gap-2.5 px-3 py-2.5 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/15 shadow-2xl w-max mx-auto pointer-events-auto">
                            {dockProjects.map((project) => {
                                const isActive = active?.id === project.id
                                return (
                                    <button
                                        key={project.id}
                                        onClick={(e) => openApp(project, e)}
                                        aria-label={`Abrir ${project.title}`}
                                        aria-pressed={isActive}
                                        className="group relative shrink-0 flex flex-col items-center rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
