export const PROJECTS = [
  {
    id: 'arguvis',
    title: 'ARgueVis',
    category: 'AR Research · Texas A&M',
    tags: ['AR/VR', 'Research'],
    year: '2026',
    stat: 'Ongoing research — AR glasses',
    short: 'AR glasses system for real-time argument summarization and evidence highlighting during live conversations.',
    cover: null,
    youtubeId: null,
    description: `Conducting research with AR glasses to explore system design for social and conversational AR experiences.

The system transcribes live conversation, summarizes arguments in real time, and surfaces evidence highlights through a heads-up display — without interrupting the flow of conversation.

Research focus includes investigating implicit behavioral cues such as gaze and posture as interaction signals, and designing socially aware visualizations that support reasoning while maintaining social comfort. Defining evaluation criteria around social comfort, usability, and system responsiveness.`,
    role: 'Primary Researcher — system design, interaction design, evaluation framework',
    collaborators: 'Dr. Wai Tong, Dr. Meng Xia · Texas A&M University',
    techs: ['Unity', 'C#', 'AR Glasses', 'Speech Recognition', 'Python'],
    links: [],
  },
  {
    id: 'mewsic-madness',
    title: 'Mewsic Madness',
    category: 'Game Jam · Chillenium 2026',
    tags: ['Game Dev', 'Engineering'],
    year: '2026',
    stat: 'Built in 36 hours · Chillenium 2026',
    short: 'Fast-paced risk-driven battle game built in 36 hours where you wager health points on quick-time events.',
    cover: null,
    youtubeId: null,
    description: `Mewsic Madness is a fast-paced, risk-driven battle game built in 36 hours for Chillenium 2026. The theme was "Nah, I'd win" — interpreted as extreme overconfidence.

You play as a guitar-wielding cat facing three rotating opponents: a microphone-stand-wielding mouse, a pigeon, and a high-stakes investor dog. Enemies swap roles each round to reinforce unpredictability.

Each round follows a high-risk decision structure: choose to Strike or Heal, wager a portion of your health points, then complete a quick-time event by pressing arrow keys as arrows flash. Four possible outcomes — Strike + Win, Strike + Lose, Heal + Win, Heal + Lose — create a gambling mechanic where confidence directly impacts survival.

As lead programmer, I implemented the entire gameplay system: the full betting and combat logic, the quick-time event system from scratch, state transitions between rounds and character swaps, UI interactions, wager input, health updates, sprite switching, and character animations. Built under jam pressure with rapid prototyping and tight coordination with the art and audio team.`,
    role: 'Lead Programmer — full gameplay system, QTE engine, state machine, UI',
    collaborators: 'Chillenium 2026 team',
    techs: ['Unity 6.2', 'C#', 'Visual Studio'],
    links: [
      { label: 'GitHub', href: 'https://github.com/DrewWing/Chillenium26' },
      { label: 'Behance', href: 'https://www.behance.net/gallery/244945661/Mewsic-Madness' },
    ],
  },
  {
    id: 'oracle-aconex',
    title: 'Oracle Corporation — Aconex Insights',
    category: 'Backend Engineering · Oracle',
    tags: ['Engineering'],
    year: '2022-2025',
    stat: '35% faster report generation',
    short: 'Backend pipeline engineering for enterprise report generation processing multi-gigabyte datasets at Oracle.',
    cover: null,
    youtubeId: null,
    description: `Three years as Associate Software Developer at Oracle, working on the Aconex Insights module — a reporting platform used by large construction and engineering enterprises globally.

Enhanced the backend report generation pipeline implementing complex data aggregation features that processed multi-gigabyte datasets via REST APIs. Optimized legacy aggregation logic that reduced report generation time by 35%.

Resolved critical production issues for high-value enterprise clients — analyzing bug reports and shipping code fixes directly to production. Led research on migration from monolithic to microservices architecture. Integrated internationalization support for 7 languages covering 80% of the global user base. Managed deployment and upgrade processes for 6 testing environments, reducing setup time by 40%.`,
    role: 'Associate Software Developer',
    collaborators: 'Oracle Corporation',
    techs: ['Java', 'Spring', 'REST APIs', 'SQL', 'Docker', 'Microservices', 'Linux'],
    links: [],
  },
  {
    id: 'spacear',
    title: 'SpaceAR',
    category: 'AR Game · Unity',
    tags: ['AR/VR', 'Game Dev'],
    year: '2025',
    stat: 'Physics-based AR on Android',
    short: 'AR physics-based jumping game where you navigate an astronaut across planets placed in your real environment.',
    cover: null,
    youtubeId: null,
    description: `SpaceAR is an augmented reality physics-based jumping game built with Unity and Vuforia. It brings a galaxy of planets into your real-world environment — the goal is to navigate an astronaut from planet to planet by calculating the perfect jump.

Uses Vuforia's PlaneFinderBehaviour to scan the real-world floor and place game objects. Players place the start, mid-air, and finish planets themselves, creating a unique level every time.

Jumps are not canned animations — the astronaut is launched with a calculated velocity and affected by gravity, requiring real skill and timing. A dynamic LineRenderer shows the exact physics-based trajectory the astronaut will take before you release.

Two selectable jump mechanics: Ping-Pong Mode where power cycles from min to max requiring precise timing, and Charge-Up Mode where holding the screen charges the jump. A life system and win/loss state machine round out the full game loop.`,
    role: 'Solo developer — Unity, Vuforia, C#, physics systems',
    collaborators: null,
    techs: ['Unity 6.2', 'Vuforia 11.4.4', 'C#', 'AR Foundation', 'ShaderLab'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ruheengl/SpaceAR' },
      { label: 'Behance', href: 'https://www.behance.net/gallery/243043833/SpaceAR' },
    ],
  },
  {
    id: 'towar',
    title: 'TowAR Defense',
    category: 'AR Strategy Game · Chillenium',
    tags: ['AR/VR', 'Game Dev'],
    year: '2025',
    stat: 'Image-tracked AR tower defense',
    short: 'AR tower defense game anchored to image targets using Vuforia — gameplay adapts in real time to marker orientation.',
    cover: null,
    youtubeId: null,
    description: `An AR tower defense game anchored to image targets using Vuforia image tracking. Gameplay behavior adjusts in real time based on marker orientation and tracking state — if the marker tilts, the game world tilts with it.

Built a central game manager to handle all game state and entity updates, and managed multiple active units and towers with efficient update logic to keep frame rate stable in AR. Adjusted gameplay behavior dynamically based on tracking confidence.

Also demoed at the Visualization Fall Show at Texas A&M.`,
    role: 'Developer — Unity, Vuforia, game systems architecture',
    collaborators: null,
    techs: ['Unity', 'Vuforia', 'C#', 'ShaderLab'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ruheengl/TowAR' },
    ],
  },
  {
    id: 'scavengar',
    title: 'ScavengAR',
    category: 'AR Game · Unity',
    tags: ['AR/VR', 'Game Dev'],
    year: '2025',
    stat: 'Markerless AR scavenger hunt',
    short: 'AR scavenger hunt game with spatial object placement and multi-stage interaction in real-world space.',
    cover: null,
    youtubeId: null,
    description: `An AR scavenger hunt game where players search for and interact with virtual objects placed in real-world space using markerless AR.

Built spatial object placement, interaction detection, and game state management across multiple hunt stages. The project focused on making virtual objects feel grounded in the physical environment.`,
    role: 'Solo developer — Unity, AR Foundation, C#',
    collaborators: null,
    techs: ['Unity', 'C#', 'ShaderLab', 'AR Foundation'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ruheengl/ScavengAR' },
    ],
  },
  {
    id: 'notan-art',
    image: '/images/notan.jpg',
    title: 'Notan Art',
    category: 'Visual Design · Photoshop & Illustrator',
    tags: ['Design'],
    year: '2025',
    stat: 'Expansion of the Square technique',
    short: 'Digital notan composition exploring harmonious duality — a classic "Expansion of the Square" using light, shadow, and negative space.',
    cover: null,
    youtubeId: null,
    description: `A digital notan composition exploring harmonious duality. The piece features calm puppies anchoring the composition with butterflies expanding outward — creating a feeling of freedom and balance between light and dark.

Built using the classic "Expansion of the Square" technique: the composition began as a single solid black square. Every white shape — the floral vines, the dog, and the butterflies — was cut from that original square and mirrored horizontally or vertically along the edges. The result is a perfect conservation of space, where negative cuts become positive forms.`,
    role: 'Designer — concept, composition, execution',
    collaborators: null,
    techs: ['Adobe Photoshop', 'Adobe Illustrator'],
    links: [
      { label: 'Behance', href: 'https://www.behance.net/gallery/243044267/Notan-Art' },
    ],
  },
  {
    id: 'the-line-project',
    image: '/images/line.jpeg',
    title: 'The Line Project',
    category: 'Visual Design · Drawing',
    tags: ['Design'],
    year: '2025',
    stat: '20 expressive line studies',
    short: 'A grid of 20 hand-drawn studies exploring the descriptive and expressive qualities of line.',
    cover: null,
    youtubeId: null,
    description: `A project to understand and articulate the descriptive and expressive qualities of line. Each of the 20 pieces in the full grid represents a different expression of a simple line.

The grid spans: Organized & Rhythmic, Cross-hatching & Frustrated, Thin & Lazy, Soft & Playful, Sharp & Unpredictable, Contours & Elegant, Gestural & Timid, Messy & Stressful, Graphic & Bold, Staccato & Joyful, Organic & Dramatic, Contour & Noisy, Organic & Graceful, Pixelated & Wounded, Geometric & Rhythmic, Vertical & Excited, Horizontal & Calm, Delicate & Fragile, Continuous & Dramatic, and Sharp & Angry.`,
    role: 'Designer & illustrator',
    collaborators: null,
    techs: ['Bristol Paper', 'Pencil', 'Pen', 'X-Acto Knife'],
    links: [
      { label: 'Behance', href: 'https://www.behance.net/gallery/243045283/The-Line-Project' },
    ],
  },
  {
    id: 'the-shape-project',
    image: '/images/shape.jpg',
    title: 'The Shape Project',
    category: 'Visual Design · Paper & Colour',
    tags: ['Design'],
    year: '2025',
    stat: '4-panel shape composition series',
    short: 'Four-panel series exploring how context alters perception using a consistent vocabulary of three shapes.',
    cover: null,
    youtubeId: null,
    description: `A series exploring how context alters perception. Using a consistent vocabulary of three shapes — a curvilinear shape, a rectilinear shape, and a line — I rearranged them across four panels.

By varying scale, layering, colour, and orientation of identical forms, the goal was to create four distinct visual narratives that remain connected as a cohesive family. The same shapes read completely differently depending on how they relate to each other spatially.`,
    role: 'Designer',
    collaborators: null,
    techs: ['Bristol Paper', 'Colored Paper', 'X-Acto Knife'],
    links: [
      { label: 'Behance', href: 'https://www.behance.net/gallery/243045713/The-Shape-Project' },
    ],
  },
  {
    id: 'color-combinations',
    image: '/images/butterfly.jpg',
    title: 'Color Combinations',
    category: 'Visual Design · Colour Theory',
    tags: ['Design'],
    year: '2025',
    stat: '8-panel colour theory study',
    short: 'Eight-panel series implementing standard colour schemes — monochromatic to triadic — applied to a single composition.',
    cover: null,
    youtubeId: null,
    description: `A project to implement standard colour schemes applied consistently to a single composition across eight panels.

  Each panel demonstrates a distinct colour relationship:

  Monochromatic — different values of one hue. Analogous — neighboring hues on the colour wheel using at least three hues. Achromatic/Chromatic — black, white, and grays with a single colour accent. Complementary — hues directly across from each other on the colour wheel. Split Complementary — one dominant colour plus the two hues beside its complement. Triadic — three equally spaced hues, whether primary, secondary, or tertiary. Warm and Cool — cool colours (blue, green, violet) recede while warm colours (red, orange, yellow) advance, using a two-thirds dominant to one-third accent ratio for harmony and contrast. Colour Key — one hue chosen as a key colour and mixed with all others to create visual unity across the composition.

  The constraint of applying all eight schemes to the same underlying composition makes the colour relationships the subject rather than the imagery itself.`,
    role: 'Designer',
    collaborators: null,
    techs: ['Bristol Paper', 'Colored Paper', 'Gouache'],
    links: [
      { label: 'Behance', href: 'https://www.behance.net/gallery/243047121/Color-Combinations' },
    ],
  },
  {
    id: 'flighty',
    title: 'Flighty',
    category: 'Full Stack · Flask & MySQL',
    tags: ['Engineering'],
    year: '2021',
    stat: 'Flight Management System with admin panel',
    short: 'Flask-based flight management web app with user booking, session persistence, and admin flight management.',
    cover: null,
    youtubeId: null,
    description: `Flighty is a full-stack flight management system built with Flask and MySQL. Users can sign up, log in, search for available flights between a source and destination, book tickets, cancel bookings, and print transaction info.

  The app includes a separate admin panel where admins can add and remove flights, airports, and airlines on demand. Role-based access control protects sensitive endpoints — payment, booking, and profile pages all require authentication before access is granted.

  Session data is persisted so users can return and continue where they left off. The database schema uses MySQL with SELECT, INSERT, DELETE, and JOIN queries for relational data across flights, users, and bookings.`,
    role: 'Solo developer — Flask, MySQL, Python, session management',
    collaborators: null,
    techs: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'Session Management'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ruheengl/Flighty' },
    ],
  },
  {
    id: 'connect',
    title: 'Connect',
    category: 'Full Stack · MERN',
    tags: ['Engineering'],
    year: '2021',
    stat: 'NGO-donor web platform',
    short: 'MERN-based web platform connecting NGOs and donors with flexible donation options and social media integration.',
    cover: null,
    youtubeId: null,
    description: `A full-stack web platform built on the MERN stack (MongoDB, Express, React, Node.js) enabling donations, volunteering sign-ups, and social media integration for NGOs and their supporters.

  Designed to streamline the connection between non-profits and donors — providing flexible contribution options, clean UI for browsing causes, and integration hooks for sharing on social platforms.

  Enhanced donor engagement through a well-structured interface and multiple donation pathways, reducing friction in the giving process.`,
    role: 'Developer — MERN stack, full-stack development',
    collaborators: null,
    techs: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
    links: [],
  },
  {
    id: 'spark-ar',
    title: 'Spark AR Filters',
    category: 'AR Filters · Facebook School of Innovation',
    tags: ['AR/VR'],
    year: '2020',
    stat: '2K+ impressions · 500K+ reach',
    short: 'Three AR filters for Instagram — one face filter game for Zostel India reached 500K+ audience.',
    cover: null,
    youtubeId: null,
    description: `Designed and deployed three AR filters for Instagram as part of the Facebook School of Innovation capstone.

Used Blender for 3D asset creation and JavaScript for interactive logic. The filters achieved 2K+ impressions across deployments.

One filter — a face filter game created for Zostel India leveraging facial tracking — reached a 500K+ audience.`,
    role: 'Solo designer & developer — Spark AR, Blender, JavaScript',
    collaborators: 'Facebook School of Innovation · Zostel India',
    techs: ['Spark AR Studio', 'Blender', 'JavaScript', 'Face Tracking'],
    links: [
      { label: 'Behance', href: 'https://www.behance.net/ruheenagulwar' },
    ],
  },
  {
    id: 'email-client',
    title: 'Custom Email Client',
    category: 'Systems Programming · Python',
    tags: ['Engineering'],
    year: '2020',
    stat: 'IMAP protocol from scratch',
    short: 'A fully functional email client built from scratch using Python and socket programming — no email libraries.',
    cover: null,
    youtubeId: null,
    description: `A custom email client built using Python and raw socket programming, implementing the IMAP protocol from scratch without relying on any email libraries.

  Supports login and authentication, mailbox switching between folders, and full mail handling — reading, listing, and managing messages — entirely through direct socket communication with the mail server.

  The project was an exercise in understanding low-level network protocols and building reliable communication systems from the ground up.`,
    role: 'Solo developer — Python, socket programming, IMAP',
    collaborators: null,
    techs: ['Python', 'Socket Programming', 'IMAP Protocol'],
    links: [],
  },
  {
    id: 'covidtrack',
    title: 'CovidTrack',
    category: 'Full Stack · Python',
    tags: ['Engineering'],
    year: '2020',
    stat: 'Global case dashboard with chatbot',
    short: 'Interactive Covid-19 dashboard with global case tracking, interactive maps, and an IBM Watson chatbot.',
    cover: null,
    youtubeId: null,
    description: `An interactive Covid-19 dashboard providing real-time case updates across all regions of India and the world, built during the height of the pandemic.

  Created global case tracking visualizations with interactive plots, geographic maps, and region-level breakdowns using Python, Dash, and Bootstrap. Integrated a Flask backend for data serving.

  Added an FAQ chatbot trained on Covid-19 data using IBM Watson that answers user queries about symptoms, guidelines, and case statistics — making the dashboard more than just a data display.`,
    role: 'Developer — Python, Dash, Flask, IBM Watson',
    collaborators: 'PPL Project team',
    techs: ['Python', 'Dash', 'Flask', 'Bootstrap', 'IBM Watson', 'Mapbox'],
    links: [
      { label: 'GitHub', href: 'https://github.com/PPL-Project-Covid-Dashboard/Public-Health-Monitoring-Survellience-System' },
    ],
  },
];

export const ALL_TAGS = ['All', 'AR/VR', 'Game Dev', 'Engineering', 'Design', 'Research'];