import bobImage from '../assets/projects/bob/bobImage.jpg'
import zombieCommanderImage from '../assets/projects/zombie-commander/zombie_commander.jpg'
import crossfitImage from '../assets/projects/crossfit/functional_block_steps.png'
import type { ProjectContent } from '../content/projectContentTypes'
import portfolioWebsiteContent from '../content/portfolio-website'
import bobModel3DContent from '../content/3d-model-minion'
import zombieCommanderContent from '../content/zombie-commander'
import crossfitContent from '../content/crossfit'

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
    slug: 'zombie-commander',
    title: 'Zombie Commander',
    summary: 'An asymmetric multiplayer game where one player commands massive zombie hordes while survivors fight to complete objectives.',
    description:
      'Developed an innovative asymmetric multiplayer experience using Unity 6 and ECS (Entity Component System) to handle hundreds of entities simultaneously. Players choose between commanding overwhelming zombie swarms with RTS-style controls or surviving as FPS characters completing dynamic objectives. Built with DOTS for exceptional performance, Netcode for Entities for multiplayer, and the Latios Framework for ECS-compatible animations. Features advanced systems including animation-synchronized hit detection with dynamic hurtboxes, behavior tree AI, and strategic spawn point management.',
    technologies: ['Unity 6', 'C#', 'ECS/DOTS', 'Netcode for Entities', 'Animation Sync', 'Behavior Trees'],
    highlights: [
      'Implemented Unity ECS/DOTS architecture enabling hundreds of zombies with optimal multi-core CPU performance',
      'Animation system with network synchronization for multiplayer consistency',
      'Developed sophisticated two-stage hit detection with animation-driven hurtbox positioning for precise damage',
      'Created asymmetric multiplayer gameplay with distinct RTS zombie commander and FPS survivor roles',
      'Designed dynamic objectives system with AI survivors capable of solo play against player-controlled hordes',
    ],
    date: '2024',
    coverImage: zombieCommanderImage,
    liveUrl: '',
    repoUrl: '',
    content: zombieCommanderContent,
  },
  {
    slug: '3d-model-minion',
    title: 'Bob 3D Rigged Model',
    summary: 'Complete 3D character creation workflow: sculpting, retopology, and rigging.',
    description:
      'Full production pipeline for creating Bob the Minion in Blender 4.0. Starting from reference images, I sculpted high-detail organic forms using a digital pen tablet, performed clean retopology for animation-ready geometry, and implemented a complete rigging system with Rigify for expressive character animation.',
    technologies: ['Blender 4.0', '3D Modeling', 'Digital Sculpting', 'Retopology', 'Character Rigging'],
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
  {
    slug: 'crossfit',
    title: 'CrossFit Tracker',
    summary: 'A full-stack workout planning and tracking application with intelligent validation for CrossFit athletes.',
    description:
      'Built a comprehensive workout management platform using FastAPI and Next.js. Features include a sophisticated template system with functional blocks (workouts, exercises, rest, choices), real-time validation engine, and secure multi-provider authentication. The application enables athletes to create complex workout structures with intelligent validation ensuring physiologically sound training plans. Future iterations will incorporate AI-powered analytics for personalized training insights.',
    technologies: ['FastAPI', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Nginx'],
    highlights: [
      'Testing suite with 209 passing tests ensuring reliability',
      'Intelligent workout validation system catching errors',
      'Hierarchical functional block system mirroring real CrossFit programming',
      'Secure authentication with JWT and planned OAuth 2.0 integration (Google, Microsoft)',
      'Advanced exercise database with filtering by type, difficulty, equipment, and muscle groups',
      'Containerized architecture with Docker for consistent deployment',
    ],
    date: '2025',
    coverImage: crossfitImage,
    content: crossfitContent,
  },
]

export default projects
