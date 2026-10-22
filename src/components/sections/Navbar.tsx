"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"
import { profile } from "@/data/profile"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const toggleRef = React.useRef<HTMLButtonElement>(null)
    const { language, setLanguage } = useLanguage()

    React.useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 20)
                ticking = false
            })
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = {
        es: [
            { name: "Sobre Mí", href: "#about" },
            { name: "Tecnologías", href: "#tech" },
            { name: "Proyectos", href: "#projects" },
        ],
        en: [
            { name: "About", href: "#about" },
            { name: "Technologies", href: "#tech" },
            { name: "Projects", href: "#projects" },
        ]
    }

    const currentLinks = navLinks[language]

    return (
        <header onKeyDown={event => { if (event.key === "Escape") { setIsOpen(false); toggleRef.current?.focus() } }} className={cn(
            "fixed inset-x-0 top-0 w-full z-50 transition-all duration-300 border-b",
            isScrolled
                ? "glass-panel rounded-b-2xl mx-auto w-[98%] top-2 py-2"
                : "bg-background/95 md:bg-transparent border-transparent py-3 md:py-4"
        )}>
            <div className="w-full px-5 sm:px-6 md:px-12 lg:px-20 xl:px-28 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl sm:text-2xl tracking-tighter flex items-center gap-2 group">

                    <span>Portafolio<span className="text-primary/100"> Web</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {currentLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setLanguage(language === "es" ? "en" : "es")}
                            className="w-9 h-9"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="sr-only">Cambiar idioma</span>
                        </Button>
                        <Button asChild>
                            <a href={profile.social.whatsapp} target="_blank" rel="noreferrer">
                                {language === "es" ? "Contactar" : "Contact"}
                            </a>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    ref={toggleRef}
                    aria-label={language === "es" ? (isOpen ? "Cerrar menú" : "Abrir menú") : (isOpen ? "Close menu" : "Open menu")}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground focus-visible:outline-2 focus-visible:outline-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav id="mobile-navigation" aria-label={language === "es" ? "Navegación principal" : "Main navigation"} className="md:hidden absolute top-full left-0 w-full rounded-b-2xl bg-[#111113] border-t border-white/10 py-5 px-4 flex flex-col gap-3">
                    {currentLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base font-medium px-4 py-3 hover:bg-white/5 rounded-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <hr className="border-white/10 my-2" />
                    <div className="flex items-center justify-between px-4">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setLanguage(language === "es" ? "en" : "es")
                                setIsOpen(false)
                            }}
                            className="gap-2 min-h-11"
                        >
                            <Globe className="w-4 h-4" />
                            {language === "es" ? "English" : "Español"}
                        </Button>
                        <Button asChild className="min-h-11" onClick={() => setIsOpen(false)}>
                            <a href={profile.social.whatsapp} target="_blank" rel="noreferrer">
                                {language === "es" ? "Contactar" : "Contact"}
                            </a>
                        </Button>
                    </div>
                </nav>
            )}
        </header>
    )
}
