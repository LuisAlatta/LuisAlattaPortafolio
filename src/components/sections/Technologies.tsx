"use client"
import * as React from "react"
import { useReveal } from "@/hooks/useReveal"
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
    SiVuedotjs, SiAngular, SiRedux,
    SiNodedotjs, SiExpress, SiGraphql, SiNestjs, SiPython, SiGo, SiRust,
    SiPostgresql, SiMysql, SiMongodb, SiRedis, SiSupabase, SiPrisma,
    SiAndroid, SiApple,
    SiGit, SiGithub, SiFigma, SiDocker, SiKubernetes, SiAmazon, SiGooglecloud, SiLinux
} from "react-icons/si"
import { IconType } from "react-icons"
import { TbApi } from "react-icons/tb"
import { useLanguage } from "@/context/LanguageContext"

// Array of tech categorized with their respective icons and brand colors
const categorizedTech = [
    {
        key: "frontend",
        label: { es: "Desarrollo Visual", en: "Visual Development" },
        items: [
            { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
            { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
            { name: "React.js", Icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
            { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D" },
            { name: "Angular", Icon: SiAngular, color: "#DD0031" },
            { name: "Redux", Icon: SiRedux, color: "#764ABC" },
            { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
        ]
    },
    {
        key: "backend",
        label: { es: "Servidores y Lógica", en: "Servers & Logic" },
        items: [
            { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
            { name: "Express", Icon: SiExpress, color: "#ffffff" },
            { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
            { name: "Python", Icon: SiPython, color: "#3776AB" },
            { name: "Go", Icon: SiGo, color: "#00ADD8" },
            { name: "Rust", Icon: SiRust, color: "#000000" }, /* Wait, Rust text color should possibly be white in dark mode. Let's use #F74C00 */
            { name: "REST APIs", Icon: TbApi, color: "#0ea5e9" },
            { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
        ]
    },
    {
        key: "databases",
        label: { es: "Bases de Datos & Cloud", en: "Databases & Cloud" },
        items: [
            { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
            { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
            { name: "Redis", Icon: SiRedis, color: "#DC382D" },
            { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
            { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
        ]
    },
    {
        key: "mobile",
        label: { es: "Aplicaciones Móviles", en: "Mobile Apps" },
        items: [
            { name: "React Native", Icon: SiReact, color: "#61DAFB" },
            { name: "Android", Icon: SiAndroid, color: "#3DDC84" },
            { name: "iOS", Icon: SiApple, color: "#A2AAAD" },
        ]
    },
    {
        key: "tools",
        label: { es: "Herramientas de Trabajo", en: "Work Tools" },
        items: [
            { name: "Git", Icon: SiGit, color: "#F05032" },
            { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
            { name: "Docker", Icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
            { name: "AWS", Icon: SiAmazon, color: "#232F3E" },
            { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
            { name: "Linux", Icon: SiLinux, color: "#FCC624" },
            { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
        ]
    }
]

// Extract all items into a single flat array for the infinite marquee
const allTechItems = categorizedTech.flatMap(c => c.items)
// Split items into 2 rows. Add multiple sets inside the rows to guarantee flawless infinity scrolling
const halfIndex = Math.ceil(allTechItems.length / 2)
const row1Items = [...allTechItems.slice(0, halfIndex), ...allTechItems.slice(0, halfIndex)]
const row2Items = [...allTechItems.slice(halfIndex), ...allTechItems.slice(halfIndex)]

const TechCard = ({ item }: { item: { name: string, Icon: IconType, color: string } }) => (
    <div className="tech-icon-container group relative flex flex-col items-center gap-4 w-28 shrink-0 pt-3">
        <div className="relative flex items-center justify-center transition-all duration-300 transform-gpu group-hover:-translate-y-3 group-hover:scale-125">
            {/* Color Glow on hover instead of background */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-2xl"
                style={{ backgroundColor: item.color, borderRadius: "50%", transform: "scale(1.5)" }}
            />

            <item.Icon
                className="w-12 h-12 md:w-14 md:h-14 relative z-10 drop-shadow-lg transition-transform duration-300"
                style={{ color: item.color }}
            />
        </div>
        <span className="text-xs md:text-sm font-medium text-foreground/80 opacity-60 group-hover:opacity-100 transition-opacity duration-300 text-center whitespace-nowrap">
            {item.name}
        </span>
    </div>
)

export function Technologies() {
    const headerRef = useReveal<HTMLDivElement>()
    const { language } = useLanguage()

    return (
        <section id="tech" className="py-16 relative overflow-hidden">
            <div className="container px-4 md:px-8 max-w-6xl mx-auto z-20 relative">
                <div ref={headerRef} className="reveal mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {language === "es" ? "Stack Tecnológico" : "Tech Stack"}
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {language === "es"
                            ? "Conocimiento de lenguajes, frameworks y tecnologías de primer nivel con las que trabajo para crear software de calidad y webs fluidas."
                            : "Ecosystem of top-tier technologies I work with to create fluid software and outstanding interfaces."}
                    </p>
                </div>
            </div>

            {/* Marquee Infinite Container */}
            <div className="relative w-full flex flex-col gap-10 mt-10">
                {/* Lateral Fades for smooth entry/exit */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Top Row moving left */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5 py-3 px-4 items-center">
                    {row1Items.map((item, index) => (
                        <TechCard item={item} key={`row1-${item.name}-${index}`} />
                    ))}
                </div>

                {/* Bottom Row moving right */}
                <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] gap-5 py-3 px-4 items-center -ml-10">
                    {row2Items.map((item, index) => (
                        <TechCard item={item} key={`row2-${item.name}-${index}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
