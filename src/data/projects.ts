import bobImage from '../assets/projects/bob/bobImage.jpg'
import type { ProjectContent } from '../content/projectContentTypes'
import portfolioWebsiteContent from '../content/portfolio-website'
import bobModel3DContent from '../content/3d-model-minion'

export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  technologies: string[]
  highlights: string[]
  coverImage?: string
  liveUrl?: string
  repoUrl?: string
  date: string
  content?: ProjectContent
}

const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: '(This) Portfolio Website',
    summary: 'A modern, performant portfolio site with a custom content management system.',
    description:
      'Built a responsive portfolio website with React, TypeScript, and Vite. Used AI tools and implemented a custom content system for easy project updates.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    highlights: [
      'Leveraged AI copilot to create a stylish webpage for my personal portfolio.',
      'Used Vite to create the scaffold project.',
    ],
    date: '2025',
    liveUrl: window.location.origin,
    content: portfolioWebsiteContent,
  },
  {
    slug: '3d-model-minion',
    title: 'Bob 3D Rigged Model',
    summary: 'Complete 3D character creation workflow: sculpting, retopology, and rigging.',
    description:
      'Full production pipeline for creating Bob the Minion in Blender 4.0. Starting from reference images, I sculpted high-detail organic forms using a digital pen tablet, performed clean retopology for animation-ready geometry, and implemented a complete rigging system with Rigify for expressive character animation.',
    technologies: ['Blender 4.0', '3D Modeling', 'Digital Sculpting', 'Retopology', 'Character Rigging', 'Rigify'],
    highlights: [
      'High-detail sculpting with digital pen tablet for organic character forms',
      'Optimized retopology with clean edge flow for animation performance',
      'Complete Rigify-based rig with facial controls for expressive animation',
      'Non-destructive workflow with organized scene hierarchy',
    ],
    date: '2023',
    coverImage: bobImage,
    content: bobModel3DContent,
  },
]

export default projects
