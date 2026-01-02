import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Portfolio Personnel',
    description: 'Ce site portfolio avec React, TypeScript et Tailwind CSS.',
    longDescription: 'Un portfolio moderne avec systeme de themes dynamiques, architecture clean et tests automatises.',
    tags: ['frontend', 'React', 'TypeScript'],
    date: '2024',
    github: 'https://github.com/username/portfolio',
  },
  {
    slug: 'api-auth-ldap',
    title: 'API Auth LDAP/SSO',
    description: 'Systeme d\'authentification centralise avec LDAP et SSO.',
    longDescription: 'API Symfony pour gerer l\'authentification multi-tenant avec LDAP, OAuth2 et JWT. Architecture hexagonale, tests unitaires et e2e.',
    tags: ['backend', 'Symfony', 'auth', 'architecture', 'testing'],
    date: '2024',
    github: 'https://github.com/username/api-auth',
  },
  {
    slug: 'event-bus-kafka',
    title: 'Event Bus Kafka',
    description: 'Microservices event-driven avec Kafka.',
    longDescription: 'Implementation d\'un bus d\'evenements avec Kafka pour la communication inter-services. Patterns CQRS et Event Sourcing.',
    tags: ['backend', 'Symfony', 'event-driven', 'architecture'],
    date: '2024',
  },
  {
    slug: 'mobile-app',
    title: 'App Mobile React Native',
    description: 'Application mobile cross-platform pour iOS et Android.',
    longDescription: 'Application React Native avec TypeScript, navigation, state management et integration API REST.',
    tags: ['mobile', 'React', 'TypeScript', 'frontend'],
    date: '2025',
  },
  {
    slug: 'etl-rust',
    title: 'ETL like pour push dans LDAP, AD et BDD en Rust',
    description: 'Application pour récupérer des données depuis un bus de donnée kafka pour les adapter et les push dans un LDAP, un ad et une base de donée.',
    longDescription: 'Application pour récupérer des données depuis un bus de donnée kafka pour les adapter et les push dans un LDAP, un ad et une base de donée en rust pour un meilleur controle que avec TALEND.',
    tags: ['ldap', 'Rust', 'ci-cd'],
    date: '2025',
    github: 'https://github.com/username/cli-tool',
  },
  {
    slug: 'ai-automation',
    title: 'Agents IA / Automation',
    description: 'Scripts et agents pour automatiser le workflow de dev.',
    longDescription: 'Experimentation avec des agents LLM pour automatiser la review de code, la generation de tests et la documentation.',
    tags: ['automation', 'ai', 'Python'],
    date: '2024',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}
