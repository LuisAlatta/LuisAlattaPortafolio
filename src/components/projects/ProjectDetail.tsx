import * as React from "react"
import {
    ExternalLink,
    Code,
    Target,
    Lightbulb,
    CheckCircle2,
    Briefcase,
    Building2,
    X,
    type LucideIcon,
} from "lucide-react"
import type { Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectThumb } from "@/components/ui/project-thumb"

function DetailList({ title, icon: Icon, items, accent }: {
    title: string
    icon: LucideIcon
    items: string[]
    accent: string
}) {
    if (!items?.length) return null
    return (
        <div className="glass-panel rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
                <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}35` }}
                >
                    <Icon className="w-4.5 h-4.5" style={{ color: accent }} />
                </span>
                <h3 className="text-base font-bold">{title}</h3>
            </div>
            <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accent }} />
                        <span className="leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

type ProjectDetailProps = {
    project: Project
    onClose?: () => void
    titleAs?: "h1" | "h2"
}

export function ProjectDetail({ project, onClose, titleAs = "h2" }: ProjectDetailProps) {
    const Title = titleAs

    return (
        <div className="relative">
            {onClose && (
                <button
                    onClick={onClose}
                    aria-label="Cerrar proyecto"
                    className="absolute -top-1 right-0 z-10 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            )}

            {/* Header badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4 pr-10">
                <Badge>{project.category}</Badge>
                <Badge variant="outline">{project.platform}</Badge>
                <Badge variant="secondary">{project.status}</Badge>
            </div>

            <Title className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-white">
                {project.title}
            </Title>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                {project.shortDescription}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
                <span className="inline-flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> {project.role}
                </span>
                {project.industry && (
                    <span className="inline-flex items-center gap-2">
                        <Building2 className="w-4 h-4" /> {project.industry}
                    </span>
                )}
            </div>

            {/* Cover */}
            <div className="relative rounded-2xl overflow-hidden glass-panel mb-6 aspect-[16/9]">
                <ProjectThumb
                    project={project}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
                {project.demoUrl ? (
                    <Button className="rounded-full" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Ver sitio en vivo
                        </a>
                    </Button>
                ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground glass-panel rounded-full px-4 py-2">
                        Demo privada · disponible bajo solicitud
                    </span>
                )}
                {project.repoUrl && (
                    <Button variant="outline" className="rounded-full" asChild>
                        <a href={project.repoUrl} target="_blank" rel="noreferrer">
                            <Code className="mr-2 h-4 w-4" /> Código
                        </a>
                    </Button>
                )}
            </div>

            {/* Full description */}
            <p className="text-base text-foreground/90 leading-relaxed mb-8">
                {project.fullDescription}
            </p>

            {/* Stack */}
            <div className="mb-8">
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Stack tecnológico
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm font-mono px-3 py-1">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Lists */}
            <div className="grid sm:grid-cols-2 gap-4">
                <DetailList title="Características" icon={Lightbulb} items={project.features} accent="#60a5fa" />
                <DetailList title="Desafíos" icon={Target} items={project.challenges} accent="#f59e0b" />
                <DetailList title="Resultados" icon={CheckCircle2} items={project.outcomes} accent="#34d399" />
            </div>
        </div>
    )
}
