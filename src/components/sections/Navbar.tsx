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
    const { language, setLanguage } = useLanguage()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
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
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b",
            isScrolled
                ? "glass-panel rounded-b-2xl mx-auto w-[98%] top-2 py-2"
                : "bg-transparent border-transparent py-4"
        )}>
            <div className="container px-4 md:px-8 max-w-6xl mx-auto flex items-center justify-between">
                <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform">
                        P
                    </div>
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
                    className="md:hidden p-2 text-muted-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/10 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-4">
                    {currentLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium px-4 py-2 hover:bg-white/5 rounded-xl"
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
                            className="gap-2"
                        >
                            <Globe className="w-4 h-4" />
                            {language === "es" ? "English" : "Español"}
                        </Button>
                        <Button asChild onClick={() => setIsOpen(false)}>
                            <a href={profile.social.whatsapp} target="_blank" rel="noreferrer">
                                {language === "es" ? "Contactar" : "Contact"}
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
