"use client"
import { useEffect, useRef } from "react"

type Options = {
    rootMargin?: string
    threshold?: number
    once?: boolean
}

export function useReveal<T extends HTMLElement = HTMLElement>(opts: Options = {}) {
    const ref = useRef<T>(null)
    const { rootMargin = "0px 0px -10% 0px", threshold = 0.15, once = true } = opts

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (typeof IntersectionObserver === "undefined") {
            el.classList.add("is-visible")
            return
        }

        const io = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible")
                        if (once) io.unobserve(entry.target)
                    } else if (!once) {
                        entry.target.classList.remove("is-visible")
                    }
                }
            },
            { rootMargin, threshold }
        )

        io.observe(el)
        return () => io.disconnect()
    }, [rootMargin, threshold, once])

    return ref
}

export function useRevealGroup<T extends HTMLElement = HTMLElement>(opts: Options = {}) {
    const ref = useRef<T>(null)
    const { rootMargin = "0px 0px -10% 0px", threshold = 0.1 } = opts

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const items = el.querySelectorAll<HTMLElement>("[data-reveal]")
        if (!items.length) return

        if (typeof IntersectionObserver === "undefined") {
            items.forEach(i => i.classList.add("is-visible"))
            return
        }

        const io = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible")
                        io.unobserve(entry.target)
                    }
                }
            },
            { rootMargin, threshold }
        )

        items.forEach(i => io.observe(i))
        return () => io.disconnect()
    }, [rootMargin, threshold])

    return ref
}
