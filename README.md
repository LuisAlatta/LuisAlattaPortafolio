# Portafolio Profesional de Luis Fernando Alatta Torres

## Descripción
Código fuente del portafolio profesional de Luis Alatta, diseñado y desarrollado con un enfoque en rendimiento, experiencia de usuario (UX/UI) y arquitectura moderna. Este proyecto sirve tanto para presentarse a oportunidades laborales como para conseguir clientes de alto nivel. 

## Stack Tecnológico 🚀
* **Framework:** Next.js (App Router)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS v4 (con soporte Modo Oscuro/Claro nativo)
* **Animaciones:** Framer Motion
* **Iconografía:** Lucide React
* **Formularios:** React Hook Form + Zod (Validaciones)
* **Notificaciones:** Sonner (Toasts)

## Requisitos Previos
* Node.js v18.x o superior
* npm, yarn, pnpm o bun

## Instrucciones para Ejecutar Localmente

1. **Instalar dependencias:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Ejecutar servidor de desarrollo:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Ver el proyecto:**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador preferido.

## Mantenimiento y Actualización de Contenido

El diseño está 100% separado de los datos. Puedes editar fácilmente la información clave:

* **Perfil y Redes Sociales:** Ve al archivo \`/src/data/profile.ts\`
* **Proyectos:** Edita o añade objetos al array en \`/src/data/projects.ts\`
* **Stack/Tecnologías:** Modifica las categorías en \`/src/data/technologies.ts\`
* **Trayectoria (Timeline):** Agrega tus hitos formativos y/o profesionales en \`/src/data/timeline.ts\`

## Instrucciones para Desplegar (Deploy) en Vercel

Este portafolio está 100% listo para ser desplegado de manera automática utilizando Vercel:

1. Inicia sesión en [Vercel](https://vercel.com/) con tu cuenta de GitHub conectada.
2. Dale click al botón **"Add New Project"**.
3. Selecciona el repositorio de GitHub que contiene este código fuente.
4. Vercel detectará automáticamente que es un proyecto **Next.js**.
5. Dale a **Deploy** y espera unos segundos.
6. ¡Listo! Tendrás tu portafolio corriendo en `tu-repositorio.vercel.app` y podrás configurarle tu propio dominio personalizado desde la pestaña de Settings de Vercel.

---
_Construido con buenas prácticas de Ingeniería._
