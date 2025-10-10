import type { ProjectContent } from './projectContentTypes'

// Import Viking project images
import mainMenu from '../assets/projects/viking/main_menu.png'
import waitingLobby from '../assets/projects/viking/waiting_lobby.png'
import villageView from '../assets/projects/viking/village_view.jpg'
import worldStrategyMap from '../assets/projects/viking/world_strategy_map.png'
import missionSelector from '../assets/projects/viking/mission_selector.png'
import missionFirstStage from '../assets/projects/viking/mission_first_stage.jpg'
import boatVideo from '../assets/projects/viking/boat.webm'
import missionThirdStage from '../assets/projects/viking/mission_third_stage.jpg'
import missionFourthStage from '../assets/projects/viking/mission_fourth_stage.png'
import missionOutcome from '../assets/projects/viking/mission_outcome.png'
import missionOutcomeLevelUp from '../assets/projects/viking/mission_outcome_level_up.png'
import missionOutcomeVideo from '../assets/projects/viking/mission_outcome.webm'

const vikingContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'The Vision',
  },
  {
    type: 'paragraph',
    text: 'A multiplayer 2D viking management game where players command their own viking clan, manage resources, recruit warriors, and embark on epic raids. The game combines strategic village management with tactical combat missions, all wrapped in a charming hand-drawn art style that brings the Viking Age to life. The UI in some screenshots is a bit distorted, that is because I updated the Unity runtime to create this content and this introduced the layout problems.',
  },
  {
    type: 'paragraph',
    text: 'Please note: This game is not finished or fully playable. What you see here represents the features and mechanics I built for this project.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Art Disclaimer',
  },
  {
    type: 'paragraph',
    text: 'The art featured in this game is based on the creative work of my talented friend Lethkorias, who is the original creator of the drawings. I am grateful for his permission to use his artwork in this project, bringing the Viking world to life with his unique artistic style.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Technology Stack',
  },
  {
    type: 'paragraph',
    text: 'This game was built using Unity 2022 LTS, leveraging the power and flexibility of Unity\'s game engine for 2D development. The architecture is based on Unity\'s GameObject component system, which allows for modular and reusable game entities. The multiplayer functionality is powered by Netcode for GameObjects, Unity\'s official networking solution that enables seamless synchronization and communication between players.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Multiplayer Lobby',
  },
  {
    type: 'paragraph',
    text: 'Players can host or join multiplayer sessions through an intuitive lobby system. Enter your name, choose a village name, and connect via IP address to play with friends. The game supports both hosting and joining games, making it easy to coordinate raids and build alliances with other viking clans.',
  },
  {
    type: 'image',
    src: mainMenu,
    alt: 'Viking game main menu with player name input and host/join options',
    caption: 'Main menu showing multiplayer connection options with player and village name fields',
  },
  {
    type: 'paragraph',
    text: 'Multiplayer is partially supported, players can connect and their villages will be syncronized, but they cannot see or interact between them yet (not implemented). The idea is to share the world map, being the players village another target for the rest.',
  },
  {
    type: 'image',
    src: waitingLobby,
    alt: 'Waiting lobby showing connected players',
    caption: 'Pre-game lobby where players wait for all participants to connect before starting',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Village Management',
  },
  {
    type: 'paragraph',
    text: 'Manage your viking settlement by tracking resources like food, soldiers, gold, and treasure chests. Make strategic decisions about when to send warriors on raids or let them rest to recover your numbers. The village serves as your home base where you can purchase supplies, recruit new warriors, and prepare for the next expedition. The building can be upgraded with gold, which in return will increase the rate of obtaining the other resources. Gold is the primary resource that can be obtained from raids.',
  },
  {
    type: 'image',
    src: villageView,
    alt: 'Viking village view showing resource management and status indicators',
    caption: 'Village management screen displaying current resources, soldier count, and settlement morale',
  },
  {
    type: 'paragraph',
    text: 'The strategic world map allows you to plan your next conquest. Navigate between different territories, each with its own challenges and rewards. Your longship serves as both transport and mobile command center as you explore the Viking world. The farther a village is, the longer it takes to raid and return, making distance an important strategic factor.',
  },
  {
    type: 'image',
    src: worldStrategyMap,
    alt: 'Strategic world map showing different viking territories and your longship',
    caption: 'World map interface for selecting missions and navigating between different villages (boat icons)',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Missions',
  },
  {
    type: 'paragraph',
    text: 'Embark on raids by selecting missions from the world map. Each mission displays critical information including distance, duration, population density, and mission type. Carefully allocate your soldiers and supplies for the journey - sending too few warriors or insufficient provisions could spell disaster for your expedition.',
  },
  {
    type: 'image',
    src: missionSelector,
    alt: 'Mission selection screen showing destination details and resource allocation',
    caption: 'Mission briefing for Moredjorn showing distance (380 km), duration (19 days), and troop/supply allocation',
  },
  {
    type: 'paragraph',
    text: 'Missions unfold through multiple stages, each presenting unique challenges and narrative moments. The game features beautifully illustrated story sequences that immerse you in the Viking experience, from the chieftain\'s rousing speeches to the tactical decisions of battle.',
  },
  {
    type: 'image',
    src: missionFirstStage,
    alt: 'Mission narrative showing chieftain preparing for voyage',
    caption: 'Opening cinematic of the assault on Moredjorn with the chieftain\'s inspirational speech',
  },
  {
    type: 'paragraph',
    text: 'During the sailing the players must manage their pace and resource usage. Failing to balance these sliders would result in mutinies that would need to be fought. Increasing the march pace allows you to reach the destination sooner, but at the cost of increased tiredness. And... yes, since I did not have a drawing for oars, I used baguettes as a placeholder, which looks funny.',
  },
  {
    type: 'video',
    src: boatVideo,
    alt: 'Mission progress showing longship sailing across the sea',
    caption: 'Journey phase showing your longship navigating to the target destination',
  },
  {
    type: 'paragraph',
    text: 'During the raids, the players must balance aggressivenes with the target population and morale. If morale is too high, high aggressiveness will result in heavy casualties. If tiredness is too high, your army will not be able to reduce target morale or population. The longer the raid takes and the less the aggressiveness, the more unrest you will suffer (vikings love to fight).',
  },
  {
    type: 'image',
    src: missionThirdStage,
    alt: 'Combat phase showing warriors in battle',
    caption: 'Battle sequence where strategic decisions determine the outcome of the raid',
  },
  {
    type: 'paragraph',
    text: 'After your raid you need to return to your village. If your warriors are too tired or there is too much unrest, the return trip could become very difficult, potentially resulting in casualties or loss of resources.',
  },
  {
    type: 'image',
    src: missionFourthStage,
    alt: 'Viking market stalls with various goods',
    caption: 'Trading phase where you can acquire supplies and goods from local markets',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Mission Outcome',
  },
  {
    type: 'paragraph',
    text: 'After each mission, review the results of your expedition. The outcome screen presents a detailed report showing the rank achieved (from Thrall to Jarl), loot acquired, casualties suffered, and deserters who fled. Each successful raid also provides experience that levels up your leadership skills across five key attributes: Village Moral, Leadership, Rationing, March, and Military Tactics.',
  },
  {
    type: 'image',
    src: missionOutcome,
    alt: 'Mission results screen showing rank, loot, and casualties',
    caption: 'Post-mission report displaying the rank of Thrall with detailed statistics on a poor performance and heavy casualties',
  },
  {
    type: 'image',
    src: missionOutcomeLevelUp,
    alt: 'Level up screen showing improved leadership attributes',
    caption: 'Skill progression screen showing level increases across all leadership categories',
  },
  {
    type: 'video',
    src: missionOutcomeVideo,
    alt: 'Animated mission outcome sequence',
    caption: 'Dynamic mission results animation showing the progression and rewards earned on a great performance',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Conclusions',
  },
  {
    type: 'paragraph',
    text: 'Working on this Viking game was quite the adventure! I got to dive deep into Unity 2022 LTS and Netcode for GameObjects, which taught me a lot about multiplayer networking and syncing game states between players. It was really fun balancing all the different mechanics - from managing resources in your village to making strategic decisions during raids. While the game isn\'t fully finished, I\'m pretty happy with what I managed to build. The core systems are there, and it was amazing to bring it all to life with Lethkorias\' awesome artwork. This project definitely pushed my skills and showed me both how challenging and rewarding game development can be.',
  },
]

export default vikingContent
