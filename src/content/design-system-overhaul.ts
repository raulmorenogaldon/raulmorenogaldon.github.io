import type { ProjectContent } from './projectContentTypes'

const designSystemOverhaulContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'The Challenge',
  },
  {
    type: 'paragraph',
    text: 'Our SaaS platform had grown organically over three years, resulting in inconsistent UI patterns, duplicated components, and mounting technical debt. Each product squad was essentially reinventing the wheel, leading to a fragmented user experience and slower feature delivery.',
  },
  {
    type: 'paragraph',
    text: 'The executive team recognized this was hindering our ability to scale and compete effectively. They tasked our team with creating a unified design system that would serve as the foundation for all future product development.',
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Research & Planning',
  },
  {
    type: 'paragraph',
    text: 'I started by conducting a comprehensive audit of our existing codebase, identifying patterns and pain points across all seven product squads. I interviewed designers, engineers, and product managers to understand their workflows and needs.',
  },
  {
    type: 'list',
    items: [
      'Cataloged 87 unique button variants across the platform',
      'Documented 43 different color values being used (many duplicates)',
      'Identified 6 different approaches to form validation',
      'Found accessibility issues in 68% of interactive components',
    ],
  },
  {
    type: 'paragraph',
    text: 'This research informed our strategy: we needed a system that was both comprehensive and flexible, with clear documentation and easy adoption paths.',
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Implementation Approach',
  },
  {
    type: 'paragraph',
    text: 'Rather than building everything at once, we took an incremental approach, prioritizing the most commonly used components and patterns. This allowed us to deliver value quickly while continuously improving based on feedback.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Foundation Layer',
  },
  {
    type: 'paragraph',
    text: 'We established design tokens as the single source of truth for colors, typography, spacing, and other design decisions. These tokens could be consumed by both designers (in Figma) and engineers (in code), ensuring perfect synchronization.',
  },
  {
    type: 'code',
    language: 'typescript',
    code: `// Example design tokens
export const tokens = {
  colors: {
    primary: {
      50: '#f0f9ff',
      500: '#3b82f6',
      900: '#1e3a8a',
    },
    semantic: {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
};`,
  },
  {
    type: 'heading',
    level: 3,
    text: 'Component Library',
  },
  {
    type: 'paragraph',
    text: 'We built a comprehensive library of accessible, composable components using React and TypeScript. Each component was thoroughly documented in Storybook with usage examples, props documentation, and accessibility guidelines.',
  },
  {
    type: 'list',
    items: [
      'Form controls with built-in validation and error handling',
      'Data tables with sorting, filtering, and pagination',
      'Modal and drawer patterns with proper focus management',
      'Toast notification system with customizable positioning',
      'Navigation components with responsive behavior',
    ],
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Accessibility First',
  },
  {
    type: 'paragraph',
    text: 'Accessibility was not an afterthought—it was baked into every component from the start. We followed WCAG 2.1 AA guidelines and conducted regular audits with screen readers and keyboard navigation testing.',
  },
  {
    type: 'quote',
    text: 'The new design system has transformed how we think about accessibility. It\'s no longer something we have to remember to add—it\'s just there by default.',
    author: 'Sarah Chen, Product Designer',
  },
  {
    type: 'paragraph',
    text: 'We achieved 100% keyboard navigability, proper ARIA labels, and sufficient color contrast across all components. This foundation ensures that everything we build is accessible to all users.',
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Adoption & Impact',
  },
  {
    type: 'paragraph',
    text: 'Rolling out a design system to seven product squads was a significant change management challenge. We created comprehensive documentation, conducted training sessions, and provided dedicated support during the transition.',
  },
  {
    type: 'list',
    ordered: true,
    items: [
      'Pilot program with two squads to identify issues early',
      'Weekly office hours for questions and support',
      'Migration guides with code examples and recipes',
      'Automated tooling to help detect and update old patterns',
    ],
  },
  {
    type: 'paragraph',
    text: 'The results exceeded our expectations:',
  },
  {
    type: 'list',
    items: [
      '36% reduction in UI-related bugs and defects',
      '2.5x faster development time for new features',
      '89% adoption rate across all product squads within 6 months',
      'Improved consistency scores in user testing from 62% to 94%',
    ],
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Lessons Learned',
  },
  {
    type: 'paragraph',
    text: 'Building a design system is as much about people and process as it is about code. The technical work was challenging, but the real success came from creating a system that people wanted to use and contribute to.',
  },
  {
    type: 'paragraph',
    text: 'We established clear governance processes, contribution guidelines, and communication channels. The design system became a living, breathing project owned by the entire organization, not just a single team.',
  },
]

export default designSystemOverhaulContent
