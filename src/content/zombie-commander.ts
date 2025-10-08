import type { ProjectContent } from './projectContentTypes'

// Import images
import mainMenu from '../assets/projects/zombie-commander/main_menu.jpg'
import mpLobby from '../assets/projects/zombie-commander/mp_lobby.jpg'
import zombieUI from '../assets/projects/zombie-commander/zombie_ui.jpg'
import zombieDesc from '../assets/projects/zombie-commander/zombie_desc.jpg'
import spawnPoint from '../assets/projects/zombie-commander/spawn_point.webm'
import command from '../assets/projects/zombie-commander/command.webm'
import horde from '../assets/projects/zombie-commander/horde.webm'
import survivors from '../assets/projects/zombie-commander/survivors.webm'
import objectives1 from '../assets/projects/zombie-commander/objectives_1.jpg'
import objectives2 from '../assets/projects/zombie-commander/objectives_2.jpg'
import missionMarker1 from '../assets/projects/zombie-commander/mission_marker_1.jpg'
import missionMarker2 from '../assets/projects/zombie-commander/mission_marker_2.jpg'
import aiSurvivor from '../assets/projects/zombie-commander/ai_survivor.webm'

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
const zombieCommanderContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'Project Overview',
  },
  {
    type: 'paragraph',
    text: 'Zombie Commander is an asymmetric multiplayer game developed with Unity 6, leveraging the power of the Entity Component System (ECS) and Data-Oriented Technology Stack (DOTS). This innovative approach enables the game to handle massive quantities of entities simultaneously, creating truly epic zombie swarms with hundreds of units moving, pathfinding, and interacting in real-time. By utilizing ECS architecture, the game achieves exceptional performance through efficient CPU core utilization and cache-friendly data structures. Players can choose between two distinct roles: commanding an overwhelming zombie horde to hunt down survivors, or fighting as a survivor to complete objectives while defending against the undead apocalypse.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Main menu and multiplayer lobby',
  },
  {
    type: 'paragraph',
    text: 'Zombie Commander features a polished main menu system with comprehensive multiplayer lobby support. The interface provides intuitive options for players to create or join game sessions, configure match settings, and select their preferred role. Built using Unity\'s Netcode for Entities framework, the lobby system maintains full ECS compatibility, ensuring optimal performance from the very beginning of the player experience. This foundation allows for seamless transitions into gameplay while maintaining the architectural benefits of the ECS paradigm.',
  },
  {
    type: 'image',
    src: mainMenu,
    alt: 'Zombie Commander main menu interface',
    caption: 'Main menu featuring hosting and join options',
  },
  {
    type: 'image',
    src: mpLobby,
    alt: 'Multiplayer lobby screen',
    caption: 'Multiplayer lobby where players can select role preference',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Using Unity ECS for massiveness',
  },
  {
    type: 'paragraph',
    text: 'The core technical achievement of Zombie Commander lies in its implementation of Unity\'s Entity Component System (ECS) to manage massive zombie hordes. By leveraging the DOTS framework, the game efficiently processes hundreds of zombie entities simultaneously with optimal multi-core CPU utilization. This data-oriented architecture enables physics calculations and collision detection at unprecedented scales, creating truly overwhelming zombie swarms that would be impractical with traditional GameObject-based approaches. The ECS implementation easily handles hundreds of zombies with smooth performance, though extensive networking stress testing under high entity counts remains an area for future optimization.',
  },
  {
    type: 'paragraph',
    text: 'Pathfinding currently utilizes a GameObject-based pathfinding library, as native ECS pathfinding solutions were not yet mature at the time of development. While this represents a performance bottleneck compared to a fully ECS-based solution, it remains functional and maintains acceptable performance. As zombie populations increase, path calculations require additional processing time, but the system is designed to prevent framerate degradation, ensuring smooth gameplay even during intense horde scenarios.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Animation System and Hit Detection',
  },
  {
    type: 'paragraph',
    text: 'The animation system is built on the Latios Framework, which provides ECS-compatible animation capabilities at a time when no official Unity ECS animation package was available. A critical feature I implemented for multiplayer consistency is animation synchronization, ensuring that all players see character movements and actions identically across the network. This synchronization is essential for fair gameplay, particularly in combat scenarios where visual feedback must match the actual game state.',
  },
  {
    type: 'paragraph',
    text: 'The hit detection system employs a sophisticated two-stage approach for precise damage calculation. When a player shoots, an initial bounding box performs broad-phase collision detection to identify potential hit targets. Once a target is detected, the system analyzes the current animation frame and procedurally positions detailed hurtboxes for specific body regions—head, torso, arms, and legs—based on the character\'s exact pose at that moment. This animation-driven approach ensures accurate hit detection even when zombies/characters are in dynamic motion, enabling realistic headshot mechanics and location-based damage that responds to the character\'s animated position rather than simplified collision volumes.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Zombie UI',
  },
  {
    type: 'paragraph',
    text: 'The zombie commander interface provides comprehensive control over the undead horde through an intuitive management system. Players oversee zombie spawn points distributed across the map, each generating basic slow-moving zombies at a fixed rate—individually weak but devastating in numbers. The UI displays critical strategic information including upgrade costs, available resources, current population count, population capacity limits, and rally point positions. This information empowers commanders to make tactical decisions about resource allocation, spawn point activation, and force deployment timing.',
  },
  {
    type: 'image',
    src: zombieUI,
    alt: 'Zombie commander user interface',
    caption: 'In-game UI showing zombie selection and deployment options',
  },
  {
    type: 'image',
    src: zombieDesc,
    alt: 'Zombie type description panel',
    caption: 'Detailed information panel displaying zombie description',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Spawn points',
  },
  {
    type: 'paragraph',
    text: 'Strategic spawn point management is crucial for effective zombie commanding. Players can activate and upgrade multiple spawn locations throughout the map, enabling coordinated multi-directional assaults that overwhelm survivor defenses. The spawn system incorporates visual feedback and resource management mechanics to maintain gameplay balance. Additionally, hidden tunnel networks connect various map locations, allowing zombies to rapidly traverse between distant points. While zombies move slowly above ground, they can "sprint" through these underground passages, adding a tactical layer to horde positioning and surprise attacks.',
  },
  {
    type: 'video',
    src: spawnPoint,
    alt: 'Zombie spawn point placement demonstration',
    caption: 'Activating and upgrading spawn points to deploy zombie forces',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Zombie commanding',
  },
  {
    type: 'paragraph',
    text: 'The zombie commanding system empowers players to direct their horde with precision and tactical nuance. Through an intuitive point-and-click interface, commanders issue movement orders, establish waypoints, and orchestrate coordinated attacks. The system seamlessly supports both individual unit control for surgical strikes and mass group commands for overwhelming assaults, enabling complex tactical maneuvers that adapt to the evolving battlefield situation.',
  },
  {
    type: 'video',
    src: command,
    alt: 'Zombie command system in action',
    caption: 'Issuing movement commands to direct zombie forces toward objectives',
  },
  {
    type: 'video',
    src: horde,
    alt: 'Large zombie horde moving as a coordinated group',
    caption: 'Massive zombie horde responding to group commands, demonstrating ECS performance',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Survivor UI',
  },
  {
    type: 'paragraph',
    text: 'The survivor interface delivers essential combat information through a streamlined heads-up display. Players receive real-time feedback on weapon status, ammunition reserves, health condition, and active objectives. Clear objective markers guide survivors through the map, while interactive objects can be activated and collected to progress mission goals. Victory is achieved when all objectives are completed before the zombie horde overwhelms the team. The HUD design prioritizes critical information accessibility while maintaining minimal screen clutter during intense combat encounters.',
  },
  {
    type: 'image',
    src: survivors,
    alt: 'Survivor player user interface',
    caption: 'Survivor HUD showing weapons, health, ammo, and objectives status',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Objectives System',
  },
  {
    type: 'paragraph',
    text: 'A dynamic mission system drives gameplay progression through varied, compelling objectives. Survivors must complete critical tasks while simultaneously defending against relentless zombie attacks, creating constant tension and strategic decision-making opportunities. The system features clear visual markers, real-time progress tracking, and contextual information to maintain player awareness of current goals. Each objective includes helpful hints about the next steps, whether locating randomly-placed items across multiple potential spawn points or reaching specific destinations. This design ensures players remain oriented and engaged even during chaotic combat situations.',
  },
  {
    type: 'image',
    src: objectives1,
    alt: 'Objectives panel showing active mission goals',
    caption: 'Mission objectives display with progress indicators and descriptions',
  },
  {
    type: 'image',
    src: objectives2,
    alt: 'Updated objectives panel with completed tasks',
    caption: 'Objectives system showing multiple objectives to be completed at same time',
  },
  {
    type: 'image',
    src: missionMarker1,
    alt: 'Mission marker in the game world',
    caption: 'In-world mission marker guiding players to objective locations',
  },
  {
    type: 'image',
    src: missionMarker2,
    alt: 'Object marker',
    caption: 'An keycard must be picked to continue the objectives',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Behavior Tree AI',
  },
  {
    type: 'paragraph',
    text: 'Survivor AI is powered by a behavior tree system that enables realistic and adaptive computer-controlled allies and opponents. Future enhancements will expand AI capabilities to include threat assessment, target prioritization, cover-seeking behavior, ammunition management, and survivor coordination. Currently, the zombie AI autonomously attacks and searches for targets, while the survivor AI follows human players when present or independently pursues objectives in solo play. This allows for engaging single-player experiences where players can take the zombie commander role against AI-controlled survivors who actively work to complete mission objectives while defending themselves against the undead horde.',
  },
  {
    type: 'video',
    src: aiSurvivor,
    alt: 'AI-controlled survivor demonstrating intelligent behavior',
    caption: 'AI survivor trying to find the keycard while combatting the zombies',
  },
]

export default zombieCommanderContent
