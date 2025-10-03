import type { ProjectContent } from './projectContentTypes'

const portfolioWebsiteContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'The Vision',
  },
  {
    type: 'paragraph',
    text: 'As an engineer and developer, I thought a place to showcase the work I have done in my free time over the years would be very useful for finding my next challenges. I wanted to build more than just a resume site; I wanted to create a platform that could grow with me and demonstrate both technical skill and design sensibility.',
  },
  {
    type: 'paragraph',
    text: 'The goal was to create a fast, accessible, and content-rich portfolio that would serve as a showcase of my skills.',
  },
  {
    type: 'spacer',
    size: 'small',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Technical Approach',
  },
  {
    type: 'paragraph',
    text: 'I chose React with TypeScript, as I had used it before in another project. This time, I used Vite to start from a scaffolded project and reduce development time. I wanted to focus on maintainability and ease of content updates.',
  },
  {
    type: 'spacer',
    size: 'small',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Content Management System',
  },
  {
    type: 'paragraph',
    text: 'One of the most interesting features I wanted was a content system that would make it easy to add detailed project pages without the overhead of a traditional CMS. I wanted each project\'s content defined in its own file, with formatting consolidated centrally. With the help of GitHub Copilot, I created a lightweight, type-safe content system that works like a blog in a very short time.',
  },
  {
    type: 'paragraph',
    text: 'Each project can have rich content composed of reusable blocks. The system supports headings, paragraphs, images, lists, quotes, code snippets, and spacers—everything needed to tell a compelling story. See the following example.',
  },
  {
    type: 'code',
    language: 'typescript',
    code: `// Example content structure
const projectContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'Project Overview',
  },
  {
    type: 'paragraph',
    text: 'Detailed description of the project...',
  },
  {
    type: 'image',
    src: screenshotImage,
    alt: 'Application screenshot',
    caption: 'The main dashboard view',
  },
  {
    type: 'list',
    items: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3',
    ],
  },
];`,
  },
  {
    type: 'paragraph',
    text: 'This approach gives me complete control over content structure. Adding a new project is as simple as creating a new TypeScript file. Additionally, it is even simpler if you let the AI generate a new project file from the available template.',
  },
  {
    type: 'spacer',
    size: 'small',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Design System',
  },
  {
    type: 'paragraph',
    text: 'To keep styles maintainable and consistent, I modularized CSS files for each component instead of using a single massive stylesheet. This makes it easier to manage and update styles for individual components without affecting others.',
  },
  {
    type: 'paragraph',
    text: 'For color themes and design tokens, I defined all color variables in a dedicated CSS file. Other CSS modules import and use these variables, ensuring consistency across the site and simplifying future theme changes.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Key Design Principles',
  },
  {
    type: 'list',
    ordered: true,
    items: [
      'Clean, minimal aesthetic that puts content first',
      'Consistent spacing and typography hierarchy',
      'Accessible color contrast and interactive states',
      'Smooth transitions and subtle animations',
      'Responsive layouts that work on any device',
    ],
  },
  {
    type: 'code',
    language: 'css',
    code: `/* Example CSS for theming */
:root {
  --primary-color: #5b26aa; /* Darker Purple */
  --primary-dark: #34045a; /* Very Dark Purple */
  --primary-light: #e9d5ff; /* Light purple - solid color for backgrounds */
  --primary-light-alpha: rgba(76, 29, 149, 0.12); /* Transparent light purple for borders */
  ...
}`,
  },
  {
    type: 'paragraph',
    text: 'This variable-based approach makes it easy to maintain consistency and even add theme switching in the future.',
  },
  {
    type: 'spacer',
    size: 'small',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Component Architecture',
  },
  {
    type: 'paragraph',
    text: 'The site is built with a modular component architecture that promotes reusability and maintainability. Each component has a single responsibility and can be composed with others.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Key Components',
  },
  {
    type: 'list',
    items: [
      'Navbar: Responsive navigation with active route highlighting',
      'ProjectCard: Reusable card component for project listings',
      'ProjectContentRenderer: Dynamic content block renderer',
      'Footer: Site footer with links and information',
    ],
  },
  {
    type: 'spacer',
    size: 'small',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Deployment',
  },
  {
    type: 'paragraph',
    text: 'The site is built as a static site that can be deployed to any hosting platform. I chose to use GitHub Pages, as I am already hosting the repository for this page there.',
  },
  {
    type: 'code',
    language: 'bash',
    code: `# Build for production
npm run build

# Preview production build locally
npm run preview`,
  },
  {
    type: 'spacer',
    size: 'small',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Conclusion',
  },
  {
    type: 'paragraph',
    text: 'It was interesting to build the content management system for this React website. It makes it incredibly easy to add new projects with rich, detailed content, without the need to use additional libraries.',
  },
  {
    type: 'paragraph',
    text: 'As in other projects, I am aware of the complexity of consistently styling a webpage, especially as it grows, and the importance of keeping things modular and organized.',
  },
  {
    type: 'quote',
    text: 'If you think math is hard, try web design.',
  },
]

export default portfolioWebsiteContent
