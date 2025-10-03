import type { ProjectContent } from './projectContentTypes'

/**
 * Template for creating new project content files
 * 
 * Instructions:
 * 1. Copy this file and rename it to match your project slug (e.g., 'my-new-project.ts')
 * 2. Update the constant name to match your project (e.g., 'myNewProjectContent')
 * 3. Fill in your content blocks below
 * 4. Import this file in src/data/projects.ts
 * 5. Add the content to your project object
 * 
 * Available block types:
 * - heading: Section titles (levels 1-6)
 * - paragraph: Regular text content
 * - image: Images with optional captions
 * - list: Ordered or unordered lists
 * - quote: Blockquotes with optional author attribution
 * - code: Code snippets with syntax highlighting
 * - spacer: Vertical spacing between sections
 */

const projectTemplateContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'Section Title',
  },
  {
    type: 'paragraph',
    text: 'Your paragraph text goes here. You can describe your project, the challenges you faced, or the solutions you implemented.',
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Subsection Title',
  },
  {
    type: 'list',
    items: [
      'List item 1',
      'List item 2',
      'List item 3',
    ],
  },
  {
    type: 'paragraph',
    text: 'More descriptive text here.',
  },
  {
    type: 'image',
    src: '/path/to/your/image.png',
    alt: 'Description of the image',
    caption: 'Optional caption for the image',
  },
  {
    type: 'quote',
    text: 'An inspiring or relevant quote about the project.',
    author: 'Author Name (optional)',
  },
  {
    type: 'code',
    language: 'typescript',
    code: `// Example code snippet
const example = 'Your code here';
console.log(example);`,
  },
  {
    type: 'list',
    ordered: true,
    items: [
      'First step',
      'Second step',
      'Third step',
    ],
  },
  {
    type: 'spacer',
    size: 'large',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Results',
  },
  {
    type: 'paragraph',
    text: 'Describe the outcomes and impact of your project.',
  },
]

export default projectTemplateContent
