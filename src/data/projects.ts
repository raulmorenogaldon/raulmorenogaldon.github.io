import projectOneImage from '../assets/personal/project1.png'
import projectTwoImage from '../assets/personal/project2.png'

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
  role: string
  period: string
}

const projects: Project[] = [
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
    role: 'Lead Frontend Engineer',
    period: '2024 — Present',
    coverImage: projectOneImage,
    liveUrl: 'https://example.com/design-system',
    repoUrl: 'https://github.com/your-username/design-system',
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
    role: 'Senior Frontend Developer',
    period: '2022 — 2024',
    coverImage: projectTwoImage,
    liveUrl: 'https://example.com/analytics-dashboard',
    repoUrl: 'https://github.com/your-username/analytics-dashboard',
  },
]

export default projects
