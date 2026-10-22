"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { useRevealGroup } from "@/hooks/useReveal"

const stats = [
    { value: 2, prefix: "+", suffix: "", label: { es: "Años de experiencia", en: "Years of experience" } },
    { value: 18, prefix: "+", suffix: "", label: { es: "Proyectos realizados", en: "Projects delivered" } },
    { value: 10, prefix: "+", suffix: "", label: { es: "Tecnologías en práctica", en: "Technologies in practice" } },
    { value: 100, prefix: "", suffix: "%", label: { es: "Enfoque en resultados", en: "Results-oriented" } },
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
        <span className="hero-number">
            <span className="sr-only">{prefix}{value}{suffix}</span>
            <span ref={numberRef} aria-hidden="true">{prefix}{value}{suffix}</span>
        </span>
    )
}

export function HeroStats() {
    const statsRef = useRevealGroup<HTMLDListElement>()
    const { language } = useLanguage()

    return (
        <dl ref={statsRef} className="grid grid-cols-2 gap-x-6 gap-y-5 pt-4 lg:pt-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, i) => (
                <div key={stat.label.es} data-reveal className={`reveal reveal-delay-${i + 1} hero-stat min-w-0`}>
                    <dt className="mt-3 text-sm leading-snug text-zinc-400">{stat.label[language]}</dt>
                    <dd className="text-white"><AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} /></dd>
                </div>
            ))}
        </dl>
    )
}
