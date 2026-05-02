"use client"
import * as React from "react"
import dynamic from "next/dynamic"

const Background3D = dynamic(
    () => import("./Background3D").then(m => m.Background3D),
    { ssr: false, loading: () => null }
)

type ConnectionLike = { saveData?: boolean; effectiveType?: string }

export function Background3DLoader() {
    const [shouldLoad, setShouldLoad] = React.useState(false)

    React.useEffect(() => {
        if (window.innerWidth < 768) return
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return

        const nav = navigator as Navigator & { connection?: ConnectionLike }
        const conn = nav.connection
        if (conn?.saveData) return
        if (conn?.effectiveType && /(^|[^4])g$/.test(conn.effectiveType) && conn.effectiveType !== "4g") return

        const schedule = (cb: () => void) => {
            const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback
            if (typeof ric === "function") ric(cb, { timeout: 2000 })
            else setTimeout(cb, 600)
        }

        schedule(() => setShouldLoad(true))
    }, [])

    if (!shouldLoad) return null
    return <Background3D />
}
