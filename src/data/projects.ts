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
        demoUrl: "https://marcaperuana.pe",
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
        demoUrl: "https://3s-suministros.com",
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
        id: "7",
        slug: "serena-seguros",
        title: "Serena Seguros",
        shortDescription: "Plataforma integral de gestión de seguros con 5 portales por rol sobre un mismo backend.",
        fullDescription: "Sistema de gestión de aseguradora con backend Spring Boot (Java 21) y frontend Next.js / React, con autenticación JWT y control de acceso por rol. Maneja pólizas, siniestros, reaseguro, leads y comisiones, cobranza y KPIs ejecutivos sobre una base de datos MySQL, con cinco portales diferenciados (asegurado, comercial, técnico, operativo y ejecutivo).",
        category: "Full Stack",
        role: "Full Stack Developer",
        industry: "Seguros / Insurtech",
        technologies: ["Java", "Spring Boot", "Next.js", "React", "MySQL", "Docker"],
        platform: "Web",
        features: [
            "Cinco portales con enrutamiento y permisos por rol sobre un único backend",
            "Autenticación JWT con access y refresh tokens",
            "Gestión de pólizas, siniestros, comisiones y cobranza",
            "Dashboards y KPIs ejecutivos con gráficos"
        ],
        challenges: [
            "Mantener coherencia de datos y permisos entre cinco portales sobre un mismo backend y base de datos.",
            "Sincronizar la convención de nombres en toda la cadena Java ↔ JSON ↔ React."
        ],
        outcomes: [
            "Backend modular por dominio con separación clara de responsabilidades y seguridad por roles.",
            "Stack de observabilidad y despliegue con Docker listo para escalar."
        ],
        status: "En desarrollo",
        demoUrl: "",
        repoUrl: "",
        imageUrl: "",
        accent: "#2563eb",
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
        id: "9",
        slug: "asu-inventario",
        title: "ASU — Inventario y Ventas",
        shortDescription: "Sistema interno de punto de venta (POS), inventario y ventas con soporte multi-sucursal.",
        fullDescription: "ERP ligero / POS interno para la empresa de tecnología ASU. Incluye punto de venta, gestión de inventario con kardex, comprobantes, cierre de caja, sucursales, usuarios y un dashboard con métricas de ventas y stock crítico. Usa Supabase como backend con autenticación por credenciales y por PIN protegida mediante middleware.",
        category: "Full Stack",
        role: "Full Stack Developer",
        industry: "Retail / Gestión comercial",
        technologies: ["Next.js", "React", "TypeScript", "Supabase", "Zod", "Recharts"],
        platform: "Web",
        features: [
            "Punto de venta (POS) y comprobantes con exportación a PDF",
            "Gestión de inventario: productos, stock y kardex de movimientos",
            "Cierre de caja y dashboard de ventas, productos top y stock crítico",
            "Multi-sucursal y autenticación por credenciales o PIN"
        ],
        challenges: [
            "Mantener un control de inventario consistente frente a ventas concurrentes en varias sucursales.",
            "Implementar autenticación y autorización segura por roles con SSR de Supabase."
        ],
        outcomes: [
            "Digitaliza ventas e inventario de la empresa en una sola herramienta interna.",
            "Da visibilidad en tiempo real de ventas y stock crítico para decisiones operativas."
        ],
        status: "En desarrollo",
        demoUrl: "",
        repoUrl: "",
        imageUrl: "",
        accent: "#0d9488",
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
        demoUrl: "https://nexia2026.imb.pe",
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
        demoUrl: "",
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
        id: "13",
        slug: "aset-witch",
        title: "Aset Witch",
        shortDescription: "Landing mística y elegante para tarotista y sanadora holística, con agendamiento vía WhatsApp.",
        fullDescription: "Sitio de una página para Aset Witch, marca personal de lectura de tarot y sanación holística, construido con Next.js y React. Presenta un diseño premium con tipografías serif, fondo animado y transiciones con Framer Motion, y estructura los servicios en modales de detalle que derivan al agendamiento por WhatsApp.",
        category: "Web",
        role: "Desarrollador Frontend",
        industry: "Servicios holísticos / Bienestar",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        platform: "Web",
        features: [
            "Hero animado y fondo decorativo con Framer Motion",
            "Catálogo de servicios con modales de detalle",
            "CTA de agendamiento integrado con WhatsApp",
            "Secciones de proceso de reserva y testimonios"
        ],
        challenges: [
            "Lograr una estética premium sin caer en clichés visuales del nicho esotérico.",
            "Mantener buen rendimiento con animaciones ricas sobre React 19."
        ],
        outcomes: [
            "Presencia digital diferenciada que transmite exclusividad y confianza.",
            "Flujo de conversión directo a WhatsApp que reduce la fricción para agendar."
        ],
        status: "Completado",
        demoUrl: "",
        repoUrl: "",
        imageUrl: "",
        accent: "#9333ea",
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
        demoUrl: "",
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
        demoUrl: "",
        repoUrl: "",
        imageUrl: "",
        accent: "#65a30d",
        featured: false,
        flag: "pe"
    },
    {
        id: "16",
        slug: "caminos-del-sabor",
        title: "Los Caminos del Sabor",
        shortDescription: "Landing pixel-art de un videojuego de aventura por la gastronomía arequipeña.",
        fullDescription: "Sitio estático hecho con Astro que presenta un juego de aventura pixel-art ambientado en Arequipa, Perú. Secciones de historia, mundo, personajes, características, galería y descarga, con iconografía pixel-art y enfoque en difusión del tráiler y las plataformas objetivo.",
        category: "Web",
        role: "Desarrollador Web",
        industry: "Videojuegos / Entretenimiento",
        technologies: ["Astro", "astro-icon", "HTML", "CSS"],
        platform: "Web (estático)",
        features: [
            "Hero temático de aventura pixel-art",
            "Secciones de historia, mundo y personajes",
            "Galería y sección de descarga con plataformas objetivo",
            "Identidad visual pixel-art consistente"
        ],
        challenges: [
            "Lograr una estética pixel-art coherente y fluida en web con solo iconos y CSS.",
            "Estructurar una landing de conversión atractiva para un juego aún sin lanzar."
        ],
        outcomes: [
            "Landing promocional ligera y de carga rápida como sitio estático.",
            "Identidad visual pixel-art consistente lista para difundir el juego."
        ],
        status: "Completado",
        demoUrl: "",
        repoUrl: "",
        imageUrl: "",
        accent: "#db2777",
        featured: false,
        flag: "pe"
    },
    {
        id: "17",
        slug: "neon-aura-ar",
        title: "Neon Aura AR",
        shortDescription: "Experiencia de realidad aumentada en el navegador que rastrea las manos y genera efectos neón y audio reactivos.",
        fullDescription: "Experiencia de realidad aumentada autocontenida que usa la cámara web y MediaPipe Hands para detectar manos y gestos en tiempo real. Renderiza partículas y efectos tipo aura neón sobre canvas, con audio generativo reactivo al movimiento y a la separación entre manos, además de un HUD en vivo y selector de temas de color.",
        category: "Web",
        role: "Desarrollador Frontend",
        industry: "Experiencias interactivas / Visión por computador",
        technologies: ["JavaScript", "MediaPipe Hands", "HTML5 Canvas", "Web Audio API", "WebRTC"],
        platform: "Web",
        features: [
            "Seguimiento de manos y gestos en tiempo real con MediaPipe",
            "Efectos de partículas neón reactivos a posición y velocidad",
            "Audio generativo que responde a la distancia entre manos",
            "HUD en vivo y 5 temas de color"
        ],
        challenges: [
            "Mantener buen rendimiento combinando detección de manos, render de canvas y audio en el navegador.",
            "Gestionar permisos de cámara y la inicialización del AudioContext con interacción del usuario."
        ],
        outcomes: [
            "Demo de AR autocontenida ejecutable directamente en el navegador.",
            "Experiencia inmersiva multimodal controlada por gestos sin hardware especial."
        ],
        status: "Completado",
        demoUrl: "",
        repoUrl: "",
        imageUrl: "",
        accent: "#06b6d4",
        featured: false,
        flag: "pe"
    },
    {
        id: "18",
        slug: "ruleta-peliculas",
        title: "Ruleta de Pelis",
        shortDescription: "App web con ruleta giratoria para elegir al azar qué película ver, con puntuaciones y persistencia local.",
        fullDescription: "Aplicación web hecha con Vite en JavaScript puro que resuelve el «qué vemos hoy» mediante una ruleta giratoria que selecciona una película al azar. Permite gestionar el pool de títulos, confirmar películas vistas con puntaje y guardar el progreso en localStorage, obteniendo carteles reales desde Wikipedia.",
        category: "Web",
        role: "Desarrollador Frontend",
        industry: "Entretenimiento / Herramienta interactiva",
        technologies: ["Vite", "JavaScript", "HTML5 Canvas", "Wikipedia API"],
        platform: "Web",
        features: [
            "Ruleta giratoria con selección aleatoria",
            "Modal de ganador con confeti y puntuación de 1 a 5 estrellas",
            "Gestión del pool y lista de películas ya vistas",
            "Búsqueda automática de carteles reales en Wikipedia"
        ],
        challenges: [
            "Implementar la física del giro y el mapeo del puntero al sector correcto con CSS/JS vanilla.",
            "Obtener carteles fiables desde Wikipedia para títulos arbitrarios sin backend."
        ],
        outcomes: [
            "Herramienta ligera que funciona 100% en el navegador y conserva el progreso.",
            "Experiencia lúdica y visual sin dependencias de framework."
        ],
        status: "Completado",
        demoUrl: "",
        repoUrl: "",
        imageUrl: "",
        accent: "#f43f5e",
        featured: false,
        flag: "pe"
    },
    {
        id: "19",
        slug: "renova",
        title: "RENOVA",
        shortDescription: "Sistema de gestión clínica con arquitectura SOA ligera: microservicios REST tras un API Gateway.",
        fullDescription: "Monorepo que implementa una arquitectura SOA ligera: múltiples microservicios Fastify (auth, pacientes, citas, notificaciones, reportes, facturación) tras un API Gateway, con frontend Next.js. Persistencia poliglota PostgreSQL + MongoDB + Redis, con JWT/RBAC y documentación Swagger por servicio.",
        category: "Full Stack",
        role: "Full Stack Developer",
        industry: "Salud / Gestión clínica",
        technologies: ["Node.js", "TypeScript", "Fastify", "Next.js", "PostgreSQL", "Docker"],
        platform: "Web (Microservicios)",
        features: [
            "API Gateway con enrutamiento, rate-limit y CORS",
            "Microservicios independientes con Swagger",
            "Autenticación JWT con roles (RBAC)",
            "Infraestructura dockerizada con seed automático"
        ],
        challenges: [
            "Orquestar varios servicios independientes y tres bases de datos manteniendo contratos REST coherentes.",
            "Diseñar paquetes compartidos reutilizables entre servicios sin acoplarlos."
        ],
        outcomes: [
            "Arquitectura SOA funcional con arranque reproducible en un solo comando.",
            "Separación limpia de paquetes compartidos (db, auth, tipos, validación)."
        ],
        status: "En desarrollo",
        demoUrl: "",
        repoUrl: "",
        imageUrl: "",
        accent: "#14b8a6",
        featured: false,
        flag: "pe"
    }
];
