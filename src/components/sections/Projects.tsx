"use client"
import * as React from "react"
import { useRef, useEffect } from "react"
import { projects, Project } from "@/data/projects"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Code, ExternalLink } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Projects() {
    const [filter, setFilter] = React.useState<string>("Todos")
    const sectionRef = useRef<HTMLElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = React.useState(false)
    const [startX, setStartX] = React.useState(0)
    const [scrollLeft, setScrollLeft] = React.useState(0)

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return
        setIsDragging(true)
        setStartX(e.pageX - carouselRef.current.offsetLeft)
        setScrollLeft(carouselRef.current.scrollLeft)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return
        e.preventDefault()
        const x = e.pageX - carouselRef.current.offsetLeft
        const walk = (x - startX) * 1.5 // Multiplicador de velocidad de scroll
        carouselRef.current.scrollLeft = scrollLeft - walk
    }

    const categories = ["Todos", "Móvil", "Full Stack", "Corporativo"]
    const filteredProjects = projects.filter(p => filter === "Todos" ? true : p.category.includes(filter))

    useGSAP(() => {
        gsap.fromTo(".projects-header",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".projects-header",
                    start: "top 80%",
                }
            }
        )
    }, { scope: sectionRef })

    useEffect(() => {
        // Animate projects when filter changes
        gsap.fromTo(".project-card",
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "power2.out", clearProps: "all" }
        )
        // Refresh ScrollTrigger since layout might change height
        ScrollTrigger.refresh()
    }, [filter])

    return (
        <section ref={sectionRef} id="projects" className="py-16 w-full overflow-hidden">
            <div className="container px-4 md:px-8 max-w-6xl mx-auto">
                <div className="projects-header mb-12 opacity-0 text-center">
                    <div className="flex flex-col items-center gap-6 mb-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Proyectos Destacados</h2>
                            <div className="w-24 h-1 bg-primary mb-6 mx-auto rounded-full" />
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Una selección de mi trabajo más reciente, mostrando soluciones reales y escalables.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
                        {categories.map((cat) => (
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
            </div>

            <div className="w-full relative">
                <div
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`flex overflow-x-auto gap-6 sm:gap-8 pb-8 projects-custom-scrollbar projects-grid cursor-grab active:cursor-grabbing px-4 md:px-8 lg:px-12 ${isDragging ? 'snap-none' : 'snap-x snap-mandatory'}`}
                >
                    {filteredProjects.map((project: Project) => (
                        <div key={project.id} className="project-card flex-none w-[85vw] sm:w-[400px] md:w-[450px] h-full flex flex-col group snap-center pointer-events-auto">
                            <Card className="h-full overflow-hidden flex flex-col glass-panel hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 select-none">
                                <div className="relative h-64 overflow-hidden bg-muted">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                                    <div className="w-full h-full overflow-hidden">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={450}
                                            height={256}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                                        <Badge className="bg-background/80 backdrop-blur text-foreground border-transparent">
                                            {project.category}
                                        </Badge>
                                        <Badge variant="outline" className="bg-background/80 backdrop-blur">
                                            {project.platform}
                                        </Badge>
                                    </div>

                                    <div className="absolute top-4 right-4 z-20 drop-shadow-lg">
                                        <Image
                                            src={`https://flagcdn.com/w40/${project.flag}.png`}
                                            alt={project.flag}
                                            width={40}
                                            height={30}
                                            className="w-8 h-auto object-cover rounded-[2px]"
                                            title="País del cliente"
                                            unoptimized
                                        />
                                    </div>
                                </div>

                                <CardContent className="relative z-20 p-6 flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {project.shortDescription}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies.slice(0, 4).map(tech => (
                                            <Badge key={tech} variant="secondary" className="text-xs font-mono">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <Badge variant="secondary" className="text-xs font-mono">+{project.technologies.length - 4}</Badge>
                                        )}
                                    </div>
                                </CardContent>

                                <CardFooter className="p-6 pt-0 flex gap-4 mt-auto">
                                    <Button className="w-full" asChild>
                                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                        </a>
                                    </Button>
                                    {project.repoUrl && (
                                        <Button variant="outline" className="w-full font-mono text-xs" asChild>
                                            <a href={project.repoUrl} target="_blank" rel="noreferrer">
                                                <Code className="mr-2 h-4 w-4" /> view_source
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
