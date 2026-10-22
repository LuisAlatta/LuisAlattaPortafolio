"use client"
import * as React from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"
import Link from "next/link"
import Image from "next/image"
import { HeroStats } from "@/components/sections/HeroStats"

const ProfileCard = ({ className }: { className?: string }) => (
    <div className={className}>
        <div className="relative mx-auto aspect-[3/5] max-h-[500px] md:max-h-[800px] w-full max-w-[280px] md:max-w-sm transition-all duration-700 transform-gpu hover:-translate-y-2 group [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_98%)]">
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
        <section className="min-h-svh lg:min-h-screen pt-24 pb-10 sm:pt-28 lg:pt-16 lg:pb-8 flex items-center justify-center relative overflow-hidden dark:bg-grid-white/[0.03] bg-grid-black/[0.03]">
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="w-full px-5 sm:px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                    <div className="flex flex-col gap-5 lg:gap-6 w-full min-w-0">
                        <div className="grid grid-cols-[minmax(0,1fr)_88px] items-center gap-3 sm:grid-cols-[minmax(0,1fr)_128px] lg:block">
                            <div>
                                <h1 className="text-[clamp(2rem,8.5vw,3rem)] md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] lg:leading-tight mb-3 lg:mb-4 motion-safe:animate-hero-rise">
                                    Hola, soy {profile.name}
                                </h1>

                                <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl leading-snug text-white font-medium motion-safe:animate-hero-rise" style={{ animationDelay: "0.15s" }}>
                                    {profile.headline}
                                </h2>
                            </div>
                            <ProfileCard className="lg:hidden w-full motion-safe:animate-hero-pop" />
                        </div>

                        <p className="text-base sm:text-lg lg:text-xl text-white flex-1 leading-relaxed lg:mt-4 motion-safe:animate-hero-rise" style={{ animationDelay: "0.25s" }}>
                            {profile.subheadline}
                        </p>

                        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 mt-2 lg:mt-8 motion-safe:animate-hero-rise" style={{ animationDelay: "0.35s" }}>
                            <Button size="lg" className="rounded-full h-12 px-3 sm:px-8" asChild>
                                <Link href="#projects">
                                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full h-12 px-3 sm:px-8" asChild>
                                <Link href="#contact">
                                    <MessageCircle className="mr-2 h-4 w-4" /> Contactar
                                </Link>
                            </Button>
                        </div>
                        <HeroStats />
                    </div>

                    <ProfileCard className="hidden lg:block relative w-full motion-safe:animate-hero-pop" />
                </div>
            </div>
        </section>
    )
}
