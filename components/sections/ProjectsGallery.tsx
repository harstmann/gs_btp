'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { projects, Project } from '../../lib/data/projects'
import Button from '../ui/Button'

export default function ProjectsGallery() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="realisations" className="py-20 bg-surface-50 border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/10 border border-amber/25 text-amber font-bold text-xs tracking-wider uppercase mb-3">
              Portfolio architectural
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-deep-green">
              Nos réalisations.{' '}
              <span className="italic font-normal text-amber">La preuve par l'ouvrage.</span>
            </h2>
          </div>
          <Button href="#contact" variant="outline" size="sm">
            Voir tout →
          </Button>
        </div>

        {/* Gallery grid */}
        <div className="space-y-5">
          {/* Row 1: large + 2 stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7">
              <GalleryCard project={projects[0]} aspect="aspect-[16/11]" hovered={hovered} setHovered={setHovered} />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-5">
              <GalleryCard project={projects[1]} aspect="flex-1 min-h-[180px]" hovered={hovered} setHovered={setHovered} />
              <GalleryCard project={projects[2]} aspect="flex-1 min-h-[180px]" hovered={hovered} setHovered={setHovered} />
            </div>
          </div>
          {/* Row 2: medium + panoramic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-5">
              <GalleryCard project={projects[3]} aspect="aspect-[16/11]" hovered={hovered} setHovered={setHovered} />
            </div>
            <div className="lg:col-span-7">
              <GalleryCard project={projects[4]} aspect="aspect-[16/11]" hovered={hovered} setHovered={setHovered} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GalleryCard({
  project,
  aspect,
  hovered,
  setHovered,
}: {
  project: Project
  aspect: string
  hovered: string | null
  setHovered: (id: string | null) => void
}) {
  const isHovered = hovered === project.id
  return (
    <article
      className={`group relative overflow-hidden rounded-xl border border-surface-200 shadow-card-subtle bg-surface-100 ${aspect} w-full`}
      onMouseEnter={() => setHovered(project.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className={`relative w-full h-full ${aspect.startsWith('aspect') ? aspect : 'h-full'}`}>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-deep-green/90 via-deep-green/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-60'}`} aria-hidden="true" />

        {/* Top badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono text-amber border border-amber/30 bg-deep-green/80">
            {project.year}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <div className={`w-8 h-0.5 bg-amber mb-2 transition-all duration-300 ${isHovered ? 'w-14' : 'w-8'}`} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber block mb-1">{project.category}</span>
          <h3 className={`font-serif font-bold text-lg text-white mb-1 leading-snug transition-colors ${isHovered ? 'text-amber' : 'text-white'}`}>
            {project.title}
          </h3>
          <p className="text-xs text-white/70">📍 {project.location}</p>
        </div>
      </div>
    </article>
  )
}
