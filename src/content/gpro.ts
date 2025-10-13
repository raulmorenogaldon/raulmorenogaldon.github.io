import type { ProjectContent } from './projectContentTypes'

// Import images
import gproMain from '../assets/projects/gpro/gpro.png'
import managerPractice from '../assets/projects/gpro/manager_practice.png'
import managerStrategy from '../assets/projects/gpro/manager_strategy.png'
import webAutoValueSet from '../assets/projects/gpro/web_auto_value_set.png'
import webPractice from '../assets/projects/gpro/web_practice.png'
import dbTables from '../assets/projects/gpro/db_tables.png'
import promotionHistory from '../assets/projects/gpro/promotion_history.png'

const gproContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'Overview',
  },
  {
    type: 'paragraph',
    text: 'Grand Prix Racing Online (GPRO) is a Formula 1 manager simulation game where success requires meticulous data analysis, precise calculations, and strategic planning. Every race weekend involves collecting driver statistics, track conditions, weather forecasts, and car setup data—then performing complex calculations to determine optimal setups for Practice, Qualifying (Q1/Q2), and the Race itself.',
  },
  {
    type: 'paragraph',
    text: 'Before automation, this process consumed hours each week: manually copying data from web pages to Excel spreadsheets, running calculations, and then inputting the results back into the game. I built this Python application to transform that multi-hour weekly chore into a streamlined 5-minute process, allowing me to focus on the strategic and competitive aspects of race management rather than tedious data entry.',
  },
  {
    type: 'image',
    src: gproMain,
    alt: 'GPRO Manager application main interface',
    caption: 'Main interface showing race weekend management and automated setup calculations',
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Problem: Manual Data Management',
  },
  {
    type: 'paragraph',
    text: 'Competing effectively in GPRO requires processing numerous data points for each race:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Driver Statistics**: Energy, concentration, motivation, experience, and technical skills',
      '**Track Characteristics**: Grip levels, corner types, downforce requirements',
      '**Weather Conditions**: Dry vs wet setups, changing conditions during sessions',
      '**Car Setup Parameters**: Wings, engine, brakes, gear ratios, suspension settings',
      '**Comfort Range Calculations**: Finding optimal values within driver comfort zones',
      '**Financial Data**: Budget management and development planning',
    ],
  },
  {
    type: 'paragraph',
    text: 'Manually gathering this data from various game pages, performing calculations in Excel, and then inputting results back into the web interface was time-consuming and error-prone. The repetitive nature of this workflow made it a perfect candidate for automation.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Technical Architecture',
  },
  {
    type: 'paragraph',
    text: 'The application is built as a command-line interface (CLI) tool using Python 3.11, designed for speed and efficiency. The architecture combines web scraping, data persistence, and automated calculations into a cohesive workflow.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Technology Stack',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Python 3.11**: Core application runtime',
      '**Requests**: HTTP library for web scraping and API interactions',
      '**BeautifulSoup4**: HTML parsing for data extraction',
      '**Pandas**: Data analysis and calculation engine',
      '**PostgreSQL 14**: Relational database for persistent data storage',
      '**Psycopg2**: PostgreSQL adapter for Python',
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Database Design',
  },
  {
    type: 'paragraph',
    text: 'The PostgreSQL database serves as the central data repository, capturing all extractable game state. The schema is organized into a dedicated \'gpro\' namespace with tables for drivers, financial records, race data, and historical analytics.',
  },
  {
    type: 'image',
    src: dbTables,
    alt: 'Database schema showing all tables in the GPRO schema',
    caption: 'PostgreSQL database schema containing driver stats, financial data, race information, and analytics',
  },
  {
    type: 'paragraph',
    text: 'The database structure enables:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Historical tracking**: Monitor driver progression and training effects over time',
      '**Change detection**: Identify stat changes between application runs',
      '**Analytics**: Run queries to understand game mechanics and optimization patterns',
      '**State persistence**: Maintain accurate game state across sessions',
    ],
  },
  {
    type: 'paragraph',
    text: 'The application requires reloading data before and after in-game actions. For example, when training a driver through the web UI, running the application before and after the action allows it to detect the exact stat changes. This differential approach enables accurate tracking without needing to intercept every game interaction.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Web Scraping: The Biggest Challenge',
  },
  {
    type: 'paragraph',
    text: 'Extracting data from the GPRO web interface was the most technically challenging aspect of this project. The game wasn\'t designed with API access in mind, requiring careful HTML parsing and reverse-engineering of web requests.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Data Extraction',
  },
  {
    type: 'paragraph',
    text: 'Using Requests and BeautifulSoup, the application navigates through authenticated game sessions to extract:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      'Driver statistics from profile pages',
      'Financial statements and budget information',
      'Track data and weather forecasts',
      'Current car setup configurations',
      'Race results and historical performance',
    ],
  },
  {
    type: 'paragraph',
    text: 'The scraping logic handles session management, parses complex HTML tables, and transforms unstructured web content into structured database records. Error handling ensures the application gracefully handles page structure changes or network issues.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Automated Game Actions',
  },
  {
    type: 'paragraph',
    text: 'Beyond reading data, the application can perform game actions by crafting and sending POST requests that mimic browser behavior. This enables automated execution of qualifying sessions (Q1 and Q2) with calculated optimal setups, eliminating manual data entry entirely.',
  },
  {
    type: 'image',
    src: webPractice,
    alt: 'GPRO web interface showing practice session setup',
    caption: 'Standard GPRO web interface for practice sessions—data that\'s now automatically extracted and processed',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Intelligent Setup Calculations',
  },
  {
    type: 'paragraph',
    text: 'The core value of the application lies in its ability to automatically calculate optimal car setups. This involves sophisticated analysis of driver capabilities, track requirements, and comfort range optimization.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Driver Comfort Range Analysis',
  },
  {
    type: 'paragraph',
    text: 'Each driver has an optimal "comfort range" for various car setup parameters. Working outside this range reduces performance, while staying within it maximizes driver effectiveness. The application:',
  },
  {
    type: 'list',
    ordered: true,
    items: [
      'Retrieves driver comfort range data from game pages',
      'Calculates the edges of the comfort zone for each setup parameter',
      'Uses Pandas to perform iterative optimization across parameter combinations',
      'Finds the sweet spot that maximizes performance within constraints',
    ],
  },
  {
    type: 'image',
    src: managerStrategy,
    alt: 'Manager application showing strategy configuration',
    caption: 'Strategy configuration interface where race plans are defined before automatic setup calculation',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Adaptive Setup Strategy',
  },
  {
    type: 'paragraph',
    text: 'The application generates different setups for different race phases:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Practice Sessions**: Conservative setups for gathering data without risk',
      '**Qualifying (Q1/Q2)**: Aggressive setups optimized for single-lap performance',
      '**Race Setup**: Balanced configuration considering tire wear and fuel strategy',
      '**Weather Adaptation**: Dry and wet setups with appropriate adjustments',
    ],
  },
  {
    type: 'paragraph',
    text: 'The iterative calculation process considers track-specific requirements, driver strengths, and strategic race plans. Pandas DataFrames enable efficient exploration of the parameter space to identify optimal configurations.',
  },
  {
    type: 'image',
    src: managerPractice,
    alt: 'Practice session management in the CLI application',
    caption: 'Practice session interface showing calculated setup values ready for application',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Dry and Wet Conditions',
  },
  {
    type: 'paragraph',
    text: 'Weather significantly impacts optimal setups. The application automatically adjusts calculations based on forecast conditions:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Dry Setup**: Maximum downforce efficiency and tire temperature management',
      '**Wet Setup**: Increased downforce for grip, adjusted brake balance, conservative engine modes',
      '**Mixed Conditions**: Dynamic selection based on probability forecasts',
    ],
  },
  {
    type: 'paragraph',
    text: 'This ensures the car is always configured appropriately for the conditions without requiring manual recalculation.',
  },
  {
    type: 'image',
    src: webAutoValueSet,
    alt: 'Automated setup values applied to the web interface',
    caption: 'Final calculated setup values ready to be automatically submitted to the game',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Complete Race Weekend Workflow',
  },
  {
    type: 'paragraph',
    text: 'With the application, preparing for a race weekend becomes a streamlined process:',
  },
  {
    type: 'list',
    ordered: true,
    items: [
      '**Data Sync**: Run the application to scrape current game state into the database',
      '**Strategy Planning**: Define race strategy (pit stops, tire choices, fuel loads)',
      '**Automatic Calculation**: Application computes optimal setups for all sessions',
      '**Practice Execution**: Apply calculated practice setup via the game interface',
      '**Qualifying Automation**: Application automatically submits Q1 and Q2 with optimal setups',
      '**Race Setup**: Final race configuration calculated and ready to apply',
    ],
  },
  {
    type: 'paragraph',
    text: 'This entire process—which previously required hours of manual work—now takes less than 5 minutes. The application handles all the tedious data collection and calculation, leaving only high-level strategic decisions for human judgment.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Analytics and Insights',
  },
  {
    type: 'paragraph',
    text: 'Beyond race weekend automation, the historical database enables analytical queries to understand game mechanics:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      'Driver skill progression patterns and training effectiveness',
      'Correlation between setup parameters and race performance',
      'Track-specific optimization patterns',
      'Financial planning and budget allocation strategies',
      'Long-term performance trends across seasons',
    ],
  },
  {
    type: 'paragraph',
    text: 'These insights inform strategic decision-making about driver development, financial investments, and competitive positioning across multiple seasons.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Results and Impact',
  },
  {
    type: 'paragraph',
    text: 'After several seasons of using the application, the results speak for themselves:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Time Savings**: Reduced race preparation from multiple hours to under 5 minutes per race',
      '**Amateur Division Dominance**: Maintained competitive position effortlessly with minimal time investment',
      '**Professional Division Promotion**: Achieved promotion to professional level with minimal planning',
      '**Consistency**: Eliminated human error in calculations and data entry',
      '**Strategic Focus**: Freed time to focus on high-level race strategy rather than mechanical calculations',
    ],
  },
  {
    type: 'image',
    src: promotionHistory,
    alt: 'Promotion history showing consistent Amateur division performance',
    caption: 'Promotion history since creating the application around Season 87-88, demonstrating consistent Amateur division maintenance with minimal effort',
  },
  {
    type: 'paragraph',
    text: 'The promotion history clearly illustrates the application\'s effectiveness. Since developing the tool around Season 87-88, maintaining a competitive position in Amateur division has become effortless, requiring minimal time investment while consistently delivering strong results. The automation enables promotion to Professional division when desired, though maintaining that level requires significantly more strategic planning and time commitment.',
  },
  {
    type: 'paragraph',
    text: 'While maintaining professional division requires significantly more time and advanced strategic intelligence, the application provides a solid foundation for competitive racing at any level. The automation handles the mechanical aspects perfectly, allowing focus on the elements that truly require human decision-making.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Key Technologies',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Python 3.11**: Modern Python runtime with improved performance',
      '**Requests**: Reliable HTTP client for web scraping and API interactions',
      '**BeautifulSoup4**: HTML parsing and data extraction',
      '**Pandas**: Data manipulation and analytical calculations',
      '**PostgreSQL 14**: Robust relational database for data persistence',
      '**Psycopg2**: PostgreSQL adapter enabling Python database connectivity',
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'Future Improvements',
  },
  {
    type: 'paragraph',
    text: 'While the current application is highly effective, potential enhancements could further streamline the workflow:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      'Complete action automation: Perform all game actions through the application rather than the web UI',
      'Real-time change tracking: Eliminate the need to run before/after manual actions',
      'Machine learning: Train models on historical data to predict optimal strategies',
      'Web interface: Replace CLI with a graphical dashboard for easier interaction',
      'Multi-season optimization: Long-term planning algorithms for driver development and team growth',
    ],
  },
  {
    type: 'paragraph',
    text: 'These enhancements would further reduce manual intervention and enable even more sophisticated strategic analysis.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Conclusion',
  },
  {
    type: 'paragraph',
    text: 'This GPRO automation project demonstrates how software engineering can transform time-consuming manual processes into efficient automated workflows. By combining web scraping, database design, and intelligent calculations, the application eliminates tedious data management while maintaining competitive performance.',
  },
  {
    type: 'paragraph',
    text: 'The result is a tool that saves hours each week, reduces errors, and allows focus on the strategic elements that make racing games enjoyable. Web scraping proved challenging, but the investment paid off in consistent competitive success across multiple seasons with minimal time commitment.',
  },
]

export default gproContent
