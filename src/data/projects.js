export const PROJECTS = [
  {
    id: 'cattle-digital-twin',
    title: 'Beef Cattle Digital Twin',
    category: 'Digital Twin · Texas A&M',
    tags: ['Research', 'Engineering'],
    year: '2026',
    stat: 'AWE USA 2026 — poster + lightning talk',
    short: 'Modular digital twin of TAMU beef cattle systems in Unreal Engine 5, integrating live IoT data streams, agent-based simulation, and real-time KPI dashboards.',
    cover: '/images/cows.png',
    youtubeId: 'u_vUs41SqHk',
    description: `A modular, layered Digital Twin architecture for the Texas A&M Department of Animal Science beef cattle system, built in Unreal Engine 5. The platform integrates biological, environmental, and management data into an interactive, spatially accurate virtual representation of real cattle operations — supporting immersive visualization, scenario-based decision support, and scalable data integration for research and education.

As Data Integration and Digital Twin Infrastructure Lead, I designed the environmental data schema and connected weather feed inputs to the simulation state manager, ensuring resource states update at configurable time-step intervals. I validated pipeline output integrity, documented synchronization timing, and conducted initial verification of KPI value updates in response to incoming data stream changes.

I implemented a timestamp slider system in UE5 enabling seamless scrubbing of historical data and synchronized media feeds. I also developed the event-driven UI logic for the individual cow dashboard using Event Dispatchers to broadcast data to synchronized health indicators, behavior status panels, and progress bars calculating feed and water intake percentages relative to daily targets. The individual cow dashboard interface was finalized end-to-end — layout, visual hierarchy, and scenario transitions.

The system features a live MQTT-based IoT pipeline (RFID location events, weather feeds, treatment logs), Temperature-Humidity Index driven agent behavior, real-time KPI dashboards at pen and animal level, and automated threshold alerts. Selected for a research poster and lightning talk at AWE USA 2026.`,
    role: 'Data Integration & Digital Twin Infrastructure Lead',
    collaborators: 'Prof. Jian Tao · Texas A&M University · Team: Adeolu Adekunle, Manuel Toledo, Md Raziuzzaman Khan',
    techs: ['Unreal Engine 5', 'Blueprints', 'Python', 'MQTT', 'ETL Pipeline', 'IoT', 'UE5 UI/UMG'],
    links: [
      { label: 'View Poster', href: '/Digital_Twin_AWE_Poster.pdf' }
    ],
  },
  {
    id: 'lumen',
    title: 'Lumen',
    category: 'Spatial Computing · XRCC 2026',
    tags: ['AR/VR', 'Engineering'],
    year: '2026',
    stat: 'Built at XRCC 2026 · Meta Quest & Apple Vision Pro',
    short: 'Browser-based AR insurance inspection tool for WebXR headsets — AI damage analysis, on-device voice transcription, and Gaussian splat capture with georeferenced annotations. No installation required.',
    cover: '/images/lumen.png',
    youtubeId: 'nbZJ7yPIke8',
    description: `Insurance field assessments have a practical problem: the adjuster is at the scene but all their reference material is elsewhere. Notes mean stopping. Photos get reviewed later by someone who wasn't there.

Lumen runs in the browser on any WebXR headset with no installation. The agent opens a URL, scans the claimant's documents via OCR, and enters an AR inspection session. They walk 12 positions around the vehicle — the app captures the sharpest frame at each stop and streams AI damage analysis in as cards. Any card can be pinned as a spatial sticky note at that exact physical location.

Voice annotations are recorded with the grip button, transcribed on-device by Vosk WASM, and pinned to the location in space. Each note carries the transcribed text, playable audio, GPS coordinates, and a timestamp. A reviewer at HQ opens a note placed directly on the damage, hears the adjuster's voice, and sees when and where it was made.

Once the walkthrough is complete, AI runs coverage analysis against the policy and the claim report generates automatically. The agent reviews a Gaussian splat of the vehicle in an immersive 3D viewer before submitting.

A spatially reconstructed scene with georeferenced voice annotations tied to a verified session cannot be produced retroactively. A photograph can. Getting this running end-to-end in a browser on a real headset, with no native app, is what we are most proud of.

Built as a two-person development team handling the complete application end-to-end.`,
    role: 'Co-developer: spatial UI, AR inspection flow, voice annotation system, AI integration, full-stack',
    collaborators: 'Samir Patro, Tanmay Ghodekar, Vivek Mishra, Preetha Laxmanwar',
    techs: ['React', 'Three.js', 'Vosk WASM', 'WebSpatial SDK', 'Meta Quest', 'Apple Vision Pro', 'WebXR'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ruheengl/CoverageGhost' },
    ],
  },
  {
    id: 'arguvis',
    title: 'ARgueVis',
    category: 'AR Research · Texas A&M',
    tags: ['AR/VR', 'Research'],
    year: '2026',
    stat: 'Ongoing research — Even G2 AR glasses',
    short: 'AR glasses system for real-time argument summarization and evidence highlighting during live conversations.',
    cover: null,
    youtubeId: null,
    description: `Conducting research with Even G2 AR glasses to explore system design for social and conversational AR experiences.

The system transcribes live conversation using Whisper, summarizes arguments in real time via the Groq API, and surfaces evidence highlights through a heads-up display — without interrupting the flow of conversation. A Python backend handles transcription and inference; a TypeScript frontend communicates with the Even Hub SDK via REST/HTTP polling.

Research focus includes investigating implicit behavioral cues such as gaze and posture as interaction signals, and designing socially aware visualizations that support reasoning while maintaining social comfort. Defining evaluation criteria around social comfort, usability, and system responsiveness.`,
    role: 'Primary Researcher — system design, backend, frontend, interaction design, evaluation framework',
    collaborators: 'Dr. Wai Tong, Dr. Meng Xia, Emily Kim, Nikitha Natarajan · Texas A&M University',
    techs: ['Even Hub SDK','AR Glasses'],
    links: [],
  },
  {
    id: 'sunweavers',
    title: 'SunWeavers',
    category: 'VR Game · TXR Hackathon',
    tags: ['AR/VR', 'Game Dev'],
    year: '2025',
    stat: 'Most Creative Award · TXR Hackathon · Built in 4 hours',
    short: 'VR game where you fly above a dark city, grab falling light orbs, and trigger them to burst into energy — bringing light to the world below. Won Most Creative at TXR Hackathon.',
    cover: '/images/sunweavers.jpeg',
    youtubeId: 'L1ftujJCRXA',
    description: `SUNWEAVERS is a VR game built in 4 hours at the TXR Hackathon, from ideation to playable submission. The theme was SDG 7 — Affordable and Clean Energy.

    The player floats above a dark city at night. Light orbs fall from the sky — when they reach the roads below, they become streetlights, slowly bringing the city back to life. Orbs can be grabbed mid-air and triggered to burst into cascading light particles, spreading energy across the scene.

    The experience was designed to make the idea of energy access visceral rather than abstract — the player is literally holding light and choosing where it goes.

    Won the Most Creative Award at TXR Hackathon. Built in under 4 hours by a two-person dev team, with teammates handling presentation and other deliverables.`,
    role: 'Co-developer — Unity, C#, VR interaction systems, particle effects',
    collaborators: 'Israel Cantu, Garrett Ward, Lama Alnatour, Charnae C. Fields',
    techs: ['Unity', 'C#', 'VR', 'Meta Quest'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ruheengl/AffordableAndCleanEnergyTXR' },
    ],
  },
  {
    id: 'mewsic-madness',
    title: 'Mewsic Madness',
    category: 'Game Jam · Chillenium 2026',
    tags: ['Game Dev', 'Engineering'],
    year: '2026',
    stat: 'Built in 36 hours · Chillenium 2026',
    short: 'Fast-paced risk-driven battle game built in 36 hours where you wager health points on quick-time events.',
    cover: '/images/mewsic.png',
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
    title: 'Oracle — Aconex Insights',
    category: 'Backend Engineering · Oracle',
    tags: ['Engineering'],
    year: '2022-2025',
    stat: '35% faster report generation',
    short: 'Backend pipeline engineering for enterprise report generation processing multi-gigabyte datasets at Oracle Aconex.',
    cover: '/images/oracle.png',
    youtubeId: null,
    description: `Three years as Associate Software Developer at Oracle, working on the Aconex Insights module — a reporting platform used by large construction and engineering enterprises globally.

Enhanced the backend report generation pipeline with complex data aggregation features processing multi-gigabyte datasets via REST APIs. Optimized legacy aggregation logic reducing report generation time by 35%.

Resolved critical production issues for high-value enterprise clients, shipping fixes directly to production. Led research on migration from monolithic to microservices architecture. Integrated internationalization support for 7 languages covering 80% of the global user base. Managed deployment and upgrade processes for 6 testing environments, reducing setup time by 40%.`,
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
    cover: '/images/spacear.jpg',
    youtubeId: 'Tjve142I9eo',
    description: `SpaceAR is an augmented reality physics-based jumping game built with Unity and Vuforia. It brings a galaxy of planets into your real-world environment — navigate an astronaut from planet to planet by calculating the perfect jump.

Uses Vuforia's PlaneFinderBehaviour to scan the real-world floor and place game objects. Players position the start, mid-air, and finish planets themselves, creating a unique level every time.

Jumps are physics-based: the astronaut launches with a calculated velocity affected by gravity, requiring real timing and skill. A dynamic LineRenderer previews the exact trajectory before release.

Two selectable mechanics: Ping-Pong Mode where power cycles from min to max requiring precise timing, and Charge-Up Mode where holding the screen charges the jump. A life system and win/loss state machine complete the game loop.`,
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
    stat: 'Demoed at Visualization Fall Show · TAMU',
    short: 'AR tower defense game anchored to image targets using Vuforia — gameplay adapts in real time to marker orientation.',
    cover: '/images/towar.jpg',
    youtubeId: null,
    description: `An AR tower defense game anchored to image targets using Vuforia image tracking. Gameplay behavior adjusts in real time based on marker orientation and tracking state — if the marker tilts, the game world tilts with it.

Built a central game manager to handle all game state and entity updates, managing multiple active units and towers with efficient update logic to keep frame rate stable in AR. Adjusted gameplay behavior dynamically based on tracking confidence.

Demoed at the Visualization Fall Show at Texas A&M.`,
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
    cover: '/images/scavengar.jpg',
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
    id: 'spark-ar',
    title: 'Spark AR Filters',
    category: 'AR Filters · Facebook School of Innovation',
    tags: ['AR/VR'],
    year: '2020',
    stat: '2K+ impressions · 500K+ reach',
    short: 'Three AR filters for Instagram — one face filter game for Zostel India reached a 500K+ audience.',
    cover: null,
    youtubeId: null,
    description: `Designed and deployed three AR filters for Instagram as part of the Facebook School of Innovation capstone.

Used Blender for 3D asset creation and JavaScript for interactive logic. The filters achieved 2K+ impressions across deployments.

One filter — a face filter game created for Zostel India leveraging facial tracking — reached a 500K+ audience.`,
    role: 'Solo designer & developer — Spark AR, Blender, JavaScript',
    collaborators: 'Facebook School of Innovation · Zostel India',
    techs: ['Spark AR Studio', 'Blender', 'JavaScript', 'Face Tracking'],
    links: [
      { label: 'Behance', href: 'https://www.behance.net/gallery/216312737/Escape-City-AR' },
    ],
  },
  {
    id: 'blu',
    title: 'Blu',
    category: '3D Animation · Blender',
    tags: ['Design'],
    year: '2021',
    stat: 'Character design, lighting & animation in Blender',
    short: 'A short 3D animated story following Blu, a blue character, through grocery shopping and an unexpected back pain moment, built entirely in Blender.',
    cover: '/images/blu.png',
    youtubeId: 'Cd47vBpYIA4',
    description: `Blu is a short 3D animated film built entirely in Blender, showcasing character design, scene lighting, and narrative animation across multiple environments.

  The story follows Blu, a charming character with blue fur, through grocery shopping that takes an unexpected turn when he experiences a sharp pain in his back. The scenes that follow uncover why.

  Inspired by a Ketnipz clip about bad backs, the project was an exercise in translating a simple, funny concept into a fully realized 3D narrative — from character modeling and rigging to lighting, set dressing, and final animation.`,
    role: 'Solo — character design, 3D modeling, rigging, lighting, animation',
    collaborators: null,
    techs: ['Blender'],
    links: [
      { label: 'Behance', href: 'https://www.behance.net/gallery/216110399/Blus-Back-Pain' },
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
    short: 'Digital notan composition exploring harmonious duality — a classic Expansion of the Square using light, shadow, and negative space.',
    cover: '/images/notan.jpg',
    youtubeId: null,
    description: `A digital notan composition exploring harmonious duality. The piece features calm puppies anchoring the composition with butterflies expanding outward — creating a feeling of freedom and balance between light and dark.

Built using the classic Expansion of the Square technique: the composition began as a single solid black square. Every white shape — the floral vines, the dog, and the butterflies — was cut from that original square and mirrored horizontally or vertically along the edges. The result is a perfect conservation of space, where negative cuts become positive forms.`,
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
    cover: '/images/line.jpeg',
    youtubeId: null,
    description: `A project to understand and articulate the descriptive and expressive qualities of line. Each of the 20 pieces in the full grid represents a different expression of a single line.

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
    cover: '/images/shape.jpg',
    youtubeId: null,
    description: `A series exploring how context alters perception. Using a consistent vocabulary of three shapes — a curvilinear shape, a rectilinear shape, and a line — rearranged across four panels.

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
    cover: '/images/butterfly.jpg',
    youtubeId: null,
    description: `A project to implement standard colour schemes applied consistently to a single composition across eight panels.

Each panel demonstrates a distinct colour relationship: Monochromatic (different values of one hue), Analogous (neighboring hues using at least three), Achromatic/Chromatic (grays with a single accent), Complementary (hues directly across the wheel), Split Complementary, Triadic (three equally spaced hues), Warm and Cool, and Colour Key (one hue mixed with all others for visual unity).

The constraint of applying all eight schemes to the same underlying composition makes the colour relationships the subject rather than the imagery.`,
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
    stat: 'Flight booking system with admin panel',
    short: 'Flask-based flight management web app with user booking, session persistence, and role-based admin controls.',
    cover: null,
    youtubeId: null,
    description: `A full-stack flight management system built with Flask and MySQL. Users can sign up, log in, search flights, book tickets, cancel bookings, and print transaction info.

Includes a separate admin panel for managing flights, airports, and airlines on demand. Role-based access control protects sensitive endpoints. Session data is persisted across visits using MySQL with SELECT, INSERT, DELETE, and JOIN queries across flights, users, and bookings.`,
    role: 'Solo developer — Flask, MySQL, Python, session management',
    collaborators: null,
    techs: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
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

Added an FAQ chatbot trained on Covid-19 data using IBM Watson that answers user queries about symptoms, guidelines, and case statistics.`,
    role: 'Developer — Python, Dash, Flask, IBM Watson',
    collaborators: 'PPL Project team',
    techs: ['Python', 'Dash', 'Flask', 'Bootstrap', 'IBM Watson', 'Mapbox'],
    links: [
      { label: 'GitHub', href: 'https://github.com/PPL-Project-Covid-Dashboard/Public-Health-Monitoring-Survellience-System' },
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

An exercise in understanding low-level network protocols and building reliable communication systems from the ground up.`,
    role: 'Solo developer — Python, socket programming, IMAP',
    collaborators: null,
    techs: ['Python', 'Socket Programming', 'IMAP Protocol'],
    links: [],
  },
];

export const ALL_TAGS = ['All', 'AR/VR', 'Game Dev', 'Engineering', 'Design', 'Research'];