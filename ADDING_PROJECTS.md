# Quick Guide: Adding New Projects

## Step-by-Step Instructions

### 1. Create Your Content File

Copy the template and create a new file:

```bash
# Windows PowerShell
Copy-Item src\content\project-template.ts src\content\my-new-project.ts
```

### 2. Edit Your Content

Open `src/content/my-new-project.ts` and:

1. Rename the constant (line 36):
   ```typescript
   const myNewProjectContent: ProjectContent = [
   ```

2. Replace the example content blocks with your own

3. Save the file

### 3. Add Project Images (if needed)

Place any images in `src/assets/personal/`:
- Cover image for the card view
- Additional images for the content

### 4. Update projects.ts

Open `src/data/projects.ts` and add:

```typescript
// At the top, with other imports:
import myNewProjectContent from '../content/my-new-project'
import myProjectImage from '../assets/personal/my-project-cover.png'

// In the projects array:
const projects: Project[] = [
  // ... existing projects
  {
    slug: 'my-new-project',
    title: 'My New Project',
    summary: 'A brief one-line description for the card.',
    description: 'A longer description that appears at the top of the detail page.',
    technologies: ['React', 'TypeScript', 'etc'],
    highlights: [
      'Key achievement 1',
      'Key achievement 2',
      'Key achievement 3',
    ],
    date: '2024',
    coverImage: myProjectImage, // optional
    liveUrl: 'https://example.com', // optional
    repoUrl: 'https://github.com/user/repo', // optional
    content: myNewProjectContent, // Add your content here!
  },
]
```

### 5. Test Your Project

1. Save all files
2. Navigate to `/projects` in your browser
3. Click on your new project card
4. Verify all content displays correctly

## Project Structure Overview

```
Your changes:
├── src/
│   ├── assets/
│   │   └── personal/
│   │       └── my-project-cover.png        ← Add cover image here
│   ├── content/
│   │   └── my-new-project.ts               ← Create content file here
│   └── data/
│       └── projects.ts                     ← Update this file
```

## Quick Content Reference

```typescript
// Heading
{ type: 'heading', level: 2, text: 'Title' }

// Paragraph
{ type: 'paragraph', text: 'Your text here.' }

// Image
{ type: 'image', src: imagePath, alt: 'Description', caption: 'Optional' }

// GIF
{ type: 'gif', src: gifPath, alt: 'Description', caption: 'Optional' }

// List
{ type: 'list', items: ['Item 1', 'Item 2'] }

// Ordered List
{ type: 'list', ordered: true, items: ['Step 1', 'Step 2'] }

// Quote
{ type: 'quote', text: 'Quote text', author: 'Optional' }

// Code
{ type: 'code', language: 'typescript', code: 'const x = 1;' }

// Spacer
{ type: 'spacer', size: 'medium' } // small, medium, or large
```

## Tips

- **Slug must be unique** and URL-friendly (lowercase, hyphens only)
- **Keep summaries short** (1-2 sentences for project cards)
- **Use spacers** between major sections for better readability
- **Test on mobile** to ensure images and code blocks look good
- **Content is optional** - you can add it later if needed

## Need Help?

See `src/content/README.md` for detailed documentation and examples.
