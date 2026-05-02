"use client"
import * as React from "react"
import { profile } from "@/data/profile"
import { MapPin, Mail, MessageCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useRevealGroup } from "@/hooks/useReveal"

export function Contact() {
    const sectionRef = useRevealGroup<HTMLElement>()
    const { language } = useLanguage()

    const contactMethods = [
        {
            icon: MessageCircle,
            title: language === "es" ? "WhatsApp" : "WhatsApp",
            value: profile.phone,
            link: profile.social.whatsapp,
            label: language === "es" ? "Chatear ahora" : "Chat now",
            color: "#25D366"
        },
        {
            icon: Mail,
            title: language === "es" ? "Correo electrónico" : "Email",
            value: profile.email,
            link: `mailto:${profile.email}`,
            label: language === "es" ? "Enviar correo" : "Send email",
            color: "#EA4335"
        },
        {
            icon: MapPin,
            title: language === "es" ? "Ubicación" : "Location",
            value: profile.location,
            link: "#",
            label: language === "es" ? "Arequipa, Perú" : "Arequipa, Peru",
            color: "#4285F4"
        }
    ]

    return (
        <section ref={sectionRef} id="contact" className="py-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container px-4 md:px-8 max-w-5xl mx-auto">
                <div data-reveal className="reveal mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white text-center">
                        {language === "es" ? "¡Hablemos de tu próximo proyecto!" : "Let's talk about your next project!"}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {language === "es"
                            ? "Estoy disponible para nuevos proyectos y colaboraciones. Elige el canal que prefieras y me pondré en contacto contigo de inmediato."
                            : "I'm available for new projects and collaborations. Choose your preferred channel and I'll get back to you immediately."}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {contactMethods.map((method, i) => (
                        <a
                            key={method.title}
                            href={method.link}
                            target={method.link.startsWith("http") ? "_blank" : undefined}
                            rel={method.link.startsWith("http") ? "noreferrer" : undefined}
                            data-reveal
                            className={`reveal reveal-delay-${i + 1} glass-panel p-8 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-white/5 hover:border-white/20`}
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                style={{ backgroundColor: `${method.color}20`, border: `1px solid ${method.color}40` }}
                            >
                                <method.icon className="w-7 h-7" style={{ color: method.color }} />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-white">{method.title}</h3>
                            <p className="text-muted-foreground mb-6 font-medium">{method.value}</p>

                            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
                                <span>{method.label}</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                        Arequipa, Perú • {language === "es" ? "Disponible Remoto" : "Available Remote"}
                    </p>
                </div>
            </div>
        </section>
    )
}
