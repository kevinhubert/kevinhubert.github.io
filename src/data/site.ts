export const profile = {
  name: 'Kevin Hubert',
  title: 'AI software engineer',
  tagline: 'Full-stack, frontend-first · Georgetown, TX',
  email: 'iamkevinhubert@gmail.com',
  github: 'https://github.com/kevinhubert',
  linkedin: undefined as string | undefined,
  resume: '/files/Kevin-Hubert-Resume.pdf',
  portrait: undefined as string | undefined,
  intro:
    "I've spent 15 years building React platforms and design systems. Now I spend most days teaching AI agents to build them",
  introEmphasis: 'well',
  about:
    'I orchestrate Claude Code, Cursor and MCP to ship full-stack features faster, and write the context, rules and skills that keep agent output production-grade. A philosophy degree taught me the part that matters most: say exactly what you mean, then check the work.',
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

export const work = [
  {
    title: 'Org-wide AI code review agents',
    where: 'Everlywell · 2026',
    desc: 'Engineered the context, prompts and rules behind agents that review frontend merge requests and autofix accessibility issues — integrated with Jira and GitLab, hardened against prompt-trust and token-leak gaps.',
    tags: ['Claude', 'MCP', 'GitLab'],
  },
  {
    title: 'Claude Code skill library',
    where: 'Everlywell · 2026',
    desc: 'About ten reusable skills that automate the dev loop: ticket kickoff, QA test plans, staging deploys, test-data seeding and Storybook verification.',
    tags: ['Claude Code', 'Skills', 'DX'],
  },
  {
    title: 'EverlyCare telehealth booking',
    where: 'Everlywell · 2026',
    desc: 'Led the frontend for a greenfield React SPA in a new pnpm/Turbo monorepo — magic-link auth, time-zone-safe scheduling, English/Spanish — shipped ahead of the backend against stubs.',
    tags: ['React', 'Turborepo', 'i18n'],
  },
  {
    title: 'Metadata-driven design system',
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
