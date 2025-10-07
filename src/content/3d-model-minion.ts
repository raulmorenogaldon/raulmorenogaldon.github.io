import type { ProjectContent } from './projectContentTypes'
import bobImage from '../assets/projects/bob/bobImage.jpg'
import bobHierarchy from '../assets/projects/bob/bobHierarchy.jpg'
import bobReference from '../assets/projects/bob/bobReference.jpg'
import bobSculpt from '../assets/projects/bob/bobSculpt.jpg'
import bobRetopo from '../assets/projects/bob/bobRetopo.jpg'
import bobPreRigged from '../assets/projects/bob/bobPreRigged.jpg'
import bobMetarig from '../assets/projects/bob/bobMetarig.jpg'
import bobRigged from '../assets/projects/bob/bobRigged.jpg'
import bobScene from '../assets/projects/bob/bobScene.jpg'

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

const bobModel3DContent: ProjectContent = [
  {
    type: 'paragraph',
    text: 'This project showcases the complete workflow of creating a 3D character model from scratch, focusing on Bob the Minion. The process demonstrates advanced 3D modeling techniques including sculpting, retopology, and rigging in Blender 4.0.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Reference images',
  },
  {
    type: 'paragraph',
    text: 'Every successful 3D model starts with solid reference material. I gathered multiple reference images of a Minion from different angles to ensure accurate proportions and details throughout the modeling process. The images were placed in the scene on three planes so they could be used as modeling guides.',
  },
  {
    type: 'image',
    src: bobReference,
    alt: 'Reference images of a Minion from multiple angles',
    caption: 'Reference collection used to guide the modeling process',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Scene hierarchy',
  },
  {
    type: 'paragraph',
    text: 'Maintaining a clean and organized scene hierarchy is crucial for any complex 3D project. I used a structure that enables a non-destructive workflow, making it easy to revisit and modify earlier stages without losing work. This organization also allowed me to recover and document each step for this portfolio page.',
  },
  {
    type: 'image',
    src: bobHierarchy,
    alt: 'Blender scene hierarchy showing organized collections and objects',
    caption: 'Organized hierarchy that allows rolling back to previous stages',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Sculpting',
  },
  {
    type: 'paragraph',
    text: 'The sculpting phase used a digital pen tablet to create the high-resolution organic forms of Bob. This stage focuses on capturing fine details and character-defining features without worrying about topology. In this step the character took on the distinctive look of Bob.',
  },
  {
    type: 'image',
    src: bobSculpt,
    alt: 'High-resolution sculpted model of Bob showing detailed features',
    caption: 'Sculpted model with fine details created using digital pen tablet',
  },
  {
    type: 'paragraph',
    text: 'This image highlights the body sculpt, but clothing, shoes and gloves were sculpted with the same attention to detail and then integrated into the model.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Retopology',
  },
  {
    type: 'paragraph',
    text: 'After sculpting, the high-poly mesh needed to be converted into a clean, animation-ready topology. Using Blender retopology tools and plugins, I created an optimized mesh with proper edge flow that maintains the sculpted details while being efficient for animation.',
  },
  {
    type: 'image',
    src: bobRetopo,
    alt: 'Retopologized mesh with clean edge flow overlaid on sculpted model',
    caption: 'Clean topology optimized for animation and rigging',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Complements',
  },
  {
    type: 'paragraph',
    text: 'Before rigging, complementary elements—clothing, accessories and props—were modeled, retopologized and positioned. The metal parts of the goggles were handled as simple hard-surface pieces since they cannot be deformed when animated. This stage ensures everything deforms correctly during animation.',
  },
  {
    type: 'image',
    src: bobPreRigged,
    alt: 'Complete Bob model with clothing and accessories before rigging',
    caption: 'Finished model with all elements ready for rigging',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Rigging',
  },
  {
    type: 'paragraph',
    text: 'The rigging phase transforms the static model into an animation-ready character. I used Blender\'s Rigify addon to create a metarig, then customized it to match Bob\'s proportions and generate a complete control rig, with special emphasis on facial controls for expressive animation.',
  },
  {
    type: 'image',
    src: bobMetarig,
    alt: 'Rigify metarig positioned and scaled to match Bob\'s proportions',
    caption: 'Initial metarig setup before generating the final control rig',
  },
  {
    type: 'image',
    src: bobRigged,
    alt: 'Fully rigged Bob model with control bones and deformation tests',
    caption: 'Complete rig with all controls ready for animation',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Final scene',
  },
  {
    type: 'paragraph',
    text: 'The final stage involved setting up lighting, materials, and a simple environment to showcase the completed character. The scene demonstrates the full potential of the rigged model and highlights the quality of the modeling and texturing work.',
  },
  {
    type: 'image',
    src: bobScene,
    alt: 'Bob in a complete 3D scene with lighting and environment',
    caption: 'Final scene setup with lighting and environment',
  },
  {
    type: 'image',
    src: bobImage,
    alt: 'Final rendered image of Bob the Minion',
    caption: 'Final rendered result showcasing the completed character',
  },
]

export default bobModel3DContent
