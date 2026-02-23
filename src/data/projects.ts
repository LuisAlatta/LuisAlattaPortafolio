export type Project = {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    category: "Web" | "Móvil" | "Full Stack" | "Corporativo";
    role: string;
    industry?: string;
    technologies: string[];
    platform: string;
    features: string[];
    challenges: string[];
    outcomes: string[];
    status: "Completado" | "En desarrollo" | "Mantenimiento";
    demoUrl: string;
    repoUrl: string;
    imageUrl: string;
    featured: boolean;
    flag: string;
};

export const projects: Project[] = [
    {
        id: "1",
        slug: "deuman",
        title: "Deuman",
        shortDescription: "Plataforma corporativa sobre sostenibilidad y cambio climático con presencia en más de 22 países.",
        fullDescription: "Desarrollo y optimización de la plataforma digital para Deuman, expertos en transformar desafíos climáticos en oportunidades en sostenibilidad. El proyecto destaca su amplio portafolio de más de 600 proyectos internacionales y sus pilares de economía circular y mitigación climática.",
        category: "Corporativo",
        role: "Desarrollador Web",
        industry: "Sostenibilidad / Medio Ambiente",
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        platform: "Web",
        features: [
            "Presentación interactiva de servicios B2B",
            "Gestor de artículos y perspectivas (Blog)",
            "Optimización SEO para posicionamiento internacional",
            "Interfaz moderna orientada a corporaciones y gobiernos"
        ],
        challenges: [
            "Organizar de manera intuitiva un volumen alto de información técnica y legal.",
            "Lograr que el sitio proyecte autoridad, confianza y vanguardia climática."
        ],
        outcomes: [
            "Mejora en la comunicación del valor ASG (Ambiental, Social y Gobernanza).",
            "Aumento en el tiempo de permanencia de los usuarios en la web."
        ],
        status: "Completado",
        demoUrl: "https://deuman.com",
        repoUrl: "",
        imageUrl: "/images/projects/deuman.png",
        featured: true,
        flag: "es"
    },
    {
        id: "2",
        slug: "proyecto-ceela",
        title: "Proyecto CEELA",
        shortDescription: "Sitio web enfocado en la promoción de eficiencia energética y edificaciones sostenibles en Latinoamérica.",
        fullDescription: "Creación de la plataforma digital para el Proyecto CEELA, un esfuerzo regional para capacitar y asesorar a profesionales del sector construcción sobre edificaciones con eficiencia energética y emisiones netas cero de CO₂. Incluye un ecosistema de noticias, eventos y recursos educativos.",
        category: "Full Stack",
        role: "Desarrollador Web",
        industry: "Construcción Sostenible / Educación",
        technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
        platform: "Web",
        features: [
            "Directorio de recursos educativos y manuales técnicos",
            "Sección de noticias dinámicas y eventos",
            "Diseño adaptativo, limpio y enfocado en la accesibilidad",
            "Integración con redes y ecosistema de financiamiento verde"
        ],
        challenges: [
            "Integrar contenido de múltiples países de Latinoamérica bajo una estética unificada.",
            "Asegurar tiempos de carga rápidos para usuarios con conexiones variables."
        ],
        outcomes: [
            "Facilitó la difusión del conocimiento sobre construcción sostenible a nivel regional.",
            "Consolidación de una comunidad online de arquitectos e ingenieros."
        ],
        status: "Completado",
        demoUrl: "https://proyectoceela.com",
        repoUrl: "",
        imageUrl: "/images/projects/ceela.png",
        featured: true,
        flag: "cl"
    },
    {
        id: "3",
        slug: "fixmantech",
        title: "FIXMANTECH",
        shortDescription: "Landing page corporativa para soluciones integrales de ingeniería y mantenimiento industrial en Perú.",
        fullDescription: "Construcción de la presencia digital oficial de FIXMANTECH SAC, empresa peruana dedicada a servicios de ingeniería, mantenimiento industrial e instalaciones eléctricas para el sector minería y construcción. Enfocada en la captación de clientes B2B.",
        category: "Corporativo",
        role: "Desarrollador Frontend",
        industry: "Ingeniería / Industria",
        technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
        platform: "Web",
        features: [
            "Catálogo detallado de servicios y mantenimientos",
            "Formulario integrado para cotizaciones ágiles",
            "Rendimiento optimizado con Vite para carga instantánea",
            "Responsive Design para visualización en terrenos de obra"
        ],
        challenges: [
            "Estructurar un portafolio de servicios técnicos complejos de manera sencilla.",
            "Desarrollar una interfaz que inspire seguridad y precisión."
        ],
        outcomes: [
            "Visibilidad de la marca como referente de mantenimiento en la industria.",
            "Aumento en las solicitudes de cotización mediante el canal digital."
        ],
        status: "Completado",
        demoUrl: "https://www.fixmantech.com",
        repoUrl: "",
        imageUrl: "/images/projects/fixmantech.png",
        featured: true,
        flag: "pe"
    },
    {
        id: "4",
        slug: "pidetodomajes",
        title: "PideTodoMajes",
        shortDescription: "Aplicación web (PWA) de delivery para restaurantes en el Valle de Majes, Arequipa.",
        fullDescription: "Desarrollo Full Stack de un robusto aplicativo de delivery local (PWA) que conecta comensales con sus restaurantes favoritos en El Pedregal. Cuenta con flujos completos de selección, carrito de compras y geolocalización básica comercial.",
        category: "Móvil",
        role: "Full Stack Developer",
        industry: "E-Commerce / Food Delivery",
        technologies: ["React", "Vite", "Node.js", "PWA", "Tailwind CSS"],
        platform: "Web / Móvil (PWA)",
        features: [
            "Experiencia similar a app nativa instalable mediante PWA",
            "Navegación fluida por restaurantes, categorías y menús",
            "Carrito de compras reactivo en tiempo real",
            "SEO optimizado (JSON-LD) para negocios locales de comida"
        ],
        challenges: [
            "Implementar una arquitectura PWA eficiente para conexiones de internet inestables.",
            "Diseñar un flujo de checkout con el menor número de clics posible para no perder ventas."
        ],
        outcomes: [
            "Los usuarios pueden pedir comida fácil sin necesidad de instalar un APK o desde tiendas.",
            "Aumento de la visibilidad y ventas de los restaurantes aliados en la zona."
        ],
        status: "Completado",
        demoUrl: "https://pedi-majes.vercel.app",
        repoUrl: "",
        imageUrl: "/images/projects/peditodomajes.png",
        featured: true,
        flag: "pe"
    }
];
