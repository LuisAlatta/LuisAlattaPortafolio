import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/profile";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
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
        <div className="w-full px-4 md:px-8 lg:px-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a proyectos
          </Link>

          <ProjectDetail project={project} titleAs="h1" />
        </div>
      </article>

      <Footer />
    </main>
  );
}
