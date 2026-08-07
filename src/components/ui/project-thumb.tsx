import * as React from "react"
import Image from "next/image"
import type { Project } from "@/data/projects"

type ProjectThumbProps = {
    project: Pick<Project, "title" | "imageUrl" | "accent" | "category" | "technologies">
    width: number
    height: number
    className?: string
    priority?: boolean
}

/**
 * Miniatura del proyecto: usa el screenshot si existe, o un placeholder
 * con degradado según el color de acento del proyecto cuando no hay imagen.
 */
export function ProjectThumb({ project, width, height, className, priority }: ProjectThumbProps) {
    if (project.imageUrl) {
        return (
            <Image
                src={project.imageUrl}
                alt={project.title}
                width={width}
                height={height}
                className={className}
                priority={priority}
            />
        )
    }

    const accent = project.accent || "#6366f1"

    return (
        <div
            className={`relative flex flex-col items-center justify-center overflow-hidden ${className ?? ""}`}
            style={{
                background: `radial-gradient(120% 120% at 20% 0%, ${accent}33 0%, transparent 55%), linear-gradient(150deg, #0b0b0f 0%, #17171d 100%)`,
            }}
            aria-label={project.title}
        >
            {/* Grid sutil */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                }}
            />
            <span
                className="relative font-bold tracking-tight text-center px-6 leading-none"
                style={{ color: accent, fontSize: Math.max(28, Math.min(width, height) / 6) }}
            >
                {project.title}
            </span>
            <span className="relative mt-3 text-[11px] font-mono uppercase tracking-[0.25em] text-white/50">
                {project.technologies[0]}
            </span>
        </div>
    )
}
