"use client"
import { profile } from "@/data/profile"
import { Mail, ArrowUpCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-background border-t border-white/5 py-12 relative overflow-hidden">
            {/* Subtle top border illumination */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container px-4 md:px-8 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">

                    {/* Brand Section */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link href="/" className="font-bold text-2xl tracking-tighter group">
                            Luis<span className="text-primary transition-colors duration-300"> Alatta</span>
                        </Link>
                        <p className="text-muted-foreground text-xs max-w-[280px] leading-relaxed text-center md:text-left">
                            Diseñando y desarrollando experiencias digitales excepcionales con un enfoque en la calidad.
                        </p>
                    </div>

                    {/* Contact Channel - Horizontal & Compact */}
                    <div className="flex items-center">
                        <a
                            href={`mailto:${profile.email}`}
                            className="flex items-center gap-4 glass-panel px-5 py-2.5 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-white/10"
                        >
                            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground leading-none mb-1">Escríbeme</p>
                                <p className="text-sm font-medium text-white leading-none">{profile.email}</p>
                            </div>
                        </a>
                    </div>

                    {/* Navigation / Action */}
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-white transition-colors group tracking-[0.2em]"
                        >
                            <span>VOLVER ARRIBA</span>
                            <ArrowUpCircle className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                        </button>
                        <div className="flex items-center gap-4">
                            <p className="text-[10px] text-muted-foreground/60 font-mono">
                                &copy; {currentYear}
                            </p>
                            <span className="w-1 h-1 bg-white/10 rounded-full" />
                            <p className="text-[10px] text-muted-foreground/60 italic font-medium">
                                Arequipa, Perú
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
