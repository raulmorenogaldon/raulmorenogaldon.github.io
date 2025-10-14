import type { ProjectContent } from './projectContentTypes'

// Import images
import portada from '../assets/projects/boda/portada.jpg'
import portadaVertical from '../assets/projects/boda/portada_vertical.jpg'
import imageSlideshow from '../assets/projects/boda/image_slideshow.jpg'
import mapsIntegration from '../assets/projects/boda/maps_integration.jpg'

const weddingSiteContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'A Personal Wedding Information Site',
  },
  {
    type: 'paragraph',
    text: 'This project was born from the need to create a centralized, elegant platform where wedding guests could access all the essential information about our special day. Rather than relying on scattered messages and printed materials, I developed a custom website that served as the digital hub for event details, venue information, photo galleries, and practical guidance for attendees.',
  },
  {
    type: 'image',
    src: portada,
    alt: 'Wedding website landing page - horizontal view',
    caption: 'Landing page with vintage design featuring the couple\'s names and invitation message',
  },
  {
    type: 'paragraph',
    text: 'The site was designed with both aesthetics and usability in mind, featuring a warm, vintage-inspired visual style that reflected the wedding\'s atmosphere. Each physical invitation included a QR code that guests could scan to instantly access the website, making the experience seamless and modern while maintaining a personal touch.',
  },
  {
    type: 'image',
    src: portadaVertical,
    alt: 'Wedding website landing page - mobile view',
    caption: 'Fully responsive design adapting to mobile devices for easy access on smartphones',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Technology Stack',
  },
  {
    type: 'paragraph',
    text: 'The website was built using a lightweight but powerful technology stack optimized for reliability and self-hosting. The backend runs on Node.js 20 with vanilla JavaScript and CSS, prioritizing simplicity and performance over complex frameworks. This approach ensured fast load times and minimal resource consumption—critical factors when hosting on personal hardware.',
  },
  {
    type: 'paragraph',
    text: 'Development was significantly accelerated with the assistance of GitHub Copilot, which proved invaluable for generating JavaScript DOM manipulation code, CSS animations, and responsive layout patterns. Copilot\'s suggestions helped implement smooth transitions for the photo slideshow, optimize CSS media queries for various screen sizes, and create clean event handler patterns—all while maintaining vanilla JavaScript without framework dependencies. This AI-assisted development approach allowed me to focus on the project\'s unique requirements and user experience while benefiting from intelligent code completion for common patterns.',
  },
  {
    type: 'paragraph',
    text: 'The entire application is containerized using Docker and deployed on a Raspberry Pi 4, demonstrating that personal projects can run efficiently on affordable, low-power hardware. Nginx serves as the reverse proxy, handling HTTPS termination with Let\'s Encrypt SSL certificates to ensure secure access for all guests.',
  },
  {
    type: 'paragraph',
    text: 'The responsive design was carefully crafted to work seamlessly across all device types—from desktop computers to tablets and smartphones—using pure CSS media queries without relying on heavy UI frameworks. This ensures every guest has an optimal viewing experience regardless of how they access the site.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Secure Access with QR Code',
  },
  {
    type: 'paragraph',
    text: 'Privacy and exclusivity were important considerations for this project. Each physical wedding invitation included a custom-designed QR code that, when scanned, directed guests to the website with a pre-configured access code embedded as a URL parameter. This eliminated the need for guests to manually type passwords while maintaining security.',
  },
  {
    type: 'paragraph',
    text: 'The access control system verified the code on the backend before granting entry to the site content. This approach prevented unwanted visitors while keeping the user experience frictionless for legitimate guests. The QR codes were generated and printed directly on the invitation cards, creating a unified physical and digital experience.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Interactive Photo Slideshow',
  },
  {
    type: 'paragraph',
    text: 'One of the centerpiece features of the website is the photo slideshow section, which showcases meaningful images from the couple\'s relationship and journey together. The slideshow was designed to be both automated and interactive, allowing guests to enjoy the photos at their own pace.',
  },
  {
    type: 'image',
    src: imageSlideshow,
    alt: 'Photo slideshow interface',
    caption: 'Interactive photo gallery with automatic transitions and manual navigation controls',
  },
  {
    type: 'paragraph',
    text: 'The slideshow features smooth CSS transitions between images, with configurable timing for automatic playback. Guests can also take control using intuitive navigation buttons to view specific photos. The implementation uses vanilla JavaScript for state management and DOM manipulation, keeping the codebase clean and maintainable.',
  },
  {
    type: 'paragraph',
    text: 'Images are optimized and lazy-loaded to ensure fast initial page loads, with progressive enhancement providing a better experience on faster connections while maintaining functionality on slower networks.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Google Maps Integration',
  },
  {
    type: 'paragraph',
    text: 'Helping guests navigate to the wedding venue was a top priority. The website includes a dedicated section with embedded Google Maps showing the exact location of the ceremony and reception venues. The integration provides multiple layers of information to ensure guests can find their way easily.',
  },
  {
    type: 'image',
    src: mapsIntegration,
    alt: 'Google Maps integration showing venue location',
    caption: 'Embedded Google Maps with venue location, route planning, and estimated travel times',
  },
  {
    type: 'paragraph',
    text: 'The map section displays the church and restaurant locations with custom markers, distance calculations, and estimated travel times between them. Guests can interact with the map to get turn-by-turn directions, view the venue in street view, or open the location directly in their mobile maps application for real-time GPS navigation.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Self-Hosted on Raspberry Pi',
  },
  {
    type: 'paragraph',
    text: 'One of the most interesting technical aspects of this project is the hosting infrastructure. Rather than using cloud services, the website runs entirely on a Raspberry Pi 4 with 4GB of RAM located in a home network. This setup demonstrates that personal projects with moderate traffic can be self-hosted reliably on low-cost, energy-efficient hardware.',
  },
  {
    type: 'paragraph',
    text: 'The Docker containerization ensures consistent behavior across development and production environments. The Raspberry Pi runs Docker with two main containers: the Node.js application server and the Nginx reverse proxy, using a Let\'s Encrypt script for automatic SSL certificate renewal. Port forwarding and dynamic DNS (DuckDNS) configuration allow the local server to be accessible from the internet.',
  },
  {
    type: 'paragraph',
    text: 'This approach not only reduced hosting costs to near zero but also provided complete control over data and infrastructure. The Raspberry Pi proved more than capable of handling the concurrent traffic from wedding guests, while also handling other workloads such as my home automation system.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Conclusion',
  },
  {
    type: 'paragraph',
    text: 'This wedding website project successfully merged technical capability with personal meaning, creating a digital experience that enhanced our special day. The site served its purpose beautifully—guests found it helpful, easy to use, and visually appealing. The QR code access system worked flawlessly, and the responsive design ensured everyone could access the information regardless of their device.',
  },
  {
    type: 'paragraph',
    text: 'From a technical perspective, the project validated that modern web applications can run efficiently on minimal infrastructure when properly architected. The Raspberry Pi hosting solution proved reliable throughout the entire wedding period, and the Docker-based deployment made updates and maintenance straightforward.',
  },
  {
    type: 'paragraph',
    text: 'Beyond the technical achievements, this project represents the intersection of software development and life\'s most important moments—using programming skills to create something personally meaningful and useful. It\'s a reminder that not all worthwhile projects need to be large-scale or commercial; sometimes the most rewarding work is building tools that help us celebrate and share the moments that matter most.',
  },
]

export default weddingSiteContent
