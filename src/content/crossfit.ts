import type { ProjectContent } from './projectContentTypes'

// Import images
import homeNotLogin from '../assets/projects/crossfit/home_not_login.png'
import loginPage from '../assets/projects/crossfit/login_page.png'
import workoutModels from '../assets/projects/crossfit/workout_models.png'
import workoutDraftDetails from '../assets/projects/crossfit/workout_draft_details.png'
import functionalBlockSteps from '../assets/projects/crossfit/functional_block_steps.png'
import workoutStepOptions from '../assets/projects/crossfit/workout_step_options.png'
import exerciseSelection from '../assets/projects/crossfit/exercise_selection.png'
import blockValidation from '../assets/projects/crossfit/block_validation.png'

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
 * - image: Static images with optional captions
 * - video: Animated content (webm, mp4, gif) with optional captions
 * - list: Ordered or unordered lists
 * - quote: Blockquotes with optional author attribution
 * - code: Code snippets with syntax highlighting
 * - spacer: Vertical spacing between sections
 */

const crossfitContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'Vision',
  },
  {
    type: 'paragraph',
    text: 'The CrossFit Tracker is a comprehensive full-stack application designed to help athletes plan, track, and analyze their CrossFit workouts with precision. The platform aims to address a common pain point in the CrossFit community: the need for structured workout planning and validation before execution.',
  },
  {
    type: 'paragraph',
    text: 'At its core, the application provides a workout template system with intelligent validation. Users can create complex workout structures using functional blocks (Workouts, Exercises, Rest periods, and Choices), ensuring their training plans are not only well-organized but also physiologically sound. The validation engine checks for common mistakes like missing exercises, incompatible workout types, or illogical exercise selections.',
  },
  {
    type: 'paragraph',
    text: 'Future iterations will incorporate AI-powered analytics to provide personalized insights and suggestions based on workout history, helping athletes optimize their training progressions and identify areas for improvement. The workout editor will also inform users of the current state of their workout template and assess its appropriateness based on the athlete\'s status, including previous workouts, physical condition, and overall performance. For example, if an athlete has performed substantial leg work in recent sessions, the system could suggest reducing that type of training in upcoming workouts to allow for proper recovery.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Authentication and Security',
  },
  {
    type: 'paragraph',
    text: 'Security is a fundamental pillar of the application. The platform implements a robust authentication system with multiple login options to accommodate different user preferences and security requirements. Currently, only traditional email/password login is implemented, securely storing password hashes rather than plaintext credentials.',
  },
  {
    type: 'image',
    src: homeNotLogin,
    alt: 'CrossFit Tracker home page for non-authenticated users',
    caption: 'Landing page showing the welcome message and API status for non-authenticated users',
  },
  {
    type: 'paragraph',
    text: 'The authentication system will support traditional email/password login alongside OAuth 2.0 integrations with Google and Microsoft, providing users with flexible and secure access options. This multi-provider approach ensures users can choose their preferred authentication method while maintaining high security standards.',
  },
  {
    type: 'image',
    src: loginPage,
    alt: 'Login interface with multiple authentication options',
    caption: 'Login page featuring email/password authentication and social login options (Google and Microsoft)',
  },
  {
    type: 'paragraph',
    text: 'User sessions are managed securely with JWT tokens, and all communication is protected with HTTPS. The backend implements role-based access control (RBAC) to ensure users can only access and modify their own workout data.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Workout Template System',
  },
  {
    type: 'paragraph',
    text: 'The template system is the heart of the application, allowing users to create reusable workout structures that can be saved as drafts or published as templates. This feature is particularly valuable for athletes who follow periodized training programs or coaches who want to share workout plans with their clients. The database schemas are prepared to allow the sharing of these workout templates in the future.',
  },
  {
    type: 'image',
    src: workoutModels,
    alt: 'Workout templates list view',
    caption: 'Dashboard showing saved workout drafts with options to edit or discard templates',
  },
  {
    type: 'paragraph',
    text: 'Each workout can contain multiple functional blocks, creating a hierarchical structure that mirrors real CrossFit programming. Users can organize their workouts by date, track their status (draft or published), and quickly access them for modification or execution.',
  },
  {
    type: 'image',
    src: workoutDraftDetails,
    alt: 'Workout details editor showing functional blocks',
    caption: 'Detailed view of a workout template displaying functional blocks (Calentamiento/Warmup and Fuerza/Strength) with reordering and editing capabilities',
  },
  {
    type: 'paragraph',
    text: 'The details view provides complete control over workout structure, allowing users to add notes, organize functional blocks, validate the entire workout, and manage the sequence of training components. Each functional block can be edited, reordered, or removed as needed.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Functional Block Editor and Validator',
  },
  {
    type: 'paragraph',
    text: 'The functional block editor is where the application\'s complexity and power truly shine. This sophisticated interface allows users to construct workout blocks using a nested structure that can include workout types (Por rondas/AMRAP/EMOM/For Time), individual exercises, rest periods, and choice sections for exercise selection.',
  },
  {
    type: 'image',
    src: functionalBlockSteps,
    alt: 'Functional block editor showing workout structure',
    caption: 'Functional block editor displaying a "Calentamiento" (warmup) block with workout type selection, multiple exercises with their parameters, and choice sections',
  },
  {
    type: 'paragraph',
    text: 'Each workout block can specify its type (rounds-based, AMRAP, EMOM, or For Time), and contain multiple exercises with detailed parameters including sets, repetitions, calories, meters, and duration. The interface supports drag-and-drop reordering and quick exercise insertion.',
  },
  {
    type: 'image',
    src: workoutStepOptions,
    alt: 'Workout type selection dropdown',
    caption: 'Dropdown menu showing available workout types: Por rondas (By rounds), AMRAP, EMOM, and For Time',
  },
  {
    type: 'paragraph',
    text: 'The exercise selection system provides a comprehensive database of CrossFit movements with advanced filtering capabilities. Users can filter exercises by type (strength, cardio, skill, gymnastics, mobility), difficulty level, required equipment, and target muscle groups.',
  },
  {
    type: 'image',
    src: exerciseSelection,
    alt: 'Exercise selection modal with filters',
    caption: 'Exercise selection interface showing filtering options by type, difficulty, muscle groups, and equipment, with detailed exercise information including description and target muscles',
  },
  {
    type: 'paragraph',
    text: 'Each exercise in the database includes comprehensive metadata: type classification, difficulty rating, body weight requirements, necessary equipment, and targeted muscle groups. This helps users make informed decisions when building balanced workout programs.',
  },
  {
    type: 'image',
    src: blockValidation,
    alt: 'Validation errors displayed in the block editor',
    caption: 'Block validation system highlighting errors: exercises without proper selection or missing target parameters in the workout structure',
  },
  {
    type: 'paragraph',
    text: 'The validation engine runs on demand as users build their workouts, catching common errors before they become problems. It checks for missing exercises, incomplete parameters, invalid exercise selections for specific workout types, and logical inconsistencies. Clear error messages guide users to resolve issues quickly. A workout must be fully validated by the system before it can be published, ensuring that only well-structured training plans make it to execution.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Technology Stack',
  },
  {
    type: 'paragraph',
    text: 'The application is built on a modern, scalable technology stack designed for performance and maintainability. The backend leverages FastAPI (Python 3.10) with SQLAlchemy ORM for robust database operations and type-safe API development. PostgreSQL 15 serves as the relational database, providing ACID compliance and powerful querying capabilities for complex workout data structures. The workout tables are separated in the database for performance optimization: draft workouts can be edited multiple times, while published workouts remain immutable, so they are maintained in separate database schemas.',
  },
  {
    type: 'paragraph',
    text: 'The frontend is built with Next.js 13 and React 18, utilizing TypeScript throughout for type safety and improved developer experience. The entire application is containerized with Docker, ensuring consistent deployment across different environments and simplified development setup.',
  },
  {
    type: 'paragraph',
    text: 'Nginx serves as the reverse proxy, handling SSL termination and load balancing. The architecture follows REST API principles with clear separation of concerns between the presentation layer, business logic, and data persistence layers.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Project Structure',
  },
  {
    type: 'code',
    language: 'plaintext',
    code: `crossfit-tracker/
workouts/
├── frontend/                    # Next.js React application
│   ├── components/             # Reusable React components
│   │   ├── steps/             # Workout step components
│   │   ├── ExerciseSelector.tsx
│   │   ├── DurationSelector.tsx
│   │   └── Navbar.tsx
│   ├── pages/                 # Next.js pages and routing
│   ├── context/               # React context providers
│   │   ├── AuthContext.tsx
│   │   └── MessageContext.tsx
│   ├── models/                # TypeScript type definitions
│   ├── lib/                   # Utility functions
│   ├── locales/               # i18n translations (en, es)
│   ├── styles/                # CSS modules
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
│
├── backend/                     # FastAPI Python application
│   ├── app/
│   │   ├── main.py            # FastAPI application entry
│   │   ├── auth.py            # Authentication routes
│   │   ├── exercises.py       # Exercise database routes
│   │   ├── equipment.py       # Equipment routes
│   │   ├── muscular_groups.py # Muscle group routes
│   │   ├── models.py          # SQLAlchemy ORM models
│   │   ├── schemas.py         # Pydantic schemas
│   │   ├── database.py        # Database connection
│   │   ├── config.py          # Configuration
│   │   ├── workouts/          # Workout business logic
│   │   │   ├── workouts.py    # Main workout routes
│   │   │   ├── crud.py        # CRUD operations
│   │   │   ├── validation.py  # Validation service
│   │   │   ├── publish.py     # Publishing logic
│   │   │   ├── cloning.py     # Workout cloning
│   │   │   └── serialization.py
│   │   └── security/          # Security utilities
│   │       ├── security.py    # JWT & OAuth2
│   │       └── text_sanitizer.py
│   ├── definitions/           # Initial seed data (YAML)
│   ├── tests/                 # Comprehensive test suite
│   ├── requirements.txt
│   └── Dockerfile
│
├── alembic/                     # Database migrations
│   └── versions/
│
├── nginx/                       # Reverse proxy configuration
│   ├── nginx.conf
│   └── Dockerfile
│
└── docker-compose.yml          # Container orchestration`,
  },
  {
    type: 'paragraph',
    text: 'The project follows a clean architecture pattern with clear separation between the frontend and backend. The backend implements a three-layer architecture (API, Service, Data) ensuring maintainability and testability. The frontend uses a component-based architecture with custom hooks for state management and API integration.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Testing suite',
  },
  {
    type: 'code',
    language: 'plaintext',
    code: `============================================================================== test session starts ===============================================================================
platform win32 -- Python 3.10.11, pytest-8.4.1, pluggy-1.6.0
rootdir: D:\\Proyectos\\Workouts\\backend
configfile: pyproject.toml
testpaths: tests
plugins: anyio-4.9.0, asyncio-1.1.0, mock-3.14.1
asyncio: mode=auto, asyncio_default_fixture_loop_scope=None, asyncio_default_test_loop_scope=function
collected 209 items                                                                                                                                                               

tests\\test_auth.py ......................                                                                                                                                   [ 10%]
tests\\test_cloning.py .................                                                                                                                                     [ 18%]
tests\\test_crud.py ..................                                                                                                                                       [ 27%]
tests\\test_db_connection.py ....                                                                                                                                            [ 29%]
tests\\test_error_handler.py ..........                                                                                                                                      [ 33%] 
tests\\test_exercises.py ...........                                                                                                                                         [ 39%]
tests\\test_integration.py ........................                                                                                                                          [ 50%]
tests\\test_publish.py .......                                                                                                                                               [ 54%]
tests\\test_schemas.py .................                                                                                                                                     [ 62%] 
tests\\test_serialization.py ....                                                                                                                                            [ 64%]
tests\\test_utils.py ..............                                                                                                                                          [ 70%]
tests\\test_validation.py .......................                                                                                                                            [ 81%]
tests\\test_workouts.py ......................................                                                                                                               [100%]

============================================================================== 209 passed in 45.45s ==============================================================================`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'Conclusion',
  },
  {
    type: 'paragraph',
    text: 'The CrossFit Tracker represents a comprehensive solution to workout planning and management in the CrossFit community. By combining an intuitive user interface with robust backend validation and a sophisticated data model, the application enables athletes to create well-structured, physiologically sound training programs.',
  },
  {
    type: 'paragraph',
    text: 'The project showcases modern full-stack development practices, including containerization, comprehensive testing (209 passing tests), secure authentication, and a clean separation of concerns. The modular architecture ensures the codebase remains maintainable and extensible as new features are added.',
  },
  {
    type: 'paragraph',
    text: 'With planned AI-powered analytics and enhanced sharing capabilities, the platform is positioned to evolve into a complete training ecosystem that not only helps athletes plan their workouts but also provides intelligent insights to optimize their performance over time. The foundation has been carefully built to support these advanced features while maintaining system reliability and user data security.',
  },
]

export default crossfitContent
