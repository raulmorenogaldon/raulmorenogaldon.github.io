import type { ProjectContent } from './projectContentTypes'

// Import images
import rtsRender from '../assets/projects/rts/rts_render.png'
import renderAndMovement from '../assets/projects/rts/render_and_movement.webm'

const rtsmakerContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'Project Overview',
  },
  {
    type: 'paragraph',
    text: 'RTSMaker is a real-time strategy game engine developed entirely in C in 2017, created as a proof of concept to explore low-level game development without the overhead of modern frameworks. This project demonstrates a complete game engine architecture built from scratch using pure C (ISO C99/C11), featuring custom implementations of essential systems including Entity-Component-System architecture, networking, rendering, and a modular plugin system. Working at this low level—managing memory manually, implementing data structures from first principles, and interfacing directly with graphics APIs—provided invaluable insight into how game engines function beneath their high-level abstractions. By leveraging fixed-point mathematics for deterministic behavior and implementing efficient data-oriented design patterns, RTSMaker achieves the performance characteristics necessary for real-time strategy gameplay while maintaining cross-platform compatibility.',
  },
  {
    type: 'image',
    src: rtsRender,
    alt: 'RTSMaker engine rendering demonstration',
    caption: 'OpenGL-based rendering with custom shader pipeline',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Technology Stack',
  },
  {
    type: 'paragraph',
    text: 'The engine is built using C with a carefully selected set of libraries. CMake handles the build system, while graphics are rendered using OpenGL with Allegro managing windowing and input. For networking, ENet provides reliable multiplayer communication. The project also includes custom implementations for terrain generation, mathematical operations, and cross-platform compatibility, balancing external libraries with custom code to maintain control and deepen understanding of core systems.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Entity-Component-System Architecture',
  },
  {
    type: 'paragraph',
    text: 'RTSMaker uses a custom-made Entity-Component-System (ECS) architecture, a design pattern that separates game data from behavior for better performance and flexibility. Entities are simply numbered IDs, components store data like position or health, and systems process entities with specific components. This data-oriented approach is particularly effective for strategy games managing many units simultaneously, as it organizes memory efficiently and allows the CPU to process entities in batches.',
  },
  {
    type: 'paragraph',
    text: 'The architecture provides two key advantages: components of the same type are stored together in memory for fast access, and new features can be added by creating new components and systems without restructuring existing code. This made implementing features like unit movement, collision detection, and navigation straightforward and maintainable.',
  },
  {
    type: 'video',
    src: renderAndMovement,
    alt: 'RTSMaker rendering and movement demonstration',
    caption: 'Real-time unit rendering and movement system in action',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Modular Plugin System',
  },
  {
    type: 'paragraph',
    text: 'The engine features a modular plugin architecture where different game systems are loaded as separate modules at runtime. Each module follows a standard interface for initialization, updating, rendering, and cleanup, making it easy to add or modify features without affecting the core engine.',
  },
  {
    type: 'paragraph',
    text: 'Three main modules power the engine: The Client Module provides the gameplay interface, handling 3D rendering, input controls, and the game window. The Console Module adds a developer console for debugging and runtime tweaking of game parameters. The Test Module sets up test scenarios and demonstrations. This separation keeps concerns cleanly divided—gameplay, debugging, and testing each have their own space.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Networking and Synchronization',
  },
  {
    type: 'paragraph',
    text: 'Multiplayer functionality is built on ENet, which provides reliable networking ideal for real-time strategy games. The networking layer manages connections between players and handles the transmission of game state updates. To keep bandwidth usage efficient, the system only sends changes rather than the entire game state each frame.',
  },
  {
    type: 'paragraph',
    text: 'A key challenge in multiplayer RTS games is ensuring all players see the same game state. The engine uses fixed-point mathematics and a synchronization system that detects what has changed, serializes only those changes, and applies updates from other players. This deterministic approach ensures all clients stay in sync while minimizing network traffic.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Map and Navigation Systems',
  },
  {
    type: 'paragraph',
    text: 'The map system represents terrain with height and flag data for each tile, allowing for varied terrain and marking certain areas as impassable. While procedural terrain generation features were planned, the current implementation provides a solid foundation for building game levels.',
  },
  {
    type: 'paragraph',
    text: 'For unit movement, the system implements direct pathfinding where units move toward their target each frame. A notable feature is the implementation of Reciprocal Velocity Obstacles (RVO), a collision avoidance algorithm that lets units smoothly navigate around each other without getting stuck. This creates natural-looking movement as groups of units flow around obstacles and each other while heading to their destinations. Units respond to explicit movement and attack commands from players, providing the precise control expected in real-time strategy games.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Rendering and Graphics Pipeline',
  },
  {
    type: 'paragraph',
    text: 'Graphics are handled through OpenGL with custom shaders loaded at runtime, providing flexibility for visual effects. The rendering system processes game entities and submits draw calls efficiently, while maintaining consistent visuals across all connected players in multiplayer sessions. The modular design keeps rendering code separate from game logic, making it easier to maintain and potentially swap out for different rendering approaches.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Development Philosophy and Code Quality',
  },
  {
    type: 'paragraph',
    text: 'The project follows strict C coding standards with clear naming conventions, organized file structures, and comprehensive logging for debugging. Fixed-point mathematics throughout ensures deterministic behavior—crucial for multiplayer where all clients must calculate identical results. The codebase prioritizes clarity and maintainability, using straightforward C idioms rather than complex abstractions. A cross-platform compatibility layer allows the engine to run on both Windows and Linux.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Message and Event Systems',
  },
  {
    type: 'paragraph',
    text: 'The engine uses a message and event system where different parts of the code communicate through messages rather than direct function calls. This publish-subscribe pattern keeps systems loosely coupled, making it easier to add new features without modifying existing code.',
  },
  {
    type: 'paragraph',
    text: 'This architecture proved especially valuable for networking. Since game events were already represented as messages, adding multiplayer support became much simpler—the networking code just intercepts, serializes, and transmits these existing messages to other players. This design is particularly effective for RTS games where many events like unit orders and attacks need to be synchronized across multiple players.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Development Tools and Testing',
  },
  {
    type: 'paragraph',
    text: 'The modular architecture provides excellent development support. The Console Module offers an in-game developer console where you can inspect and modify game state in real-time, execute commands, and tune parameters without restarting. The Test Module creates controlled scenarios for testing specific features and serves as demonstrations of engine capabilities. Together, these tools make debugging and iteration much faster.',
  },
  {
    type: 'paragraph',
    text: 'The Client Module keeps all player interaction code—input handling, rendering libraries, and window management—cleanly separated from core game logic. This separation means the gameplay systems can be tested independently, and the rendering approach could theoretically be swapped out without touching the game logic. The comprehensive logging system rounds out the development toolset, capturing information at different verbosity levels for troubleshooting.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Conclusion',
  },
  {
    type: 'paragraph',
    text: 'RTSMaker demonstrates a deep capacity for low-level programming and systems architecture. Building a game engine in C—while relying on foundational libraries like Allegro for windowing and OpenGL context management—still required implementing the majority of game systems from scratch: custom data structures, networking protocols, ECS architecture, collision systems, and multiplayer synchronization. This project showcases not just the ability to write code, but the ability to architect complex systems, optimize for performance at the CPU and memory level, and solve challenging problems like deterministic multiplayer synchronization and real-time collision avoidance.',
  },
  {
    type: 'paragraph',
    text: 'The project represents a comprehensive exploration of game engine development fundamentals. From implementing an Entity-Component-System architecture for efficient data processing, to building a modular plugin system for code organization, to creating custom collision avoidance algorithms—each system required research, experimentation, and careful implementation. This hands-on experience with low-level programming concepts, manual memory management, and direct hardware interaction through graphics APIs provides a strong foundation for understanding how modern game engines work under the hood and the trade-offs involved in their design decisions.',
  },
]

export default rtsmakerContent
