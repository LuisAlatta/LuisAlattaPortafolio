"use client"
import * as React from "react"
import { ArrowRight, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"
import Link from "next/link"
import Image from "next/image"

const ProfileCard = ({ className }: { className?: string }) => (
    <div className={className}>
        <div className="relative aspect-[3/5] max-h-[500px] md:max-h-[800px] w-full max-w-[280px] md:max-w-sm transition-all duration-700 transform-gpu hover:-translate-y-2 group [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_98%)]">
            <Image
                src="/perfil.webp"
                alt="Luis Alatta"
                width={384}
                height={640}
                className="w-full h-full object-cover relative z-10"
                priority
            />
        </div>
    </div>
)

export function Hero() {
    return (
        <section className="min-h-screen pt-16 pb-8 flex items-center justify-center relative overflow-hidden dark:bg-grid-white/[0.03] bg-grid-black/[0.03]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="container px-4 md:px-8 relative z-10 w-full max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="flex flex-col gap-6 w-full">
                        <div>
                            <div className="motion-safe:animate-hero-rise inline-flex items-center rounded-full glass-panel px-4 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 text-foreground mb-6 font-mono shadow-sm">
                                <Terminal className="w-3 h-3 mr-2" />
                                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                                status: &quot;Ready for new challenges&quot;
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-4 motion-safe:animate-hero-rise">
                                Hola, soy {profile.name}
                            </h1>

                            <ProfileCard className="lg:hidden my-8 motion-safe:animate-hero-pop" />

                            <h2 className="text-2xl md:text-3xl text-white font-medium motion-safe:animate-hero-rise" style={{ animationDelay: "0.15s" }}>
                                {profile.headline}
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-white flex-1 leading-relaxed mt-4 motion-safe:animate-hero-rise" style={{ animationDelay: "0.25s" }}>
                            {profile.subheadline}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-8 motion-safe:animate-hero-rise" style={{ animationDelay: "0.35s" }}>
                            <Button size="lg" className="rounded-full h-12 px-8" asChild>
                                <Link href="#projects">
                                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <ProfileCard className="hidden lg:block relative mr-auto motion-safe:animate-hero-pop" />
                </div>
            </div>
        </section>
    )
}
