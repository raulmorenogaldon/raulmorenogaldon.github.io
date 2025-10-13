import type { ProjectContent } from './projectContentTypes'

// Import images
import wallDashboard from '../assets/projects/domotics/domotics.png'
import wallMounted from '../assets/projects/domotics/wall_mounted.jpg'
import raspberryConbee from '../assets/projects/domotics/raspberry_conbee.jpg'
import coverManualSwitch from '../assets/projects/domotics/cover_manual_switch.jpg'
import presenceDetector from '../assets/projects/domotics/presence_detector.jpg'

const domoticsContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'Overview',
  },
  {
    type: 'paragraph',
    text: 'When I bought my first flat in 2021, I saw it as the perfect opportunity to apply my automation skills to create a truly smart home. This project represents the intersection of home ownership and software engineering, where I could design and implement automated solutions to everyday living.',
  },
  {
    type: 'paragraph',
    text: 'The goal was simple: automate as much as possible to create a comfortable, efficient, and intelligent living space that adapts to my needs throughout the day.',
  },
  {
    type: 'image',
    src: wallDashboard,
    alt: 'Home Assistant dashboard showing automation controls',
    caption: 'Custom dashboard for controlling home automation from a browser or smartphone',
  },
  {
    type: 'paragraph',
    text: 'A wall-mounted tablet serves as a physical control panel, providing quick access to all home automation controls without needing to pull out a smartphone. This central dashboard displays real-time temperature readings, alarm status, lighting controls, and allows manual overrides for all automated systems. It\'s particularly useful for guests or when you want immediate tactile control over your environment.',
  },
  {
    type: 'image',
    src: wallMounted,
    alt: 'Wall-mounted tablet showing Home Assistant control panel',
    caption: 'Physical control panel mounted on the wall for easy access to all home automation features',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Technical Architecture',
  },
  {
    type: 'paragraph',
    text: 'The entire smart home system is built on Home Assistant, running on a Raspberry Pi 4 with Raspbian OS. The architecture follows modern DevOps practices with a fully containerized deployment using Docker.',
  },
  {
    type: 'image',
    src: raspberryConbee,
    alt: 'Raspberry Pi 4 with ConBee II USB Zigbee gateway',
    caption: 'Raspberry Pi 4 running Home Assistant with ConBee II stick for Zigbee device communication',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Infrastructure Stack',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Home Assistant Core**: Main automation engine running in Docker',
      '**Zigbee2MQTT**: Bridge between Zigbee devices and MQTT broker using ConBee II stick',
      '**NGINX**: Reverse proxy for secure external access',
      '**Let\'s Encrypt**: Automated SSL certificate management for HTTPS',
      '**AWS Lambda**: Custom function for Alexa integration',
    ],
  },
  {
    type: 'paragraph',
    text: 'All automations are defined declaratively in YAML configuration files, following infrastructure-as-code principles. This approach ensures reproducibility, version control, and easy backup of the entire system.',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Smart Automations',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Intelligent Window Covers',
  },
  {
    type: 'paragraph',
    text: 'Electric motors were installed on window covers, transforming them into automated shade controllers. The system responds to both voice commands and time-based triggers.',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Morning Routine**: Voice command "Buenos días" through Alexa opens all covers, creating a natural wake-up experience',
      '**Evening Automation**: Covers automatically close at nightfall based on sunset calculations',
      '**Manual Override**: Physical and app controls available for on-demand adjustments',
    ],
  },
  {
    type: 'paragraph',
    text: 'The Alexa integration is powered by a custom AWS Lambda function that bridges voice commands to Home Assistant actions, providing seamless voice control throughout the home.',
  },
  {
    type: 'image',
    src: coverManualSwitch,
    alt: 'Manual wall switch for window covers',
    caption: 'Physical wall switch providing manual control over window covers as a backup to voice commands and automation',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Adaptive Lighting System',
  },
  {
    type: 'paragraph',
    text: 'The lighting system uses wireless presence detectors to provide hands-free illumination exactly when and where it\'s needed. This is particularly useful when entering the kitchen with busy hands—the lights automatically turn on as you enter.',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Living Room**: Voice-activated control for flexible ambiance settings',
      '**Main Hall & Kitchen**: Automated presence detection with instant response',
      '**Bedroom**: Motion-activated lighting with time-based intensity adjustment',
      '**Circadian Lighting**: Brightness and intensity adjust based on time of day',
      '**Night Mode**: Dimmed lighting during late hours to avoid harsh brightness',
    ],
  },
  {
    type: 'paragraph',
    text: 'The system learns usage patterns and adjusts lighting intensity throughout the night—later hours trigger progressively dimmer lights to maintain a comfortable atmosphere.',
  },
  {
    type: 'image',
    src: presenceDetector,
    alt: 'Wireless Zigbee presence detector',
    caption: 'One of the wireless presence detector that triggers automatic lighting when motion is detected',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Climate Control System',
  },
  {
    type: 'paragraph',
    text: 'The heating system represents one of the most sophisticated automations, featuring multiple operational modes and intelligent temperature management.',
  },
  {
    type: 'heading',
    level: 4,
    text: 'Hardware Setup',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      'Zigbee dry relay connected to gas heater',
      'Wireless temperature sensors distributed across all rooms',
      'Real-time temperature monitoring and control',
    ],
  },
  {
    type: 'heading',
    level: 4,
    text: 'Operating Modes',
  },
  {
    type: 'list',
    ordered: true,
    items: [
      '**Target Temperature Mode**: Set a desired temperature, and Home Assistant automatically cycles the heater on/off to maintain it',
      '**Scheduled Automation Mode**: Different temperatures throughout the day based on occupancy patterns and time of day',
      '**Manual Mode**: Direct control for specific temperature needs or overriding automation',
    ],
  },
  {
    type: 'paragraph',
    text: 'The system uses sensor data from every room to make intelligent decisions about heating activation, ensuring even temperature distribution and energy efficiency.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Smart Security System',
  },
  {
    type: 'paragraph',
    text: 'The security automation combines multiple sensors and intelligent presence detection to create a seamless, automatic alarm system.',
  },
  {
    type: 'heading',
    level: 4,
    text: 'Components',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      '**Tapo C100 Camera**: Surveillance at the main entrance',
      '**Door Sensor**: Detects when the main door is opened',
      '**Phone Presence Detection**: Uses Home Assistant mobile app communicating via internet',
    ],
  },
  {
    type: 'heading',
    level: 4,
    text: 'Intelligent Automation',
  },
  {
    type: 'paragraph',
    text: 'The system uses geolocation-based presence detection to automatically manage the alarm state:',
  },
  {
    type: 'list',
    ordered: false,
    items: [
      'When my phone leaves the home zone, the alarm automatically arms itself',
      'As I approach home, the alarm disarms before I arrive—no need to manually disable it',
      'Door opening events trigger camera recording and notifications when the alarm is active',
      'Complete hands-free security that adapts to my presence',
    ],
  },
  {
    type: 'paragraph',
    text: 'This creates a truly intelligent security system that knows when to protect the home and when to welcome me back, all without manual intervention.',
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
      '**Home Assistant**: Open-source home automation platform',
      '**Zigbee Protocol**: Low-power wireless mesh networking for IoT devices',
      '**ConBee II**: USB Zigbee gateway',
      '**Zigbee2MQTT**: Zigbee to MQTT bridge for device communication',
      '**Docker**: Containerized deployment for all services',
      '**MQTT**: Message broker for device communication',
      '**Amazon Alexa**: Voice control integration',
      '**AWS Lambda**: Serverless functions for cloud integration',
      '**NGINX**: Web server and reverse proxy',
      '**Let\'s Encrypt**: Free SSL/TLS certificates',
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'Results & Impact',
  },
  {
    type: 'paragraph',
    text: 'The smart home system has fundamentally transformed daily living by removing friction from routine tasks. Lights turn on automatically when needed, temperature adjusts throughout the day, and security manages itself based on presence. I cannot longer live without automated lights!',
  },
  {
    type: 'paragraph',
    text: 'Beyond convenience, the system provides energy efficiency through intelligent heating control and lighting automation. The declarative configuration approach ensures the system is maintainable, with all automations version-controlled and documented.',
  },
  {
    type: 'paragraph',
    text: 'Most importantly, this project demonstrates how software engineering principles can be applied to physical spaces, creating an environment that adapts intelligently to human needs.',
  },
]

export default domoticsContent
