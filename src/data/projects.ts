import bobImage from '../assets/projects/bob/bobImage.jpg'
import zombieCommanderImage from '../assets/projects/zombie-commander/zombie_commander.jpg'
import crossfitImage from '../assets/projects/crossfit/functional_block_steps.png'
import vikingImage from '../assets/projects/viking/boat.png'
import gproImage from '../assets/projects/gpro/gpro.png'
import domoticsImage from '../assets/projects/domotics/domotics.png'
import weddingSiteImage from '../assets/projects/boda/portada.jpg'
import type { ProjectContent } from '../content/projectContentTypes'
import portfolioWebsiteContent from '../content/portfolio-website'
import bobModel3DContent from '../content/3d-model-minion'
import zombieCommanderContent from '../content/zombie-commander'
import crossfitContent from '../content/crossfit'
import vikingContent from '../content/viking'
import gproContent from '../content/gpro'
import domoticsContent from '../content/domotics'
import weddingSiteContent from '../content/boda'

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
    technologies: ['Unity', 'C#', 'ECS/DOTS', 'Netcode for Entities', 'Behavior Trees'],
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
    technologies: ['Blender', '3D Modeling', 'Sculpting', 'Rigging'],
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
    technologies: ['Python', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
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
  {
    slug: 'wedding-site',
    title: 'Wedding Information Website',
    summary: 'A custom wedding website with QR code access, photo galleries, and maps integration—self-hosted on a Raspberry Pi.',
    description:
      'Built a personal wedding information site using Node.js 20 with vanilla JavaScript and CSS, prioritizing simplicity and performance. Features include secure QR code access embedded in physical invitations, an interactive photo slideshow with automatic and manual controls, and Google Maps integration for venue navigation. The entire application is containerized with Docker and self-hosted on a Raspberry Pi 4, demonstrating reliable low-cost hosting. Development was accelerated with GitHub Copilot assistance for JavaScript DOM manipulation and CSS animations.',
    technologies: ['Node.js', 'JavaScript', 'CSS', 'Docker', 'Raspberry Pi'],
    highlights: [
      'QR code access system with embedded URL parameters for seamless guest authentication',
      'Interactive photo slideshow with automatic transitions and manual navigation controls',
      'Google Maps integration with locations, routes, and travel time calculations',
      'Self-hosted on Raspberry Pi 4 with Docker containerization and HTTPS via Let\'s Encrypt',
      'Fully responsive design with pure CSS media queries optimized for all device types',
      'GitHub Copilot-assisted development for JavaScript and CSS implementation',
      'Zero hosting costs while handling concurrent wedding guest traffic reliably',
    ],
    date: '2024',
    coverImage: weddingSiteImage,
    content: weddingSiteContent,
  },
  {
    slug: 'viking',
    title: 'Viking Management Game',
    summary: 'A multiplayer 2D viking clan management game combining strategic resource management with tactical raid missions.',
    description:
      'Built a multiplayer viking management game using Unity 2022 LTS and Netcode for GameObjects. Players command their own viking clan, manage village resources, recruit warriors, and embark on strategic raids. Features a complete mission system with multiple stages, resource management mechanics, and networked multiplayer connectivity. The game showcases hand-drawn artwork by Lethkorias and implements Unity\'s GameObject component system for modular game architecture.',
    technologies: ['Unity', 'C#', 'Netcode for GameObjects'],
    highlights: [
      'Multiplayer functionality with village synchronization using Netcode for GameObjects',
      'Mission system with multiple stages including journey, combat, and outcome phases',
      'Strategic resource management with food, soldiers, gold, and morale tracking',
      'Dynamic world map with distance-based raid duration calculations',
    ],
    date: '2023',
    coverImage: vikingImage,
    content: vikingContent,
  },
  {
    slug: 'gpro',
    title: 'GPRO Manager',
    summary: 'A Python automation tool that transforms hours of manual F1 race management into a 5-minute streamlined workflow.',
    description:
      'Built a comprehensive CLI application for Grand Prix Racing Online (GPRO) that automates data extraction, optimal car setup calculations, and race weekend management. Uses web scraping to gather driver stats, track conditions, and financial data, then applies Pandas-based iterative optimization to calculate perfect setups within driver comfort ranges. The system automatically handles Practice, Q1, Q2, and Race configurations with adaptive dry/wet weather strategies. All data persists in PostgreSQL for historical analytics and performance tracking across seasons.',
    technologies: ['Python', 'PostgreSQL', 'Pandas', 'Web Scraping'],
    highlights: [
      'Reduced race preparation time from multiple hours to under 5 minutes per weekend',
      'Web scraping system extracting driver stats, track data, and financial information from authenticated sessions',
      'Intelligent setup calculations using Pandas for iterative optimization within driver comfort ranges',
      'Automated Q1/Q2 execution by crafting POST requests that mimic browser behavior',
      'PostgreSQL database enabling historical tracking, change detection, and game mechanics analytics',
      'Adaptive weather handling with automatic dry/wet setup adjustments',
      'Maintained Amateur division effortlessly since Season 87-88 with minimal time investment',
    ],
    date: '2022',
    coverImage: gproImage,
    content: gproContent,
  },
  {
    slug: 'domotics',
    title: 'Smart Home Automation System',
    summary: 'A fully automated smart home built with Home Assistant, featuring intelligent lighting, climate control, security, and voice-activated window covers.',
    description:
      'Designed and implemented a home automation system using Home Assistant on Raspberry Pi with Docker. Features include intelligent window covers with voice control via Alexa, adaptive lighting with presence detection, sophisticated climate control with multiple operating modes, and automated security with geolocation-based alarm management. The system uses Zigbee protocol for device communication and follows DevOps practices with infrastructure-as-code configuration.',
    technologies: ['Home Assistant', 'Docker', 'Zigbee', 'MQTT', 'AWS Lambda', 'Raspberry Pi'],
    highlights: [
      'Voice-activated window covers with Alexa integration via custom AWS Lambda function',
      'Adaptive lighting system with presence detection and circadian rhythm adjustments',
      'Multi-mode climate control with temperature sensors across all rooms',
      'Geolocation-based security system with automatic alarm arming/disarming',
      'Fully containerized architecture with Docker following infrastructure-as-code principles',
      'Wall-mounted control panel for centralized home management',
    ],
    date: '2021',
    coverImage: domoticsImage,
    content: domoticsContent,
  },
]

export default projects
