export const PROJECTS = [
  {
    id: 'arguvis',
    title: 'ARgueVis',
    category: 'AR Research',
    tags: ['AR/VR', 'Research'],
    year: '2025',
    short: 'Real-time argument summarization and evidence highlighting on AR glasses during live conversations.',
    cover: null,
    youtubeId: null, // Replace with your YouTube video ID e.g. 'dQw4w9WgXcQ'
    description: `ARgueVis is an AR glasses system that summarizes arguments and highlights evidence in real time during live conversations — a research tool you wear on your face.

I designed the full user study comparing the glasses-wearer experience against the conversation partner experience, using SUS, NASA-TLX Raw, and UEQ evaluations.

The backend pipeline runs Whisper STT for live speech transcription, feeds into Groq API for on-the-fly summarization, and pushes results to a Unity frontend running on XReal Air 2 Ultra glasses.`,
    role: 'Primary Researcher — system design, backend pipeline, user study design',
    collaborators: 'Dr. Wai Tong, Dr. Meng Xia (Texas A&M)',
    techs: ['Unity', 'XReal SDK', 'Whisper STT', 'Groq API', 'C#', 'Python'],
    links: [],
  },
  {
    id: 'spacear',
    title: 'SpaceAR',
    category: 'AR Game',
    tags: ['AR/VR', 'Game Dev'],
    year: '2025',
    short: 'A solar system exploration game placed directly on your real-world surfaces.',
    cover: null,
    youtubeId: null,
    description: `SpaceAR brings space exploration into your living room. Players interact with a 3D solar system placed on real surfaces — rotating planets, launching probes, and solving orbital puzzles.

Built with Unity and AR Foundation, featuring custom shaders for planet atmospheres and a procedural orbit simulation that keeps everything physically grounded.`,
    role: 'Solo developer — design, engineering, shaders',
    collaborators: null,
    techs: ['Unity', 'AR Foundation', 'C#', 'Shader Graph'],
    links: [{ label: 'View on Behance', href: 'https://www.behance.net/gallery/243043833/SpaceAR' }],
  },
  {
    id: 'towar-defense',
    title: 'TowAR Defense',
    category: 'Game Jam — Chillenium',
    tags: ['AR/VR', 'Game Dev'],
    year: '2024',
    short: 'Aqua vs. Pyro AR tower defense — players place elemental towers in real physical space.',
    cover: null,
    youtubeId: null,
    description: `Vuforia-based AR tower defense built at the Chillenium game jam. The theme was Aqua vs. Pyro — players place elemental towers in real physical space to defend against enemy waves.

Features include QTE boss fight mechanics, tiered damage multipliers, escalating wave difficulty, health bars, sprite cycling, and comic-style instruction cards I designed in Figma.

Also demoed at the Visualization Fall Show, where it drew a lot of crowd engagement.`,
    role: 'Developer & designer — Unity, Vuforia, Figma assets',
    collaborators: null,
    techs: ['Unity', 'Vuforia', 'C#', 'Figma', 'AR'],
    links: [{ label: 'View on Behance', href: 'https://www.behance.net/ruheenagulwar' }],
  },
  {
    id: 'froggar',
    title: 'FroggAR',
    category: 'AR Game',
    tags: ['AR/VR', 'Game Dev'],
    year: '2024',
    short: 'Vuforia plane-detection astronaut jumping game with procedurally generated platforms.',
    cover: null,
    youtubeId: null,
    description: `A Vuforia plane-detection game where an astronaut frog jumps across procedurally generated platforms in AR space.

Features physics-based trajectory visualization so players can aim jumps, a full game loop with scoring, and escalating difficulty. The challenge was getting stable plane detection and natural-feeling jump arcs that felt grounded in the real world — solved with Vuforia's ground-plane stage and custom parabola math in C#.`,
    role: 'Solo developer',
    collaborators: null,
    techs: ['Unity', 'Vuforia', 'C#', 'AR Foundation'],
    links: [{ label: 'View on Behance', href: 'https://www.behance.net/ruheenagulwar' }],
  },
  {
    id: 'escape-city',
    title: 'Escape City',
    category: 'Spark AR Experience',
    tags: ['AR/VR'],
    year: '2024',
    short: 'A Spark AR filter that transforms your surroundings into an immersive escape-city scene.',
    cover: null,
    youtubeId: null,
    description: `A Spark AR experience that transforms the viewer's environment into an escape-city scene — demonstrating how AR filters can create immersive narrative spaces without specialized hardware, just a phone camera.

One of my most-viewed pieces on Behance, exploring how spatial storytelling can expand into the viewer's physical space.`,
    role: 'Solo designer & developer',
    collaborators: null,
    techs: ['Spark AR', 'JavaScript', '3D Modeling', 'Motion Design'],
    links: [{ label: 'View on Behance', href: 'https://www.behance.net/gallery/216312737/Escape-City-AR' }],
  },
  {
    id: 'toy-plane',
    title: 'Toy Plane',
    category: 'Spark AR Filter',
    tags: ['AR/VR'],
    year: '2024',
    short: 'Animated toy plane placed in real space — a miniature world overlaid on reality.',
    cover: null,
    youtubeId: null,
    description: `A playful Spark AR filter that places an animated toy plane in real space around the user. The plane responds to motion and creates a sense of a miniature world overlaid on reality.

Built entirely in Spark AR Studio with custom 3D assets modeled in Blender and shader effects tuned to achieve the toy-scale look.`,
    role: 'Solo designer & developer',
    collaborators: null,
    techs: ['Spark AR', 'Blender', 'Shaders', 'JavaScript'],
    links: [{ label: 'View on Behance', href: 'https://www.behance.net/gallery/216175969/Toy-Plane-AR' }],
  },
  {
    id: 'hk-temp',
    title: 'HK Temperature Matrix',
    category: 'Data Visualization',
    tags: ['Visualization'],
    year: '2024',
    short: 'Interactive D3.js visualization of Hong Kong temperature data across decades.',
    cover: null,
    youtubeId: null,
    description: `An interactive D3.js visualization of Hong Kong temperature data. Color-coded matrix cells show temperature intensity across months and years, with embedded sparklines for trend context, a max/min toggle, and hover tooltips for exact values.

Graded on correctness, readability, and maintainability. The most interesting technical challenge was integrating sparklines inside matrix cells without cluttering the grid.`,
    role: 'Solo developer',
    collaborators: null,
    techs: ['D3.js', 'JavaScript', 'SVG', 'CSS'],
    links: [],
  },
  {
    id: 'cattle-sim',
    title: 'Cattle Agent Sim',
    category: 'Digital Twin — Unreal Engine',
    tags: ['Visualization'],
    year: '2024',
    short: 'Digital twin with real MQTT sensor data driving cattle agent behavior and health states.',
    cover: null,
    youtubeId: null,
    description: `A digital twin simulation of cattle movement and health in Unreal Engine with Blueprint. Cattle agents replay real MQTT sensor data, switching between behavior states (grazing, resting, stressed) and health states based on incoming telemetry.

The Blueprint fan-in wiring architecture handles multi-agent coordination. A custom coordinate mapping system aligns real GPS positions to the virtual environment. Delivered across Phases A, B, and C with full presentation slides for each.`,
    role: 'Developer — Blueprint architecture, MQTT integration, coordinate mapping',
    collaborators: null,
    techs: ['Unreal Engine', 'Blueprint', 'MQTT', 'Digital Twin'],
    links: [],
  },
];

export const ALL_TAGS = ['All', 'AR/VR', 'Game Dev', 'Visualization', 'Research'];
