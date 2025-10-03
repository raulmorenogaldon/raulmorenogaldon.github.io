import projectOneImage from '../assets/personal/project1.png'
import projectTwoImage from '../assets/personal/project2.png'
import type { ProjectContent } from '../content/projectContentTypes'
import designSystemOverhaulContent from '../content/design-system-overhaul'
import analyticsDashboardContent from '../content/analytics-dashboard'
import portfolioWebsiteContent from '../content/portfolio-website'

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
    slug: 'design-system-overhaul',
    title: 'Design System Overhaul',
    summary: 'Led the redesign and rollout of a modular design system for a SaaS platform.',
    description:
      'Partnered with product design and engineering to rebuild a scalable design system, enabling faster delivery across seven product squads.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
    highlights: [
      'Delivered an accessible component library with WCAG 2.1 AA coverage.',
      'Defined contributor workflows and tooling that reduced UI defects by 36%.',
      'Launched design tokens powering theming across web and mobile surfaces.',
    ],
    date: '2024',
    coverImage: projectOneImage,
    liveUrl: 'https://example.com/design-system',
    repoUrl: 'https://github.com/your-username/design-system',
    content: designSystemOverhaulContent,
  },
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    summary: 'Interactive analytics dashboards with real-time collaboration features.',
    description:
      'Architected a multi-tenant analytics platform with customizable widgets, live collaboration, and offline-ready syncing.',
    technologies: ['React', 'Vite', 'Supabase', 'D3.js'],
    highlights: [
      'Implemented optimistic UI updates for a snappy editing experience.',
      'Introduced data visualizations that increased retention by 18%.',
      'Deployed infrastructure with automated performance regression alerts.',
    ],
    date: '2022 — 2024',
    coverImage: projectTwoImage,
    liveUrl: 'https://example.com/analytics-dashboard',
    repoUrl: 'https://github.com/your-username/analytics-dashboard',
    content: analyticsDashboardContent,
  },
]

export default projects
