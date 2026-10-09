export type Service = { num: string; title: string; copy: string; tags: string[] }

export const services: Service[] = [
  {
    num: '01',
    title: 'App development',
    copy: 'iOS, Android and cross-platform apps built to ship, not to rot in a backlog. Strategy, UX, engineering and launch under one roof.',
    tags: ['iOS & Android', 'React Native', 'MVPs', 'App Store launch'],
  },
  {
    num: '02',
    title: 'Marketing',
    copy: 'Paid social, search and content that move numbers you can report upward. We test fast, kill what flops and scale what works.',
    tags: ['Paid social', 'SEO & search', 'Content', 'Analytics'],
  },
  {
    num: '03',
    title: 'Web design',
    copy: 'Sites that load fast, read clearly and turn visitors into leads. Designed, built and handed over with a CMS your team will actually use.',
    tags: ['UX & UI', 'Development', 'E‑commerce', 'CMS'],
  },
]

export const serviceOptions = ['App', 'Marketing', 'Web', 'Not sure'] as const
export type ServiceOption = (typeof serviceOptions)[number]

export const serviceNames: Record<ServiceOption, string> = {
  App: 'app development',
  Marketing: 'marketing',
  Web: 'web design',
  'Not sure': 'your project',
}

export const budgetOptions = ['Under $10k', '$10–25k', '$25–50k', '$50k+'] as const
export type BudgetOption = (typeof budgetOptions)[number]
