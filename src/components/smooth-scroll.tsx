"use client"

import React, { useEffect, useState } from "react"
import { ReactLenis } from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const [enableLenis, setEnableLenis] = useState(false)

    useEffect(() => {
        const isDesktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        setEnableLenis(isDesktop && !reduceMotion)

        if (typeof window !== "undefined") {
            ScrollTrigger.refresh()
        }
    }, [])

    if (!enableLenis) return <>{children}</>

    return (
        <ReactLenis root options={{
            lerp: 0.12,
            duration: 1.2,
            smoothWheel: true,
            syncTouch: false,
            touchMultiplier: 1.5,
            wheelMultiplier: 1,
        }}>
            {children}
        </ReactLenis>
    )
}
