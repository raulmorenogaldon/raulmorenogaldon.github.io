# Project Content System

This directory contains the content files for individual project pages. Each project can have rich, blog-like content with headings, paragraphs, images, code blocks, and more.

## Quick Start

### Adding a New Project

1. **Create a content file** in this directory (e.g., `my-awesome-project.ts`)
2. **Use the template** from `project-template.ts` as a starting point
3. **Import your content** in `src/data/projects.ts`
4. **Add it to the project** object in the projects array

### Example

```typescript
// src/content/my-awesome-project.ts
import type { ProjectContent } from './projectContentTypes'

const myAwesomeProjectContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'Overview',
  },
  {
    type: 'paragraph',
    text: 'This project demonstrates...',
  },
  // ... more content blocks
]

export default myAwesomeProjectContent
```

```typescript
// src/data/projects.ts
import myAwesomeProjectContent from '../content/my-awesome-project'

const projects: Project[] = [
  {
    slug: 'my-awesome-project',
    title: 'My Awesome Project',
    // ... other metadata
    content: myAwesomeProjectContent, // Add this line
  },
  // ... other projects
]
```

## Content Block Types

### Heading

Creates section titles with different heading levels.

```typescript
{
  type: 'heading',
  level: 2, // 1-6
  text: 'Section Title',
}
```

### Paragraph

Regular text content with automatic styling.

```typescript
{
  type: 'paragraph',
  text: 'Your paragraph text goes here.',
}
```

### Image

Images with optional captions.

```typescript
{
  type: 'image',
  src: '/path/to/image.png',
  alt: 'Descriptive alt text',
  caption: 'Optional caption', // optional
}
```

**Note:** Import images from `src/assets/personal/` for bundled assets:

```typescript
import screenshot from '../assets/personal/my-screenshot.png'

// Then use in content:
{
  type: 'image',
  src: screenshot,
  alt: 'Application screenshot',
}
```

### List

Unordered or ordered lists.

```typescript
// Unordered list (bullets)
{
  type: 'list',
  items: [
    'First item',
    'Second item',
    'Third item',
  ],
}

// Ordered list (numbers)
{
  type: 'list',
  ordered: true,
  items: [
    'Step 1',
    'Step 2',
    'Step 3',
  ],
}
```

### Quote

Blockquotes with optional author attribution.

```typescript
{
  type: 'quote',
  text: 'The quote text goes here.',
  author: 'Author Name', // optional
}
```

### Code Block

Code snippets with syntax highlighting.

```typescript
{
  type: 'code',
  language: 'typescript', // optional: typescript, javascript, python, etc.
  code: `const example = 'Your code here';
console.log(example);`,
}
```

### Spacer

Adds vertical spacing between sections.

```typescript
{
  type: 'spacer',
  size: 'medium', // 'small', 'medium', or 'large'
}
```

## Best Practices

### Structure Your Content

Use a clear hierarchy with headings to organize your content:

```typescript
[
  { type: 'heading', level: 2, text: 'Main Section' },
  { type: 'paragraph', text: 'Introduction...' },
  
  { type: 'heading', level: 3, text: 'Subsection' },
  { type: 'paragraph', text: 'Details...' },
  
  { type: 'spacer', size: 'medium' },
  
  { type: 'heading', level: 2, text: 'Next Section' },
  // ...
]
```

### Use Spacers Wisely

- **Small spacers** (1rem): Between related paragraphs
- **Medium spacers** (2rem): Between subsections (most common)
- **Large spacers** (4rem): Between major sections

### Image Optimization

- Store project images in `src/assets/personal/`
- Use descriptive filenames: `analytics-dashboard-screenshot.png`
- Add meaningful alt text for accessibility
- Consider adding captions to provide context

### Code Blocks

- Specify the language for proper syntax highlighting
- Keep code snippets focused and relevant
- Add comments to explain complex parts
- Format code consistently

### Writing Style

- **Be concise**: Get to the point quickly
- **Show results**: Include metrics and outcomes when possible
- **Tell a story**: Structure content with a beginning, middle, and end
- **Use lists**: Break down complex information into digestible points

## File Organization

```
src/content/
├── README.md                         # This file
├── projectContentTypes.ts            # TypeScript type definitions
├── project-template.ts               # Template for new projects
├── design-system-overhaul.ts         # Example project content
├── analytics-dashboard.ts            # Example project content
└── your-new-project.ts              # Your content files
```

## Styling

All content blocks are styled automatically by the `ProjectContentRenderer` component. Styles are defined in `src/styles/project-content.css`.

To customize styles, edit that CSS file. The component uses these CSS classes:

- `.project-content` - Main container
- `.content-heading` - All headings
- `.content-paragraph` - Paragraphs
- `.content-image` - Images and captions
- `.content-list` - Lists
- `.content-quote` - Blockquotes
- `.content-code` - Code blocks
- `.content-spacer` - Spacers

## Tips for Scalability

### Keep Metadata Separate

The metadata (title, summary, technologies, etc.) stays in `src/data/projects.ts`. Only the detailed page content lives in these files.

### One File Per Project

Each project gets its own content file. This keeps things organized and makes it easy to find and update specific projects.

### Consistent Naming

Name your content files to match the project slug:
- Slug: `my-project` → File: `my-project.ts`
- Slug: `analytics-dashboard` → File: `analytics-dashboard.ts`

### Optional Content

The `content` field is optional. If a project doesn't have detailed content yet, you can omit it and the project detail page will just show the metadata.

## Examples

See `design-system-overhaul.ts` and `analytics-dashboard.ts` for complete examples of rich project content with multiple block types.

## Questions?

Check out:
- `projectContentTypes.ts` for all available block types
- `ProjectContentRenderer.tsx` for how content is rendered
- `project-template.ts` for a blank template to start from
