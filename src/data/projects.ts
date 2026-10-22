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
    accent: string;
    featured: boolean;
    flag: string;
};

export const projects: Project[] = [
    {
        id: "16",
        slug: "imb-institute",
        title: "IMB Institute",
        shortDescription: "Sitio institucional de formación especializada para profesionales y organizaciones.",
        fullDescription: "Plataforma de International Management and Business Institute con programas de capacitación en gestión, tecnología y otras áreas profesionales. Presenta sus alianzas, novedades y canales de contacto.",
        category: "Corporativo",
        role: "Desarrollador Web",
        industry: "Educación / Capacitación profesional",
        technologies: ["WordPress"],
        platform: "Web",
        features: [
            "Catálogo de programas de capacitación por área profesional",
            "Páginas institucionales, alianzas y novedades",
            "Formulario de contacto y acceso al aula virtual"
        ],
        challenges: [],
        outcomes: [],
        status: "Completado",
        demoUrl: "https://imbinstitute.com/",
        repoUrl: "",
        imageUrl: "",
        accent: "#2563eb",
        featured: true,
        flag: "pe"
    },
    {
        id: "1",
        slug: "motomajes",
        title: "MotoMajes",
        shortDescription: "PWA de mototaxi y delivery bajo demanda en Majes, Arequipa, con roles de cliente, conductor y administrador.",
        fullDescription: "Aplicación web progresiva tipo ride-hailing para pedir mototaxis y encomiendas en Majes. Maneja tres roles diferenciados (cliente, conductor y administrador) con paneles propios, seguimiento en mapa en tiempo real, negociación de precio, chat, calificaciones y un panel administrativo con métricas. Es instalable como app nativa mediante service worker.",
        category: "Móvil",
        role: "Full Stack Developer",
        industry: "Movilidad urbana / Delivery",
        technologies: ["Next.js", "React", "TypeScript", "Supabase", "Google Maps API", "PWA"],
        platform: "Web / Móvil (PWA)",
        features: [
            "Solicitud de viajes y encomiendas con mapa en vivo y autocompletado de direcciones",
            "Flujo de conductor: órdenes entrantes, navegación, estado online/offline y ganancias",
            "Negociación de precio y sistema de calificaciones entre cliente y conductor",
            "Panel de administración con métricas y PWA instalable con soporte offline"
        ],
        challenges: [
            "Sincronizar ubicación y estados de viaje en tiempo real entre múltiples roles con Supabase Realtime.",
            "Ofrecer una experiencia offline confiable sin romper sesiones activas al actualizar el service worker."
        ],
        outcomes: [
            "App instalable multi-rol lista para un mercado local sin depender de tiendas de aplicaciones.",
            "Plataforma que centraliza pedidos, seguimiento y ofertas de precio en un solo lugar."
        ],
        status: "En desarrollo",
        demoUrl: "https://motomajes.vercel.app",
        repoUrl: "",
        imageUrl: "",
        accent: "#f59e0b",
        featured: true,
        flag: "pe"
    },
    {
        id: "2",
        slug: "marca-peruana",
        title: "Marca Peruana",
        shortDescription: "Plataforma que impulsa a emprendedores y marcas peruanas, con blog administrable y panel de gestión propio.",
        fullDescription: "Plataforma full stack sobre Cloudflare que combina páginas institucionales con un panel de administración completo. Incluye CRUD de novedades sobre base de datos D1, subida de medios a R2 y autenticación propia con sesiones seguras (PBKDF2). Construida con Astro Actions, validación con Zod y cubierta por pruebas unitarias y E2E.",
        category: "Full Stack",
        role: "Full Stack Developer",
        industry: "Emprendimiento / Desarrollo económico",
        technologies: ["Astro", "Cloudflare D1", "Cloudflare R2", "TypeScript", "Zod", "Playwright"],
        platform: "Web (Serverless / Edge)",
        features: [
            "Blog de novedades con detalle por slug y CRUD desde panel administrativo",
            "Autenticación con cookies de sesión y hashing PBKDF2 en el edge",
            "Subida de imágenes a Cloudflare R2 mediante endpoint propio",
            "Migraciones SQL versionadas y pruebas con Vitest y Playwright"
        ],
        challenges: [
            "Implementar autenticación y sesiones seguras en el runtime de Cloudflare Workers con Web Crypto.",
            "Orquestar almacenamiento entre D1 (contenido) y R2 (medios) manteniendo el sitio en el edge."
        ],
        outcomes: [
            "Plataforma autoadministrable donde el cliente publica contenido sin tocar código.",
            "Arquitectura serverless de bajo costo respaldada por pruebas automatizadas."
        ],
        status: "En desarrollo",
        demoUrl: "https://marcaperuana.com/",
        repoUrl: "",
        imageUrl: "",
        accent: "#dc2626",
        featured: true,
        flag: "pe"
    },
    {
        id: "3",
        slug: "deuman",
        title: "Deuman",
        shortDescription: "Plataforma corporativa sobre sostenibilidad y cambio climático con presencia en más de 22 países.",
        fullDescription: "Desarrollo y optimización de la plataforma digital para Deuman, expertos en transformar desafíos climáticos en oportunidades en sostenibilidad. El proyecto destaca su amplio portafolio de más de 600 proyectos internacionales y sus pilares de economía circular y mitigación climática.",
        category: "Corporativo",
        role: "Desarrollador Full Stack",
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
        imageUrl: "/images/projects/deuman.webp",
        accent: "#16a34a",
        featured: true,
        flag: "es"
    },
    {
        id: "4",
        slug: "proyecto-ceela",
        title: "Proyecto CEELA",
        shortDescription: "Sitio web enfocado en la promoción de eficiencia energética y edificaciones sostenibles en Latinoamérica.",
        fullDescription: "Creación de la plataforma digital para el Proyecto CEELA, un esfuerzo regional para capacitar y asesorar a profesionales del sector construcción sobre edificaciones con eficiencia energética y emisiones netas cero de CO₂. Incluye un ecosistema de noticias, eventos y recursos educativos.",
        category: "Full Stack",
        role: "Desarrollador Full Stack",
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
        imageUrl: "/images/projects/ceela.webp",
        accent: "#0ea5e9",
        featured: true,
        flag: "cl"
    },
    {
        id: "5",
        slug: "3s-suministros",
        title: "3S Suministros",
        shortDescription: "Sitio corporativo para empresa arequipeña de suministros industriales, representante de Bekaert.",
        fullDescription: "Web corporativa one-page construida con Astro (salida estática) para 3S Suministros y Servicios del Sur, empresa de abastecimiento industrial para minería, construcción y energía. Presenta categorías de producto, marcas representadas, catálogos descargables y contacto directo, con una dirección de diseño industrial heavy-duty.",
        category: "Corporativo",
        role: "Desarrollador Web",
        industry: "Suministros industriales / Minería",
        technologies: ["Astro", "TypeScript", "CSS", "Sharp", "Playwright"],
        platform: "Web (estático)",
        features: [
            "Sección de marcas con líneas de producto de izaje y HARDPAD",
            "Catálogo con PDFs descargables, galería y testimonios",
            "Botón flotante de WhatsApp con múltiples canales de contacto",
            "SEO técnico completo: Open Graph, JSON-LD y sitemap"
        ],
        challenges: [
            "Trasladar una identidad de marca industrial heavy-duty a una interfaz web coherente sin frameworks de UI.",
            "Centralizar el contenido editable en archivos de datos para que el cliente lo mantenga sin tocar código."
        ],
        outcomes: [
            "Sitio estático de carga rápida y buen posicionamiento con imágenes optimizadas y datos estructurados.",
            "Base de contenido centralizada que facilita el mantenimiento por parte del cliente."
        ],
        status: "Completado",
        demoUrl: "https://www.3s-suministros.com/",
        repoUrl: "",
        imageUrl: "",
        accent: "#eab308",
        featured: true,
        flag: "pe"
    },
    {
        id: "6",
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
        imageUrl: "/images/projects/fixmantech.webp",
        accent: "#f97316",
        featured: true,
        flag: "pe"
    },
    {
        id: "8",
        slug: "muebles-fercho",
        title: "Muebles Fercho",
        shortDescription: "Catálogo web de muebles a medida con panel de administración completo y contacto por WhatsApp.",
        fullDescription: "Sitio para la mueblería Muebles Fercho, que fabrica muebles a medida en madera, melamina y MDF. Combina un catálogo público optimizado para SEO con un panel de administración protegido para gestionar productos con variantes, categorías, materiales, medidas, sets, testimonios y galería. Incluye gestión de imágenes con recorte y CDN, y generador de cotizaciones.",
        category: "Full Stack",
        role: "Full Stack Developer",
        industry: "Mueblería / Fabricación a medida",
        technologies: ["Next.js", "React", "Prisma", "PostgreSQL", "NextAuth", "Cloudinary"],
        platform: "Web / Móvil (PWA)",
        features: [
            "Catálogo público con categorías, productos con variantes, sets y galería",
            "Panel de administración CRUD completo con carga masiva y editor enriquecido",
            "Gestión de imágenes con recorte, optimización y CDN (Cloudinary)",
            "Contacto directo por WhatsApp y generador de cotizaciones"
        ],
        challenges: [
            "Modelar productos con variantes, materiales y medidas de forma flexible en Prisma/PostgreSQL.",
            "Construir un pipeline de imágenes eficiente manteniendo buen rendimiento y SEO."
        ],
        outcomes: [
            "Presencia web profesional y autogestionable que canaliza pedidos por WhatsApp.",
            "Contenido 100% editable por el dueño sin tocar código y sitio optimizado para buscadores."
        ],
        status: "Mantenimiento",
        demoUrl: "",
        repoUrl: "",
        imageUrl: "",
        accent: "#a16207",
        featured: false,
        flag: "pe"
    },
    {
        id: "10",
        slug: "nexia-2026",
        title: "NEXIA 2026",
        shortDescription: "Landing del primer hackatón universitario presencial de Arequipa enfocado en IA para la educación.",
        fullDescription: "Landing de una sola página en Astro para el evento NEXIA 2026 «Build with AI». Presenta cronograma, tracks, premios, ponentes, patrocinadores, ODS y FAQ, con un formulario de registro conectado a Google Sheets como backend sin servidor. Incluye página de bases del concurso.",
        category: "Web",
        role: "Desarrollador Web",
        industry: "Educación / Eventos de tecnología",
        technologies: ["Astro", "CSS", "Google Sheets API", "TypeScript"],
        platform: "Web (estático)",
        features: [
            "Secciones de evento: tracks, cronograma, premios, ponentes y ODS",
            "Formulario de registro conectado a Google Sheets",
            "Página de bases del concurso",
            "Efectos de reveal on scroll y fondo animado"
        ],
        challenges: [
            "Persistir inscripciones sin backend propio integrando Google Sheets de forma segura.",
            "Construir una landing de evento rica en secciones manteniéndola ligera."
        ],
        outcomes: [
            "Landing de captación de participantes con canal de registro operativo sin infraestructura adicional.",
            "Sitio estático rápido y con dominio propio de despliegue."
        ],
        status: "Completado",
        demoUrl: "https://www.buildwithainexia.imbinstitute.com/",
        repoUrl: "",
        imageUrl: "",
        accent: "#7c3aed",
        featured: false,
        flag: "pe"
    },
    {
        id: "11",
        slug: "expedikids",
        title: "ExpediKids",
        shortDescription: "Web de una empresa social que capta voluntarios y capacita docentes para reforzar la lectura infantil.",
        fullDescription: "Migración de WordPress a Astro + Tailwind: landing de convocatoria de voluntarios más un módulo de capacitaciones con backend en Cloudflare (D1 + KV). Incluye login de voluntarios, panel, módulos formativos con recursos y exámenes con puntaje mínimo, y un panel de administración.",
        category: "Web",
        role: "Desarrollador Web",
        industry: "Educación / Empresa social",
        technologies: ["Astro", "Tailwind CSS", "Cloudflare D1", "Cloudflare KV", "Workers"],
        platform: "Web (Serverless / Edge)",
        features: [
            "Landing de convocatoria con inscripción vía WhatsApp",
            "Plataforma de capacitaciones con login de voluntarios y sesiones",
            "Módulos formativos con recursos y exámenes calificados",
            "Panel de administración de voluntarios y contenidos"
        ],
        challenges: [
            "Construir auth y almacenamiento serverless sobre D1/KV manteniendo el sitio estático rápido.",
            "Migrar el contenido de WordPress a componentes Astro sin perder SEO."
        ],
        outcomes: [
            "Sitio más ligero y mantenible que la versión WordPress previa.",
            "Plataforma de formación autoservicio sobre infraestructura de bajo costo."
        ],
        status: "En desarrollo",
        demoUrl: "https://expedikids.com/",
        repoUrl: "",
        imageUrl: "",
        accent: "#0891b2",
        featured: false,
        flag: "pe"
    },
    {
        id: "12",
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
        imageUrl: "/images/projects/peditodomajes.webp",
        accent: "#e11d48",
        featured: false,
        flag: "pe"
    },
    {
        id: "14",
        slug: "amerandu",
        title: "Amerandú",
        shortDescription: "Landing de un club de lectura y pensamiento latinoamericano para leer, dialogar y reflexionar.",
        fullDescription: "Sitio one-page construido con Astro y componentes interactivos en React que presenta la misión, visión y el club de lectura de Amerandú. Incluye FAQ interactiva, formularios de contacto y voluntariado con carga de CV, y un diseño responsive optimizado para SEO.",
        category: "Web",
        role: "Desarrollador Web",
        industry: "Cultura / Educación",
        technologies: ["Astro", "React", "Tailwind CSS", "TypeScript", "Cloudflare"],
        platform: "Web (estático)",
        features: [
            "Landing con secciones de misión, visión, valores y club de lectura",
            "FAQ interactiva con islas de React",
            "Formulario de contacto y voluntariado con carga de CV",
            "Botón directo de WhatsApp y menú móvil"
        ],
        challenges: [
            "Integrar islas de React dentro de un sitio Astro mayormente estático.",
            "Manejar la subida de archivos desde el formulario en un despliegue estático."
        ],
        outcomes: [
            "Sitio institucional listo para desplegar en Cloudflare.",
            "Base de componentes reutilizables y accesibles para futuras secciones."
        ],
        status: "Completado",
        demoUrl: "https://www.amerandu.com/",
        repoUrl: "",
        imageUrl: "",
        accent: "#ca8a04",
        featured: false,
        flag: "pe"
    },
    {
        id: "15",
        slug: "habilab",
        title: "HabiLab",
        shortDescription: "Programa social peruano de talleres y mentorías para desarrollar habilidades para la vida en jóvenes.",
        fullDescription: "Sitio multipágina en Astro con Tailwind CSS que presenta el programa HabiLab: talleres grupales, mentorías, comunidad y proyectos creativos. Incluye páginas de inicio, aliados, voluntarios y políticas, con metadatos SEO y Open Graph.",
        category: "Web",
        role: "Desarrollador Web",
        industry: "Social / Educación",
        technologies: ["Astro", "Tailwind CSS", "TypeScript", "Cloudflare Pages"],
        platform: "Web (estático)",
        features: [
            "Landing con secciones de actividades, cómo funciona y valores",
            "Página de aliados y de captación de voluntarios",
            "Páginas de agradecimiento y políticas de privacidad",
            "SEO y Open Graph configurados"
        ],
        challenges: [
            "Comunicar de forma clara y amigable para público juvenil y familias con diseño propio.",
            "Mantener consistencia entre varias páginas usando solo Astro y Tailwind."
        ],
        outcomes: [
            "Sitio institucional del programa listo para desplegar en Cloudflare Pages.",
            "Estructura de componentes reutilizable para captación de voluntarios y aliados."
        ],
        status: "Completado",
        demoUrl: "https://thehabilab.com/",
        repoUrl: "",
        imageUrl: "",
        accent: "#65a30d",
        featured: false,
        flag: "pe"
    }
];

// Icono/logo representativo de cada proyecto (app-style). Si un slug no está aquí,
// la UI usa un monograma con el color de acento del proyecto.
export const projectIcons: Record<string, string> = {
    "imb-institute": "/images/projects/icons/imb-institute.png",
    "motomajes": "/images/projects/icons/motomajes.png",
    "marca-peruana": "/images/projects/icons/marca-peruana.png",
    "deuman": "/images/projects/icons/deuman.png",
    "proyecto-ceela": "/images/projects/icons/proyecto-ceela.png",
    "3s-suministros": "/images/projects/icons/3s-suministros.png",
    "fixmantech": "/images/projects/icons/fixmantech.png",
    "muebles-fercho": "/images/projects/icons/muebles-fercho.png",
    "nexia-2026": "/images/projects/icons/nexia-2026.svg",
    "expedikids": "/images/projects/icons/expedikids.png",
    "pidetodomajes": "/images/projects/icons/pidetodomajes.png",
    "amerandu": "/images/projects/icons/amerandu.png",
    "habilab": "/images/projects/icons/habilab.png",
};
