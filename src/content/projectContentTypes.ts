// Define the types for different content blocks that can appear in a project page

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | ListBlock
  | QuoteBlock
  | CodeBlock
  | SpacerBlock

export interface HeadingBlock {
  type: 'heading'
  level: 1 | 2 | 3 | 4 | 5 | 6
  text: string
}

export interface ParagraphBlock {
  type: 'paragraph'
  text: string
}

export interface ImageBlock {
  type: 'image'
  src: string
  alt: string
  caption?: string
}

export interface ListBlock {
  type: 'list'
  ordered?: boolean
  items: string[]
}

export interface QuoteBlock {
  type: 'quote'
  text: string
  author?: string
}

export interface CodeBlock {
  type: 'code'
  language?: string
  code: string
}

export interface SpacerBlock {
  type: 'spacer'
  size?: 'small' | 'medium' | 'large'
}

export type ProjectContent = ContentBlock[]
