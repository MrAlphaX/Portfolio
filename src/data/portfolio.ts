/**
 * Central portfolio data — generated from the resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Faheem Ehsan Tanoli',
  displayName: 'Faheem Ehsan Tanoli',
  firstName: 'FAHEEM',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A TANOLI ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'CS / AI', 'PHP Frameworks'],
  intro:
    'A full-stack web developer with a BS in Computer Science from the University of Haripur, working with AI prompts and AI automations and building systems with PHP, JavaScript, Angular, React and SQL databases.',
  about: {
    headline: 'I build real business systems',
    headlineAccent: 'and make them smarter with AI.',
    role: 'Full-Stack Web Developer',
    bio: "I'm a full-stack web developer with a Computer Science background from the University of Haripur. I turn everyday operations, like stock ageing and plant nursery management, into clear web systems that teams can work from.",
    education: { degree: 'BS Computer Science AI Expert', school: 'University of Haripur' },
    pillars: [
      { icon: 'code', title: 'Full-Stack Development', text: 'Web apps built with PHP, JavaScript, Angular and React.' },
      { icon: 'spark', title: 'AI Prompts & Automations', text: 'Prompts and automations that take repetitive work off the team.' },
      { icon: 'layers', title: 'Building Systems', text: 'Dashboards and management systems on SQL, PostgreSQL and MongoDB.' },
    ] as const,
  },
  email: 'faheem.ehsan90@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/faheem-tanoli',
    github: 'https://github.com/faheem-ehsan',
  },
  resumePdf: 'assets/Sushmita_Dasari_Resume.pdf',
  portrait: {
    src: 'assets/portrait-720.webp',
    srcSet: 'assets/portrait-420.webp 420w, assets/portrait-720.webp 720w, assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Faheem Ehsan Tanoli',
  },
  skills: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Angular', 'React', 'SQL', 'PostgreSQL', 'MongoDB', 'Lua', 'FiveM Server Development'],
};

export const education = [
  {
    school: 'University of Haripur',
    place: 'Haripur',
    degree: 'BS Computer Science AI Expert',
    period: 'October 2023 – Present',
    score: 'CGPA 2.9',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: 'Kakinada',
    degree: 'BIEAP — MPC',
    period: 'June 2021 – May 2023',
    score: 'Score 925/1000',
  },
];

export const experience = [
  {
    company: 'Technical Hub Pvt Ltd',
    role: 'Trainee',
    place: 'Surampalem, AP',
    period: 'May 2025 – June 2026',
    points: [
      'Completed one year of intensive Full-Stack Development (FSD) training covering frontend, backend, database integration, and deployment workflows.',
      'Developed responsive and functional web applications by implementing user interfaces, server-side logic, and database connectivity.',
      'Deployed and managed web applications while applying version control, debugging, and end-to-end development practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Screenshot = { src: string; alt: string; title: string; caption: string };

export type Project = {
  id: string;
  title: string;
  /** Omit when unknown — the year badge is hidden. */
  year?: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Shown as a captioned gallery in the project overlay. */
  screenshots?: Screenshot[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'chart' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'stock-ageing-dashboard',
    title: 'Stock Ageing Dashboard',
    genre: 'Inventory • Dashboard',
    logline: 'A finished goods stock ageing dashboard with division-based stock, batch, grading and expiry control.',
    stack: [],
    build: [],
    features: [
      'Login by division, email and password',
      'View all divisions or filter by one division',
      'Total batches and stock retail value at a glance',
      'Latest stock update date',
      'Grade summary for A+, A, B, C and Expired stock',
      'Units, quantity and stock retail value for each grade',
      'Grades based on division-specific shelf life used',
      'Grade details with total quantity, batches and retail value',
      'Finish Goods Aging, Daily Stock Reports, Market Returns and Administration modules',
    ],
    metrics: [],
    screenshots: [
      {
        src: 'assets/projects/stock-dashboard-main.webp',
        alt: 'Finish Goods Stock Aging Dashboard showing total batches, stock retail value and a grade summary for A+, A, B, C and Expired stock',
        title: 'Main dashboard',
        caption: 'Shows total batches, stock retail value and the latest stock update, for all divisions or a single division. The grade summary breaks stock into A+, A, B, C and Expired, with units, quantity and retail value for each.',
      },
      {
        src: 'assets/projects/stock-dashboard-grade.webp',
        alt: 'A Grade popup showing total quantity, total number of batches and total stock retail value',
        title: 'Grade details',
        caption: 'Opening a grade shows its total quantity, number of batches and stock retail value, with a link through to the detailed batches.',
      },
      {
        src: 'assets/projects/stock-dashboard-login.webp',
        alt: 'Stock Aging Dashboard login page with division, email and password fields',
        title: 'Division login',
        caption: 'Users sign in by choosing their division and entering their email and password.',
      },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'chart',
  },
  {
    id: 'qr-code-plant-nursery',
    title: 'QR Code and Plant Nursery',
    genre: 'QR Code • Plant Nursery',
    logline: 'A plant nursery system with a QR code for every plant plus sales, purchase, supplier and stock management.',
    stack: [],
    build: [],
    features: [
      'Dashboard with plant records, stock units, stock cost value and sales today',
      'Sales chart for the last 6 months',
      'Current stock chart for the top plants',
      'Low stock alerts with SKU, quantity and reorder level',
      'An identification QR code for every general plant',
      'Separate QR codes for nursery plants',
      'Import plants from CSV or Excel',
      'Download QR codes one at a time or all at once',
      'Print QR labels',
      'QR page for each plant with photo, price, stock and health status',
      'Sales, Purchase, Supplier, Stock and Users modules',
    ],
    metrics: [],
    screenshots: [
      {
        src: 'assets/projects/qr-nursery-dashboard.webp',
        alt: 'Plant QR Nursery dashboard with plant records, stock units, stock cost value, sales today, a sales chart and a top plants chart',
        title: 'Dashboard',
        caption: 'Shows plant records, stock units, stock cost value and sales today, with a 6-month sales chart, a top plants stock chart and low stock alerts.',
      },
      {
        src: 'assets/projects/qr-nursery-general.webp',
        alt: 'General Plant QR Codes table listing each plant with its QR code, English name, botanical name and family',
        title: 'General Plant QR Codes',
        caption: 'Each plant gets its own identification QR code, listed with its English name, botanical name and family. Plants can be added by hand or imported from CSV or Excel.',
      },
      {
        src: 'assets/projects/qr-nursery-codes.webp',
        alt: 'Nursery Plants and QR Codes table with SKU, pot number, nursery block, health, price, stock and location',
        title: 'Nursery Plants & QR Codes',
        caption: 'Nursery stock has its own QR codes, tracked by SKU, pot number, nursery block, health, price, stock and location, with options to download codes and print labels.',
      },
      {
        src: 'assets/projects/qr-nursery-plant-page.webp',
        alt: 'QR page for a Blood Orange plant with a photo, price, SKU, pot details, location, health status and available stock',
        title: 'Plant QR page',
        caption: 'Each nursery plant has a QR page with its photo, botanical name, price, SKU, pot details, nursery block, location, health status, available stock and description.',
      },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'plants-treatment-system',
    title: 'Plants Treatment System',
    genre: 'Treatment System',
    logline: 'A system for managing plant treatments.',
    stack: [],
    build: [],
    features: [],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'itec-internship',
    title: 'Internship',
    org: 'ITEC Peshawar',
    detail: 'At the University of Haripur.',
    laurel: 'Internship',
  },
  {
    id: 'computing-society',
    title: 'Founding Member',
    org: 'Computing Society UOH',
    detail: 'University of Haripur.',
    laurel: 'Founding Member',
  },
  {
    id: 'ai-coordinator',
    title: 'AI Coordinator',
    org: 'Qarshi Organization',
    detail: 'QRI-IT.',
    laurel: 'AI Coordinator',
  },
  {
    id: 'fivem',
    title: 'FiveM Developer',
    org: 'Lua Server Development',
    detail: 'Building game servers with Lua.',
    laurel: 'FiveM',
  },
  {
    id: 'uoh',
    title: 'UOH',
    org: 'University of Haripur',
    detail: 'BS Computer Science AI Expert.',
    laurel: 'UOH',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/** Add your own here. Everything certification-related stays hidden while this is empty. */
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'PHP Frameworks come first',
    skills: [
      { name: 'PHP Frameworks', mono: 'Ph', note: 'Primary' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ra' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'Angular', mono: 'Ng' },
      { name: 'React', mono: 'Re' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Where the data lives',
    skills: [
      { name: 'SQL', mono: 'Sq' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'game-servers',
    title: 'Game Servers',
    subtitle: 'FiveM servers built with Lua',
    skills: [
      { name: 'Lua', mono: 'Lu' },
      { name: 'FiveM Server Development', mono: 'Fm' },
    ],
  },
  {
    id: 'ai-systems',
    title: 'AI & Systems',
    subtitle: 'Prompts, automations and systems',
    skills: [
      { name: 'AI Prompts', mono: 'Ap' },
      { name: 'AI Automations', mono: 'Au' },
      { name: 'Building Systems', mono: 'Bs' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'Building Systems': ['Stock Ageing Dashboard', 'QR Code and Plant Nursery', 'Plants Treatment System'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'Intermediate years at Sri Chaitanya Junior College, Kakinada — Mathematics, Physics and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'BIEAP, MPC at Sri Chaitanya Junior College, Kakinada — finishing with a score of 925/1000.',
        tags: ['MPC', 'BIEAP'],
        runtime: 'Jun 2021 – May 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Computer Science',
    period: '2023 – Present',
    synopsis: 'BS Computer Science AI Expert at the University of Haripur.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'BS Computer Science AI Expert — CGPA 2.9.',
        tags: ['BS Computer Science', 'AI Expert', 'CGPA 2.9'],
        runtime: 'Oct 2023 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'CGPA 2.9',
        description: 'CGPA 2.9 in BS Computer Science at the University of Haripur.',
        tags: ['CGPA 2.9'],
        runtime: 'BS Computer Science',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2025 – 2026',
    synopsis: 'One year of intensive Full-Stack Development training as a Trainee at Technical Hub Pvt Ltd.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Trainee',
        description: 'Intensive Full-Stack Development training covering frontend, backend, database integration and deployment workflows.',
        tags: ['FSD', 'Frontend', 'Backend', 'Databases'],
        runtime: 'May 2025 – Jun 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Developer',
        description: 'Developed responsive web applications — user interfaces, server-side logic and database connectivity.',
        tags: ['React', 'Node.js', 'Express.js'],
        runtime: 'Technical Hub',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'Deployed and managed web applications with version control, debugging and end-to-end development practices.',
        tags: ['Git / GitHub', 'Deployment'],
        runtime: 'Technical Hub',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: 'The Originals',
    synopsis: 'Three Originals — Stock Ageing Dashboard, QR Code and Plant Nursery, and Plants Treatment System.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Stock Ageing Dashboard',
        description: 'A finished goods stock ageing dashboard with division-based stock, batch, grading and expiry control.',
        tags: ['Dashboard', 'Inventory'],
        runtime: 'Original',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'QR Code and Plant Nursery',
        description: 'A plant nursery system with a QR code for every plant plus sales, purchase, supplier and stock management.',
        tags: ['QR Code', 'Plant Nursery'],
        runtime: 'Original',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'Plants Treatment System',
        description: 'A system for managing plant treatments.',
        tags: ['Plants', 'Treatment'],
        runtime: 'Original',
        palette: crimson,
      },
      {
        code: 'S04 E04',
        title: 'UOH',
        description: 'University of Haripur.',
        tags: ['UOH'],
        runtime: 'BS Computer Science',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'More AI, more automation and more systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Building more systems with AI prompts and AI automations.',
        tags: ['AI Prompts', 'AI Automations', 'Building Systems'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary stack', title: 'PHP Frameworks', detail: 'with JavaScript, Angular and React', palette: amber },
  { label: 'The Originals', title: 'Stock Ageing Dashboard', detail: 'Finished goods stock control', palette: crimson },
  { label: 'The Originals', title: 'QR Code and Plant Nursery', detail: 'A QR code for every plant', palette: jade },
  { label: 'The Originals', title: 'Plants Treatment System', detail: 'Managing plant treatments', palette: ocean },
  { label: 'AI', title: 'AI Prompts', detail: 'and AI Automations', palette: violet },
  { label: 'Education', title: 'BS Computer Science', detail: 'AI Expert, University of Haripur', palette: amber },
  { label: 'Backend', title: 'Node.js & Express.js', detail: 'with REST APIs', palette: jade },
  { label: 'Frontend', title: 'Angular & React', detail: 'with HTML, CSS and JavaScript', palette: ocean },
  { label: 'Databases', title: 'SQL & PostgreSQL', detail: 'with MongoDB', palette: crimson },
  { label: 'Game Servers', title: 'Lua & FiveM', detail: 'FiveM server development', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BS Computer Science AI Expert',
    lines: ['University of Haripur', 'October 2023 – Present'],
    chips: ['CGPA 2.9'],
  },
  {
    kicker: 'Skills',
    title: 'PHP Frameworks first.',
    lines: ['PHP · JavaScript · HTML · CSS · Angular · React', 'SQL · PostgreSQL · MongoDB', 'Lua · FiveM Server Development'],
    chips: ['PHP Frameworks', 'Angular', 'React', 'JavaScript', 'PostgreSQL', 'MongoDB'],
  },
  {
    kicker: 'Training',
    title: 'The Training Arc',
    lines: ['One year of intensive Full‑Stack Development training', 'Trainee · Technical Hub Pvt Ltd · May 2025 – June 2026', 'Frontend · Backend · Databases · Deployment'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Stock Ageing Dashboard', 'QR Code and Plant Nursery', 'Plants Treatment System'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Internship — ITEC Peshawar', 'Founding Member — Computing Society UOH', 'AI Coordinator — Qarshi Organization (QRI-IT)'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['AI Prompts · AI Automations · Building Systems'],
  },
];

export type ProfileId = 'faheem' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'faheem',
    name: 'Faheem',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & skills', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 picks', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
