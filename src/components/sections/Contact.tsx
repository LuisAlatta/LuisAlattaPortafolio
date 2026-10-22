"use client"
import { profile } from "@/data/profile"
import { MapPin, Mail, MessageCircle, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useRevealGroup } from "@/hooks/useReveal"

export function Contact() {
    const sectionRef = useRevealGroup<HTMLElement>()
    const { language } = useLanguage()
    const es = language === "es"
    const contactMethods = [
        {
            icon: MessageCircle,
            title: "WhatsApp",
            value: profile.phone,
            link: profile.social.whatsapp,
            label: es ? "Conversemos" : "Let's talk",
        },
        {
            icon: Mail,
            title: es ? "Correo electrónico" : "Email",
            value: profile.email,
            link: `mailto:${profile.email}`,
            label: es ? "Escríbeme" : "Write to me",
        },
    ]

    return (
        <section ref={sectionRef} id="contact" className="py-16 md:py-24">
            <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">
                <div className="contact-stage rounded-[1.5rem] md:rounded-[2rem] px-6 py-10 md:p-12 lg:p-16 xl:p-20">
                    <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-24">
                        <div>
                            <h2 data-reveal className="reveal text-[clamp(3rem,6.3vw,6.5rem)] font-semibold tracking-[-0.055em] leading-none">
                                {es ? "Hablemos." : "Let's talk."}
                            </h2>
                            <p data-reveal className="reveal reveal-delay-1 mt-7 max-w-sm text-lg md:text-xl leading-relaxed text-[#555650]">
                                {es ? "Tu próximo proyecto empieza con una conversación. Cuéntame qué tienes en mente." : "Your next project starts with a conversation. Tell me what you have in mind."}
                            </p>
                        </div>
                        <div className="space-y-4">
                            {contactMethods.map((method, i) => (
                                <div key={method.title} data-reveal className={`reveal reveal-delay-${i + 2}`}>
                                    <a
                                        href={method.link}
                                        target={method.link.startsWith("https:") ? "_blank" : undefined}
                                        rel={method.link.startsWith("https:") ? "noopener noreferrer" : undefined}
                                        className="contact-row group flex items-center gap-4 rounded-xl p-5 md:p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171916]"
                                    >
                                        <method.icon aria-hidden="true" className="h-6 w-6 shrink-0" strokeWidth={1.5} />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm text-[#5c5e56] mb-2">{method.title}</p>
                                            <p className="text-base sm:text-lg xl:text-xl font-medium tracking-tight break-words">{method.value}</p>
                                            <p className="mt-3 text-sm font-medium">{method.label}</p>
                                        </div>
                                        <ArrowUpRight aria-hidden="true" className="contact-arrow h-6 w-6 shrink-0" strokeWidth={1.5} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-reveal className="reveal reveal-delay-3 mt-12 md:mt-16 flex flex-wrap items-center justify-between gap-4 text-sm text-[#555650]">
                        <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="h-4 w-4" />{es ? "Arequipa, Perú" : "Arequipa, Peru"}</span>
                        <span>{es ? "Trabajemos juntos, estés donde estés." : "Let's work together, wherever you are."}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
