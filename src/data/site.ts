export const profile = {
  name: 'Kevin Hubert',
  title: 'AI software engineer',
  tagline: 'Full-stack, frontend-first · Georgetown, TX',
  email: 'iamkevinhubert@gmail.com',
  github: 'https://github.com/kevinhubert',
  linkedin: 'https://www.linkedin.com/in/kevin-hubert/',
  resume: '/files/Kevin-Hubert-Resume.pdf',
  portrait: '/images/portrait.jpg' as string | undefined,
  introEmphasis: 'Frontend Architect',
  intro:
    'with 15+ years of experience, spanning early single-page banking apps to leading the Next.js migration of Everlywell.com.',
  about:
    'Today, my focus is building the architectural context and guardrails that allow AI agents to write and review frontend code alongside engineering teams. My background in philosophy proved to be ideal preparation for this shift: it gives me the framework to see the macro picture, translate complex systems into precise instructions for AI, and provide steady technical leadership as hands-on development evolves.',
};

export interface Job {
  slug: string;
  company: string;
  role: string;
  dates: string;
  summary: string;
  overview: string;
  points: string[];
  stack: string[];
  image?: { src: string; fit: 'cover' | 'contain'; pad?: string };
}

export const jobs: Job[] = [
  {
    slug: 'everlywell',
    company: 'Everlywell',
    role: 'Senior Software Engineer',
    dates: 'Mar 2026 — Now',
    summary: 'Frontend lead for EverlyCare; built org-wide AI review agents and Claude Code skills.',
    overview:
      'Frontend lead on EverlyCare, a greenfield telehealth booking app — while building the AI agents and Claude Code skills that changed how the wider team ships.',
    points: [
      'Led the frontend for EverlyCare, a greenfield telehealth booking app in a new monorepo.',
      'Built the context, prompts and rules behind org-wide AI review and accessibility agents.',
      'Bridged FDS 2026 design tokens into a shared UI library with Storybook builds from CI.',
    ],
    stack: ['React', 'TypeScript', 'pnpm / Turbo', 'Claude Code', 'MCP', 'Rails', 'iOS', 'Storybook'],
    image: { src: '/images/everlywell.png', fit: 'cover' },
  },
  {
    slug: 'findhelp',
    company: 'Findhelp.org',
    role: 'Staff Software Engineer',
    dates: 'Apr 2024 — Mar 2026',
    summary: 'Led frontend architecture for React/Remix referral-management apps; built the design system.',
    overview:
      'Owned frontend architecture for the React/Remix apps that social-services and government teams use to manage programs and referrals.',
    points: [
      'Led frontend architecture for React/Remix apps serving social services and government.',
      'Architected async workflows and a custom feature-flag system for data-sync pipelines.',
      'Set multi-month roadmaps for the Programs team and presented at all-hands.',
    ],
    stack: ['React', 'Remix', 'MUI', 'TypeScript', 'Feature flags'],
    image: { src: '/images/findhelp.png', fit: 'cover' },
  },
  {
    slug: 'buildasign',
    company: 'BuildASign',
    role: 'Senior Front End Developer',
    dates: 'Apr 2015 — Jan 2024',
    summary: 'Led the Next.js migration, cut load times 25%, founded the Front End Guild.',
    overview:
      'Nearly nine years growing from front end developer to senior — leading the Next.js migration, performance work, and the company’s Front End Guild.',
    points: [
      'Led the Next.js migration, cutting development cycles 30% at 99.9% uptime.',
      'Cut load times 25% through Core Web Vitals work.',
      'Founded and led the Front End Guild; mentored through Developer Learning Hours.',
    ],
    stack: ['Next.js', 'React', 'Redux', 'Core Web Vitals', 'Agile'],
    image: { src: '/images/bas-logo.svg', fit: 'contain', pad: '12% 25%' },
  },
  {
    slug: 'q2',
    company: 'Q2 · Texas A&M',
    role: 'Web Developer',
    dates: '2011 — 2015',
    summary: 'Launched Q2’s first Drupal site; modernized university web properties.',
    overview:
      'Where it started: shipping web properties for a fintech and a university, and introducing the tooling to keep them maintainable.',
    points: [
      'Launched Q2’s first Drupal site; introduced Gitflow and Sass automation.',
      'Modernized Texas A&M university websites.',
    ],
    stack: ['Drupal', 'Sass', 'Gitflow'],
  },
];

export interface WorkItem {
  title: string;
  shot: 'review' | 'gridshift' | 'claw' | 'booking' | 'ds';
  where: string;
  desc: string;
  tags: string[];
  url?: string;
  urlLabel?: string;
}

export const work: WorkItem[] = [
  {
    title: 'Org-wide AI code review agents',
    shot: 'review',
    where: 'Everlywell · 2026',
    desc: 'Engineered the context, prompts and rules behind agents that review frontend merge requests and autofix accessibility issues — integrated with Jira and GitLab, hardened against prompt-trust and token-leak gaps.',
    tags: ['Claude', 'MCP', 'GitLab'],
  },
  {
    title: 'GridShift',
    shot: 'gridshift',
    where: 'Side project · 2026',
    desc: 'A free dashboard for ERCOT wholesale power prices, so you can see when electricity is cheap and time flexible loads. Scrapes the public real-time settlement point table every 15 minutes, stores history in Supabase and serves it through edge functions to a Vite + React UI.',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind'],
    url: 'https://gridshift.live/',
    urlLabel: 'gridshift.live',
  },
  {
    title: 'Robin-UI',
    shot: 'claw',
    where: 'Side project · 2026',
    desc: 'A custom OpenClaw web client, built before the official one existed. I forked a community project to reach hooks and endpoints Discord and Slack never exposed, ran my home network as the agent harness over Tailscale, and put a proxy in front so I could drive local agents and push code from anywhere.',
    tags: ['React', 'Tailscale', 'Agents'],
    url: 'https://github.com/kevinhubert/robin-ui',
    urlLabel: 'github.com/kevinhubert/robin-ui',
  },
  {
    title: 'EverlyCare telehealth booking',
    shot: 'booking',
    where: 'Everlywell · 2026',
    desc: 'Led the frontend for a greenfield React SPA in a new pnpm/Turbo monorepo — magic-link auth, time-zone-safe scheduling, English/Spanish — shipped ahead of the backend against stubs.',
    tags: ['React', 'Turborepo', 'i18n'],
  },
  {
    title: 'Metadata-driven design system',
    shot: 'ds',
    where: 'Findhelp.org · 2024–26',
    desc: 'An MUI-based component library with metadata-driven fields that significantly cut UI build time for new social-services features.',
    tags: ['MUI', 'Remix', 'Storybook'],
  },
];

export const toolbox = [
  'Claude Code', 'Cursor', 'MCP', 'Agent orchestration', 'Prompt & context engineering',
  'React', 'TypeScript', 'Next.js', 'Remix', 'Server Components', 'Storybook',
  'Design tokens', 'Accessibility', 'Python / FastAPI', 'Rails', 'Supabase', 'Monorepos',
];
