import type {
  ContentBlock,
  HeadingBlock,
  ParagraphBlock,
  ImageBlock,
  VideoBlock,
  ListBlock,
  QuoteBlock,
  CodeBlock,
  SpacerBlock,
} from '../content/projectContentTypes'
import '../styles/project-content.css'

interface ProjectContentRendererProps {
  content: ContentBlock[]
}

const ProjectContentRenderer = ({ content }: ProjectContentRendererProps) => {
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        return renderHeading(block, index)
      case 'paragraph':
        return renderParagraph(block, index)
      case 'image':
        return renderImage(block, index)
      case 'video':
        return renderVideo(block, index)
      case 'list':
        return renderList(block, index)
      case 'quote':
        return renderQuote(block, index)
      case 'code':
        return renderCode(block, index)
      case 'spacer':
        return renderSpacer(block, index)
      default:
        return null
    }
  }

  const renderHeading = (block: HeadingBlock, index: number) => {
    const Tag = `h${block.level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    return (
      <Tag key={index} className="content-heading">
        {block.text}
      </Tag>
    )
  }

  const renderParagraph = (block: ParagraphBlock, index: number) => {
    return (
      <p key={index} className="content-paragraph">
        {block.text}
      </p>
    )
  }

  const renderImage = (block: ImageBlock, index: number) => {
    return (
      <figure key={index} className="content-image">
        <img src={block.src} alt={block.alt} loading="lazy" />
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    )
  }

  const renderVideo = (block: VideoBlock, index: number) => {
    // Check if the source is a video file (webm, mp4, etc.)
    const isVideo = /\.(webm|mp4|mov)$/i.test(block.src)
    
    return (
      <figure key={index} className="content-image content-video">
        {isVideo ? (
          <video 
            src={block.src} 
            autoPlay 
            loop 
            muted 
            playsInline
            aria-label={block.alt}
          />
        ) : (
          <img src={block.src} alt={block.alt} loading="lazy" />
        )}
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    )
  }

  const renderList = (block: ListBlock, index: number) => {
    const ListTag = block.ordered ? 'ol' : 'ul'
    return (
      <ListTag key={index} className="content-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    )
  }

  const renderQuote = (block: QuoteBlock, index: number) => {
    return (
      <blockquote key={index} className="content-quote">
        <p>{block.text}</p>
        {block.author && <cite>— {block.author}</cite>}
      </blockquote>
    )
  }

  const renderCode = (block: CodeBlock, index: number) => {
    return (
      <div key={index} className="content-code">
        <pre>
          <code className={block.language ? `language-${block.language}` : ''}>
            {block.code}
          </code>
        </pre>
      </div>
    )
  }

  const renderSpacer = (block: SpacerBlock, index: number) => {
    const size = block.size || 'medium'
    return <div key={index} className={`content-spacer content-spacer--${size}`} />
  }

  return <div className="project-content">{content.map(renderBlock)}</div>
}

export default ProjectContentRenderer
