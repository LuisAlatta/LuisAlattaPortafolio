"use client"

import React, { useEffect } from "react"
import { ReactLenis } from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Sync ScrollTrigger with Lenis
        if (typeof window !== "undefined") {
            ScrollTrigger.refresh()
        }
    }, [])

    return (
        <ReactLenis root options={{
            lerp: 0.12,
            duration: 1.2,
            smoothWheel: true,
            // Deshabilitamos syncTouch para que el scroll en el móvil sea nativo y sin delay
            syncTouch: false,
            touchMultiplier: 1.5,
            wheelMultiplier: 1,
        }}>
            {children}
        </ReactLenis>
    )
}
