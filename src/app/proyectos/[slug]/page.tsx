import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Code,
  Target,
  Lightbulb,
  CheckCircle2,
  Briefcase,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectThumb } from "@/components/ui/project-thumb";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: `${project.title} | Luis Alatta`,
      description: project.shortDescription,
      url: `${siteUrl}/proyectos/${project.slug}`,
      images: [{ url: project.imageUrl }],
    },
  };
}

function DetailList({
  title,
  icon: Icon,
  items,
  accent,
}: {
  title: string;
  icon: LucideIcon;
  items: string[];
  accent: string;
}) {
  if (!items?.length) return null;
  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}35` }}
        >
          <Icon className="w-5 h-5" style={{ color: accent }} />
        </span>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle2
              className="w-4 h-4 mt-1 shrink-0"
              style={{ color: accent }}
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-28 pb-20">
        <div className="container px-4 md:px-8 max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a proyectos
          </Link>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge>{project.category}</Badge>
            <Badge variant="outline">{project.platform}</Badge>
            <Badge variant="secondary">{project.status}</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
            <span className="inline-flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> {project.role}
            </span>
            {project.industry && (
              <span className="inline-flex items-center gap-2">
                <Building2 className="w-4 h-4" /> {project.industry}
              </span>
            )}
          </div>

          {/* Cover image */}
          <div className="relative rounded-3xl overflow-hidden glass-panel mb-10 aspect-[1200/630]">
            <ProjectThumb
              project={project}
              width={1200}
              height={630}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {project.demoUrl ? (
              <Button size="lg" className="rounded-full" asChild>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Ver sitio en vivo
                </a>
              </Button>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground glass-panel rounded-full px-4 py-2">
                Demo privada · disponible bajo solicitud
              </span>
            )}
            {project.repoUrl && (
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <Code className="mr-2 h-4 w-4" /> Código
                </a>
              </Button>
            )}
          </div>

          {/* Full description */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-foreground/90 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Stack tecnológico
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm font-mono px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Detail grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <DetailList
              title="Características"
              icon={Lightbulb}
              items={project.features}
              accent="#60a5fa"
            />
            <DetailList
              title="Desafíos"
              icon={Target}
              items={project.challenges}
              accent="#f59e0b"
            />
            <DetailList
              title="Resultados"
              icon={CheckCircle2}
              items={project.outcomes}
              accent="#34d399"
            />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
